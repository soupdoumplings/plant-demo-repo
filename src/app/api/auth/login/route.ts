import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = loginSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json({ error: "Validation failed", details: validatedData.error.flatten().fieldErrors }, { status: 400 });
    }
    const { email, password } = validatedData.data;
    const supabase = createClient();
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (authError) return NextResponse.json({ error: authError.message }, { status: 401 });
    return NextResponse.json({ message: "Login successful", user: authData.user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
