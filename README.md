# TutorVance (Next.js + Supabase)

This repository now contains a Next.js app (App Router) using Tailwind CSS, adapted from the original single-file React prototype. Optional Supabase integration is included.

## Local Development

- Copy envs: duplicate `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (optional; falls back to mock data).
- Install and run: `npm install` then `npm run dev`.
- Open `http://localhost:3000`.

## Project Structure

- `app/layout.jsx`: Root layout and global head (Font Awesome CDN).
- `app/page.jsx`: Client page that renders the adapted app.
- `app/components/Tutorvance.jsx`: Adapted component from the original single file.
- `lib/supabaseClient.js`: Supabase client (optional).
- `app/globals.css`: Tailwind styles.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, import the project and use default settings (Framework: Next.js).
3. Add environment variables in Vercel Project Settings → Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy.

## Supabase

- Create a Supabase project at supabase.com.
- Get the Project URL and anon key from Project Settings → API.
- Paste into `.env.local` or Vercel env vars.
- You can later replace mock data by querying `supabase` from components or server routes.
