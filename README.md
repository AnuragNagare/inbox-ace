# Inbox Ace

Pursuit is an AI-powered email assistant built as a paid SaaS product ($29/month or $290/year, with a 14-day free trial) for solo service professionals — coaches, freelancers, and consultants — who run their entire business through their own Gmail inbox without any sales team, CRM, or admin support. The problem it solves is that these people are simultaneously the salesperson, account manager, and the one doing the paid work, so high-value leads get buried in inbox noise and prospects who go quiet never get followed up with consistently. Pursuit fixes this by connecting to a user's Gmail account and layering AI on top of it to do three things: score every incoming email for business priority (CRITICAL down to Cold) based on buying-intent and urgency language, draft/send emails and reply suggestions in the user's chosen tone, and run automated multi-step follow-up sequences to nudge quiet leads without the user having to remember to do it manually.

Under the hood, a user signs up, connects Gmail via OAuth and either their own Gemini API key or the app's shared one, and from there the FastAPI backend does the real work: it fetches messages through the Gmail API, scores each one using Gemini (falling back to a keyword-based rule scorer, then to Groq, if the AI call fails or hits a quota), and — uniquely — personalizes that scoring over time by remembering the user's manual corrections per-sender and by noticing when a lead the user followed up with has "gone cold." For follow-ups, the user builds a "campaign" (subject/body template, tone, and a day-3/7/14-style schedule), adds contacts, and can optionally flip on full automation; a background job then checks every 15 minutes for contacts who are due, generates the next email with AI, checks Gmail to make sure the contact hasn't already replied (auto-pausing if they have), and sends it — all gated by an active subscription or trial. The React frontend is just a thin client over this: a dashboard, a Setup page for keys/Gmail/billing, and pages for inbox analysis, smart replies, and campaign management, all talking to the backend over a REST API secured with JWTs.

analyse

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d89d70df-d765-466d-a62a-7b5e4cf5f401).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
