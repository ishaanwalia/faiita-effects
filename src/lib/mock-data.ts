// ─── STATS ─────────────────────────────────────────────
export const mockStats = {
  dealers: 50000,
  states: 25,
  associations: 28,
  years: 34,
  eventsHosted: 156,
  policiesChanged: 12,
};

// ─── LEADERSHIP ─────────────────────────────────────────
export const mockLeadership = [
  { id: 1, name: "Rajesh Sharma", role: "President", state: "Delhi", bio: "20+ years in IT distribution. Former VP of NASSCOM Delhi chapter.", image: "/leaders/rajesh.jpg", email: "president@faiita.org", phone: "+91-11-XXXX-XXXX" },
  { id: 2, name: "Priya Nair", role: "Vice President", state: "Kerala", bio: "Pioneer in South Indian IT trade. Advocate for GST simplification.", image: "/leaders/priya.jpg", email: "vp@faiita.org", phone: "+91-48-XXXX-XXXX" },
  { id: 3, name: "Amit Patel", role: "Secretary General", state: "Gujarat", bio: "Expert in trade policy and government liaison.", image: "/leaders/amit.jpg", email: "sg@faiita.org", phone: "+91-79-XXXX-XXXX" },
  { id: 4, name: "Sunita Reddy", role: "Treasurer", state: "Telangana", bio: "Chartered accountant with 15 years in IT financial management.", image: "/leaders/sunita.jpg", email: "treasurer@faiita.org", phone: "+91-40-XXXX-XXXX" },
  { id: 5, name: "Vikram Singh", role: "Joint Secretary", state: "Punjab", bio: "Youth leader driving digital transformation in North India.", image: "/leaders/vikram.jpg", email: "js@faiita.org", phone: "+91-172-XXXX-XXXX" },
  { id: 6, name: "Meena Gupta", role: "Executive Member", state: "Maharashtra", bio: "Mumbai-based IT entrepreneur with pan-India network.", image: "/leaders/meena.jpg", email: "em@faiita.org", phone: "+91-22-XXXX-XXXX" },
];

// ─── EVENTS ─────────────────────────────────────────────
export const mockEvents = [
  { id: 1, title: "National IT Summit 2026", date: "2026-08-15", endDate: "2026-08-17", location: "Mumbai, Maharashtra", venue: "Jio World Convention Centre", registered: 1200, capacity: 1500, price: "₹5,000", category: "Summit", image: "/events/summit.jpg", description: "Annual gathering of IT dealers across India." },
  { id: 2, title: "GST Simplification Workshop", date: "2026-07-20", endDate: "2026-07-20", location: "Delhi NCR", venue: "India Habitat Centre", registered: 450, capacity: 500, price: "Free", category: "Workshop", image: "/events/gst.jpg", description: "Hands-on workshop for GST compliance." },
  { id: 3, title: "South India IT Expo", date: "2026-09-10", endDate: "2026-09-12", location: "Bangalore, Karnataka", venue: "Bangalore Palace Grounds", registered: 800, capacity: 1000, price: "₹3,000", category: "Expo", image: "/events/expo.jpg", description: "Showcase of latest IT products and services." },
  { id: 4, title: "FAIITA Annual General Meeting", date: "2026-10-05", endDate: "2026-10-05", location: "Hyderabad, Telangana", venue: "HICC Novotel", registered: 300, capacity: 400, price: "Members Only", category: "Meeting", image: "/events/agm.jpg", description: "Annual review and future planning." },
];

// ─── NEWS ───────────────────────────────────────────────
export const mockNews = [
  { id: 1, headline: "FAIITA pushes for GST simplification for IT dealers", date: "2026-06-20", source: "Economic Times", category: "Policy", excerpt: "Federation submits comprehensive proposal to GST Council...", image: "/news/gst.jpg" },
  { id: 2, headline: "National IT Summit 2026: Record registrations", date: "2026-06-15", source: "Business Standard", category: "Events", excerpt: "Over 1200 dealers registered for the annual summit...", image: "/news/summit.jpg" },
  { id: 3, headline: "FAIITA welcomes new state association from Ladakh", date: "2026-06-10", source: "Financial Express", category: "Growth", excerpt: "Ladakh IT Dealers Association becomes 28th member...", image: "/news/ladakh.jpg" },
  { id: 4, headline: "Government representation: FAIITA meets IT Minister", date: "2026-06-05", source: "The Hindu", category: "Advocacy", excerpt: "Delegation discusses challenges facing small IT dealers...", image: "/news/minister.jpg" },
];

