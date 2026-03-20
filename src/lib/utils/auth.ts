import { SupabaseClient } from "@supabase/supabase-js";

/**
 * Checks if the currently authenticated user has an 'ADMIN' role in the profiles table.
 */
export async function isAdmin(supabase: SupabaseClient): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return false;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !profile) return false;

  return profile.role === "ADMIN";
}
