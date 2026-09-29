// Supabase設定：Supabase DashboardのProject URLとPublishable key（旧anon key）を入力してください。
// service_role key / secret keyは絶対に入力しないでください。
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_PUBLISHABLE_KEY = 'YOUR_SUPABASE_PUBLISHABLE_KEY';
if (window.supabase && SUPABASE_URL.startsWith('http') && !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_')) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
} else {
  window.supabaseClient = null;
}
