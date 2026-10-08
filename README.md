# IT Portfolio — Next.js

A dark, interactive, data-driven portfolio / CV built with Next.js, TypeScript, Tailwind CSS and Motion.

## 1) Install

Make sure Node.js is installed, then:

```powershell
npm.cmd install
```

## 2) Start

```powershell
npm.cmd run dev
```

Open `http://localhost:3000`.

## 3) Edit your information

Almost everything visible on the website is stored in:

```text
/data/portfolio.ts
```

Update:

- `profile` → name, role, bio, photo, CV, email, links
- `stats` → the 4 hero/about numbers
- `skills` → skills and percentages
- `projects` → portfolio projects
- `education` → education timeline
- `certificates` → certificates
- `blogPosts` → notes / blog cards

## 4) Add your real photo

Replace:

```text
/public/images/profile-placeholder.svg
```

with a file such as:

```text
/public/images/profile.jpg
```

Then set in `data/portfolio.ts`:

```ts
image: "/images/profile.jpg"
```

## 5) Add your CV

Put your CV PDF in:

```text
/public/cv.pdf
```

Then set:

```ts
cvUrl: "/cv.pdf"
```

## 6) Production build

```powershell
npm.cmd run build
npm.cmd run start
```

## Notes

The contact form uses `mailto:` so it works without a backend. For a real server-side form, connect it later to an API or email provider.
