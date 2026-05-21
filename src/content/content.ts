// =============================================================
//  JHB Driving School — content.ts  (FINAL)
//  Drop into: src/lib/content.ts
//  Chase Hughes 90-sec brain capture + SEO baked in
// =============================================================

// -----------------------------------------------------------
// SITE CONFIG — Google-compliant title + meta description
// Title: brand | primary keyword | location (≤60 chars)
// Description: action + benefit + location signal (≤155 chars)
// -----------------------------------------------------------
export const siteConfig = {
  name: "Hey! Another Driving School",
  description: "Passionate instructors. Real results. K-53 driving lessons across Northern Gauteng.",
  title: "Hey! Another Driving School | K-53 Lessons in Johannesburg",
  image: "/og-image.png",
  url: "https://jhbdrivingschool.co.za",
  // Used in JSON-LD LocalBusiness schema (see Layout.astro)
  schema: {
    type: "DrivingSchool",
    name: "Hey! Another Driving School",
    alternateName: "JHB Driving School",
    telephone: "+27829502858",
    email: "info@jhbdrivingschool.com",
    address: {
      streetAddress: "266 Riverglades Estate, Juweel Street",
      addressLocality: "Jukskei Park",
      addressRegion: "Gauteng",
      postalCode: "2153",
      addressCountry: "ZA",
    },
    geo: {
      latitude: "-26.029360804024147",
      longitude: "27.983472357670315",
    },
    openingHours: [
      "Mo-Fr 08:00-18:30",
      "Sa 09:00-15:00",
    ],
    priceRange: "RR",
    areaServed: [
      "Randburg", "Sandton", "Fourways", "Rivonia",
      "Honeydew", "Northcliff", "Rosebank", "Randpark Ridge",
      "Jukskei Park", "Lonehill", "Bryanston",
    ],
    sameAs: [
      // add Google Business Profile URL here once claimed
    ],
  },
};

