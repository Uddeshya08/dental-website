// Default content — mirrors design prototype. Overridable per-section via Builder.io.

export const IMG = {
  smile: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=900&q=70',
  exam: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=70',
  clinic: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=70',
  xray: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=70',
  brushes: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=70',
  aligner: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=70',
  implant: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=900&q=70',
  chair: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=900&q=70',
  manPortrait: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=400&q=70',
  dentistF: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=70',
  dentistM: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=70',
  doctorM: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=70',
  womanBiz: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=70'
};

export type Service = {
  slug: string;
  name: string;
  category: 'Preventive' | 'Cosmetic' | 'Restorative' | 'Specialty';
  icon: string;
  image: string;
  blurb: string;
  points: string[];
  price: string;
};

export const SERVICES: Service[] = [
  { slug:'preventive', name:'General & Preventive', category:'Preventive', icon:'✚', image:IMG.brushes, blurb:'Cleanings, exams and check-ups that keep problems small — or gone before they start.', points:['Comprehensive exam & X-rays','Professional cleaning','Personalised home-care plan'], price:'From $89' },
  { slug:'cosmetic', name:'Cosmetic Dentistry', category:'Cosmetic', icon:'✦', image:IMG.smile, blurb:'Veneers, bonding and smile design to give you a look that feels like you — only brighter.', points:['Porcelain veneers','Composite bonding','Digital smile preview'], price:'Consult free' },
  { slug:'whitening', name:'Teeth Whitening', category:'Cosmetic', icon:'✧', image:IMG.xray, blurb:'In-chair and take-home whitening that lifts years of stains in a single, comfortable session.', points:['Same-day results','Enamel-safe formula','Custom trays included'], price:'From $199' },
  { slug:'implants', name:'Dental Implants', category:'Restorative', icon:'◉', image:IMG.implant, blurb:'Permanent, natural-feeling replacements for missing teeth — planned in 3D for precision.', points:['3D-guided placement','Single tooth to full arch','Lifetime-focused materials'], price:'From $1,900' },
  { slug:'ortho', name:'Orthodontics & Aligners', category:'Specialty', icon:'◈', image:IMG.aligner, blurb:'Clear aligners and modern braces that straighten discreetly, on a timeline that fits your life.', points:['Clear aligner scans','Progress tracking','Retainers included'], price:'From $2,400' },
  { slug:'emergency', name:'Emergency Dental Care', category:'Specialty', icon:'⚡', image:IMG.exam, blurb:'Chipped, aching or knocked-out? Same-day emergency slots so you are never left in pain.', points:['Same-day appointments','Pain-first approach','Evenings & Saturdays'], price:'From $120' }
];

export const POPULAR = [
  { name:'Therapeutic Dentistry', image: IMG.aligner, price:'From $80', category:'Therapeutic', slug:'preventive' },
  { name:'Teeth Whitening', image: IMG.smile, price:'From $120', category:'Cosmetic', slug:'whitening' },
  { name:'Dental Implants', image: IMG.implant, price:'From $500', category:'Restorative', slug:'implants' },
  { name:'Dental Surgery', image: IMG.exam, price:'From $2000', category:'Surgical', slug:'emergency' }
];

export const HERO_STATS = [
  { value:'15+', label:'Years of care' },
  { value:'12k', label:'Happy patients' },
  { value:'4.9★', label:'Average rating' }
];

export const TRUST = [
  { mark:'✚', label:'Same-week visits' },
  { mark:'$', label:'Insurance friendly' },
  { mark:'◎', label:'Painless promise' },
  { mark:'★', label:'Award-winning team' }
];

export const ABOUT_COLS = [
  { n:'01', title:'Experienced Dentists', body:'Our team is composed of highly qualified and compassionate dental professionals with years of hands-on experience.', icon:'❋' },
  { n:'02', title:'Advanced Technology', body:'We invest in the latest dental technology — from digital X-rays to laser treatments — ensuring every procedure is faster, safer, and more comfortable.', icon:'◗' },
  { n:'03', title:'Flexible Scheduling', body:'We understand that visiting the dentist can be stressful for many. That’s why our clinic is designed with your comfort in mind.', icon:'✳' }
];

export const JOURNEY = [
  { n:'01', title:'Schedule Your First Visit', body:'Easy online booking or call us directly to find the perfect time.' },
  { n:'02', title:'Comprehensive Consultation', body:'Our experts assess your needs and customize a dental care plan.' },
  { n:'03', title:'Personalized Treatment', body:'Receive gentle, professional treatment with cutting-edge technology.' },
  { n:'04', title:'Ongoing Care & Follow-Up', body:'We ensure your smile stays bright with regular checkups and support.' }
];

