import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json({ error: "Validation failed", details: validatedData.error.flatten().fieldErrors }, { status: 400 });
    }
    const { name, email, password } = validatedData.data;
    const supabase = createClient();
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (authError) return NextResponse.json({ error: authError.message }, { status: 400 });
    return NextResponse.json({ message: "Registration successful", user: authData.user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
