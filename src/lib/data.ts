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

export type Doctor = {
  name: string;
  role: string;
  img: string;
  rating: string;
  description?: string;
  practoUrl?: string;
};

export const DOCTORS: Record<string, Doctor[]> = {
  Dentist: [
    {
      name: 'Dr. Seema Rathod',
      role: 'Endodontist · Cosmetic Dentist',
      img: '/doctors/seema.jpg',
      rating: '4.9',
      description:
        'MDS — Conservative Dentistry & Endodontics, BDS. 19 years experience.\nSpecialist in root-canal treatment, aesthetic restorations, and smile design.',
      practoUrl: ''
    },
    {
      name: 'Dr. Isha Shaikh',
      role: 'Periodontist · Implantologist',
      img: '/doctors/isha.jpg',
      rating: '4.8',
      description:
        'BDS, MDS — Periodontics. 5 years experience.\nDental Surgeon focused on gum health, dental implants, and periodontal care.',
      practoUrl: ''
    },
    {
      name: 'Dr. Sujay Patil',
      role: 'General & Restorative Dentist',
      img: '/doctors/sujay.jpg',
      rating: '4.8',
      description:
        'BDS. General dentistry — cleanings, fillings, crowns, and preventive care.\nKnown for a calm chairside manner and gentle, patient-first approach.',
      practoUrl: ''
    },
    {
      name: 'Dr. Sayed Shibli',
      role: 'Orthodontist',
      img: '/doctors/shibli.jpg',
      rating: '4.9',
      description:
        'Orthodontist — clear aligners, braces, and bite correction.\nTreats crowding, spacing, and jaw alignment for teens and adults.',
      practoUrl: ''
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
