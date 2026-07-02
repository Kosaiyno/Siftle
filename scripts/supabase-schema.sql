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

create table if not exists leaderboard_bonus_events (
  wallet_address text references profiles(wallet_address) on delete cascade,
  season_id text not null,
  bonus_type text not null,
  bonus_key text not null,
  points integer not null default 0,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  primary key (wallet_address, bonus_key)
);

create index if not exists leaderboard_bonus_events_season_idx
  on leaderboard_bonus_events (season_id, bonus_type);

create table if not exists ai_briefing_unlocks (
  wallet_address text references profiles(wallet_address) on delete cascade,
  date_key text not null,
  source_hash text not null,
  tx_hash text,
  created_at timestamptz default now(),
  primary key (wallet_address, date_key, source_hash)
);

create index if not exists ai_briefing_unlocks_daily_idx
  on ai_briefing_unlocks (date_key, wallet_address);

create table if not exists season_division_assignments (
  season_id text not null,
  wallet_address text not null references profiles(wallet_address) on delete cascade,
  division_number integer not null default 1,
  assigned_at timestamptz default now(),
  updated_at timestamptz default now(),
  primary key (season_id, wallet_address)
);

create index if not exists season_division_assignments_season_idx
  on season_division_assignments (season_id, division_number);

create table if not exists analytics_daily (
  date_key text primary key,
  app_open integer default 0,
  wallet_connect_start integer default 0,
  wallet_connect_success integer default 0,
  wallet_connect_failed integer default 0,
  sign_up integer default 0,
  market_view integer default 0,
  trade_drawer_open integer default 0,
  trade_attempt integer default 0,
  trade_buy_success integer default 0,
  trade_sell_success integer default 0,
  trade_failed integer default 0,
  claim_attempt integer default 0,
  claim_success integer default 0,
  claim_failed integer default 0,
  ai_unlock_attempt integer default 0,
  ai_unlock_success integer default 0,
  ai_unlock_failed integer default 0,
  view_summary integer default 0,
  open_source integer default 0,
  updated_at timestamptz default now()
);

create table if not exists analytics_signups (
  email_hash text primary key,
  date_key text not null,
  created_at timestamptz default now()
);

grant usage on schema public to service_role;
grant select, insert, update, delete on table profiles to service_role;
grant select, insert, update, delete on table leaderboard_entries to service_role;
grant select, insert, update, delete on table resolved_results to service_role;
grant select, insert, update, delete on table leaderboard_bonus_events to service_role;
grant select, insert, update, delete on table ai_briefing_unlocks to service_role;
grant select, insert, update, delete on table season_division_assignments to service_role;
grant select, insert, update, delete on table analytics_daily to service_role;
grant select, insert, update, delete on table analytics_signups to service_role;
