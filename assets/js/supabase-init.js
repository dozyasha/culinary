import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabase = createClient(
  "https://wqnbvrvujkoygptzxaeg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxbmJ2cnZ1amtveWdwdHp4YWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2ODE4NjUsImV4cCI6MjA4MDI1Nzg2NX0.1eJkgKgzf47EchPTQ7FIRgspHMVQQH5ciCdovMy_ZWo"
);