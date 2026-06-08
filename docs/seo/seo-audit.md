# My Computer Tech SEO Audit

Source basis:
- Live sitemap: `https://mycomputertechfl.com/sitemap.xml`
- Current metadata and route logic from [App.jsx](/Users/fredd/Documents/best-computer-tech/src/App.jsx)
- Current blog metadata and article bodies from [blogPosts.js](/Users/fredd/Documents/best-computer-tech/src/data/blogPosts.js)
- Page copy review from current React page files

Important note:
- The brief says the business location is `Satellite Beach, Florida`.
- The current site NAP shows `296 E Eau Gallie Blvd, Indian Harbour Beach, FL 32937`.
- Before expanding local SEO aggressively, align the primary city across Google Business Profile, website footer, schema, contact page, and citation sources. This is a high-priority local SEO consistency issue.

Word count note:
- Counts below are approximate current rendered word counts based on visible page copy in the current React pages.

## Summary Findings

High priority:
- NAP / primary-city inconsistency between brief target (`Satellite Beach`) and current site address (`Indian Harbour Beach`)
- Several core pages are too broad and need stronger city + service intent targeting
- No dedicated local service landing pages for Melbourne, Palm Bay, Satellite Beach, WiFi troubleshooting, Windows 11 upgrades, data recovery, or refurbished computers
- Schema is present, but not tailored enough to service-specific pages and future location pages
- Blog archive is useful, but internal linking to money pages can be stronger

Medium priority:
- Titles are generally strong but could be more conversion-oriented on some pages
- Some pages still rely on broad “beachside” language without enough city-specific depth
- Contact page conversion flow now works, but the CTA language and trust copy could support more service-intent keywords

Low priority:
- Alt text opportunities should be reviewed for hero and trust imagery if image assets are expanded
- Footer and referral language are functional, but could better support internal-service discovery

## Current Page Audit

