# BSA Enterprise — Production Website

Official corporate website for **BSA Enterprise**, a leading Government Civil Contractor and General Order Supplier based in Regent Colony, Kolkata, West Bengal.

Built with **Next.js (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **Lucide Icons**, incorporating the client's official brand assets, founder portrait, GST credentials, and luxury green-and-gold visual identity.

---

## 🏛️ Brand & Business Details

- **Company:** BSA Enterprise
- **Tagline:** *"Building a Better Tomorrow"*
- **Descriptor:** Govt Civil Contractor, General Order Supplier
- **Founder & Proprietor:** Sayantan Das
- **GSTIN:** `19DQYPD2942H1ZC`
- **Primary Phone:** `+91 93309 67405`
- **Email:** `bsaenterprise17@gmail.com`
- **Office Address:** 35/D Regent Colony, Kolkata - 700040, West Bengal, India
- **WhatsApp Direct:** [wa.me/919330967405](https://wa.me/919330967405)

---

## 🎨 Visual Identity & Design System

- **Primary Green:** `#0B5D2E` (Dark emerald `#063D1E`, deep forest `#042613`)
- **Metallic Gold Accent:** `#D4A017` with luxury gradient (`#F2D675` → `#C8961A` → `#8C6A0E`)
- **Backgrounds:** Warm Cream (`#FFFDF0`) and crisp white for light sections; deep emerald for dark sections
- **Typography:** Montserrat (Headings) & Inter (Body Text)
- **Aesthetic:** Corporate government infrastructure grade, dual gold bezel frames, skyline silhouettes, and interactive micro-animations.

---

## 📁 How to Edit Content & Information

All editable text, company contacts, stats counters, services, gallery projects, and FAQs are located in **one central file**:

```
src/data/siteContent.ts
```

### 1. Update Contact Information & Address
Open `src/data/siteContent.ts` and modify the `company` object:
```typescript
contact: {
  phone: "9330967405",
  phoneFormatted: "+91 93309 67405",
  email: "bsaenterprise17@gmail.com",
  // ...
}
```

### 2. Update Stats Counter Values
Edit the `stats` array in `src/data/siteContent.ts`:
```typescript
stats: [
  { value: 100, suffix: "%", label: "Government Compliance", subtext: "Strict adherence to PWD & CPWD norms" },
  { value: 75, suffix: "+", label: "Civil & Supply Contracts", subtext: "Successfully completed across WB" },
  // ...
]
```

### 3. Add or Replace Portfolio Projects
Images are placed in `public/projects/`. Simply update or add entries to `projects` in `src/data/siteContent.ts`:
```typescript
{
  id: "p1",
  title: "Your Project Name",
  category: "civil", // 'civil' | 'building' | 'materials' | 'municipal'
  categoryLabel: "Civil Infrastructure",
  location: "Kolkata, WB",
  image: "/projects/your-image.jpg",
  specs: ["Spec 1", "Spec 2"],
  status: "Completed"
}
```

---

## 📬 Connecting the Contact Form (Formspree or EmailJS)

The enquiry form in [ContactSection.tsx](src/components/ContactSection.tsx) is pre-configured with client-side validation and instant UI feedback. To route emails directly to `bsaenterprise17@gmail.com`:

### Option A: Formspree (Recommended - 2 Minutes)
1. Sign up at [formspree.io](https://formspree.io) and create a form with `bsaenterprise17@gmail.com`.
2. Get your form endpoint URL (e.g. `https://formspree.io/f/xyzabced`).
3. In `src/components/ContactSection.tsx`, update the `handleSubmit` function:
```typescript
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install SDK: `npm install @emailjs/browser`
3. Call `emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)` in `handleSubmit`.

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New" → "Project"**.
3. Import this repository.
4. Next.js will be detected automatically. Click **"Deploy"**.
5. Your website will be live with free global CDN and SSL certificate.

### Deploy to Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```
Server runs at `http://localhost:3000`.