// ─── MEMBERSHIP TIERS ───────────────────────────────────
export const mockMembershipTiers = [
  { id: "associate", name: "Associate", price: "₹5,000", period: "per year", description: "For individual IT dealers and small businesses", benefits: ["Newsletter access", "Event discounts (10%)", "Basic grievance support", "Online forum access"], highlighted: false, cta: "Join as Associate" },
  { id: "full", name: "Full Member", price: "₹15,000", period: "per year", description: "For established IT dealers with state-level presence", benefits: ["Voting rights in AGM", "Priority grievance support", "Event discounts (25%)", "Policy consultation access", "Member directory listing", "Legal advisory (basic)"], highlighted: true, cta: "Become Full Member" },
  { id: "patron", name: "Patron", price: "₹50,000", period: "per year", description: "For large distributors and industry leaders", benefits: ["Board representation", "Policy co-creation", "Event discounts (50%)", "Dedicated relationship manager", "Brand visibility on website", "Premium legal advisory", "Exclusive roundtables"], highlighted: false, cta: "Join as Patron" },
];

// ─── STATES ─────────────────────────────────────────────
export const mockStates = [
  { code: "DL", name: "Delhi", association: "Delhi IT Dealers Association", president: "Rajesh Sharma", members: 5200, established: "1992", contact: "011-XXXX-XXXX", email: "delhi@faiita.org" },
  { code: "MH", name: "Maharashtra", association: "Maharashtra Computer Dealers Association", president: "Meena Gupta", members: 8400, established: "1990", contact: "022-XXXX-XXXX", email: "maharashtra@faiita.org" },
  { code: "KA", name: "Karnataka", association: "Karnataka IT Trade Association", president: "Ravi Kumar", members: 6100, established: "1994", contact: "080-XXXX-XXXX", email: "karnataka@faiita.org" },
  { code: "TN", name: "Tamil Nadu", association: "Tamil Nadu Computer Dealers Association", president: "Lakshmi Iyer", members: 4800, established: "1993", contact: "044-XXXX-XXXX", email: "tamilnadu@faiita.org" },
  { code: "TG", name: "Telangana", association: "Telangana IT Dealers Association", president: "Sunita Reddy", members: 3900, established: "2014", contact: "040-XXXX-XXXX", email: "telangana@faiita.org" },
  { code: "GJ", name: "Gujarat", association: "Gujarat Computer Dealers Association", president: "Amit Patel", members: 4500, established: "1991", contact: "079-XXXX-XXXX", email: "gujarat@faiita.org" },
  { code: "WB", name: "West Bengal", association: "West Bengal IT Association", president: "Arun Das", members: 3200, established: "1995", contact: "033-XXXX-XXXX", email: "westbengal@faiita.org" },
  { code: "KL", name: "Kerala", association: "Kerala IT Dealers Association", president: "Priya Nair", members: 2800, established: "1996", contact: "048-XXXX-XXXX", email: "kerala@faiita.org" },
  { code: "PB", name: "Punjab", association: "Punjab Computer Traders Association", president: "Vikram Singh", members: 2100, established: "1997", contact: "0172-XXXX-XXXX", email: "punjab@faiita.org" },
  { code: "RJ", name: "Rajasthan", association: "Rajasthan IT Dealers Association", president: "Kiran Sharma", members: 2600, established: "1998", contact: "0141-XXXX-XXXX", email: "rajasthan@faiita.org" },
  { code: "UP", name: "Uttar Pradesh", association: "UP IT Dealers Association", president: "Rahul Verma", members: 5500, established: "1993", contact: "0522-XXXX-XXXX", email: "up@faiita.org" },
  { code: "MP", name: "Madhya Pradesh", association: "MP Computer Dealers Association", president: "Suresh Jain", members: 2300, established: "1999", contact: "0755-XXXX-XXXX", email: "mp@faiita.org" },
  { code: "HR", name: "Haryana", association: "Haryana IT Traders Association", president: "Deepak Malik", members: 1800, established: "2000", contact: "0172-XXXX-XXXX", email: "haryana@faiita.org" },
  { code: "OR", name: "Odisha", association: "Odisha IT Dealers Association", president: "Prakash Mohanty", members: 1500, established: "2001", contact: "0674-XXXX-XXXX", email: "odisha@faiita.org" },
  { code: "AP", name: "Andhra Pradesh", association: "Andhra IT Traders Association", president: "V. Prasad", members: 2200, established: "2002", contact: "0863-XXXX-XXXX", email: "ap@faiita.org" },
  { code: "CT", name: "Chhattisgarh", association: "Chhattisgarh IT Association", president: "Anil Tiwari", members: 1100, established: "2003", contact: "0771-XXXX-XXXX", email: "chhattisgarh@faiita.org" },
  { code: "JH", name: "Jharkhand", association: "Jharkhand IT Dealers Association", president: "Manoj Sinha", members: 900, established: "2004", contact: "0651-XXXX-XXXX", email: "jharkhand@faiita.org" },
  { code: "UK", name: "Uttarakhand", association: "Uttarakhand IT Association", president: "Neha Rawat", members: 800, established: "2005", contact: "0135-XXXX-XXXX", email: "uttarakhand@faiita.org" },
  { code: "HP", name: "Himachal Pradesh", association: "HP IT Dealers Association", president: "Rohit Thakur", members: 700, established: "2006", contact: "0177-XXXX-XXXX", email: "hp@faiita.org" },
  { code: "JK", name: "Jammu and Kashmir", association: "JK IT Traders Association", president: "Farooq Ahmed", members: 600, established: "2007", contact: "0194-XXXX-XXXX", email: "jk@faiita.org" },
  { code: "AS", name: "Assam", association: "Assam IT Dealers Association", president: "Bikram Das", members: 1200, established: "2000", contact: "0361-XXXX-XXXX", email: "assam@faiita.org" },
  { code: "GA", name: "Goa", association: "Goa IT Association", president: "Carlos Pereira", members: 400, established: "2008", contact: "0832-XXXX-XXXX", email: "goa@faiita.org" },
  { code: "NL", name: "Nagaland", association: "Nagaland IT Dealers", president: "K. Toshi", members: 200, established: "2010", contact: "0370-XXXX-XXXX", email: "nagaland@faiita.org" },
  { code: "MN", name: "Manipur", association: "Manipur IT Association", president: "S. Singh", members: 180, established: "2011", contact: "0385-XXXX-XXXX", email: "manipur@faiita.org" },
  { code: "MZ", name: "Mizoram", association: "Mizoram IT Dealers", president: "L. Renthlei", members: 150, established: "2012", contact: "0389-XXXX-XXXX", email: "mizoram@faiita.org" },
];

