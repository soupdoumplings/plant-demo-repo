import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { delivery_address } = await request.json();
    const supabase = createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 1. Fetch current cart items
    const { data: cartItems, error: cartError } = await supabase
      .from("cart_items")
      .select("*, products(*)")
      .eq("user_id", user.id);

    if (cartError || !cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // 2. Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => acc + item.products.price * item.quantity, 0);

    // 3. Create Order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        total_amount: totalAmount,
        delivery_address,
        status: "PENDING",
      })
      .select()
      .single();

    if (orderError) {
      return NextResponse.json({ error: orderError.message }, { status: 400 });
    }

    // 4. Create Order Items
    const orderItems = cartItems.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      unit_price: item.products.price,
    }));

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems);

    if (itemsError) {
      return NextResponse.json({ error: itemsError.message }, { status: 400 });
    }

    // 5. Clear Cart
    await supabase.from("cart_items").delete().eq("user_id", user.id);

    return NextResponse.json({ orderId: order.id }, { status: 201 });
  } catch (error: any) {
    console.error("Checkout Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
