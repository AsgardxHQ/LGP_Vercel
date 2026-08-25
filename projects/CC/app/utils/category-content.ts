import { slugify } from '@/utils';

export type CategoryBenefit = { title: string; body: string };
export type CategoryTestimonial = { quote: string; name: string; location: string };

export type CategoryContent = {
  noun: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  servicesTitle: string;
  servicesSubtitle: string;
  serviceImages: string[];
  stepsTitle: string;
  stepsSubtitle: string;
  stepsImage: string;
  zipTitle: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: CategoryBenefit[];
  galleryTitle: string;
  styles: string[];
  galleryImages: string[];
  featuredService: string;
  featuredCost: string;
  quoteTitle: string;
  bandImage: string;
  testimonials: CategoryTestimonial[];
};

// Stock stand-ins; every id below was checked to resolve. Replace with owned assets before launch.
const img = (photoId: string) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export const fallbackImage = img('photo-1600566752355-35792bedcfea');

const homeStyles = ['Organic Modern', 'Industrial', 'Transitional', 'Mediterranean', 'Farmhouse', 'Modern'];
const exteriorStyles = ['Modern', 'Craftsman', 'Colonial', 'Farmhouse', 'Ranch', 'Contemporary'];

const bathroomImages = [
  img('photo-1620626011761-996317b8d101'),
  img('photo-1584622650111-993a426fbf0a'),
  img('photo-1552321554-5fefe8c9ef14'),
  img('photo-1600566753086-00f18fb6b3ea'),
  img('photo-1631679706909-1844bbd07221'),
  img('photo-1595428774223-ef52624120d2')
];

const kitchenImages = [
  img('photo-1556909114-f6e7ad7d3136'),
  img('photo-1556909212-d5b604d0c90d'),
  img('photo-1600489000022-c2086d79f9d4'),
  img('photo-1600585154340-be6161a56a0c'),
  img('photo-1600566753086-00f18fb6b3ea'),
  img('photo-1594026112284-02bb6f3352fe')
];

const roofingImages = [
  img('photo-1632778149955-e80f8ceca2e8'),
  img('photo-1632759145351-1d592919f522'),
  img('photo-1600607687939-ce8a6c25118c'),
  img('photo-1600566752355-35792bedcfea'),
  img('photo-1604709177225-055f99402ea3'),
  img('photo-1507089947368-19c1da9775ae')
];

const flooringImages = [
  img('photo-1616627561839-074385245ff6'),
  img('photo-1615873968403-89e068629265'),
  img('photo-1600210492486-724fe5c67fb0'),
  img('photo-1594026112284-02bb6f3352fe'),
  img('photo-1600585154526-990dced4db0d'),
  img('photo-1567016432779-094069958ea5')
];

const windowImages = [
  img('photo-1600585154340-be6161a56a0c'),
  img('photo-1567016432779-094069958ea5'),
  img('photo-1560448204-e02f11c3d0e2'),
  img('photo-1600566753086-00f18fb6b3ea'),
  img('photo-1507089947368-19c1da9775ae'),
  img('photo-1600585154526-990dced4db0d')
];

const sidingImages = [
  img('photo-1600607687939-ce8a6c25118c'),
  img('photo-1600566752355-35792bedcfea'),
  img('photo-1604709177225-055f99402ea3'),
  img('photo-1503387762-592deb58ef4e'),
  img('photo-1600210492486-724fe5c67fb0'),
  img('photo-1560448204-e02f11c3d0e2')
];

const gutterImages = [
  img('photo-1503387762-592deb58ef4e'),
  img('photo-1632759145351-1d592919f522'),
  img('photo-1604709177225-055f99402ea3'),
  img('photo-1600607687939-ce8a6c25118c'),
  img('photo-1632778149955-e80f8ceca2e8'),
  img('photo-1600566752355-35792bedcfea')
];

const teamImage = img('photo-1507089947368-19c1da9775ae');

