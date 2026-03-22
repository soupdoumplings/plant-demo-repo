import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seedAdmin() {
  const email = "admin@petalsandpots.com";
  const password = "AdminPassword123!"; // Change in production
  const name = "Shop Admin";

  console.log(`Seeding admin: ${email}...`);

  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name },
  });

  if (authError) {
    if (authError.message.includes("already registered")) {
      console.log("Admin user already exists in auth. Skipping creation.");
      // Still need to ensure the profile is ADMIN
      const { data: user } = await supabase.auth.admin.listUsers();
      const existingUser = user.users.find(u => u.email === email);
      if (existingUser) {
        await updateProfile(existingUser.id);
      }
    } else {
      console.error("Auth error:", authError.message);
      return;
    }
  } else if (authData.user) {
    console.log("Admin auth user created.");
    await updateProfile(authData.user.id);
  }
}

async function updateProfile(id: string) {
  const { error: profileError } = await supabase
    .from("profiles")
    .update({ role: "ADMIN" })
    .eq("id", id);

  if (profileError) {
    console.error("Profile update error:", profileError.message);
  } else {
    console.log("Profile role updated to ADMIN.");
  }
}

seedAdmin();
