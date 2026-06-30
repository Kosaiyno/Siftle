create table if not exists profiles (
  wallet_address text primary key,
  username text,
  email text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists leaderboard_entries (
  wallet_address text primary key references profiles(wallet_address) on delete cascade,
  points integer default 0,
  wins integer default 0,
  losses integer default 0,
  status text default '0 wins, 0 losses',
  reported_points integer default 0,
  reported_status text default '0 wins, 0 losses',
  first_activity_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table leaderboard_entries
  add column if not exists first_activity_at timestamptz default now();

create table if not exists resolved_results (
  wallet_address text references profiles(wallet_address) on delete cascade,
  market_id text not null,
  result text not null check (result in ('win', 'loss')),
  points integer default 0,
  switched boolean default false,
  created_at timestamptz default now(),
  primary key (wallet_address, market_id)
);

create index if not exists leaderboard_entries_points_idx
  on leaderboard_entries (points desc, wins desc, losses asc, first_activity_at asc);

create index if not exists resolved_results_market_idx
  on resolved_results (market_id);

grant usage on schema public to service_role;
grant select, insert, update, delete on table profiles to service_role;
grant select, insert, update, delete on table leaderboard_entries to service_role;
grant select, insert, update, delete on table resolved_results to service_role;