export const categoryContent: Record<string, CategoryContent> = {
  bathroom: {
    noun: 'bathroom',
    heroTitle: 'Bathroom remodel, done right, on time',
    heroSubtitle:
      'Find licensed, vetted pros who show up, do the work, and leave the space better than they found it.',
    heroImage: bathroomImages[0]!,
    servicesTitle: 'Bathroom remodel services',
    servicesSubtitle: 'Pick the work you have in mind and we will match you with specialists who do it every day.',
    serviceImages: bathroomImages,
    stepsTitle: 'From quotes to clean-up',
    stepsSubtitle: 'Three steps between the idea and the first day on site.',
    stepsImage: teamImage,
    zipTitle: 'Your dream bathroom starts with a zip code',
    benefitsTitle: 'Make the right call for your bathroom',
    benefitsSubtitle: 'A bathroom is the smallest room in the house and the easiest one to get wrong.',
    benefits: [
      {
        title: 'Added value',
        body: 'Bathroom remodels recoup roughly two thirds of their cost at resale in most markets.'
      },
      {
        title: 'Maximize functionality',
        body: 'Better storage, lighting, and ventilation make a small footprint work far harder.'
      },
      {
        title: 'Styling',
        body: 'Tile, fixtures, and vanity choices set the tone for the most-used room in the house.'
      },
      {
        title: 'Easy and fast',
        body: 'Cosmetic refreshes finish in under a week. A full gut runs three to six weeks.'
      }
    ],
    galleryTitle: 'Explore the possibilities',
    styles: homeStyles,
    galleryImages: bathroomImages,
    featuredService: 'Shower install',
    featuredCost: '$10,000 - $15,000',
    quoteTitle: 'Your dream bathroom starts with a zip code',
    bandImage: bathroomImages[1]!,
    testimonials: [
      {
        quote:
          'The pros we were matched with were upfront about cost and timeline. Our bathroom renovation came in on budget and exceeded expectations completely.',
        name: 'Mike R.',
        location: 'Denver, CO'
      },
      {
        quote:
          'Three quotes in two days, all itemized. Picking a contractor stopped feeling like a gamble.',
        name: 'Dana P.',
        location: 'Austin, TX'
      },
      {
        quote:
          'They caught a hidden leak behind the old tub before tiling. That alone paid for the whole service.',
        name: 'Yusuf A.',
        location: 'Columbus, OH'
      }
    ]
  },

  kitchen: {
    noun: 'kitchen',
    heroTitle: 'Kitchen remodel, built around how you cook',
    heroSubtitle:
      'Work with contractors who plan the layout before the first cabinet is ordered, then finish on schedule.',
    heroImage: kitchenImages[0]!,
    servicesTitle: 'Kitchen remodel services',
    servicesSubtitle: 'From a cabinet reface to a full gut, start with the work closest to your plan.',
    serviceImages: kitchenImages,
    stepsTitle: 'From quotes to clean-up',
    stepsSubtitle: 'Three steps between the idea and the first day on site.',
    stepsImage: teamImage,
    zipTitle: 'Your dream kitchen starts with a zip code',
    benefitsTitle: 'Make the right call for your kitchen',
    benefitsSubtitle: 'Cabinetry drives half the budget, so the planning matters more than the shopping.',
    benefits: [
      { title: 'Added value', body: 'Kitchen work consistently ranks among the highest cost-recouped projects.' },
      { title: 'Maximize functionality', body: 'A working triangle, deep drawers, and real task lighting.' },
      { title: 'Styling', body: 'Cabinet fronts, counters, and hardware carry the whole room.' },
      { title: 'Honest lead times', body: 'Custom cabinetry runs 8-12 weeks. Good contractors say so up front.' }
    ],
    galleryTitle: 'Explore the possibilities',
    styles: homeStyles,
    galleryImages: kitchenImages,
    featuredService: 'Cabinet refacing',
    featuredCost: '$4,000 - $10,000',
    quoteTitle: 'Your dream kitchen starts with a zip code',
    bandImage: kitchenImages[1]!,
    testimonials: [
      {
        quote:
          'Our contractor sequenced electrical, plumbing, and countertop templating so nothing sat idle. Six weeks start to finish.',
        name: 'Carla M.',
        location: 'Portland, OR'
      },
      {
        quote: 'We compared refacing against full replacement with real numbers instead of a sales pitch.',
        name: 'Tom B.',
        location: 'Naperville, IL'
      },
      {
        quote: 'Every quote was itemized. No surprise change orders once demo started.',
        name: 'Priya S.',
        location: 'Raleigh, NC'
      }
    ]
  },

  roofing: {
    noun: 'roof',
    heroTitle: 'Roof repair and replacement, done before the next storm',
    heroSubtitle:
      'Licensed and insured roofers for leaks, storm damage, and full tear-off replacements, with documentation your adjuster will accept.',
    heroImage: roofingImages[0]!,
    servicesTitle: 'Roofing services',
    servicesSubtitle: 'Not sure whether it is a repair or a replacement? Start with an inspection.',
    serviceImages: roofingImages,
    stepsTitle: 'From inspection to clean-up',
    stepsSubtitle: 'Three steps between the first leak and a finished roof.',
    stepsImage: teamImage,
    zipTitle: 'Your new roof starts with a zip code',
    benefitsTitle: 'Make the right call for your roof',
    benefitsSubtitle: 'The difference between a good roof and a bad one is hidden until it rains.',
    benefits: [
      { title: 'Protect the structure', body: 'Rotten decking gets found and priced before the crew starts.' },
      { title: 'Certified installation', body: 'Manufacturer-certified crews unlock longer material warranties.' },
      { title: 'Insurance documentation', body: 'Photo reports and scope sheets adjusters actually accept.' },
      { title: 'Fast turnaround', body: 'Most asphalt shingle replacements finish in one to three days.' }
    ],
    galleryTitle: 'Explore roofing materials',
    styles: ['Asphalt Shingle', 'Standing Seam Metal', 'Clay Tile', 'Slate', 'Cedar Shake', 'Flat / TPO'],
    galleryImages: roofingImages,
    featuredService: 'Shingle replacement',
    featuredCost: '$9,000 - $22,000',
    quoteTitle: 'Your new roof starts with a zip code',
    bandImage: roofingImages[1]!,
    testimonials: [
      {
        quote:
          'After the hail storm we had a full photo report in 48 hours. The claim went through without a fight.',
        name: 'Greg L.',
        location: 'Oklahoma City, OK'
      },
      {
        quote: 'Tear-off, new decking where it was needed, and cleanup so thorough I could not find a nail.',
        name: 'Alicia W.',
        location: 'Kansas City, MO'
      },
      {
        quote: 'They talked me out of a full replacement I did not need. That earned the repair job.',
        name: 'Dennis F.',
        location: 'Tampa, FL'
      }
    ]
  },

  flooring: {
    noun: 'floors',
    heroTitle: 'New floors, installed by specialists',
    heroSubtitle:
      'Hardwood, luxury vinyl, tile, laminate, and carpet, installed over a subfloor that was actually prepped.',
    heroImage: flooringImages[0]!,
    servicesTitle: 'Flooring services',
    servicesSubtitle: 'Choose a material and we will match installers who work with it daily.',
    serviceImages: flooringImages,
    stepsTitle: 'From samples to clean-up',
    stepsSubtitle: 'Three steps between choosing a material and walking on it.',
    stepsImage: teamImage,
    zipTitle: 'Your new floors start with a zip code',
    benefitsTitle: 'Make the right call for your floors',
    benefitsSubtitle: 'Most flooring failures trace back to prep, not to the material.',
    benefits: [
      { title: 'Subfloor prep', body: 'Flat, dry, sound subfloors prevent squeaks, gaps, and cupping later.' },
      { title: 'Acclimation', body: 'Hardwood and laminate need days on-site before install in your humidity.' },
      { title: 'Clean transitions', body: 'Thresholds, reducers, and shoe molding are what make it look finished.' },
      { title: 'Fast install', body: 'A typical crew covers over 1,000 sq ft in a single day.' }
    ],
    galleryTitle: 'Explore the possibilities',
    styles: ['Wide Plank', 'Herringbone', 'Luxury Vinyl', 'Porcelain Tile', 'Engineered Wood', 'Carpet'],
    galleryImages: flooringImages,
    featuredService: 'Luxury vinyl plank',
    featuredCost: '$5 - $12 / sq ft',
    quoteTitle: 'Your new floors start with a zip code',
    bandImage: flooringImages[1]!,
    testimonials: [
      {
        quote: 'They flagged a slab that needed leveling before quoting. Every other bidder skipped that step.',
        name: 'Renee T.',
        location: 'Phoenix, AZ'
      },
      {
        quote: 'Twelve hundred square feet of luxury vinyl in two days, furniture moved and put back.',
        name: 'Owen K.',
        location: 'Charlotte, NC'
      },
      {
        quote: 'The herringbone layout is flawless. Every transition lines up.',
        name: 'Marta D.',
        location: 'Chicago, IL'
      }
    ]
  },

  windows: {
    noun: 'windows',
    heroTitle: 'Replacement windows that cut your energy bill',
    heroSubtitle:
      'Full-frame and insert replacements in custom sizes, installed and flashed so they stay dry for decades.',
    heroImage: windowImages[0]!,
    servicesTitle: 'Window services',
    servicesSubtitle: 'Replacing a few units or the whole house? Start here.',
    serviceImages: windowImages,
    stepsTitle: 'From measure to clean-up',
    stepsSubtitle: 'Three steps between a drafty window and a sealed one.',
    stepsImage: teamImage,
    zipTitle: 'Your new windows start with a zip code',
    benefitsTitle: 'Make the right call for your windows',
    benefitsSubtitle: 'The glass package matters more than the brand name on the frame.',
    benefits: [
      { title: 'Lower energy bills', body: 'Sealed, modern units can cut heating and cooling costs by up to 30%.' },
      { title: 'Full-frame vs insert', body: 'Inserts install faster; full-frame is required when the frame is rotted.' },
      { title: 'Rebate eligible', body: 'ENERGY STAR rated units may qualify for federal tax credits.' },
      { title: 'Fast install', body: 'A whole-home replacement usually wraps in two to three days.' }
    ],
    galleryTitle: 'Explore the possibilities',
    styles: ['Double Hung', 'Casement', 'Sliding', 'Bay & Bow', 'Picture', 'Awning'],
    galleryImages: windowImages,
    featuredService: 'Double-hung insert',
    featuredCost: '$450 - $900 each',
    quoteTitle: 'Your new windows start with a zip code',
    bandImage: windowImages[1]!,
    testimonials: [
      {
        quote: 'Fourteen windows in three days. The draft in the back bedroom is simply gone.',
        name: 'Hannah J.',
        location: 'Minneapolis, MN'
      },
      {
        quote: 'They walked me through the glass options and which ones qualified for the tax credit.',
        name: 'Victor N.',
        location: 'Sacramento, CA'
      },
      {
        quote: 'Two of the openings had rot. They priced the full-frame fix honestly instead of hiding it.',
        name: 'Sheila G.',
        location: 'Buffalo, NY'
      }
    ]
  },

  siding: {
    noun: 'siding',
    heroTitle: 'Siding that protects and transforms your exterior',
    heroSubtitle:
      'Vinyl, fiber cement, wood, and stone veneer, installed over proper house wrap with flashing that actually sheds water.',
    heroImage: sidingImages[0]!,
    servicesTitle: 'Siding services',
    servicesSubtitle: 'Repair a single elevation or re-side the whole house.',
    serviceImages: sidingImages,
    stepsTitle: 'From tear-off to clean-up',
    stepsSubtitle: 'Three steps between a tired exterior and a finished one.',
    stepsImage: teamImage,
    zipTitle: 'Your new siding starts with a zip code',
    benefitsTitle: 'Make the right call for your siding',
    benefitsSubtitle: 'Most siding failures start at the openings, not in the field.',
    benefits: [
      { title: 'Highest resale return', body: 'Fiber cement siding consistently ranks top-three for cost recouped.' },
      { title: 'Weather-resistive barrier', body: 'House wrap and seam tape go on before any panel is hung.' },
      { title: 'Flashing at openings', body: 'Head and pan flashing around windows is where failures begin.' },
      { title: 'Decades of life', body: 'Vinyl runs 20-40 years; fiber cement 30-50 with periodic repainting.' }
    ],
    galleryTitle: 'Explore the possibilities',
    styles: exteriorStyles,
    galleryImages: sidingImages,
    featuredService: 'Fiber cement siding',
    featuredCost: '$9 - $18 / sq ft',
    quoteTitle: 'Your new siding starts with a zip code',
    bandImage: sidingImages[1]!,
    testimonials: [
      {
        quote: 'They tore off instead of going over the old siding and found rot we never would have caught.',
        name: 'Brian O.',
        location: 'Grand Rapids, MI'
      },
      {
        quote: 'The house looks like a different property. Neighbors keep asking who did it.',
        name: 'Lena C.',
        location: 'Nashville, TN'
      },
      {
        quote: 'Clear per-square-foot pricing meant I could compare bids apples to apples.',
        name: 'Andre W.',
        location: 'Baltimore, MD'
      }
    ]
  },

  gutters: {
    noun: 'gutters',
    heroTitle: 'Gutters that move water away from your foundation',
    heroSubtitle:
      'Seamless gutter installation, guards, downspout extensions, repairs, and cleaning, usually finished in a single day.',
    heroImage: gutterImages[0]!,
    servicesTitle: 'Gutter services',
    servicesSubtitle: 'Install, repair, guard, or clean. Pick one to start.',
    serviceImages: gutterImages,
    stepsTitle: 'From measure to clean-up',
    stepsSubtitle: 'Three steps between overflowing gutters and a dry foundation.',
    stepsImage: teamImage,
    zipTitle: 'Your new gutters start with a zip code',
    benefitsTitle: 'Make the right call for your gutters',
    benefitsSubtitle: 'A small job whose failure shows up as a very large foundation bill.',
    benefits: [
      { title: 'Protect the foundation', body: 'Downspouts must discharge four to six feet from the house.' },
      { title: 'Correct sizing', body: 'Large roof areas need 6-inch K-style gutters, not the standard 5-inch.' },
      { title: 'Pitch and hangers', body: 'Proper slope and hangers every 24 inches prevent sagging and pooling.' },
      { title: 'One-day install', body: 'Seamless runs are formed on-site and hung the same day.' }
    ],
    galleryTitle: 'Explore the possibilities',
    styles: ['K-Style', 'Half Round', 'Box Gutter', 'Copper', 'Aluminum', 'Guards'],
    galleryImages: gutterImages,
    featuredService: 'Seamless aluminum',
    featuredCost: '$8 - $18 / linear ft',
    quoteTitle: 'Your new gutters start with a zip code',
    bandImage: gutterImages[1]!,
    testimonials: [
      {
        quote: 'Formed on site, hung, and cleaned up before lunch. The basement seepage stopped that season.',
        name: 'Paul H.',
        location: 'Cleveland, OH'
      },
      {
        quote: 'They sized up to six-inch gutters for our roof area instead of matching what was there.',
        name: 'Nina R.',
        location: 'Seattle, WA'
      },
      {
        quote: 'Guards cut my cleaning down to once a year under heavy oak cover.',
        name: 'Curtis B.',
        location: 'Atlanta, GA'
      }
    ]
  }
};

