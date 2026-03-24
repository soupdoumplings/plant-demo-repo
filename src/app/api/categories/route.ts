import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = createClient();
    const { data: categories, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error: any) {
    console.error("Categories Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