// ─── TESTIMONIALS ───────────────────────────────────────
export const mockTestimonials = [
  { id: 1, name: "Suresh Kumar", role: "Owner, SK Computers", state: "Delhi", quote: "FAIITA helped us resolve a GST dispute that was costing us ₹2 lakhs monthly. Their legal team is exceptional.", avatar: "/testimonials/suresh.jpg" },
  { id: 2, name: "Anita Desai", role: "Director, TechWorld Pune", state: "Maharashtra", quote: "The National Summit opened doors to partnerships we never thought possible. Our revenue grew 40% after joining.", avatar: "/testimonials/anita.jpg" },
  { id: 3, name: "Mohammed Ali", role: "Founder, Ali Electronics", state: "Kerala", quote: "From a small shop to a state distributor — FAIITA's mentorship program changed everything for us.", avatar: "/testimonials/mohammed.jpg" },
];

// ─── IMPACT STORIES ─────────────────────────────────────
export const mockImpactStories = [
  { id: 1, state: "Delhi", issue: "GST Input Credit Blockage", before: "500 dealers unable to claim ₹50Cr+ in credits", after: "FAIITA representation led to GST Council clarification. 100% credits released.", timeline: "6 months", image: "/impact/delhi.jpg" },
  { id: 2, state: "Kerala", issue: "Import Duty on Computer Spares", before: "25% duty making spares unaffordable", after: "FAIITA petition to Finance Ministry. Duty reduced to 10%.", timeline: "8 months", image: "/impact/kerala.jpg" },
  { id: 3, state: "Maharashtra", issue: "Local Body Tax Dispute", before: "Municipal corporation demanding retroactive LBT", after: "FAIITA legal intervention. Supreme Court ruling in favor of dealers.", timeline: "12 months", image: "/impact/maharashtra.jpg" },
];

