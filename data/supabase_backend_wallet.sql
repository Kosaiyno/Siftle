create table if not exists backend_wallet_users (
  email text primary key,
  wallet_address text not null unique,
  private_key text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists backend_wallet_sessions (
  token text primary key,
  email text not null references backend_wallet_users(email) on delete cascade,
  created_at timestamptz default now(),
  expires_at timestamptz not null,
  updated_at timestamptz default now()
);

create table if not exists backend_wallet_migrations (
  old_wallet_address text primary key,
  new_wallet_address text not null unique,
  email text,
  username text,
  restored_points integer default 0,
  claimed_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists backend_wallet_sessions_email_idx
  on backend_wallet_sessions (email);

create index if not exists backend_wallet_sessions_expires_at_idx
  on backend_wallet_sessions (expires_at);

create index if not exists backend_wallet_migrations_new_wallet_idx
  on backend_wallet_migrations (new_wallet_address);

grant select, insert, update, delete on table backend_wallet_users to service_role;
grant select, insert, update, delete on table backend_wallet_sessions to service_role;
grant select, insert, update, delete on table backend_wallet_migrations to service_role;
