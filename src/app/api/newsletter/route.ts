import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid botanical address" }, { status: 400 });
    }

    const supabase = createClient();
    
    // Check if table exists/handle generic insert
    const { error } = await supabase
      .from("newsletter_subscriptions")
      .upsert({ email }, { onConflict: "email" });

    if (error) {
      // If table doesn't exist, we might get an error. For this prototype, we'll log it.
      console.error("Newsletter Error:", error);
      return NextResponse.json({ error: "Unable to subscribe at this moment" }, { status: 400 });
    }

    return NextResponse.json({ message: "Welcome to the digital garden" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
