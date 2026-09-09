// Core business content for The Look Hair & Beauty.
// Verified facts (name, founding year, locations, phone numbers, bridal
// specialism) are drawn from public listings for thelookhair.com. Hours,
// service copy, testimonials and imagery are representative placeholder
// content for this redesign and should be swapped for the salon's own
// copy, price list and photography before launch.

export const brand = {
  name: 'The Look Hair & Beauty',
  legalName: 'The Look Hair and Beauty Limited',
  founded: 2003,
  standfirst: 'Gibraltar',
  tagline: 'Considered hair. Considered beauty.',
  phoneDisplay: '(350) 200 73575',
  phoneHref: '+35020073575',
  email: 'hello@thelookhair.com',
  instagramHandle: '@thelookhair',
  facebookUrl: 'https://www.facebook.com/thelookhairandbeauty/',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Bridal', to: '/bridal' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export type Location = {
  id: string
  name: string
  area: string
  phoneDisplay: string
  phoneHref: string
  description: string
  hours: { label: string; value: string }[]
  note?: string
}

export const locations: Location[] = [
  {
    id: 'eurotowers',
    name: 'The Look',
    area: 'Eurotowers, Gibraltar',
    phoneDisplay: '(350) 200 73575',
    phoneHref: '+35020073575',
    description:
      'Our flagship salon in the business district, ten minutes on foot from town centre — the address of choice for Registry Office weddings, with room to dress and prepare on site.',
    hours: [
      { label: 'Mon – Fri', value: '9.00 – 18.00' },
      { label: 'Thursday', value: '9.00 – 19.30' },
      { label: 'Saturday', value: '9.00 – 17.00' },
      { label: 'Sunday', value: 'Closed' },
    ],
    note: 'Early bridal appointments by arrangement',
  },
  {
    id: 'south-district',
    name: 'Top Look',
    area: 'South District, Gibraltar',
    phoneDisplay: '(350) 200 73576',
    phoneHref: '+35020073576',
    description:
      'A quieter sister salon set in the affluent South District, favoured for unhurried colour work and long-standing client relationships.',
    hours: [
      { label: 'Mon – Fri', value: '9.00 – 18.00' },
      { label: 'Saturday', value: '9.00 – 17.00' },
      { label: 'Sunday', value: 'Closed' },
    ],
  },
  {
    id: 'world-trade-centre',
    name: 'Another Look',
    area: 'World Trade Centre, Gibraltar',
    phoneDisplay: '(350) 200 73578',
    phoneHref: '+35020073578',
    description:
      'Our World Trade Centre address, convenient for clients working across Gibraltar’s commercial district.',
    hours: [
      { label: 'Mon – Fri', value: '9.00 – 18.00' },
      { label: 'Saturday', value: '9.00 – 17.00' },
      { label: 'Sunday', value: 'Closed' },
    ],
  },
]

export type ServiceItem = { name: string; description: string }
export type ServiceCategory = {
  id: string
  title: string
  intro: string
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cut-and-style',
    title: 'Cut & Style',
    intro:
      'Precision cutting and finishing for every texture, tailored in consultation before a single section is taken down.',
    items: [
      { name: 'Consultation & Blow-Dry', description: 'Wash, tailored blow-dry and finish for any length.' },
      { name: 'Precision Cut & Finish', description: 'Full restyle or maintenance cut, shaped to face and texture.' },
      { name: "Men's Cut & Grooming", description: 'Scissor or clipper cut with beard shape and hot-towel finish.' },
      { name: "Children's Cut", description: 'A relaxed first-chair experience for younger clients.' },
      { name: 'Special Occasion Styling', description: 'Up-styles and dressed finishes for events and evenings out.' },
    ],
  },
  {
    id: 'colour',
    title: 'Colour & Balayage',
    intro:
      'From subtle root refresh to full transformation, our colourists work in natural light to match tone precisely.',
    items: [
      { name: 'Full Colour', description: 'All-over single-process colour, glossed and toned.' },
      { name: 'Root Regrowth', description: 'Seamless colour match at the root.' },
      { name: 'Balayage & Hand-Painted Highlights', description: 'Freehand, dimensional lightening for a lived-in finish.' },
      { name: 'Foil Highlights / Lowlights', description: 'Traditional foiled sections for precise contrast.' },
      { name: 'Colour Correction', description: 'Restorative colour work, assessed by consultation.' },
      { name: 'Fashion & Vivid Colour', description: 'Bold, statement tones for those who want to be seen.' },
      { name: 'Gloss & Toner', description: 'A finishing rinse to refine tone and add shine.' },
    ],
  },
  {
    id: 'treatments',
    title: 'Treatments & Restoration',
    intro: 'Condition-driven treatments that repair, smooth and protect between colour and cutting appointments.',
    items: [
      { name: 'Keratin Smoothing', description: 'Frizz-taming treatment for smoother, more manageable hair.' },
      { name: 'Bond Repair Treatment', description: 'In-salon bond-building service for chemically treated hair.' },
      { name: 'Deep Conditioning Ritual', description: 'An intensive mask and scalp massage for dry or damaged hair.' },
      { name: 'Scalp Treatment', description: 'A targeted treatment for scalp comfort and hair health.' },
    ],
  },
  {
    id: 'grooming',
    title: "Men's Grooming",
    intro: 'A dedicated grooming menu for the modern gentleman, from precision fades to traditional wet shaves.',
    items: [
      { name: 'Skin Fade & Scissor Cut', description: 'Sharp, tailored cuts with clean line work.' },
      { name: 'Beard Sculpt & Hot Towel Shave', description: 'Traditional shave ritual with hot towel and finishing balm.' },
      { name: "Grey Blending", description: 'Subtle colour to soften and blend greys naturally.' },
    ],
  },
  {
    id: 'beauty',
    title: 'Beauty',
    intro: 'Brow, lash and makeup services to complete the look, delivered by our in-house beauty team.',
    items: [
      { name: 'Brow Shape & Tint', description: 'Sculpted brows with tint to define shape and colour.' },
      { name: 'Lash Lift & Tint', description: 'A natural, low-maintenance lift for your own lashes.' },
      { name: 'Lash Extensions', description: 'Classic or volume sets, tailored to eye shape.' },
      { name: 'Evening & Occasion Makeup', description: 'Full makeup application for events and photography.' },
    ],
  },
]

