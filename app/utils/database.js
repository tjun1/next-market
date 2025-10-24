// app/utils/database.js

import {createClient} from "@supabase/supabase-js"

const supabase = createClient(
  "https://svtvjcrcosybpshmegrs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dHZqY3Jjb3N5YnBzaG1lZ3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTM1MjUsImV4cCI6MjA3Njc4OTUyNX0.lcFLe3HepvD4uhDtBDuVkgsatCunKiMG8cC1Y-2fFks"
)

export default supabase