export type DoctorReview = { name: string; meta?: string; rating: number; quote: string };
export type DoctorSpecialty = { icon: string; title: string; body: string };

export type Doctor = {
  slug?: string;
  name: string;
  role: string;
  img: string;
  rating: string;
  description?: string;
  practoUrl?: string;
  pronoun?: 'he' | 'she' | 'they';
  bio?: string[];
  qualifications?: string[];
  experience?: string;
  specialties?: DoctorSpecialty[];
  reviews?: DoctorReview[];
};

export const DOCTORS: Record<string, Doctor[]> = {
  Dentist: [
    {
      slug: 'seema-rathod',
      pronoun: 'she',
      name: 'Dr. Seema Rathod',
      role: 'Endodontist',
      img: '/doctors/seema.jpg',
      rating: '4.9',
      description:
        'MDS — Conservative Dentistry & Endodontics, BDS. 20+ years experience.\nRetreatment Specialist — 15,000+ root canals with advanced dental microscopy.',
      practoUrl: '',
      experience: '20+ years',
      qualifications: [
        'MDS — Conservative Dentistry & Endodontics',
        'BDS — Bharati Vidyapeeth Dental College, Pune',
        'Member — Style Italiano (International)',
        'Former Assistant Professor — Bharati Vidyapeeth, Navi Mumbai'
      ],
      bio: [
        'Dr. Seema Rathod is a distinguished Endodontist with over 20 years of clinical excellence and an MDS in Conservative Dentistry & Endodontics from Bharati Vidyapeeth Dental College, Pune. Recognized as a Retreatment Specialist in West Pune, she has successfully performed 15,000+ root canal treatments and is highly regarded for managing complex and previously failed root canal cases with exceptional precision using advanced dental microscopy, helping patients preserve their natural teeth even in the most challenging situations.',
        'Complementing her extensive clinical expertise, Dr. Rathod has also served as an Assistant Professor at Bharati Vidyapeeth Dental College, Navi Mumbai, where she mentored aspiring dental professionals and contributed to academic excellence. Her professional journey includes treating cancer patients at the Advanced Centre for Treatment, Research and Education in Cancer (ACTREC), Navi Mumbai, as well as providing dental care and patient counseling at Taloja Central Jail.',
        'A respected speaker and educator, Dr. Rathod has been invited twice as a guest speaker at the National Diabetes Conference and is a proud member of the internationally acclaimed Style Italiano group, reflecting her commitment to innovation, precision, and excellence in modern endodontics and esthetic dentistry.'
      ],
      specialties: [
        { icon: '◉', title: 'Root Canal Treatment', body: '15,000+ successful RCTs. Painless, precise, single-sitting where possible.' },
        { icon: '⟲', title: 'Retreatment Specialist', body: 'Fixes previously failed root canals — saves teeth others recommend extracting.' },
        { icon: '🔬', title: 'Dental Microscopy', body: 'Advanced magnification for complex cases — visualises what the naked eye misses.' },
        { icon: '✦', title: 'Cosmetic & Esthetic Dentistry', body: 'Style Italiano-trained restorations, veneers, and smile design.' },
        { icon: '❋', title: 'Conservative Dentistry', body: 'Preserves natural tooth structure with minimally invasive treatment planning.' },
        { icon: '🎓', title: 'Academic & Speaker', body: 'Former Assistant Professor. Twice guest speaker at the National Diabetes Conference.' }
      ],
      reviews: [
        { name: 'Rohit S.', meta: 'RCT patient · 2 months ago', rating: 5, quote: 'I had a failed root canal from another clinic — Dr. Seema saved the tooth. Painless, precise, and she explained every step.' },
        { name: 'Anita M.', meta: 'Cosmetic restoration', rating: 5, quote: 'The whole team is kind, but Dr. Rathod is next-level. My front tooth looks completely natural.' },
        { name: 'Kaustubh P.', meta: 'Retreatment · 5 months ago', rating: 5, quote: 'Two other dentists told me to extract. She did a microscope retreatment and I still have my tooth. Highly recommend.' }
      ]
    },
    {
      slug: 'isha-shaikh',
      pronoun: 'she',
      name: 'Dr. Isha Sheikh',
      role: 'Periodontist · Implantologist',
      img: '/doctors/isha.jpg',
      rating: '4.8',
      description:
        'MDS — Periodontology & Implantology. 5+ years experience.\nAssociate Periodontist — gum disease, laser therapy, and dental implants.',
      practoUrl: '',
      experience: '5+ years',
      qualifications: [
        'MDS — Periodontology & Implantology',
        'Fellowship — General Dentistry',
        'Certified — CBCT Interpretation',
        'Certified — Laser Dentistry & Implant Dentistry'
      ],
      bio: [
        'Dr. Isha Sheikh, MDS (Periodontology & Implantology), is an Associate Periodontist at Dentheal Family Clinic with over 5 years of clinical experience in comprehensive dental care. She specializes in the prevention and treatment of gum diseases, periodontal surgeries, laser therapy, regenerative procedures, soft tissue management, and dental implants.',
        'She has completed a Fellowship Program in General Dentistry and has undergone certified training in CBCT interpretation, Laser Dentistry, and Implant Dentistry. Dr. Isha is committed to delivering evidence-based, personalized care with a focus on precision, patient comfort, and long-term oral health. Her dedication to continuous learning and ethical clinical practice enables her to provide high-quality periodontal care using modern techniques.'
      ],
      specialties: [
        { icon: '❋', title: 'Gum Disease Treatment', body: 'Prevention and treatment of gingivitis and periodontitis — protects teeth long-term.' },
        { icon: '◈', title: 'Periodontal Surgery', body: 'Advanced surgical care for deep gum issues, pocket reduction, and gum grafting.' },
        { icon: '✧', title: 'Laser Dentistry', body: 'Minimally invasive laser therapy — less pain, faster healing, no scalpel.' },
        { icon: '◉', title: 'Dental Implants', body: 'Single tooth to multi-implant placement with precision CBCT-guided planning.' },
        { icon: '⟳', title: 'Regenerative Procedures', body: 'Bone and soft-tissue grafting to rebuild what disease has taken away.' },
        { icon: '🔬', title: 'CBCT-Guided Planning', body: '3D imaging for accurate diagnosis and surgical precision on every case.' }
      ],
      reviews: [
        { name: 'Meera J.', meta: 'Gum treatment · 3 months ago', rating: 5, quote: 'Dr. Isha caught my gum issue before it turned into something bigger. Painless laser treatment and now my gums are healthy.' },
        { name: 'Vikram T.', meta: 'Implant patient', rating: 5, quote: 'She explained the CBCT scan clearly and the implant placement was smooth. Six months later it feels like my own tooth.' },
        { name: 'Sneha R.', meta: 'Regenerative procedure', rating: 5, quote: 'Very patient, very thorough. She takes time to answer every question — no rushing.' }
      ]
    },
    {
      slug: 'sujay-patil',
      pronoun: 'he',
      name: 'Dr. Sujay Patil',
      role: 'Oral & Maxillofacial Surgeon',
      img: '/doctors/sujay.jpg',
      rating: '4.9',
      description:
        'MDS — Oral & Maxillofacial Surgery. 15+ years experience.\nVisiting Consultant · 9,000+ extractions and oral surgical procedures.',
      practoUrl: '',
      experience: '15+ years',
      qualifications: [
        'MDS — Oral & Maxillofacial Surgery (2016)',
        'Reputed Dental College, Pune',
        'Visiting Consultant — Dentheal (since 2020)',
        '9,000+ successful extractions & surgeries'
      ],
      bio: [
        'Dr. Sujay, MDS (Oral & Maxillofacial Surgery), is a Visiting Consultant Oral & Maxillofacial Surgeon associated with our clinic since 2020. With over 15 years of clinical experience, he brings advanced expertise in the diagnosis and surgical management of complex conditions involving the mouth, jaws, face, and neck.',
        'He completed his Master of Dental Surgery (MDS) in Oral & Maxillofacial Surgery in 2016 from a reputed dental college in Pune. His areas of specialization include impacted wisdom tooth surgeries, facial trauma management, corrective jaw (orthognathic) surgery, oral pathology, craniofacial deformities, and advanced oral surgical procedures. Dr. Sujay has successfully performed 9,000+ extractions and oral surgical procedures, reflecting his extensive surgical experience and clinical excellence.',
        'He is committed to comprehensive patient care through precise diagnosis, individualized treatment planning, and meticulous pre- and post-operative management. Known for his calm demeanor and patient-centric approach, he emphasizes safe, evidence-based treatment with a focus on patient comfort and optimal outcomes. His dedication to clinical excellence and ethical practice makes him a trusted choice for patients requiring specialized oral and maxillofacial surgical care.'
      ],
      specialties: [
        { icon: '◆', title: 'Wisdom Tooth Surgery', body: 'Impacted wisdom tooth removal — precise, comfortable, minimal downtime.' },
        { icon: '⚡', title: 'Facial Trauma', body: 'Fracture management and reconstruction after facial injuries.' },
        { icon: '◈', title: 'Corrective Jaw Surgery', body: 'Orthognathic surgery for jaw alignment, bite correction, and facial symmetry.' },
        { icon: '🔬', title: 'Oral Pathology', body: 'Diagnosis and surgical treatment of oral lesions, cysts, and tumors.' },
        { icon: '◉', title: 'Craniofacial Deformities', body: 'Complex reconstructive procedures for congenital or acquired deformities.' },
        { icon: '❋', title: 'Advanced Oral Surgery', body: 'Full range of oral surgical procedures with meticulous pre- and post-op care.' }
      ],
      reviews: [
        { name: 'Rahul K.', meta: 'Wisdom tooth extraction', rating: 5, quote: 'Was terrified before the surgery. Dr. Sujay was calm, clear, and it was over before I knew it. Zero swelling next day.' },
        { name: 'Priya D.', meta: 'Facial trauma follow-up', rating: 5, quote: 'After my accident, he handled the reconstruction beautifully. Barely any scar and full function back.' },
        { name: 'Amit S.', meta: 'Orthognathic surgery', rating: 5, quote: 'Complete change in my bite and profile. His planning was so thorough — I knew every step in advance.' }
      ]
    },
    {
      slug: 'sayed-shibli',
      pronoun: 'he',
      name: 'Dr. Shibli Syed',
      role: 'Orthodontist',
      img: '/doctors/shibli.jpg',
      rating: '4.9',
      description:
        'MDS — Orthodontics & Dentofacial Orthopaedics. Braces, aligners, cosmetic & implant dentistry.\nMember IDA & Indian Orthodontic Society.',
      practoUrl: '',
      experience: '15+ years',
      qualifications: [
        'MDS — Orthodontics & Dentofacial Orthopaedics (MUHS Nashik, 2013)',
        'BDS — MUHS Nashik (2008)',
        'Member — Indian Dental Association',
        'Member — Indian Orthodontic Society',
        'Published in peer-reviewed journals'
      ],
      bio: [
        'Dr. Shibli Syed grew up in Amravati (Maharashtra) and obtained his BDS Degree from Maharashtra University Of Health Sciences, Nasik in 2008. After graduating, he embarked on a mission to escalate his knowledge by actively participating in various continuing dental education programmes. After a year of training in a high-profile Cosmetic Dental Practice in Pune, he has never looked back. He has worked in numerous private practices in Pune.',
        'Dr. Shibli was committed to advancing studies in the area of dentistry that he is passionate about — Orthodontics, Cosmetic and Implant Dentistry. In 2010 he started his higher studies for Masters in Orthodontics And Dentofacial Orthopaedics and obtained his MDS degree from Maharashtra University Of Health Sciences, Nashik in 2013.',
        'He is also a member of the Indian Dental Association & Indian Orthodontic Society, and has various publications in dental journals — reflecting his commitment to research, learning, and elevating the standard of orthodontic care in Pune.'
      ],
      specialties: [
        { icon: '◈', title: 'Braces (Metal & Ceramic)', body: 'Traditional and tooth-coloured braces for crowding, spacing, and bite correction.' },
        { icon: '✧', title: 'Clear Aligners', body: 'Discreet aligner therapy — straighten teeth without visible brackets or wires.' },
        { icon: '◆', title: 'Dentofacial Orthopaedics', body: 'Growth-modulating treatment for children and teens — guides jaw development early.' },
        { icon: '✦', title: 'Cosmetic Dentistry', body: 'Smile design, veneers, and aesthetic finishing to complement orthodontic work.' },
        { icon: '◉', title: 'Implant Dentistry', body: 'Implant placement and restoration for missing teeth in adult patients.' },
        { icon: '🎓', title: 'Published Researcher', body: 'Peer-reviewed publications and continuing education leader in orthodontics.' }
      ],
      reviews: [
        { name: 'Ananya P.', meta: 'Ceramic braces · 18 months', rating: 5, quote: 'Perfect result. He mapped out the whole plan on day one and stuck to it. My teeth are exactly where he said they would be.' },
        { name: 'Karan M.', meta: 'Clear aligners', rating: 5, quote: 'Loved that no one could tell I was in treatment. Weekly check-ins were quick and he adjusted the plan when needed.' },
        { name: 'Deepika T.', meta: "Parent of teen patient", rating: 5, quote: 'My daughter was nervous about braces. Dr. Shibli was gentle and honest with her. She actually enjoys her appointments.' }
      ]
    }
  ]
};

