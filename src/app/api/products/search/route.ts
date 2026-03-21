import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json({ products: [] }, { status: 200 });
    }

    const supabase = createClient();
    const { data: products, error } = await supabase
      .from("products")
      .select("*, categories(name, slug)")
      .ilike("name", `%${query}%`)
      .eq("is_active", true)
      .limit(20);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Search Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
