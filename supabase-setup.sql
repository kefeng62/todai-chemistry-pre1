create table if not exists public.exam_results (
  visitor_id text primary key,
  exam1 integer not null check (exam1 between 0 and 75),
  exam2 integer not null check (exam2 between 0 and 75),
  exam3 integer not null check (exam3 between 0 and 75),
  exam4 integer not null check (exam4 between 0 and 75),
  total_score integer not null check (total_score between 0 and 300),
  judgment text not null check (judgment in ('A','B','C','D','E')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.exam_results enable row level security;

revoke all on table public.exam_results from anon, authenticated;
grant select, insert, update on table public.exam_results to anon;

drop policy if exists "Public can read aggregate source rows" on public.exam_results;
drop policy if exists "Public can register anonymous result" on public.exam_results;
drop policy if exists "Public can update own browser result" on public.exam_results;

create policy "Public can read aggregate source rows"
on public.exam_results for select
to anon
using (true);

create policy "Public can register anonymous result"
on public.exam_results for insert
to anon
with check (
  char_length(visitor_id) between 10 and 100
  and exam1 between 0 and 75 and exam2 between 0 and 75
  and exam3 between 0 and 75 and exam4 between 0 and 75
  and total_score between 0 and 300
  and judgment in ('A','B','C','D','E')
);

create policy "Public can update own browser result"
on public.exam_results for update
to anon
using (true)
with check (
  char_length(visitor_id) between 10 and 100
  and exam1 between 0 and 75 and exam2 between 0 and 75
  and exam3 between 0 and 75 and exam4 between 0 and 75
  and total_score between 0 and 300
  and judgment in ('A','B','C','D','E')
);