// ─── POLICIES ───────────────────────────────────────────
export const mockPolicies = [
  { id: 1, title: "GST Simplification for IT Dealers", status: "Active", progress: 75, lastUpdate: "2026-06-20", description: "Pushing for simplified GST filing for small IT dealers", supporters: 12400 },
  { id: 2, title: "Import Duty Reduction on Spares", status: "Won", progress: 100, lastUpdate: "2026-05-15", description: "Successfully reduced import duties on computer spares", supporters: 8900 },
  { id: 3, title: "Digital India Vendor Registration", status: "Active", progress: 45, lastUpdate: "2026-06-25", description: "Streamlining vendor registration for government IT contracts", supporters: 5600 },
  { id: 4, title: "E-Waste Management Compliance", status: "New", progress: 15, lastUpdate: "2026-07-01", description: "Creating framework for responsible e-waste disposal", supporters: 3200 },
];

// ─── PARTNERS ───────────────────────────────────────────
export const mockPartners = [
  { name: "Intel", logo: "/partners/intel.svg" },
  { name: "AMD", logo: "/partners/amd.svg" },
  { name: "Samsung", logo: "/partners/samsung.svg" },
  { name: "Dell", logo: "/partners/dell.svg" },
  { name: "HP", logo: "/partners/hp.svg" },
  { name: "Lenovo", logo: "/partners/lenovo.svg" },
  { name: "Asus", logo: "/partners/asus.svg" },
  { name: "MSI", logo: "/partners/msi.svg" },
];

// ─── TIMELINE ───────────────────────────────────────────
export const mockTimeline = [
  { year: 1990, event: "FAIITA Founded", description: "Federation established with 5 state associations" },
  { year: 1995, event: "10 States United", description: "Expanded to 10 state associations across India" },
  { year: 2005, event: "GST Advocacy Begins", description: "First representation to government on tax reform" },
  { year: 2010, event: "National Summit Launched", description: "First annual National IT Summit held in Delhi" },
  { year: 2015, event: "Digital India Partnership", description: "Collaborated with government on Digital India initiative" },
  { year: 2020, event: "COVID Relief Efforts", description: "Provided support to 15,000+ dealers during pandemic" },
  { year: 2024, event: "50,000 Members Milestone", description: "Reached 50,000 IT channel partners across 25 states" },
];

// ─── FAQ ────────────────────────────────────────────────
export const mockFAQ = [
  { q: "Who can become a member of FAIITA?", a: "Any state-level IT association representing dealers, distributors, or channel partners can apply for membership." },
  { q: "What are the benefits of joining FAIITA?", a: "Members gain access to policy advocacy, legal support, networking events, industry insights, and a unified national voice." },
  { q: "How much does membership cost?", a: "Membership tiers range from ₹5,000/year for Associate to ₹50,000/year for Patron membership." },
  { q: "How do I register for events?", a: "Events can be booked through our Events page. Members get discounted rates." },
  { q: "Can I file a grievance through FAIITA?", a: "Yes, members can submit grievances through the Member Portal for legal and policy support." },
  { q: "How do I contact my state association?", a: "Visit the State Associations page to find contact details for your state's IT association." },
];