// -----------------------------------------------------------
// HEADER
// -----------------------------------------------------------
export const header = {
  name: "Hey! Another Driving School",
  navLinks: [
    { label: "Services",     href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Areas",        href: "#areas" },
    { label: "FAQ",          href: "#faq" },
  ],
  cta: {
    label: "Book a lesson",
    href: "#cta",
  },
};

// -----------------------------------------------------------
// HERO
// Chase Hughes: Pattern interrupt headline + identity statement
// + authority signal + low-friction CTA
// -----------------------------------------------------------
export const hero = {
  headline: "Get Your Driver's Licence — First Time.",
  // Identity statement up front: "You deserve..." triggers
  // belonging and sets the contrast with franchise schools
  subheadline:
    "You deserve an instructor who knows your name. Jacques and Sharon personally coach every student — from your first lesson to your test day — across Randburg, Sandton, Fourways and Northern Gauteng.",
  primaryCta: {
    label: "Book a lesson",
    href: "#cta",
  },
  secondaryCta: {
    label: "Call Jacques now",
    href: "tel:+27829502858",
  },
  socialProof: "Hundreds of students passed across Northern Gauteng",
};

// -----------------------------------------------------------
// PROBLEM  (Pain acknowledgement — Hughes lever 4)
// Name the frustration clearly before offering the fix.
// -----------------------------------------------------------
export const problem = {
  headline: "Learning to drive shouldn't feel like a gamble.",
  description:
    "Most students who fail their K-53 test weren't bad drivers — they were underprepared. " +
    "Booked a big franchise school? Expect a different instructor every session, a rushed syllabus, " +
    "and no one who actually knows where you're struggling. By the time your test date arrives " +
    "you've spent the money but not built the confidence. That gap between lessons taken and " +
    "readiness is exactly where most people fail.",
};

// -----------------------------------------------------------
// SOLUTION  (Future pacing — Hughes lever 5)
// Paint the picture of the outcome, not just the service.
// -----------------------------------------------------------
export const solution = {
  headline: "Consistent, personal coaching that builds real confidence.",
  description:
    "Hey! Another Driving School is run by Jacques and Sharon — two dedicated instructors " +
    "who personally coach every single student. You work with the same person from lesson one " +
    "to test day, in the same vehicle you'll use when it counts. We follow the full K-53 syllabus " +
    "but go further: explaining the why behind every manoeuvre, preparing you for exactly what " +
    "examiners look for, and moving at a pace that suits you — not a schedule. " +
    "Imagine leaving the testing centre with your licence in hand, knowing you earned it " +
    "because you were genuinely ready. That's what we build towards, every single student.",
};

// -----------------------------------------------------------
// FEATURES  (Authority establishment — Hughes lever 2)
// -----------------------------------------------------------
export const features = {
  heading: "K-53 Lessons & Beyond.",
  description: "From learner's licence prep to advanced driving — everything you need, with instructors who know you by name.",
  items: [
    {
      icon: "🚗",
      headline: "K-53 Learner Prep",
      description: "Structured theory coaching to help you pass the learner's licence test. We cover road signs, rules of the road, and the K-53 defensive driving theory — so you walk into the traffic department prepared.",
    },
    {
      icon: "🛣️",
      headline: "K-53 Practical Lessons",
      description: "Step-by-step practical tuition following the official K-53 syllabus. Yard manoeuvres, road driving, and test-route familiarisation specific to your test centre.",
    },
    {
      icon: "🏎️",
      headline: "Advanced Driving",
      description: "Already licensed but want to sharpen your skills? Our advanced course covers highway driving, defensive techniques, and confident vehicle control in real-world conditions.",
    },
    {
      icon: "📍",
      headline: "Pick-up & Drop-off",
      description: "We come to you. Convenient pick-up and drop-off across all service areas — no need to arrange your own transport to a driving school.",
    },
    {
      icon: "🎓",
      headline: "Test-Day Vehicle",
      description: "Use our dual-control vehicle on your licence test day. You've trained in it — you know exactly how it handles. No unfamiliar controls when it matters most.",
    },
    {
      icon: "📞",
      headline: "Direct Instructor Access",
      description: "Call or WhatsApp Jacques or Sharon directly. No call centre, no admin delays. Booking, rescheduling, and questions handled by your actual instructor.",
    },
  ],
};

// -----------------------------------------------------------
// HOW IT WORKS  (merged version — simple + detailed)
// -----------------------------------------------------------
export const howItWorks = {
  heading: "How it works",
  description: "Three steps from first call to licence card.",
  items: [
    {
      number: "1",
      headline: "Call us",
      description:
        "Chat directly with Jacques or Sharon — no call centres, no forms. We'll discuss your experience level, availability, and which test centre you plan to use, then schedule your first session.",
    },
    {
      number: "2",
      headline: "Book your lessons",
      description:
        "Work through the K-53 syllabus with your dedicated instructor at your own pace. We come to you — pick-up and drop-off included across all our service areas.",
    },
    {
      number: "3",
      headline: "Pass first time",
      description:
        "We only book your test when you're ready. You'll have the same instructor from lesson one to test day, and use our dual-control vehicle on the day — no surprises.",
    },
  ],
};

// -----------------------------------------------------------
// TESTIMONIALS  (Social proof — Hughes lever 3)
// Real names + real suburbs = credibility signal
// -----------------------------------------------------------
export const testimonials = {
  heading: "What our students say",
  items: [
    {
      quote:
        "Shout out to Jacques. Thanks to your training, tips and use of the vehicle on my test day I was able to ace my driver's licence test the first time. I'm so stoked — thanks a lot you guys.",
      author: "Dale L.",
      location: "Northcliff, JHB",
      rating: 5,
    },
    {
      quote:
        "I don't know what I was stressing about. Thanks to Sharon I was super-prepared for my test and had the confidence to get it done. The examiner even had some positive feedback on my driving skills.",
      author: "Jessica C.",
      location: "Randburg, JHB",
      rating: 5,
    },
  ],
};

// -----------------------------------------------------------
// STATS
// -----------------------------------------------------------
export const stats = [
  { value: "20+",  label: "Years of experience" },
  { value: "500+", label: "Happy students" },
  { value: "95%",  label: "First-attempt pass rate" },
];

// -----------------------------------------------------------
// SERVICE AREAS
// -----------------------------------------------------------
export const areas = {
  heading: "Areas we serve",
  subheading:
    "Based in Jukskei Park, we offer pick-up and drop-off across Northern Gauteng.",
  locations: [
    "Randburg", "Sandton", "Fourways", "Rivonia",
    "Honeydew", "Northcliff", "Rosebank", "Randpark Ridge",
    "Jukskei Park", "Lonehill", "Bryanston",
  ],
};

// -----------------------------------------------------------
// CTA  (Low-friction action — Hughes lever 6)
// Phone/WhatsApp first — lowest barrier for SA audience
// -----------------------------------------------------------
export const cta = {
  headline: "Request a callback",
  description:
    "Leave your details and Jacques or Sharon will call you back to discuss lessons, availability and pricing.",
  button: {
    label: "Request callback",
  },
  disclaimer: "Or call us directly — Jacques: 082 950 2858 · Sharon: 071 183 3500",
};

// -----------------------------------------------------------
// FAQ
// Research-backed + schema-ready (FAQ JSON-LD in Layout.astro)
// -----------------------------------------------------------
export const faq = {
  heading: "Frequently asked questions",
  items: [
    {
      question: "Can you provide a car for my lessons and test?",
      answer:
        "Yes. You train in our dual-control vehicle and use it on your test day. Familiarity with the car you've trained in makes a real difference — no unfamiliar controls when it counts. There is a separate fee for test-day vehicle use; ask us when you book.",
    },
    {
      question: "Do you handle the test booking?",
      answer:
        "We guide you through the full process. When you're ready we'll advise you on which traffic department to use, what documents you need, and what fees to expect. Most test bookings at Gauteng DLTCs require a visit in person, but we make sure you arrive fully prepared.",
    },
    {
      question: "How many lessons will I need?",
      answer:
        "It depends on your starting point. Most learners need between 10 and 20 hours of practical tuition before they're test-ready — complete beginners typically need more, while those with some prior experience may be ready sooner. We assess you honestly and won't recommend lessons you don't need.",
    },
    {
      question: "Do I need a learner's licence before I can start practical lessons?",
      answer:
        "Yes. South African law requires a valid learner's licence before you can drive on a public road, even under instruction. We can help you prepare for the learner's test first — once you have your card we move straight into practical lessons.",
    },
    {
      question: "Manual or automatic — which should I choose?",
      answer:
        "A manual (code 08) licence allows you to drive both manual and automatic vehicles. An automatic (code 10) licence restricts you to automatics only. We recommend manual unless you have a specific medical reason or exclusively drive an automatic. Our training vehicle is manual.",
    },
    {
      question: "What happens if I fail my test?",
      answer:
        "You must wait at least 7 days before retesting in South Africa. We'll debrief you on exactly what went wrong, target those areas in follow-up lessons, and send you back confident. Most students who don't pass first time get through comfortably on the second attempt.",
    },
    {
      question: "Do you offer lessons on weekends?",
      answer:
        "Yes. We're available Monday to Friday 8:00am–6:30pm and on Saturdays from 9:00am–3:00pm. Weekend slots fill quickly — book ahead to secure your preferred time.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We're based in Jukskei Park and cover Randburg, Sandton, Fourways, Rivonia, Honeydew, Northcliff, Rosebank, Randpark Ridge, and surrounding suburbs across Northern Gauteng. Pick-up and drop-off is included. Not sure if we reach you? Give us a call.",
    },
  ],
};

// -----------------------------------------------------------
// FOOTER
// -----------------------------------------------------------
export const footer = {
  copyright: `© ${new Date().getFullYear()} Hey! Another Driving School. All rights reserved.`,
  sections: {
    quickLinks: {
      title: "Quick links",
      links: [
        { label: "Services",     href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Areas",        href: "#areas" },
        { label: "FAQ",          href: "#faq" },
      ],
    },
legal: {
  title: "Contact",
  links: [
    { label: "Jacques — 082 950 2858", href: "tel:+27829502858" },
    { label: "Sharon — 071 183 3500",  href: "tel:+27711833500" },
    { label: "info@jhbdrivingschool.com", href: "mailto:info@jhbdrivingschool.com" },
  ],
},
  },
  social: [
    { name: "WhatsApp", href: "https://wa.me/27829502858", icon: "whatsapp" },
  ],
};