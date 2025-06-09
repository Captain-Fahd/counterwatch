import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://jzueqnkjkesvyqtrsnmv.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dWVxbmtqa2VzdnlxdHJzbm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMDQyNzEsImV4cCI6MjA2NDY4MDI3MX0.0Zc7fauIEUTQBV1ev3KZLSPSpc4LVP8b5LifaW3mA2Q');

export default supabase;