export const TESTIMONIALS = [
  { quote:'I actually used to dread the dentist. Now I look forward to it — that says everything.', name:'Priya M.', meta:'Patient · 3 years', avatar:IMG.womanBiz },
  { quote:'They explained every option and never once pushed me. Rare and refreshing.', name:'Daniel O.', meta:'Implant patient', avatar:IMG.manPortrait },
  { quote:'My kids ask when we’re going back. Genuinely the kindest team we’ve found.', name:'The Okafor family', meta:'Family plan', avatar:IMG.doctorM }
];

export const HOURS = [
  { days:'Monday – Tuesday', time:'9:00 AM – 7:00 PM' },
  { days:'Wednesday – Thursday', time:'9:00 AM – 7:00 PM' },
  { days:'Friday – Saturday', time:'10:00 AM – 2:00 PM' }
];

export const POSTS_TEASE = [
  { img:IMG.brushes, tag:'Prevention', title:'The 2-minute habit that saves you thousands' },
  { img:IMG.smile, tag:'Cosmetic', title:'Whitening, honestly: what actually works' },
  { img:IMG.chair, tag:'Family', title:'Making the first dental visit a happy one' }
];

export const FEATURED_POST = {
  img: IMG.exam,
  tag:'Health',
  title:'Your gums are trying to tell you something',
  excerpt:'Bleeding when you brush isn’t normal — but it is common, and almost always reversible. Here’s what’s really going on and the simple routine that fixes it.',
  author:'Dr. Elena Voss',
  date:'Jun 28, 2026'
};

