# SLEEPY - Project Brief

**Last Updated:** November 18, 2024

## Project Overview

**Project Name:** SLEEPY
**Tagline:** "Undercover. Overpowered."
**Philosophy:** "Real builds only. Built different."
**Type:** E-commerce Website
**Business Model:** Made-to-order custom apparel & accessories

## Vision

Create a premium online destination for universal sleeper car culture enthusiasts to purchase custom-designed apparel and accessories. Targeting builders who prioritize real performance over cosmetic mods—Japanese, German, American—any build that's faster than it looks.

## Target Market

### Primary Audience
- Universal sleeper car enthusiasts (18-45 years old)
- Performance builders across all platforms (JDM, Euro, American)
- Late-night meet attendees
- Underground racing culture participants
- Social media car influencers (but authentic ones)

### Psychographics
- Values real performance over cosmetic-only mods
- Appreciates quality craftsmanship
- Part of underground car culture
- Anti-rice (defines rice as fake mods with no performance gain)
- Pro-authenticity, but not anti-social media
- Respects the nostalgia of early 2000s F&F / 2015 NFS era

## Brand Positioning

**Core Message:** "Real builds only. Built different."

**Brand Personality:**
- Raw and authentic
- Performance-obsessed
- Underground heritage energy
- Hypebeast marketing meets midnight runs
- Not minimalist elitist—celebrating real power regardless of aesthetic

**Differentiators:**
1. Full product customization (9 colors × 5 logos)
2. Made-to-order business model
3. Niche focus on sleeper car culture
4. Community-driven content
5. Affiliate program for brand ambassadors

## Technical Implementation

### Technology Stack
- **Frontend:** Next.js 15 (React 18, TypeScript)
- **Styling:** Tailwind CSS with custom design system
- **Payments:** Stripe (to be integrated)
- **Hosting:** TBD
- **Data Storage:** CSV (temporary), Database (planned)

### Design System
- **Color Theme:** Dark with neon accents (black backgrounds only)
- **Typography:** Eurostile Extended (Adobe Fonts)
- **UI Style:** Glossy cards, sharp edges, GOAT-inspired, NO shadows/glows
- **Effects:** Clean and minimal (removed all text shadows and box shadows)

## Current Status

### ✅ Completed Features

**Core Pages:**
- [x] Homepage with hero section and culture messaging
- [x] About page with brand philosophy (3 core values cards)
- [x] Product catalog with filtering
- [x] Individual product customizer with live preview
- [x] Shopping cart with localStorage persistence
- [x] Checkout page with Stripe integration (ready for keys)
- [x] Order confirmation page
- [x] Social hub page (centralized community and social media links)
- [x] Affiliate application page
- [x] Community content submission page
- [x] Playlists page with multiple Spotify embeds
- [x] Support page with 12 comprehensive FAQs
- [x] Terms of Service (professional, major brand format)
- [x] Privacy Policy (GDPR/CCPA compliant)

**Navigation & UX:**
- [x] Navigation component with dropdown menu (Social section)
- [x] Cart icon with item count badge
- [x] Slide-out cart sidebar
- [x] Responsive mobile/desktop layouts

**Product System:**
- [x] 5 base products with detailed descriptions
- [x] 9 color options implemented
- [x] 5 logo variations available
- [x] SKU generation system
- [x] Product data structure & TypeScript types
- [x] Live customization preview

**E-commerce:**
- [x] Shopping cart with add/remove/update quantity
- [x] Cart context with React Context API
- [x] localStorage cart persistence
- [x] Stripe payment intent API route
- [x] Order saving API route (CSV)
- [x] Checkout form with validation

**Technical:**
- [x] Next.js App Router structure
- [x] TypeScript configuration
- [x] Tailwind CSS custom theme (cleaned, no shadows/glows)
- [x] Responsive layouts
- [x] API routes for forms, payments, orders
- [x] CSV data storage
- [x] Adobe Fonts (Eurostile Extended) integration

### 🚧 Pending Setup (Ready for Keys)

- [x] Stripe integration (code complete, needs API keys)
- [ ] Email domain setup (prerequisite for Stripe account)
- [ ] Stripe account creation
- [ ] .env.local with Stripe keys
- [ ] Test checkout with Stripe test card

### ❌ Not Started

**E-commerce Core:**
- [ ] Customer accounts/authentication
- [ ] Order tracking dashboard
- [ ] Email notifications (order confirmation, shipping updates)

**Content:**
- [ ] Hero video production
- [ ] Professional product photography
- [ ] Product mockups for customization preview
- [ ] Brand photography/lifestyle content

**Infrastructure:**
- [ ] Database setup (replace CSV storage)
- [ ] Production hosting
- [ ] CDN for assets
- [ ] Analytics integration
- [ ] SEO optimization

**Marketing:**
- [ ] Social media integration
- [ ] Email marketing setup
- [ ] Affiliate dashboard
- [ ] Discount/promo code system
- [ ] Gift cards

**Additional Features:**
- [ ] Product reviews/ratings
- [ ] Size guide
- [ ] Inventory management
- [ ] Bulk ordering
- [ ] Saved customizations
- [ ] Wishlist

## Roadmap

### Phase 1: MVP Launch (95% Complete)
**Goal:** Launch functional e-commerce site with core features