export const bridal = {
  eyebrow: 'Bridal',
  title: 'The Look Brides',
  intro:
    'For over two decades, The Look has been Gibraltar’s premier address for bridal hair and makeup — a tailor-made process built entirely around your day, whether that’s a single elegant up-style or hair and makeup for the whole wedding party.',
  points: [
    {
      title: 'Trials, Considered Properly',
      description:
        'We begin with a full hair and makeup trial well ahead of the day, so every detail — from parting to finish — is agreed before it matters most.',
    },
    {
      title: 'Bridal Party & Family',
      description:
        'Bridesmaids, mothers and family are welcomed alongside the bride, styled together on the morning of the wedding.',
    },
    {
      title: 'Early Starts, On-Site Dressing',
      description:
        'Our Eurotowers salon opens early for wedding mornings and offers space to dress on site — ten minutes from the Registry Office on foot.',
    },
    {
      title: 'On-Location Available',
      description:
        'For venues across Gibraltar and the Costa del Sol, our bridal team can travel to you on request.',
    },
  ],
  cta: 'Enquire About Your Wedding',
}

export const testimonials = [
  {
    quote:
      'From the first consultation to the final blow-dry, everything felt considered. My colour has never looked this natural.',
    name: 'Elena M.',
    context: 'Colour & Balayage, Eurotowers',
  },
  {
    quote:
      'They styled my mother, my bridesmaids and me on the morning of my wedding without a single rushed moment. Exactly as promised at the trial.',
    name: 'Sophia C.',
    context: 'Bridal Party, The Look Brides',
  },
  {
    quote:
      'A proper gentleman’s cut — the kind of attention to detail you don’t find in many places on the Rock.',
    name: 'James R.',
    context: "Men's Grooming, World Trade Centre",
  },
  {
    quote:
      'Quieter, unhurried, and my stylist actually listens. I’ve followed her across three appointments now.',
    name: 'Priya D.',
    context: 'Cut & Style, South District',
  },
]

export type Plate = { id: number; caption: string; tone: 'ink' | 'bronze' | 'clay' | 'paper' }

export const galleryPlates: Plate[] = [
  { id: 1, caption: 'Eurotowers salon floor', tone: 'ink' },
  { id: 2, caption: 'Balayage, in progress', tone: 'bronze' },
  { id: 3, caption: 'Bridal up-style, trial', tone: 'clay' },
  { id: 4, caption: 'Colour bar, South District', tone: 'paper' },
  { id: 5, caption: "Men's grooming chair", tone: 'ink' },
  { id: 6, caption: 'Finishing touches', tone: 'bronze' },
  { id: 7, caption: 'Wedding morning, family styling', tone: 'clay' },
  { id: 8, caption: 'Precision cut, detail', tone: 'paper' },
  { id: 9, caption: 'World Trade Centre reception', tone: 'ink' },
]

export const socialPosts: Plate[] = galleryPlates.slice(0, 6)

export const stats = [
  { value: '2003', label: 'Est. in Gibraltar' },
  { value: '3', label: 'Salons across the Rock' },
  { value: '20+', label: 'Years styling brides' },
]
