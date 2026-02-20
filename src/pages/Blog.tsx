import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Εισαγωγές εικόνων
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import q1 from '../assets/images/q1.jpg';
import q2 from '../assets/images/q2.jpg';
import q3 from '../assets/images/q3.jpg';
import q4 from '../assets/images/q4.jpg';
import q5 from '../assets/images/q5.jpg';
import q6 from '../assets/images/q6.jpg';
import q7 from '../assets/images/q7.jpg';
import q8 from '../assets/images/q8.jpg';
import q9 from '../assets/images/q9.jpg';
import r1 from '../assets/images/r1.jpg';
import r2 from '../assets/images/r2.jpg';
import r3 from '../assets/images/r3.jpg';
import r4 from '../assets/images/r4.jpg';
import r5 from '../assets/images/r5.jpg';
import r6 from '../assets/images/r6.jpg';
import r7 from '../assets/images/r7.jpg';
import r8 from '../assets/images/r8.jpg';
import r9 from '../assets/images/r9.jpg';
import r10 from '../assets/images/r10.jpg';
import r11 from '../assets/images/r11.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import e1 from '../assets/images/e1.jpg';
import e2 from '../assets/images/e2.jpg';
import e3 from '../assets/images/e3.jpg';
import e4 from '../assets/images/e4.jpg';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/t9.jpg';
import t10 from '../assets/images/t10.jpg';
import ik1 from '../assets/images/ik1.jpg';
import ik2 from '../assets/images/ik2.jpg';
import ik3 from '../assets/images/ik3.jpg';
import ik4 from '../assets/images/ik4.jpg';
import b1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/b2.jpg';
import b3 from '../assets/images/b3.jpg';
import b4 from '../assets/images/b4.jpg';
import i11 from '../assets/images/11.jpg';
import i22 from '../assets/images/22.jpg';
import i33 from '../assets/images/33.jpg';
import i44 from '../assets/images/44.jpg';
import i55 from '../assets/images/55.jpg';
import i66 from '../assets/images/66.jpg';
import i77 from '../assets/images/77.jpg';
import i88 from '../assets/images/88.jpg';
import s1 from '../assets/images/s1.jpg';
import s2 from '../assets/images/s2.jpg';
import s3 from '../assets/images/s3.jpg';
import s4 from '../assets/images/s4.jpg';
import z from '../assets/images/z.jpg';
import x from '../assets/images/x.jpg';
import c from '../assets/images/c.jpg';
import v from '../assets/images/v.jpg';
import b from '../assets/images/b.jpg';
import n from '../assets/images/n.jpg';
import m from '../assets/images/m.jpg';
import VelvetSkins2 from '../assets/images/VelvetSkins2.jpg';
import VelvetSkins3 from '../assets/images/VelvetSkins3.jpg';
import VelvetSkins4 from '../assets/images/VelvetSkins4.jpg';
import VelvetSkins5 from '../assets/images/VelvetSkins5.jpg';
import VelvetSkins6 from '../assets/images/VelvetSkins6.jpg';
import VelvetSkins7 from '../assets/images/VelvetSkins7.jpg';
import VelvetSkins8 from '../assets/images/VelvetSkins8.jpg';
import VelvetSkins9 from '../assets/images/VelvetSkins9.jpg';
import VelvetSkins10 from '../assets/images/VelvetSkins10.jpg';
import VelvetSkins11 from '../assets/images/VelvetSkins11.jpg';
import VelvetSkins12 from '../assets/images/VelvetSkins12.jpg';
import VelvetSkins13 from '../assets/images/VelvetSkins13.jpg';
import businessResidentialRenovation1 from '../assets/images/business_residential_renovation.jpg';
import businessResidentialRenovation2 from '../assets/images/business_residential_renovation2.jpg';
import businessResidentialRenovation3 from '../assets/images/business_residential_renovation3.jpg';
import businessResidentialRenovation4 from '../assets/images/business_residential_renovation4.jpg';
import businessResidentialRenovation5 from '../assets/images/business_residential_renovation5.jpg';
import businessResidentialRenovation6 from '../assets/images/business_residential_renovation6.jpg';
import businessResidentialRenovation7 from '../assets/images/business_residential_renovation7.jpg';
import businessResidentialRenovation8 from '../assets/images/business_residential_renovation8.jpg';
import businessResidentialRenovation9 from '../assets/images/business_residential_renovation9.jpg';
import businessResidentialRenovation10 from '../assets/images/business_residential_renovation10.jpg';
import businessResidentialRenovation11 from '../assets/images/business_residential_renovation11.jpg';
import houseInParaliaArogi1 from '../assets/images/house_in_Paralia_Arogi.jpg';
import houseInParaliaArogi2 from '../assets/images/house_in_Paralia_Arogi2.jpg';
import houseInParaliaArogi3 from '../assets/images/house_in_Paralia_Arogi3.jpg';
import houseAtArogiRodopi from '../assets/images/house_at_Arogi_Rodopi.jpg';
import houseAtArogiRodopi2 from '../assets/images/house_at_Arogi_Rodopi2.jpg';
import houseAtArogiRodopi3 from '../assets/images/house_at_Arogi_Rodopi3.jpg';
import houseAtArogiRodopi4 from '../assets/images/house_at_Arogi_Rodopi4.jpg';
import summerResidenceComplex1 from '../assets/images/Summer_residence_complex.jpg';
import summerResidenceComplex2 from '../assets/images/Summer_residence_complex2.jpg';
import summerResidenceComplex3 from '../assets/images/Summer_residence_complex3.jpg';
import summerResidenceComplex4 from '../assets/images/Summer_residence_complex4.jpg';
import summerResidenceComplex5 from '../assets/images/Summer_residence_complex5.jpg';
import summerResidenceComplex6 from '../assets/images/Summer_residence_complex6.jpg';
import ALE06865 from '../assets/images/ALE06865.jpg';
import ALE06879 from '../assets/images/ALE06879.jpg';
import ALE06881 from '../assets/images/ALE06881.jpg';
import ALE06890 from '../assets/images/ALE06890.jpg';
import ALE06900 from '../assets/images/ALE06900.jpg';
import ALE06906 from '../assets/images/ALE06906.jpg';
import ALE06908 from '../assets/images/ALE06908.jpg';
import ALE06925 from '../assets/images/ALE06925.jpg';
import ALE06928 from '../assets/images/ALE06928.jpg';
import ALE06933 from '../assets/images/ALE06933.jpg';
import ALE07005 from '../assets/images/ALE07005.jpg';
import ALE07007 from '../assets/images/ALE07007.jpg';
import ALE07009 from '../assets/images/ALE07009.jpg';
import ALE07011 from '../assets/images/ALE07011.jpg';
import ALE07013 from '../assets/images/ALE07013.jpg';
import ALE07019 from '../assets/images/ALE07019.jpg';
import ALE07022 from '../assets/images/ALE07022.jpg';
import instaImg1 from '../assets/images/514272336_1316439290482668_5565934073052163353_n.jpg';
import instaImg2 from '../assets/images/538905250_1316439170482680_5270459618076117313_n.jpg';
import instaImg3 from '../assets/images/539141282_1316439213816009_3756363319241138827_n.jpg';
import instaImg4 from '../assets/images/539274730_1316439300482667_4901277440090548225_n.jpg';
import instaImg5 from '../assets/images/539579518_1316439343815996_4866358407064028747_n.jpg';
import instaImg6 from '../assets/images/539899701_1316439330482664_7346323739234905959_n.jpg';
import instaImg7 from '../assets/images/540414920_1316439220482675_7195414745198410267_n.jpg';
import instaImg8 from '../assets/images/540446939_1316439253816005_3057552061501560182_n.jpg';
import instaImg9 from '../assets/images/540700855_1316439183816012_8821857453387303559_n.jpg';
import instaImg10 from '../assets/images/540758929_1316439243816006_7358643717566383190_n.jpg';
import priinMeta from '../assets/images/πριν-μετα.jpg';
import arogiArch1 from '../assets/images/584225466_1391413832985213_2017305495486062768_n.jpg';
import arogiArch2 from '../assets/images/584561530_1391414026318527_8111503295937354019_n.jpg';
import arogiArch3 from '../assets/images/585437440_1391414029651860_512034555342011132_n.jpg';
import arogiGround1 from '../assets/images/490294330_1202712161855382_6930342789482914542_n.jpg';
import arogiGround2 from '../assets/images/490449558_1202712201855378_4396787869722210817_n.jpg';
import arogiGround3 from '../assets/images/491340481_1202711968522068_6681384566764598003_n.jpg';
import arogiGround4 from '../assets/images/491968047_1202712198522045_7851253325781057159_n.jpg';
import ektenepol1 from '../assets/images/625035174_1454983593294903_3795265901664001688_n.jpg';
import ektenepol2 from '../assets/images/625906595_1454983589961570_6302067110794081495_n.jpg';
import ektenepol3 from '../assets/images/627034918_1454983563294906_8561412317694342707_n.jpg';
import maroneia1 from '../assets/images/myarchitectai_1ihlen3cbg_sd.png';
import maroneia2 from '../assets/images/myarchitectai_5lkcro7pv_sd.png';
import maroneia3 from '../assets/images/myarchitectai_alhomyqrl_sd.png';
import maroneia4 from '../assets/images/myarchitectai_cg89efd3_sd.png';
import maroneia5 from '../assets/images/myarchitectai_gxutb6aab_sd.png';
import maroneia6 from '../assets/images/myarchitectai_qsei7ftwp_sd.png';

