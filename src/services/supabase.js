import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hrdysbjltxzarkuudcqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZHlzYmpsdHh6YXJrdXVkY3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MDc5OTIsImV4cCI6MjAxMDI4Mzk5Mn0.QU-i7zToHYGvgV9ZEoLKGSCXcnXLLwmRNcBH8GDUKhA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