export const POSTS = [
  { img:IMG.brushes, tag:'Prevention', title:'The 2-minute habit that saves you thousands', excerpt:'A quick look at why a consistent routine beats every expensive product on the shelf.', date:'Jun 20, 2026', read:'4 min read' },
  { img:IMG.smile, tag:'Cosmetic', title:'Whitening, honestly: what actually works', excerpt:'Strips, trays, in-chair — we break down the real differences and what’s safe for enamel.', date:'Jun 12, 2026', read:'6 min read' },
  { img:IMG.chair, tag:'Family', title:'Making the first dental visit a happy one', excerpt:'Small tricks that turn a scary milestone into something your child looks forward to.', date:'Jun 3, 2026', read:'5 min read' }
];

export const ABOUT_STATS = [
  { value:'15+', label:'Years open' },
  { value:'6', label:'Specialists' },
  { value:'12k', label:'Patients' },
  { value:'4.9★', label:'Rating' }
];

export const VALUES = [
  { mark:'♥', title:'Kindness first', body:'Every decision starts with how it feels to be in the chair.' },
  { mark:'◎', title:'Honesty always', body:'We recommend only what we’d choose for our own family.' },
  { mark:'✦', title:'Always improving', body:'Continuous training and the latest tech, never for its own sake.' }
];