interface BlogPost {
  id: number;
  title: {
    el: string;
    en: string;
  };
  excerpt: {
    el: string;
    en: string;
  };
  date: string;
  author: string;
  readTime: string;
  images: any[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

// Custom arrow components
const NextArrow = ({ onClick, currentSlide, slideCount, ...props }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent border-none"
    aria-label="Next slide"
    {...props}
  >
    <ChevronRight className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
  </button>
);

const PrevArrow = ({ onClick, currentSlide, slideCount, ...props }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent border-none"
    aria-label="Previous slide"
    {...props}
  >
    <ChevronLeft className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
  </button>
);

// Ενημέρωση του interface Settings
interface Settings extends React.ComponentProps<typeof Slider> {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  customPaging?: (i: number) => JSX.Element;
  className?: string;
  initialSlide?: number;
  arrows?: boolean;
}

const Blog = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Ορισμός title και meta description για SEO
    document.title = language === 'el' 
      ? 'Blog | IN-MAVRIDIS - Νέα & Άρθρα για Αρχιτεκτονική, Κατασκευές & Ανακαινίσεις'
      : 'Blog | IN-MAVRIDIS - News & Articles about Architecture, Construction & Renovations';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Διαβάστε τα τελευταία νέα και άρθρα για αρχιτεκτονική, κατασκευές, ανακαινίσεις, εξοικονόμηση ενέργειας και τάσεις στον κλάδο. Ενημερωθείτε για τις τελευταίες εξελίξεις στον κατασκευαστικό τομέα.'
        : 'Read the latest news and articles about architecture, construction, renovations, energy saving and industry trends. Stay updated with the latest developments in the construction sector.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Διαβάστε τα τελευταία νέα και άρθρα για αρχιτεκτονική, κατασκευές, ανακαινίσεις, εξοικονόμηση ενέργειας και τάσεις στον κλάδο. Ενημερωθείτε για τις τελευταίες εξελίξεις στον κατασκευαστικό τομέα.'
        : 'Read the latest news and articles about architecture, construction, renovations, energy saving and industry trends. Stay updated with the latest developments in the construction sector.';
      document.head.appendChild(meta);
    }
  }, [language]);

  // Δημιουργούμε τα URLs για τις εικόνες
  const imageUrls = {
    ik: Array.from({ length: 4 }, (_, i) => 
      new URL(`../assets/images/ik${i + 1}.jpg`, import.meta.url).href
    ),
    ma: Array.from({ length: 4 }, (_, i) => 
      new URL(`../assets/images/ma${i + 1}.jpg`, import.meta.url).href
    ),
    w: Array.from({ length: 7 }, (_, i) => 
      new URL(`../assets/images/w${i + 1}.jpg`, import.meta.url).href
    )
  };

  const blogPosts: BlogPost[] = [
    {
      id: 7,
      title: {
        el: 'Ανακαίνιση στούντιο αισθητικής – LaserDerm',
        en: 'Aesthetic Studio Renovation - LaserDerm'
      },
      excerpt: {
        el: 'Ανακαίνιση και διακόσμηση στούντιο αισθητικής LaserDerm. Αρχιτεκτονικός σχεδιασμός, πλήρης δομική ανανέωση, και λειτουργική υλοποίηση του νέου επαγγελματικού χώρου.',
        en: 'Renovation and decoration of LaserDerm aesthetic studio. Architectural design, complete structural renewal, and functional implementation of the new professional space.'
      },
      date: '2024-02-20',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [ALE06865, ALE06879, ALE06881, ALE06890, ALE06900, ALE06906, ALE06908, ALE06925, ALE06928, ALE06933, ALE07005, ALE07007, ALE07009, ALE07011, ALE07013, ALE07019, ALE07022]
    },
    {
      id: 8,
      title: {
        el: 'Ανακατασκευή παλαιάς μονοκατοικίας σε τρία διαμερίσματα-στούντιο',
        en: 'Reconstruction of Old House into Three Apartments-Studio'
      },
      excerpt: {
        el: 'Ανακατασκευή παλαιάς μονοκατοικίας, μετατροπή σε τρία διαμερίσματα-στούντιο με σύγχρονο αρχιτεκτονικό σχεδιασμό και ενεργειακή αναβάθμιση. Πλήρης στατική μελέτη ενίσχυσης φέροντα οργανισμού.',
        en: 'Reconstruction of old house, conversion into three apartments-studio with modern architectural design and energy upgrade. Complete structural reinforcement study and supervision.'
      },
      date: '2024-02-19',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '5 min',
      images: [instaImg1, instaImg2, instaImg3, instaImg4, instaImg5, instaImg6, instaImg7, instaImg8, instaImg9, instaImg10, priinMeta]
    },
    {
      id: 9,
      title: {
        el: 'Αρχιτεκτονική μελέτη διώροφης μονοκατοικίας στην παραλία Αρωγής',
        en: 'Architectural Study of Two-Story House at Arogi Beach'
      },
      excerpt: {
        el: 'Αρχιτεκτονική μελέτη διώροφης μονοκατοικίας στην παραλία Αρωγής Ροδόπης. Σύγχρονος αρχιτεκτονικός σχεδιασμός με χρήση τοπικών υλικών και σεβασμό προς την περιβαλλοντική ευαισθησία της παραλιακής ζώνης.',
        en: 'Architectural study of two-story house at Arogi Beach, Rodopi. Modern architectural design using local materials and respect for the environmental sensitivity of the coastal area.'
      },
      date: '2024-02-18',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [arogiArch1, arogiArch2, arogiArch3]
    },
    {
      id: 10,
      title: {
        el: 'Ανέγερση ισόγειας μονοκατοικίας με σοφίτα στην παραλία Αρωγής',
        en: 'Construction of Ground-Floor House with Attic at Arogi Beach'
      },
      excerpt: {
        el: 'Ανέγερση ισόγειας παραθεριστικής μονοκατοικίας με σοφίτα στην παραλία Αρωγής. Πλήρης αρχιτεκτονική και στατική μελέτη, ενεργειακή μελέτη ΚΕΝΑΚ, και επιτυχημένη υλοποίηση του έργου.',
        en: 'Construction of ground-floor holiday home with attic at Arogi Beach. Complete architectural and structural study, energy study KENAK, and successful completion of the project.'
      },
      date: '2024-02-17',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [arogiGround1, arogiGround2, arogiGround3, arogiGround4]
    },
    {
      id: 11,
      title: {
        el: 'Ανέγερση διώροφης μονοκατοικίας στην περιοχή Εκτενεπόλ Κομοτηνή',
        en: 'Construction of Two-Story House in Ektenepol Komotini Area'
      },
      excerpt: {
        el: 'Ανέγερση διώροφης μονοκατοικίας στον Εκτενεπόλ ΖΕΠ Κομοτηνής. Αρχιτεκτονική μελέτη, στατική μελέτη με σύγχρονες κατασκευαστικές τεχνικές, ενεργειακή μελέτη ΚΕΝΑΚ, και πλήρης επίβλεψη εργοταξίου με έμφαση στην ποιότητα.',
        en: 'Construction of two-story house in Ektenepol ZEP Komotini. Architectural study, structural study with modern construction techniques, energy study KENAK, and complete construction supervision with emphasis on quality.'
      },
      date: '2024-02-16',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [ektenepol1, ektenepol2, ektenepol3]
    },
    {
      id: 12,
      title: {
        el: 'Ανέγερση πετρόκτιστης κατοικίας στον παραδοσιακό οικισμό Μαρώνειας',
        en: 'Construction of Stone House in Traditional Settlement of Maronia'
      },
      excerpt: {
        el: 'Ανέγερση πετρόκτιστης κατοικίας στον παραδοσιακό οικισμό Μαρώνειας Ροδόπης. Σεβασμός της παραδοσιακής αρχιτεκτονικής, χρήση αυθεντικών τοπικών υλικών και διατήρηση του αρχιτεκτονικού χαρακτήρα του παραδοσιακού οικισμού.',
        en: 'Construction of stone house in traditional settlement of Maronia, Rodopi. Respect for traditional architecture, use of authentic local materials and preservation of architectural character of the traditional settlement.'
      },
      date: '2024-02-15',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [maroneia1, maroneia2, maroneia3, maroneia4, maroneia5, maroneia6]
    },
    {
      id: 1,
      title: {
        el: 'Νέο έργο: Προκατασκευασμένες Κατοικίες στον Προφήτη Ηλία',
        en: 'New Project: Prefabricated Houses in Profitis Ilias'
      },
      excerpt: {
        el: `Νέο έργο σε εξέλιξη: «Ανέγερση δύο όμοιων προκατασκευασμένων κατοικιών στον παραθεριστικό οικισμό Προφήτη Ηλία Δήμου Μαρώνειας Σαπών, ΠΕ Ροδόπης». Ολοκλήρωση βάσεων σκυροδέματος και εν αναμονή του μεταλλικού σκελετού κατοικιών.

Maroneia, Rodopi, Μαρώνεια, Προφήτης Ηλίας Ροδόπης`,
        en: `New project in progress: "Construction of two identical prefabricated houses in the holiday settlement of Profitis Ilias, Municipality of Maroneia Sapon, Rodopi". Completion of concrete foundations and awaiting the metal frame of the houses.

Maroneia, Rodopi, Profitis Ilias Rodopi`
      },
      date: '2024-02-16',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [z, x, c, v, b, n, m]
    },
    {
      id: 2,
      title: {
        el: 'Σύμβουλοι Μηχανικοί - Ολοκληρωμένες Υπηρεσίες',
        en: 'Engineering Consultants - Comprehensive Services'
      },
      excerpt: {
        el: `Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση. 

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

Σύμβουλοι μηχανικοί:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός`,
        en: `Architectural Office, Civil Engineering Office MSc Civil Engineer. Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.`
      },
      date: '2024-02-15',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '5 min',
      images: [ik1, ik2, ik3, ik4]
    },
    {
      id: 3,
      title: {
        el: 'Ανέγερση Μονοκατοικίας στην Κομοτηνή - Αποπεράτωση Πλακών',
        en: 'House Construction in Komotini - Concrete Slab Completion'
      },
      excerpt: {
        el: `Ανέγερση μονοκατοικίας στην Κομοτηνή. Εξέλιξη κατασκευής- αποπεράτωση πλακών σκυροδέματος.

Σύμβουλοι μηχανικοί:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός`,
        en: `House construction in Komotini. Construction progress - completion of concrete slabs.`
      },
      date: '2024-02-08',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [b1, b2, b3, b4]
    },
    {
      id: 4,
      title: {
        el: 'Ανέγερση Μονοκατοικίας - Εργασίες Αποπεράτωσης',
        en: 'House Construction - Completion Works'
      },
      excerpt: {
        el: `Ανέγερση μονοκατοικίας- εξέλιξη κατασκευής- επιχρίσματα, εργασίες αποπεράτωσης.

Σύμβουλοι μηχανικοί:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός`,
        en: `House construction - construction progress - plastering, completion works.`
      },
      date: '2024-02-03',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [i11, i22, i33, i44, i55, i66, i77, i88]
    },
    {
      id: 5,
      title: {
        el: 'Τεχνικές Μελέτες & Υπηρεσίες',
        en: 'Technical Studies & Services'
      },
      excerpt: {
        el: `Σύμβουλοι μηχανικοι:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. 

Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση.

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

`,
        en: `Engineering consultants:
@Yiannis Mavridis civil engineer
@Niki Mavridou architect engineer

Architectural Office, Civil Engineer Office MSc Civil Engineer.

Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.

Energy studies, REV property valuations, Legalization of Unauthorized Constructions, Business and shop Operating Licenses, Small-scale work permits, Category 3 permits, & all categories, Building Inspectors, Accessibility Inspectors, Building Identity, Certification - legality check for property transfers - contracts, Energy inspections & Energy Certificates, Accommodation Inspector, Submission of ESPA - LEADER investment plans, Private Project Construction, Renovations, Waterproofing of terraces - balconies - basements

`
      },
      date: '2024-02-01',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '6 min',
      images: [e1, e2, e3, e4]
    },
    {
      id: 6,
      title: {
        el: 'Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ',
        en: 'Two-story House with Attic in Ektenepol'
      },
      excerpt: {
        el: `Ανέγερση διώροφου μονοκατοικίας με Σοφιτα- αρχιτεκτονική μελέτη- Εκτενεπολ ΖΕΠ Κομοτηνης

Σύμβουλοι μηχανικοι:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. 

Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση.

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

`,
        en: `Construction of a two-story house with attic - architectural study - Ektenepol ZEP Komotini

Engineering consultants:
@Yiannis Mavridis civil engineer
@Niki Mavridou architect engineer

Architectural Office, Civil Engineer Office MSc Civil Engineer.

Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.

Energy studies, REV property valuations, Legalization of Unauthorized Constructions, Business and shop Operating Licenses, Small-scale work permits, Category 3 permits, & all categories, Building Inspectors, Accessibility Inspectors, Building Identity, Certification - legality check for property transfers - contracts, Energy inspections & Energy Certificates, Accommodation Inspector, Submission of ESPA - LEADER investment plans, Private Project Construction, Renovations, Waterproofing of terraces - balconies - basements

`
      },
      date: '2024-01-30',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '5 min',
      images: [to, to1]
    },
    {
      id: 7,
      title: {
        el: 'Ολοκληρωμένες Υπηρεσίες Συμβούλων Μηχανικών',
        en: 'Comprehensive Engineering Consulting Services'
      },
      excerpt: {
        el: `Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης, αδειών λειτουργίας καταστημάτων, αυθαιρέτων, Ταυτότητα Κτιρίου, Πιστοποιημένες εκτιμήσεις REV, Στατικές Μελέτες, Εφαρμογή, Κοστολόγηση κατά στάδιο, Επίβλεψη με χρονικό προγραμματισμό, Διαχείριση εργοταξίου ανέγερσης - ανακαίνισης επιχειρήσεων/κατοικιών, Ειδίκευση σε διάβρωση σκυροδέματος, επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων.

Νίκη Μαυρίδου Αρχιτέκτονάς Μηχανικός Α.Π.Θ.
Ιωάννης Μαυρίδης, MSc Civil Engineer (αντιστ. Ε.Μ.Π.)`,
        en: `Comprehensive engineering consulting services, Architectural design, Building legislation, business operation permits, unauthorized buildings, Building Identity, Certified REV valuations, Structural Studies, Implementation, Stage-by-stage costing, Supervision with time scheduling, Construction site management for business/residential construction - renovation, Specialization in concrete corrosion, interventions in older buildings, Building repairs.

Niki Mavridou Architect Engineer AUTH
Ioannis Mavridis, MSc Civil Engineer (equiv. NTUA)`
      },
      date: '2024-01-20',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [q1, q2, q3, q4, q5, q6, q7, q8, q9]
    },
    {
      id: 8,
      title: {
        el: 'Εξειδικευμένες Κατασκευαστικές Λύσεις',
        en: 'Specialized Construction Solutions'
      },
      excerpt: {
        el: `Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης, αδειών λειτουργίας καταστημάτων, αυθαιρέτων, Ταυτότητα Κτιρίου, Πιστοποιημένες εκτιμήσεις REV, Στατικές Μελέτες, Εφαρμογή, Κοστολόγηση κατά στάδιο, Επίβλεψη με χρονικό προγραμματισμό, Διαχείριση εργοταξίου ανέγερσης - ανακαίνισης επιχειρήσεων/κατοικιών, Ειδίκευση σε διάβρωση σκυροδέματος, επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων.

Νίκη Μαυρίδου Αρχιτέκτονάς Μηχανικός Α.Π.Θ.
Ιωάννης Μαυρίδης, MSc Civil Engineer (αντιστ. Ε.Μ.Π.)`,
        en: `Comprehensive engineering consulting services, Architectural design, Building legislation, business operation permits, unauthorized buildings, Building Identity, Certified REV valuations, Structural Studies, Implementation, Stage-by-stage costing, Supervision with time scheduling, Construction site management for business/residential construction - renovation, Specialization in concrete corrosion, interventions in older buildings, Building repairs.

Niki Mavridou Architect Engineer AUTH
Ioannis Mavridis, MSc Civil Engineer (equiv. NTUA)`
      },
      date: '2024-01-10',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11]
    },
    {
      id: 9,
      title: {
        el: 'Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή',
        en: 'Past Multi Storey Residential Projects in Komotini'
      },
      excerpt: {
        el: `Past multi storey residential projects. Komotini.`,
        en: `Past multi storey residential projects. Komotini.`
      },
      date: '2024-01-05',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10]
    }
  ];

  // Ενημέρωση των slider settings
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <button
        className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300"
        aria-label={`Go to slide ${i + 1}`}
      />
    )
  };

  const modalSliderSettings: Settings = {
    ...sliderSettings,
    initialSlide: currentImageIndex
  };

  const openImageModal = (images: string[], startIndex: number) => {
    setSelectedImages(images);
    setCurrentImageIndex(startIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {language === 'el' ? 'Το Ιστολόγιο μας' : 'Our Blog'}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {language === 'el' 
                ? 'Ανακαλύψτε τα τελευταία νέα, άρθρα και συμβουλές σχετικά με την αρχιτεκτονική και τις κατασκευές'
                : 'Discover our latest news, articles and tips about architecture and construction'
              }
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Blog Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {post.images.length > 0 && (
                  <div className="relative w-full h-96">
                    <Slider
                      {...sliderSettings}
                      className="relative"
                      aria-label="Blog post images slider"
                    >
                      {post.images.map((image, index) => (
                        <div key={index} className="outline-none h-96">
                          <div
                            className="w-full h-full cursor-pointer"
                            onClick={() => openImageModal(post.images, index)}
                          >
                            <img
                              src={image}
                              alt={`${post.title[language]} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title[language]}
                  </h2>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {post.excerpt[language]}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US')}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white z-50 p-2 hover:text-blue-400 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-7xl">
              <Slider
                {...modalSliderSettings}
                className="relative"
                aria-label="Blog post images slider"
              >
                {selectedImages.map((image, index) => (
                  <div key={index} className="outline-none">
                    <div className="flex items-center justify-center h-[80vh]">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog; 