const fallbackContent: CategoryContent = {
  noun: 'project',
  heroTitle: 'Home improvement, done right, on time',
  heroSubtitle: 'Find licensed, vetted pros who show up, do the work, and leave the space better than they found it.',
  heroImage: img('photo-1600607687939-ce8a6c25118c'),
  servicesTitle: 'Services',
  servicesSubtitle: 'Pick the work you have in mind and we will match you with specialists who do it every day.',
  serviceImages: sidingImages,
  stepsTitle: 'From quotes to clean-up',
  stepsSubtitle: 'Three steps between the idea and the first day on site.',
  stepsImage: teamImage,
  zipTitle: 'Your dream project starts with a zip code',
  benefitsTitle: 'Make the right call for your home',
  benefitsSubtitle: 'Every contractor in the network is licensed, insured, and reviewed.',
  benefits: [
    { title: 'Added value', body: 'Well-chosen projects return a meaningful share of their cost at resale.' },
    { title: 'Vetted professionals', body: 'License and insurance checked before a contractor joins the network.' },
    { title: 'Compare real quotes', body: 'Itemized estimates from multiple pros, side by side.' },
    { title: 'No obligation', body: 'Free to use, and you are never locked into a contractor.' }
  ],
  galleryTitle: 'Explore the possibilities',
  styles: homeStyles,
  galleryImages: sidingImages,
  featuredService: 'Popular project',
  featuredCost: '$3,000 - $12,000',
  quoteTitle: 'Your dream project starts with a zip code',
  bandImage: img('photo-1600566752355-35792bedcfea'),
  testimonials: [
    {
      quote: 'Three quotes in two days, all itemized. Picking a contractor stopped feeling like a gamble.',
      name: 'Dana P.',
      location: 'Austin, TX'
    },
    {
      quote: 'The pros we were matched with were upfront about cost and timeline from the first call.',
      name: 'Mike R.',
      location: 'Denver, CO'
    },
    {
      quote: 'Everything was documented in writing before anyone started work.',
      name: 'Priya S.',
      location: 'Raleigh, NC'
    }
  ]
};

export const getCategoryContent = (key?: string): CategoryContent => {
  if (!key) return fallbackContent;
  return categoryContent[slugify(key)] ?? fallbackContent;
};
