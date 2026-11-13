# RUDRA TAEKWONDO — Website project

A responsive React + Vite + TypeScript landing site for RUDRA TAEKWONDO. The design follows the supplied desktop screen recording and the original project brief. On screens below 760px the desktop header/navigation is intentionally hidden, as requested; the page content reflows into a mobile layout.

## Run locally

1. Install Node.js 18+.
2. Extract this project and open a terminal in the project folder.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed by Vite.
5. Run `npm run build` to create the production build in `dist/`.

## Deploy to Vercel

1. Push the project folder to a Git repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Replace dummy information

Edit `src/config.ts` to update the brand contact and social information in one place:

- `whatsapp`: WhatsApp number in international format, digits only (currently `919676258329`).
- `phoneDisplay`: visible phone number (currently `+91 96762 58329`).
- `email`: `rudrataekwondo12@gmail.com`.
- `studentTribeReel`: link to the Student Tribe feature.

The enquiry form has two modes: community partnership and parent enquiry. Submitting validates the required fields and opens WhatsApp with a prefilled message. The community partnership and introductory demo calls to action open WhatsApp with their respective prefilled messages. WhatsApp does **not** send any message automatically; the visitor must review and send it there.

## Replace images

Replace files in `public/images/` while keeping their filenames, or update the paths in `src/App.tsx`:

- `hero-reference.jpg` — original Taekwondo flying kick photo.
- `coach-reference.jpg` — original coach portrait.
- `np.jpg` — the provided newspaper clipping used in the press feature.
- `social-placeholder.jpg` — provided Student Tribe Instagram Reel thumbnail.
- `certi.jpeg` — Kukkiwon 1st Dan certificate displayed in the achievements section.
- `kids.jfif` — children training photo used in the community program section.

The `why` section photo currently uses a remote Unsplash image; replace with an approved local photograph if you prefer a fully self-contained asset bundle.

## Project structure

- `src/App.tsx` — page sections and page-level interactions.
- `src/components/Navbar.tsx` — desktop navigation.
- `src/components/Contact.tsx` — enquiry tabs and WhatsApp hand-off.
- `src/components/SectionHeading.tsx` — reusable section heading.
- `src/components/Logo.tsx` — reusable brand mark.
- `src/config.ts` — centralised editable contact and social placeholders.
- `src/styles.css` — responsive visual system and styling.
- `public/images/` — image assets.

## Notes

- This is a frontend implementation; no backend/database is configured.
- The visual reference is a screen recording, not the original source code. Some exact font metrics, hover states, and original source images cannot be recovered perfectly from a recording.
- No fabricated testimonials, student counts, community partnerships, insurance or safeguarding accreditations are included.
