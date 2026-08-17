create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  role text,
  message text not null,
  source text default 'landing_page'
);

grant all on public.contact_submissions to service_role;

alter table public.contact_submissions enable row level security;