| URL | Current Title | Current H1 | Current Meta Description | Approx. Word Count | SEO Issues | Local SEO Issues | Recommended Fixes | Priority |
|---|---|---|---|---:|---|---|---|---|
| `/` | My Computer Tech \| Beachside Computer Repair & IT Support | Professional Florida Beachside Computer Repair & IT Support | My Computer Tech provides beachside computer repair, laptop repair, Wi-Fi help, printer setup, virus removal, and small business IT support for Indian Harbour Beach and nearby Space Coast communities. | 620 | Good topical coverage, but title targets “beachside” broadly instead of strongest local service phrase; H1 does not include FL or primary city. | Primary city not explicit enough; site brief says Satellite Beach but on-page copy leans Indian Harbour Beach. | Rewrite homepage around `Computer Repair & IT Support Satellite Beach FL`; strengthen internal links to core service/location pages; add FAQ with city/service questions. | High |
| `/services` | Beachside Computer Repair Services \| My Computer Tech | Professional beachside computer repair and IT support | Computer repair, laptop repair, virus removal, printer setup, Wi-Fi setup, data transfer, Microsoft 365 help, and onsite beachside service from My Computer Tech. | 760 | Strong service list, but no single clear service-focus keyword target per section; page is broad. | City modifiers are limited; Melbourne, Palm Bay, Satellite Beach, and Brevard variations are not structured into crawlable subpages. | Keep this as a hub page; add stronger internal links to service landing pages; tune headings to include service-intent variants naturally. | High |
| `/service-areas` | Service Areas \| Beachside Computer Repair Space Coast | Beachside Space Coast computer repair coverage | My Computer Tech serves Indian Harbour Beach, Satellite Beach, Indialantic, Melbourne Beach, Cocoa Beach, Cape Canaveral, and nearby beachside Space Coast communities. | 540 | Decent area page, but too shallow to rank for individual city terms. | No dedicated location pages; inconsistent primary city target; mainland cities from brief are not yet represented. | Build dedicated location pages and link them here; add stronger city-specific supporting copy and FAQ. | High |
| `/about` | About My Computer Tech \| Local Beachside IT Support | Local beachside computer repair with serious IT support standards | Learn about My Computer Tech, a locally known beachside computer repair and IT support business serving from the same Indian Harbour Beach location since 2010. | 640 | Good trust content, but not optimized as a local entity authority page. | Local trust is strong, but primary city conflict remains. | Add clearer local entity wording, local service area mentions, and internal links to location/service pages. | Medium |
| `/contact` | Contact My Computer Tech \| Beachside Computer Repair | Request beachside computer repair or IT support | Contact My Computer Tech for beachside onsite computer repair, printer setup, Wi-Fi help, virus removal, laptop repair, and practical local IT support. | 470 | Contact intent is fine, but page can support stronger local conversion phrases. | Could mention Satellite Beach / Melbourne / Palm Bay routing more explicitly; current address may conflict with primary-city strategy. | Keep working form, add short FAQ and city mention, and ensure NAP consistency with GBP. | Medium |
| `/blog` | Beachside Computer Repair Blog \| My Computer Tech | Beachside computer repair guides for Indian Harbour Beach and Space Coast communities | Beachside computer repair blog with local Space Coast guides on laptop repair, virus removal, Wi-Fi setup, printer help, and small business IT support. | 260 | Thin archive page; relies on excerpts without strong contextual copy. | Local signals exist but are light. | Add 200-300 words of intro/outro content with internal links to money pages and location pages. | Medium |
| `/blog/computer-repair-indian-harbour-beach-guide` | Computer Repair in Indian Harbour Beach: Local Service Guide \| My Computer Tech | Computer Repair in Indian Harbour Beach: Local Service Guide | Looking for computer repair Indian Harbour Beach? Learn what services matter most, what to expect from local support, and how to get practical onsite tech help beachside. | 430 | Useful, but slightly thin for competitive ranking. | Good Indian Harbour Beach targeting; could support Satellite Beach and Melbourne via internal links. | Expand to 700-900 words, add FAQ, and link to service/location pages. | Medium |
| `/blog/virus-removal-satellite-beach-steps` | Virus Removal in Satellite Beach: What to Do First \| My Computer Tech | Virus Removal in Satellite Beach: What to Do First | Need virus removal Satellite Beach service? Follow this practical checklist for suspicious computer behavior and learn when professional malware cleanup is recommended. | 360 | Good keyword match but light depth. | Strong Satellite Beach targeting, but no direct service page to pass authority to. | Expand and link to a future `/virus-removal-melbourne-fl/` and `/computer-repair-satellite-beach-fl/`. | Medium |
| `/blog/wifi-setup-indian-harbour-beach-homes` | Wi-Fi Setup in Indian Harbour Beach Homes: Reliable Coverage Tips \| My Computer Tech | Wi-Fi Setup in Indian Harbour Beach Homes: Reliable Coverage Tips | Planning Wi-Fi setup Indian Harbour Beach? Learn practical ways to improve signal quality, secure your network, and reduce dropouts across your home. | 370 | Helpful, but not enough breadth for a strong service-intent page. | Good local topic; lacks Melbourne and broader Brevard capture. | Expand and link to `/wifi-troubleshooting-melbourne-fl/` plus city pages. | Medium |
| `/blog/printer-setup-beachside-home-office` | Printer Setup Beachside: Home and Small Office Checklist \| My Computer Tech | Printer Setup Beachside: Home and Small Office Checklist | Need printer setup beachside support? This checklist helps home users and small offices configure wireless printing, scanner settings, and stable connectivity. | 340 | Useful support post but still thin. | Minimal city targeting. | Add internal links to Melbourne, Satellite Beach, and Palm Bay service pages when created. | Medium |
| `/blog/my-printer-not-working-beachside-help` | My Printer Is Not Working: Beachside Troubleshooting Guide \| My Computer Tech | My Printer Is Not Working: Beachside Troubleshooting Guide | Searches like my printer not working often point to Wi-Fi, driver, scanner, or offline printer problems. Learn what to check and when to call for beachside printer support. | 420 | Good problem-intent article; could better target printer repair and support near me terms. | Broad local language but no specific city pairings. | Expand with local FAQ and stronger internal links to service pages. | Medium |
| `/blog/small-business-it-support-indian-harbour-beach` | Small Business IT Support in Indian Harbour Beach: What to Prioritize \| My Computer Tech | Small Business IT Support in Indian Harbour Beach: What to Prioritize | Looking for small business IT support Indian Harbour Beach? Prioritize stability, backups, printer/network reliability, and responsive local support. | 380 | Strong intent but still short. | Good local business theme; Melbourne business IT page is missing. | Expand and link to future `/business-it-support-melbourne-fl/` and location pages. | Medium |
| `/blog/how-to-fix-a-slow-computer-beachside` | How to Fix a Slow Computer: Beachside Repair Checklist \| My Computer Tech | How to Fix a Slow Computer: Beachside Repair Checklist | Need slow computer repair or slow computer cleanup beachside? Learn the common causes of a slow PC and when local computer repairs make sense. | 380 | Good keyword alignment, but broad phrasing. | Limited city targeting. | Expand and link to city-specific computer repair pages. | Medium |
| `/blog/wifi-keeps-disconnecting-beachside` | Wi-Fi Keeps Disconnecting? Beachside Network Troubleshooting \| My Computer Tech | Wi-Fi Keeps Disconnecting? Beachside Network Troubleshooting | If your Wi-Fi keeps disconnecting in Indian Harbour Beach or nearby beachside areas, this guide explains common causes and when onsite network help is useful. | 360 | Good problem intent; not enough conversion routing. | Minimal support for Melbourne intent. | Add FAQ and direct CTA to future WiFi troubleshooting page. | Medium |
| `/blog/laptop-not-charging-indian-harbour-beach` | Laptop Not Charging? Indian Harbour Beach Repair Guide \| My Computer Tech | Laptop Not Charging? Indian Harbour Beach Repair Guide | Need laptop not charging repair or laptop repair Indian Harbour Beach? Learn common charging problems and when to bring the laptop in for service. | 360 | Useful long-tail article but a little thin. | Strong Indian Harbour Beach intent; no Melbourne laptop page exists yet. | Expand and link to future `/laptop-repair-melbourne-fl/`. | Medium |
| `/blog/new-computer-setup-refurbished-laptops-indian-harbour-beach` | New Computer Setup and Refurbished Laptops in Indian Harbour Beach \| My Computer Tech | New Computer Setup and Refurbished Laptops in Indian Harbour Beach | Need new computer setup help or refurbished laptops Indian Harbour Beach? Learn what should be transferred and configured before you start using a replacement computer. | 400 | Good setup topic; title is long and niche. | Good Indian Harbour Beach relevance, but broader Brevard keyword not fully used. | Build a dedicated refurbished computers sales page and link from this post. | Medium |
| `/blog/onsite-computer-repair-beachside-vs-remote-support` | Onsite Computer Repair Beachside vs Remote Support: Which Is Better? \| My Computer Tech | Onsite Computer Repair Beachside vs Remote Support: Which Is Better? | Comparing onsite computer repair beachside vs remote tech support? Learn which option fits malware cleanup, Wi-Fi issues, printer setup, and multi-device troubleshooting. | 390 | Strong informational intent but limited transaction support. | Broad beachside intent without city depth. | Link to remote support service page and city pages; add local FAQ. | Medium |

