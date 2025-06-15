
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email, password, adminSecret } = await req.json();

    if (!email || !password || !adminSecret) {
      throw new Error('Email, password, and admin secret are required.');
    }

    const envAdminSecret = Deno.env.get('ADMIN_SECRET_KEY');
    if (!envAdminSecret || adminSecret !== envAdminSecret) {
      return new Response(JSON.stringify({ error: 'Invalid admin secret.' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data: { user }, error: createUserError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createUserError) {
      // Handle cases like user already exists
      if (createUserError.message.includes('already registered')) {
        throw new Error('User with this email already exists.');
      }
      throw new Error(`User creation failed: ${createUserError.message}`);
    }
    if (!user) throw new Error('Failed to create user.');

    // The on_auth_user_created trigger assigns the 'user' role by default.
    // We will add the 'admin' role in addition.
    const { error: insertRoleError } = await supabaseAdmin
        .from('user_roles')
        .insert({ user_id: user.id, role: 'admin' });
    
    if (insertRoleError) {
        await supabaseAdmin.auth.admin.deleteUser(user.id);
        throw new Error(`Failed to assign admin role: ${insertRoleError.message}`);
    }

    return new Response(JSON.stringify({ message: 'Admin user created successfully' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
