create policy "Service role manages contact submissions"
on public.contact_submissions
for all
to service_role
using (true)
with check (true);