## Technical / Local SEO Gaps

### Missing or weak items

- No dedicated service landing pages for high-intent local terms requested in the brief
- No dedicated location pages for Melbourne, Palm Bay, West Melbourne, Rockledge, or Viera
- Blog archive is somewhat thin
- Current schema is generic `LocalBusiness`; there is no page-level `Service`, `FAQPage`, or `BreadcrumbList` rollout yet

### Internal linking gaps

- Current blog posts do not strongly funnel users into future money pages
- Homepage and service hub do not yet route users into city-specific service pages because those pages do not exist
- Contact page can support more contextual links to services and cities

### Schema gaps

- Existing `LocalBusiness` schema is helpful but not enough for full service-page rollout
- No `FAQPage` schema on pages that would naturally support FAQs
- No `BreadcrumbList` schema for future WordPress implementation

### Alt text opportunities

- Hero and trust assets should use descriptive local alt text when image fields are finalized in WordPress
- Future service/location pages should include original photos or real storefront/service imagery with service + city alt text

## Recommended Order of Fixes

1. Align primary city / NAP across site, schema, GBP, footer, and citations
2. Launch the 10 service landing pages
3. Launch the 9 location pages
4. Replace the current homepage copy with a stronger local-conversion version
5. Add FAQ content + FAQ schema to core pages
6. Strengthen internal links from blog posts to money pages
7. Expand the top 5 blog posts that already show strong local intent
