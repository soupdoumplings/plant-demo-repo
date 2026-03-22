import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";
import { isAdmin } from "@/lib/utils/auth";

export async function GET() {
  try {
    const supabase = createClient();
    if (!(await isAdmin(supabase))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Parallel fetch for stats
    const [
      { count: productCount },
      { count: orderCount },
      { data: salesData },
      { count: userCount },
      { data: lowStockProducts }
    ] = await Promise.all([
      supabase.from("products").select("*", { count: 'exact', head: true }),
      supabase.from("orders").select("*", { count: 'exact', head: true }),
      supabase.from("orders").select("total_amount"),
      supabase.from("profiles").select("*", { count: 'exact', head: true }),
      supabase.from("products").select("id, name, stock_quantity").lt("stock_quantity", 5)
    ]);

    const totalSales = salesData?.reduce((acc: number, order: any) => acc + order.total_amount, 0) || 0;

    return NextResponse.json({
      stats: [
        { title: "Total Products", value: productCount || 0 },
        { title: "Total Orders", value: orderCount || 0 },
        { title: "Total Revenue", value: `$${totalSales.toFixed(2)}` },
        { title: "Total Customers", value: userCount || 0 }
      ],
      low_stock_products: lowStockProducts || []
    }, { status: 200 });
  } catch (error: any) {
    console.error("Stats Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