**Critical Path:**
1. ✅ Design system & branding (Eurostile Extended, clean no-shadow design)
2. ✅ Product catalog & customization
3. ✅ Shopping cart implementation
4. ✅ Stripe payment integration (code ready, needs API keys)
5. ✅ Legal pages (Terms & Privacy - major brand format)
6. ✅ About page & brand philosophy
7. ✅ Support/FAQ (12 questions)
8. ✅ Navigation & UX polish
9. ⏳ Email domain setup → Stripe account → add API keys
10. ⏳ Product photography/mockups (currently emoji placeholders)
11. ⏳ Hero video content (currently placeholder)
12. ⏳ Testing & QA
13. ⏳ Production deployment

**Target Date:** TBD (pending email/Stripe setup)

### Phase 2: Content & Community
**Goal:** Build brand presence and customer engagement

**Tasks:**
- Launch affiliate program
- Community content gallery
- Social media integration
- Email marketing campaigns
- Customer testimonials
- Blog/culture content

**Target Date:** TBD

### Phase 3: Scale & Optimize
**Goal:** Improve operations and expand offerings

**Tasks:**
- Customer accounts & order history
- Inventory management system
- Analytics & conversion optimization
- Additional product lines
- Wholesale/bulk ordering
- International shipping

**Target Date:** TBD

## Success Metrics

### Business KPIs
- Monthly revenue
- Average order value (AOV)
- Conversion rate
- Customer acquisition cost (CAC)
- Customer lifetime value (CLV)
- Cart abandonment rate

### Engagement Metrics
- Site traffic & page views
- Time on site
- Bounce rate
- Product customization completion rate
- Affiliate applications
- Community content submissions

### Brand Metrics
- Social media followers & engagement
- Email list growth
- Brand awareness surveys
- Customer satisfaction (NPS)
- Repeat purchase rate

## Budget Considerations

**Estimated Costs:**
- Domain & hosting: ~$20-50/month
- Stripe fees: 2.9% + $0.30 per transaction
- Product manufacturing: Variable (negotiate with supplier)
- Photography/content production: TBD
- Marketing/advertising: TBD
- Development: Internal

## Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Payment integration issues | High | Medium | Thorough testing, Stripe documentation |
| Low initial traffic | High | High | Pre-launch marketing, affiliate program |
| Product quality concerns | High | Medium | Sample testing, reliable manufacturer |
| Cart abandonment | Medium | High | Optimize checkout flow, follow-up emails |
| Competition | Medium | Medium | Unique positioning, community focus |

## Key Decisions Needed

1. **Database Choice:** PostgreSQL, MongoDB, or other?
2. **Hosting Platform:** Vercel, AWS, or other?
3. **Product Manufacturer:** MOD supplier selection
4. **Photography:** In-house vs. professional studio
5. **Launch Timeline:** Soft launch vs. big reveal
6. **Pricing Strategy:** Current pricing competitive?
7. **Shipping:** Fulfillment partner or in-house?

## Contact & Resources

**Project Directory:** `D:\Internal\Marketing\Branding\Website`
**Repository:** TBD
**Documentation:** This file + README.md
**Design Assets:** `public/assets/`

## Notes

- Made-to-order model requires 2-3 week delivery time (communicate clearly to customers)
- CSV storage is temporary; migrate to database before launch
- Hero video placeholder needs replacement with actual content
- Product images currently using emojis; need professional mockups
- Consider size chart/guide for apparel items

## Recent Updates (Nov 17-18, 2024)

**Brand Evolution:**
- Shifted from JDM-only to universal sleeper culture (Japanese, German, American)
- Updated messaging from "function over flash" to "real builds only"
- Clarified anti-rice stance: rice = fake mods with zero performance gain
- Removed anti-Instagram/anti-posting language (hypocritical for social media brand)
- Added underground heritage energy (midnight runs, routes memorized)
- Integrated nostalgia for early 2000s F&F / 2015 NFS era

**Content Updates:**
- Rewrote Terms of Service to mirror major brand format (Nike, GOAT, etc.)
- Rewrote Privacy Policy with GDPR/CCPA compliance
- Updated About page with 3 core values: Performance First, Hidden Power, Underground Heritage
- Expanded FAQ to 12 comprehensive questions
- Created Playlist page with Spotify embed for "aurafarming"

**Design Refinements:**
- Changed font from Permanent Marker to Eurostile Extended (Adobe Fonts)
- Removed ALL text shadows and drop shadows across entire site
- Removed box shadows from glossy cards
- Clean, minimal aesthetic maintained

**Navigation:**
- Created Navigation component with dropdown functionality
- Consolidated Affiliates, Submit Content, and Playlists under "Social" dropdown
- Improved hover UX (no gap between button and dropdown)
- Made "Social" link navigable to /social hub page while maintaining dropdown

**Social & Community:**
- Created centralized Social hub page (/social) with two sections:
  - Community links (Affiliates, Submit Content, Playlists)
  - Social media links (Instagram, TikTok, YouTube, X/Twitter)
- Added second Spotify playlist to Playlists page
- Updated page title from "PLAYLIST" to "PLAYLISTS"
- Updated all navigation references to say "Playlists" (plural)
- Footer "Submit Content" link changed to "Social" pointing to hub page

**Product Content:**
- Simplified all product descriptions (removed overly wordy marketing language)
- Removed technical fabric weights (400GSM, 350GSM, 180GSM)
- Removed "Function over flash" and "2-3 week production time" mentions
- Kept component details (kangaroo pocket, ribbed cuffs, reinforced stitching)
- Made descriptions concise and scannable

**Technical:**
- Full shopping cart implementation with localStorage
- Complete Stripe checkout flow (ready for API keys)
- Order confirmation page
- CSV-based order storage
- Navigation dropdown component
- Social hub page with hover effects on cards