export const TEAM = [
  { name:'Dr. Elena Voss', role:'Founder · Lead Dentist', img:IMG.dentistF },
  { name:'Dr. Marcus Reed', role:'Implants & Surgery', img:IMG.dentistM },
  { name:'Aisha Korn', role:'Orthodontic Therapist', img:IMG.womanBiz },
  { name:'Tom Baker', role:'Patient Care Lead', img:IMG.doctorM }
];

export const CLINIC = {
  brand: 'Dentheal',
  address1: '201, Royal Vatika, Next to Kannu Ki Chai',
  address2: 'Landmark: High Street Extension, Near Baner, Pune',
  phone: '+91 90966 70711',
  phoneRaw: '+919096670711',
  email: 'hello@dentheal.com'
};

export const NAV = [
  { label:'Home', href:'/' },
  { label:'Services', href:'/services' },
  { label:'About', href:'/about' },
  { label:'Blog', href:'/blog' }
];

export function findDoctorBySlug(slug: string): Doctor | undefined {
  for (const group of Object.values(DOCTORS)) {
    const found = group.find(d => d.slug === slug);
    if (found) return found;
  }
  return undefined;
}

export function allDoctorSlugs(): string[] {
  const out: string[] = [];
  for (const group of Object.values(DOCTORS)) {
    for (const d of group) if (d.slug) out.push(d.slug);
  }
  return out;
}
