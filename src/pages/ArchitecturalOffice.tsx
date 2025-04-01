import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Ruler, PencilRuler, Building2, Compass, CheckCircle2, X, ArrowRight, Award, Building } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import f3 from '../assets/images/f3.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import z from '../assets/images/z.jpg';
import x from '../assets/images/x.jpg';
import c from '../assets/images/c.jpg';
import v from '../assets/images/v.jpg';
import b from '../assets/images/b.jpg';
import n from '../assets/images/n.jpg';
import m from '../assets/images/m.jpg';
import as from '../assets/images/as.jpg';
import ad from '../assets/images/ad.jpg';
import af from '../assets/images/af.jpg';
import ag from '../assets/images/ag.jpg';
import ah from '../assets/images/ah.jpg';
import aj from '../assets/images/aj.jpg';
import ak from '../assets/images/ak.jpg';
import al from '../assets/images/al.jpg';
import lop from '../assets/images/lop.png';
import lop2 from '../assets/images/lop2.jpg';
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
import VelvetSkins14 from '../assets/images/VelvetSkins14.jpg';
import VelvetSkins15 from '../assets/images/VelvetSkins15.jpg';
import VelvetSkins16 from '../assets/images/VelvetSkins16.jpg';
import houseMaroneia from '../assets/images/houseMaroneia.jpg';
import houseMaroneia2 from '../assets/images/houseMaroneia2.jpg';
import houseMaroneia3 from '../assets/images/houseMaroneia3.jpg';
import houseMaroneia4 from '../assets/images/houseMaroneia4.jpg';
import houseMaroneia5 from '../assets/images/houseMaroneia5.jpg';
import threeStorybuilding from '../assets/images/three-storybuilding.jpg';
import threeStorybuilding2 from '../assets/images/three-storybuilding2.jpg';
import threeStorybuilding3 from '../assets/images/three-storybuilding3.jpg';
import threeStorybuilding4 from '../assets/images/three-storybuilding4.jpg';
import roofdetachedhouse from '../assets/images/roofdetachedhouse.jpg';
import roofdetachedhouse2 from '../assets/images/roofdetachedhouse2.jpg';
import roofdetachedhouse3 from '../assets/images/roofdetachedhouse3.jpg';
import roofdetachedhouse4 from '../assets/images/roofdetachedhouse4.jpg';
import roofdetachedhouse5 from '../assets/images/roofdetachedhouse5.jpg';
import roofdetachedhouse6 from '../assets/images/roofdetachedhouse6.jpg';
import groundFloorHolidayHomes from '../assets/images/ground-floor_holiday_homes.jpg';
import groundFloorHolidayHomes2 from '../assets/images/ground-floor_holiday_homes2.jpg';
import groundFloorHolidayHomes3 from '../assets/images/ground-floor_holiday_homes3.jpg';
import groundFloorHolidayHomes4 from '../assets/images/ground-floor_holiday_homes4.jpg';
import groundFloorHolidayHomes5 from '../assets/images/ground-floor_holiday_homes5.jpg';
import groundFloorHolidayHomes6 from '../assets/images/ground-floor_holiday_homes6.jpg';
import groundFloorHolidayHomes7 from '../assets/images/ground-floor_holiday_homes7.jpg';
import houseAtArogiRodopi from '../assets/images/house_at_Arogi_Rodopi.jpg';
import houseAtArogiRodopi2 from '../assets/images/house_at_Arogi_Rodopi2.jpg';
import houseAtArogiRodopi3 from '../assets/images/house_at_Arogi_Rodopi3.jpg';
import houseAtArogiRodopi4 from '../assets/images/house_at_Arogi_Rodopi4.jpg';
import houseAtArogiRodopi5 from '../assets/images/house_at_Arogi_Rodopi5.jpg';
import houseAtArogiRodopi6 from '../assets/images/house_at_Arogi_Rodopi6.jpg';
import houseAtArogiRodopi7 from '../assets/images/house_at_Arogi_Rodopi7.jpg';
import houseAtArogiRodopi8 from '../assets/images/house_at_Arogi_Rodopi8.jpg';
import houseAtArogiRodopi9 from '../assets/images/house_at_Arogi_Rodopi9.jpg';
import houseAtArogiRodopi10 from '../assets/images/house_at_Arogi_Rodopi10.jpg';
import SmallRentalApartments1 from '../assets/images/Small_Rental_apartments1.jpg';
import SmallRentalApartments2 from '../assets/images/Small_Rental_apartments2.jpg';
import SmallRentalApartments3 from '../assets/images/Small_Rental_apartments3.jpg';
import SmallRentalApartments4 from '../assets/images/Small_Rental_apartments4.jpg';
import SmallRentalApartments5 from '../assets/images/Small_Rental_apartments5.jpg';
import SmallRentalApartments6 from '../assets/images/Small_Rental_apartments6.jpg';
import MaroniaPlatanitis1 from '../assets/images/Maronia_Platanitis_beach.jpg';
import MaroniaPlatanitis2 from '../assets/images/Maronia_Platanitis_beach2.jpg';
import MaroniaPlatanitis3 from '../assets/images/Maronia_Platanitis_beach3.jpg';
import MaroniaPlatanitis4 from '../assets/images/Maronia_Platanitis_beach4.jpg';
import MaroniaPlatanitis5 from '../assets/images/Maronia_Platanitis_beach5.jpg';
import structureRepairEval1 from '../assets/images/structure_repair_evaluation.jpg';
import structureRepairEval2 from '../assets/images/structure_repair_evaluation2.jpg';
import structureRepairEval3 from '../assets/images/structure_repair_evaluation3.jpg';
import structureRepairEval4 from '../assets/images/structure_repair_evaluation4.jpg';
import structureRepairEval5 from '../assets/images/structure_repair_evaluation5.jpg';
import structureRepairEval6 from '../assets/images/structure_repair_evaluation6.jpg';
import structureRepairEval7 from '../assets/images/structure_repair_evaluation7.jpg';
import photorealismHouse1 from '../assets/images/Photorealism_of_house.jpg';
import photorealismHouse2 from '../assets/images/Photorealism_of_house2.jpg';
import photorealismHouse3 from '../assets/images/Photorealism_of_house3.jpg';
import photorealismHouse4 from '../assets/images/Photorealism_of_house4.jpg';
import photorealismHouse5 from '../assets/images/Photorealism_of_house5.jpg';
import photorealismHouse6 from '../assets/images/Photorealism_of_house6.jpg';
import photorealismHouse7 from '../assets/images/Photorealism_of_house7.jpg';
import constructionResidential from '../assets/images/Construction_residential_building.jpg';
import singleStoreyHouse1 from '../assets/images/single_storey_house.jpg';
import singleStoreyHouse2 from '../assets/images/single_storey_house2.jpg';
import singleStoreyHouse3 from '../assets/images/single_storey_house3.jpg';
import singleStoreyHouse4 from '../assets/images/single_storey_house4.jpg';
import penetronAdmix from '../assets/images/PenetronAdmix.jpg';
import constructionDetachedHouse1 from '../assets/images/Construction_detached_house_construction_progress.jpg';
import constructionDetachedHouse2 from '../assets/images/Construction_detached_house_construction_progress2.jpg';
import constructionDetachedHouse3 from '../assets/images/Construction_detached_house_construction_progress3.jpg';
import constructionDetachedHouse4 from '../assets/images/Construction_detached_house_construction_progress4.jpg';
import constructionDetachedHouse5 from '../assets/images/Construction_detached_house_construction_progress5.jpg';
import constructionDetachedHouse6 from '../assets/images/Construction_detached_house_construction_progress6.jpg';
import constructionDetachedHouse7 from '../assets/images/Construction_detached_house_construction_progress7.jpg';
import constructionDetachedHouse8 from '../assets/images/Construction_detached_house_construction_progress8.jpg';
import constructionHouseKomotini1 from '../assets/images/construction_house_Komotini.jpg';
import constructionHouseKomotini2 from '../assets/images/construction_house_Komotini2.jpg';
import constructionHouseKomotini3 from '../assets/images/construction_house_Komotini3.jpg';
import constructionHouseKomotini4 from '../assets/images/construction_house_Komotini4.jpg';
import summerResidenceComplex1 from '../assets/images/Summer_residence_complex.jpg';
import summerResidenceComplex2 from '../assets/images/Summer_residence_complex2.jpg';
import summerResidenceComplex3 from '../assets/images/Summer_residence_complex3.jpg';
import summerResidenceComplex4 from '../assets/images/Summer_residence_complex4.jpg';
import summerResidenceComplex5 from '../assets/images/Summer_residence_complex5.jpg';
import summerResidenceComplex6 from '../assets/images/Summer_residence_complex6.jpg';
import heightIncreaseKomotini from '../assets/images/Height_increase_Komotini.jpg';
import constructionOfDetachedHouse1 from '../assets/images/construction_of_a_detached_house.jpg';
import constructionOfDetachedHouse2 from '../assets/images/construction_of_a_detached_house2.jpg';
import constructionOfDetachedHouse3 from '../assets/images/construction_of_a_detached_house3.jpg';
import constructionOfPrivateProjects1 from '../assets/images/Construction_of_Private_Projects.jpg';
import constructionOfPrivateProjects2 from '../assets/images/Construction_of_Private_Projects2.jpg';
import constructionOfPrivateProjects3 from '../assets/images/Construction_of_Private_Projects3.jpg';
import constructionOfPrivateProjects4 from '../assets/images/Construction_of_Private_Projects4.jpg';
import mikelIkea1 from '../assets/images/mikel-ikea.jpg';
import mikelIkea2 from '../assets/images/mikel-ikea2.jpg';
import mikelIkea3 from '../assets/images/mikel-ikea3.jpg';
import mikelIkea4 from '../assets/images/mikel-ikea4.jpg';
import { Link } from 'react-router-dom';
import holidayGroundFloorResidences from '../assets/images/holiday_ground_floor_residences.jpg';
import damagesCausesRestorations1 from '../assets/images/damages_causes_restorations.jpg';
import damagesCausesRestorations2 from '../assets/images/damages_causes_restorations2.jpg';
import damagesCausesRestorations3 from '../assets/images/damages_causes_restorations3.jpg';
import damagesCausesRestorations4 from '../assets/images/damages_causes_restorations4.jpg';
import damagesCausesRestorations5 from '../assets/images/damages_causes_restorations5.jpg';
import damagesCausesRestorations6 from '../assets/images/damages_causes_restorations6.jpg';
import damagesCausesRestorations7 from '../assets/images/damages_causes_restorations7.jpg';
import constructionInProgress from '../assets/images/Construction_in_progress.jpg';
import cornerPlotUrbanHouse1 from '../assets/images/Corner_plot_urban_house.jpg';
import cornerPlotUrbanHouse2 from '../assets/images/Corner_plot_urban_house2.jpg';
import newBusinessSpace1 from '../assets/images/New_business_space.jpg';
import newBusinessSpace2 from '../assets/images/New_business_space2.jpg';
import newBusinessSpace3 from '../assets/images/New_business_space3.jpg';
import constructionProgress from '../assets/images/Construction_progress.jpg';
import insideConstruction1 from '../assets/images/inside_construction.jpg';
import insideConstruction2 from '../assets/images/inside_construction2.jpg';
import pastMultiStoreyProjects1 from '../assets/images/Past_multi_storey_projects.jpg';
import pastMultiStoreyProjects2 from '../assets/images/Past_multi_storey_projects2.jpg';
import pastMultiStoreyProjects3 from '../assets/images/Past_multi_storey_projects3.jpg';
import pastMultiStoreyProjects4 from '../assets/images/Past_multi_storey_projects4.jpg';
import pastMultiStoreyProjects5 from '../assets/images/Past_multi_storey_projects5.jpg';
import pastMultiStoreyProjects6 from '../assets/images/Past_multi_storey_projects6.jpg';
import pastMultiStoreyProjects7 from '../assets/images/Past_multi_storey_projects7.jpg';
import pastMultiStoreyProjects8 from '../assets/images/Past_multi_storey_projects8.jpg';
import pastMultiStoreyProjects9 from '../assets/images/Past_multi_storey_projects9.jpg';
import constructionSiteManagement1 from '../assets/images/Construction_site_management.jpg';
import constructionSiteManagement2 from '../assets/images/Construction_site_management2.jpg';
import constructionSiteManagement3 from '../assets/images/Construction_site_management3.jpg';
import constructionSiteManagement4 from '../assets/images/Construction_site_management4.jpg';
import constructionSiteManagement5 from '../assets/images/Construction_site_management5.jpg';
import constructionSiteManagement6 from '../assets/images/Construction_site_management6.jpg';
import constructionSiteManagement7 from '../assets/images/Construction_site_management7.jpg';
import constructionSiteManagement8 from '../assets/images/Construction_site_management8.jpg';
import constructionSiteManagement9 from '../assets/images/Construction_site_management9.jpg';
import olderProjects1 from '../assets/images/Older_projects.jpg';
import olderProjects2 from '../assets/images/Older_projects2.jpg';
import olderProjects3 from '../assets/images/Older_projects3.jpg';
import olderProjects4 from '../assets/images/Older_projects4.jpg';
import Renovation_of_a_detached_house_in_the_center from '../assets/images/Renovation_of_a_detached_house_in_the_center.jpg';
import Renovation_of_a_detached_house_in_the_center2 from '../assets/images/Renovation_of_a_detached_house_in_the_center2.jpg';
import Renovation_of_a_detached_house_in_the_center3 from '../assets/images/Renovation_of_a_detached_house_in_the_center3.jpg';
import store_in_a_shopping_center from '../assets/images/store_in_a_shopping_center.jpg';
import store_in_a_shopping_center2 from '../assets/images/store_in_a_shopping_center2.jpg';
import store_in_a_shopping_center3 from '../assets/images/store_in_a_shopping_center3.jpg';
import store_in_a_shopping_center4 from '../assets/images/store_in_a_shopping_center4.jpg';
import store_in_a_shopping_center5 from '../assets/images/store_in_a_shopping_center5.jpg';
import store_in_a_shopping_center6 from '../assets/images/store_in_a_shopping_center6.jpg';
import store_in_a_shopping_center7 from '../assets/images/store_in_a_shopping_center7.jpg';
import store_in_a_shopping_center8 from '../assets/images/store_in_a_shopping_center8.jpg';
import store_in_a_shopping_center9 from '../assets/images/store_in_a_shopping_center9.jpg';
import Renovation_of_Second_detached_house_in_the_center from '../assets/images/Renovation_of_Second_detached_house_in_the_center.jpg';
import Renovation_of_Second_detached_house_in_the_center2 from '../assets/images/Renovation_of_Second_detached_house_in_the_center2.jpg';
import Renovation_of_Second_detached_house_in_the_center3 from '../assets/images/Renovation_of_Second_detached_house_in_the_center3.jpg';
import Renovation_of_Second_detached_house_in_the_center4 from '../assets/images/Renovation_of_Second_detached_house_in_the_center4.jpg';
import Renovation_of_Second_detached_house_in_the_center5 from '../assets/images/Renovation_of_Second_detached_house_in_the_center5.jpg';
import plataniti from '../assets/images/plataniti.jpg';
import plataniti2 from '../assets/images/plataniti2.jpg';
import plataniti3 from '../assets/images/plataniti3.jpg';
import plataniti4 from '../assets/images/plataniti4.jpg';
import MaroniaRentalApartmentsResort from '../assets/images/maronia-rental-apartments-resort.jpg';
import MaroniaRentalApartmentsResort2 from '../assets/images/maronia-rental-apartments-resort2.jpg';
import MaroniaRentalApartmentsResort3 from '../assets/images/maronia-rental-apartments-resort3.jpg';
import MaroniaRentalApartmentsResort4 from '../assets/images/maronia-rental-apartments-resort4.jpg';
import MaroniaRentalApartmentsResort5 from '../assets/images/maronia-rental-apartments-resort5.jpg';

interface ServiceItem {
  title: string;
  description: string;
  link?: string;
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

const ArchitecturalOffice = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = {
    el: [
      {
        title: 'Αρχιτεκτονικός Σχεδιασμός',
        description: 'Σχεδιασμός κτιρίων με έμφαση στην αισθητική και λειτουργικότητα',
        link: '/architectural-design'
      },
      {
        title: 'Εσωτερική Διακόσμηση',
        description: 'Σχεδιασμός εσωτερικών χώρων με αισθητική και λειτουργικότητα',
        link: '/interior-design'
      },
      {
        title: 'Μελέτες Κατασκευής',
        description: 'Λεπτομερείς μελέτες για την άρτια υλοποίηση του έργου',
        link: '/blog'
      },
      {
        title: 'Ανακαινίσεις',
        description: 'Ανανέωση και αναβάθμιση υφιστάμενων χώρων',
        link: '/renovations'
      }
    ],
    en: [
      {
        title: 'Architectural Design',
        description: 'Building design with emphasis on aesthetics and functionality',
        link: '/architectural-design'
      },
      {
        title: 'Interior Design',
        description: 'Interior space design with aesthetics and functionality',
        link: '/interior-design'
      },
      {
        title: 'Construction Studies',
        description: 'Detailed studies for the proper implementation of the project',
        link: '/blog'
      },
      {
        title: 'Renovations',
        description: 'Renovation and upgrading of existing spaces',
        link: '/renovations'
      }
    ]
  };

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Σύγχρονη Κατοικία',
      location: 'Κομοτηνή',
      type: 'Κατοικία'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Εμπορικό Συγκρότημα',
      location: 'Αλεξανδρούπολη',
      type: 'Εμπορικό'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Πολυτελές Διαμέρισμα',
      location: 'Καβάλα',
      type: 'Κατοικία'
    }
  ];

  const selectedProjects = [
    {
      id: 1,
      title: {
        el: 'Μονοκατοικία στην Αρωγή Ροδόπης',
        en: 'House at Arogi Rodopi'
      },
      description: {
        el: 'Ανάπλαση μονοκατοικίας στο κέντρο της πόλης',
        en: 'Renovation of a detached house in the city center'
      },
      images: [
        Renovation_of_a_detached_house_in_the_center,
        Renovation_of_a_detached_house_in_the_center2,
        Renovation_of_a_detached_house_in_the_center3
      ]
    },
    {
      id: 2,
      title: {
        el: 'Aνάπλαση μονοκατοικίας στο κέντρο',
        en: 'Renovation of detached house in the center'
      },
      description: {
        el: 'Ανάπλαση δεύτερης μονοκατοικίας στο κέντρο της πόλης',
        en: 'Renovation of second detached house in the city center'
      },
      images: [
        Renovation_of_Second_detached_house_in_the_center,
        Renovation_of_Second_detached_house_in_the_center2,
        Renovation_of_Second_detached_house_in_the_center3,
        Renovation_of_Second_detached_house_in_the_center4,
        Renovation_of_Second_detached_house_in_the_center5
      ]
    },
    {
      id: 3,
      title: {
        el: 'Κατάστημα σε Εμπορικό κέντρο',
        en: 'Store in Shopping center'
      },
      description: {
        el: 'Σχεδιασμός και υλοποίηση καταστήματος σε εμπορικό κέντρο',
        en: 'Design and implementation of a store in a shopping center'
      },
      images: [
        store_in_a_shopping_center,
        store_in_a_shopping_center2,
        store_in_a_shopping_center3,
        store_in_a_shopping_center4,
        store_in_a_shopping_center5,
        store_in_a_shopping_center6,
        store_in_a_shopping_center7,
        store_in_a_shopping_center8,
        store_in_a_shopping_center9
      ]
    },
    {
      id: 'project-platanitis1',
      title: {
        el: 'Παραλια Πλατανιτη Μαρώνειας, Συγκροτημα εξι θερινων κατοικιων',
        en: 'Maronia Platanitis Beach, Complex of six summer houses'
      },
      description: {
        el: 'You wish to invest on new property or land at Maronia or Fanari? Maronia Platanitis beach summer retreat development-six small summer houses . Maronia seafront, Platanitis beach Rodopi (Komotini) prefecture. Architecture , @yiannis mavridis Civil Engineering , Real Estate Development , European Certified Evaluations , Business Permits , Κομοτηνή, Μαρωνεια , Φανάρι',
        en: 'You wish to invest on new property or land at Maronia or Fanari? Maronia Platanitis beach summer retreat development-six small summer houses . Maronia seafront, Platanitis beach Rodopi (Komotini) prefecture. Architecture , @yiannis mavridis Civil Engineering , Real Estate Development , European Certified Evaluations , Business Permits , Komotini, Maronia , Fanari'
      },
      images: [plataniti, plataniti2]
    },
    {
      id: 'project-platanitis2',
      title: {
        el: 'Επιθυμείτε να επενδύσετε στην παραλιακή ζώνη της Μαρώνειας; ή του Φαναρίου',
        en: 'Would you like to invest in the coastal zone of Maronia or Fanari?'
      },
      description: {
        el: 'Παραλια Πλατανιτη Μαρωνειας, Συγκροτημα εξι θερινων κατοικιων. Maronia Platanitis beach summer retreat development-six small summer houses . Maronia seafront, Platanitis beach Rodopi (Komotini) prefecture. Architecture , @yiannis mavridis Civil Engineering , Real Estate Development , European Certified Evaluations , Business Permits , Κομοτηνή, Μαρωνεια , Φανάρι',
        en: 'Maronia Platanitis Beach, Complex of six summer houses. Maronia Platanitis beach summer retreat development-six small summer houses . Maronia seafront, Platanitis beach Rodopi (Komotini) prefecture. Architecture , @yiannis mavridis Civil Engineering , Real Estate Development , European Certified Evaluations , Business Permits , Komotini, Maronia , Fanari'
      },
      images: [plataniti3, plataniti4]
    },
    {
      id: 'project-maronia-resort',
      title: {
        el: 'Μαρώνεια Ενοικιαζόμενα διαμερίσματα Resort. Παραθαλάσσια Μαρώνεια, Αλκυώνα, νομός Ροδόπης (Κομοτηνή)',
        en: 'Maronia Rental Apartments Resort. Seaside Maronia, Alkyona, Rodopi Prefecture (Komotini)'
      },
      description: {
        el: 'Νομός Ροδόπης (Κομοτηνής). Αρχιτεκτονική , @yiannis mavridis Civil Engineering , Real Estate Development , European Certified Evaluations , Business Permits , Κομοτηνή, Μαρώνεια , Φανάρι',
        en: 'Rodopi Prefecture (Komotini). Architecture , @yiannis mavridis Civil Engineering , Real Estate Development , European Certified Evaluations , Business Permits , Komotini, Maronia , Fanari'
      },
      images: [MaroniaRentalApartmentsResort, MaroniaRentalApartmentsResort2, MaroniaRentalApartmentsResort3,
               MaroniaRentalApartmentsResort4, MaroniaRentalApartmentsResort5]
    },
    {
      id: 4,
      title: {
        el: 'Νέο Έργο - Μονοκατοικία στις Σάπες',
        en: 'New Project - House in Sapes'
      },
      description: {
        el: `Νέο έργο υπό κατασκευή. Ανέγερση μονοκατοικίας στις Σάπες Ροδόπης.

@yiannismavridis, @ΝικηΜαυριδου

#αρχιτεκτονικοσσχεδιασμος #στατικημελετη #επιβλεψηεργου #κατασκευηεργου #maronia #fanari #komotini`,
        en: `New project under construction. House construction in Sapes, Rodopi.

@yiannismavridis, @NikiMavridou

#architecturaldesign #structuraldesign #constructionsupervision #construction #maronia #fanari #komotini`
      },
      images: [lop, lop2]
    },
    {
      id: 5,
      title: {
        el: 'Μελέτη Ανέγερσης Ισόγειας Μονοκατοικίας',
        en: 'Single-Story House Construction Study'
      },
      description: {
        el: `Μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου. Φωτορεαλιστική απεικόνιση: μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου.`,
        en: `Construction study of a single-story house with provision for an additional floor. Photorealistic visualization: construction study of a single-story house with future floor provision.`
      },
      images: [as, ad, af, ag, ah, aj, ak, al]
    },
    {
      id: 6,
      title: {
        el: 'Προκατασκευασμένες Κατοικίες στον Προφήτη Ηλία',
        en: 'Prefabricated Houses in Prophet Elias'
      },
      description: {
        el: `Νέο έργο σε εξέλιξη: «Ανέγερση δύο όμοιων προκατασκευασμένων κατοικιών στον παραθεριστικό οικισμό Προφήτη Ηλία Δήμου Μαρώνειας Σαπών, ΠΕ Ροδόπης». Ολοκλήρωση βάσεων σκυροδέματος και εν αναμονή του μεταλλικού σκελετού κατοικιών.

Maroneia, Rodopi, Μαρώνεια, Προφήτης Ηλίας Ροδόπης

#αρχιτεκτονικοσσχεδιασμος #στατικημελετη #επιβλεψηεργου #κατασκευηεργου`,
        en: `New project in progress: "Construction of two identical prefabricated houses in the holiday settlement of Prophet Elias, Municipality of Maroneia Sapon, Rodopi". Completion of concrete foundations and awaiting the metal frame of the houses.`
      },
      images: [z, x, c, v, b, n, m]
    },
    {
      id: 7,
      title: {
        el: 'Μονοκατοικία στην Παραλία Αρωγής',
        en: 'House in Arogi Beach'
      },
      description: {
        el: `Aρχιτεκτονική μελέτη, Στατική μελέτη, ισόγειας μονοκατοικίας 50 τμ. με σοφίτα 25 τμ. σε οικόπεδο στην Παραλία Αρωγής Ροδόπης.`,
        en: `Architectural and structural study of a 50 sq.m. single-story house with a 25 sq.m. loft in Arogi Beach, Rodopi.`
      },
      images: [f1, f2, f3]
    },
    {
      id: 8,
      title: {
        el: 'Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ',
        en: 'Two-story House with Attic in Ektenepol'
      },
      description: {
        el: 'Ανέγερση διώροφου μονοκατοικίας με Σοφιτα- αρχιτεκτονική μελέτη- Εκτενεπολ ΖΕΠ Κομοτηνης',
        en: 'Construction of a two-story house with attic - architectural study - Ektenepol ZEP Komotini'
      },
      images: [to, to1]
    },
    {
      id: 9,
      title: {
        el: 'Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή',
        en: 'Past Multi Storey Residential Projects in Komotini'
      },
      description: {
        el: 'Past multi storey residential projects. Komotini.',
        en: 'Past multi storey residential projects. Komotini.'
      },
      images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10]
    },
    {
      title: {
        el: 'Velvet Skins Laser and Face Center Κομοτηνή',
        en: 'Velvet Skins Laser and Face Center Komotini'
      },
      description: {
        el: 'Αρχιτεκτονικός σχεδιασμός, Μελέτη, Πλήρης οργάνωση χρονοδιαγράμματος & Λειτουργική υλοποίηση. Νέος επαγγελματικός χώρος.',
        en: 'Architectural design, Study, Complete timeline organization & Functional implementation. New professional space.'
      },
      images: [VelvetSkins2, VelvetSkins3, VelvetSkins4, VelvetSkins5, VelvetSkins6, VelvetSkins7, VelvetSkins8, VelvetSkins9, VelvetSkins10, VelvetSkins11, VelvetSkins12, VelvetSkins13, VelvetSkins14, VelvetSkins15, VelvetSkins16]
    },
    {
      title: {
        el: 'Παραθαλασσιοι οικισμοι στο Προφήτη Ηλία Δ.Μαρωνειας ΠΕ Ροδόπης',
        en: 'Coastal settlements in Profitis Ilias, Maroneia, Rodopi'
      },
      description: {
        el: 'Κατασκευή τριών παραθεριστικών κατοικιών στον παραθαλάσσιο οικισμό Προφήτη Ηλία Δ.Μαρωνειας ΠΕ Ροδόπης.- εξέλιξη κατασκευής.',
        en: 'Construction of three holiday homes in the coastal settlement of Profitis Ilias, Maroneia, Rodopi - construction progress.'
      },
      images: [houseMaroneia, houseMaroneia2, houseMaroneia3, houseMaroneia4, houseMaroneia5]
    },
    {
      title: {
        el: 'Ανέγερση τριωροφης οικοδομής',
        en: 'Construction of three-story building'
      },
      description: {
        el: 'Αρχιτεκτονική μελέτη- ανέγερση τριωροφου οικοδομής επι πυλωτής με υπόγειο και με Σοφιτα στην Κομοτηνη-περιοχή Σιδ/κου Σταθμου. Πρόκειται για ιδιωτικό έργο και δεν πωλουνται οι ιδιοκτησιες.',
        en: 'Architectural study - construction of a three-story building with pilotis, basement and loft in Komotini-Railway Station area. This is a private project and the properties are not for sale.'
      },
      images: [threeStorybuilding, threeStorybuilding2, threeStorybuilding3, threeStorybuilding4]
    },
    {
      title: {
        el: 'Iσόγεια κεραμοσκεπους μονοκατοικία στην Κομοτηνη',
        en: 'Single-story tiled roof house in Komotini'
      },
      description: {
        el: 'Αποπεράτωση ισόγειας κεραμοσκεπους μονοκατοικίας στην Κομοτηνη.',
        en: 'Completion of a single-story tiled roof house in Komotini.'
      },
      images: [roofdetachedhouse, roofdetachedhouse2, roofdetachedhouse3, roofdetachedhouse4, roofdetachedhouse5, roofdetachedhouse6]
    },
    {
      title: {
        el: 'Αποπεράτωση δυο ισόγειων παραθεριστικών κατοικιών στον παραθαλάσσιο οικισμό Προφήτη Ηλία Ροδοπης',
        en: 'Completion of two ground-floor holiday homes in Profitis Ilias coastal settlement, Rodopi'
      },
      description: {
        el: 'Μελέτη, επίβλεψη, κατασκευή, Αποπεράτωση δυο ισόγειων παραθεριστικών κατοικιών των 50 τμ. συμβατικής κατασκευής low budget στον παραθαλάσσιο οικισμό Προφήτη Ηλία Ροδοπης.',
        en: 'Study, supervision, construction, Completion of two 50 sq.m. ground-floor holiday homes of conventional low-budget construction in Profitis Ilias coastal settlement, Rodopi.'
      },
      images: [groundFloorHolidayHomes, groundFloorHolidayHomes2, groundFloorHolidayHomes3, groundFloorHolidayHomes4, groundFloorHolidayHomes5, groundFloorHolidayHomes6, groundFloorHolidayHomes7]
    },
    {
      title: {
        el: 'Ανεγερση ισογειας παραθεριστικης μονοκατοικιας στον οικισμο Αρωγης ΠΕ Ροδοπης',
        en: 'Construction of a ground-floor holiday home in Arogi settlement, Rodopi'
      },
      description: {
        el: 'Ανεγερση ισογειας παραθεριστικης μονοκατοικιας 65 τμ, σε οικοπεδο 220 τμ, στον οικισμο Αρωγης ΠΕ Ροδοπης.',
        en: 'Construction of a 65 sq.m. ground-floor holiday home on a 220 sq.m. plot in Arogi settlement, Rodopi.'
      },
      images: [houseAtArogiRodopi, houseAtArogiRodopi2, houseAtArogiRodopi3, houseAtArogiRodopi4, houseAtArogiRodopi5, houseAtArogiRodopi6, houseAtArogiRodopi7, houseAtArogiRodopi8, houseAtArogiRodopi9, houseAtArogiRodopi10]
    },
    {
      title: {
        el: 'Maronia Rental apartments Resort - Παραλία Μαρώνειας, Αλκυώνα, Ροδόπη',
        en: 'Maronia Rental apartments Resort - Maronia seafront, Alkyona, Rodopi (Komotini) prefecture'
      },
      description: {
        el: 'Maronia Rental apartments Resort. Παραλία Μαρώνειας, Αλκυώνα, Νομός Ροδόπης. Αρχιτεκτονική, Πολιτική Μηχανική, Ανάπτυξη Ακινήτων, Ευρωπαϊκές Πιστοποιημένες Εκτιμήσεις, Επιχειρηματικές Άδειες, ΚΟΜΟΤΗΝΗ, ΜΑΡΩΝΕΙΑ, ΦΑΝΑΡΙ. Υλοποίηση ενός από τα πιο ενδιαφέροντα projects, Alkyona Retreat Resort, Οικισμός Αλκυώνας, Παραλία Μαρώνειας, Νομού Ροδόπης.',
        en: 'Maronia Rental apartments Resort. Maronia seafront, Alkyona, Rodopi (Komotini) prefecture. Architecture, Civil Engineering, Real Estate Development, European Certified Evaluations, Business Permits, KOMOTINI, MARONIA, FANARI. Implementation of one of the most interesting projects, Alkyona Retreat Resort, Alkyona Settlement, Maronia Beach, Rodopi Prefecture.'
      },
      images: [
        SmallRentalApartments1,
        SmallRentalApartments2,
        SmallRentalApartments3,
        SmallRentalApartments4,
        SmallRentalApartments5,
        SmallRentalApartments6
      ]
    },
    {
      title: {
        el: 'Παραλία Πλατανίτη Μαρώνειας, Συγκρότημα έξι θερινών κατοικιών',
        en: 'Maronia Platanitis beach summer retreat development - six small summer houses'
      },
      description: {
        el: 'Συγκρότημα θερινών κατοικιών, Πλατανίτης, Παραλία Μαρώνειας, Νομού Ροδόπης. Αρχιτεκτονική, Πολιτική Μηχανική, Ανάπτυξη Ακινήτων, Ευρωπαϊκές Πιστοποιημένες Εκτιμήσεις, Επιχειρηματικές Άδειες, ΚΟΜΟΤΗΝΗ, ΜΑΡΩΝΕΙΑ, ΦΑΝΑΡΙ. Yiannis Mavridis.',
        en: 'Maronia Platanitis beach summer retreat development-six small summer houses. Maronia seafront, Platanitis beach, Rodopi (Komotini) prefecture. Architecture, Civil Engineering, Real Estate Development, European Certified Evaluations, Business Permits, KOMOTINI, MARONIA, FANARI. Yiannis Mavridis.'
      },
      images: [
        MaroniaPlatanitis1,
        MaroniaPlatanitis2,
        MaroniaPlatanitis3,
        MaroniaPlatanitis4,
        MaroniaPlatanitis5
      ]
    },
    {
      title: {
        el: "Έρευνα αποτίμησης επισκευής φέροντος οργανισμού NDT (μη καταστροφική) για μελέτη προσθήκης καθ' ύψος, στην Κομοτηνή",
        en: "Non-destructive testing (NDT) assessment of structural system for vertical addition study in Komotini"
      },
      description: {
        el: "Μετρήσεις: pH, Χλωριόντων, Βαθμού διάβρωσης, Υγρασίας κατά βάρος σκυροδέματος, Ημιδυναμικό σκυροδέματος, θερμοκρασία σκυροδέματος, Σημείο δρόσου - εξάτμισης, Κρουσιμετρήσεις.",
        en: "Measurements: pH, Chlorides, Corrosion rate, Concrete moisture by weight, Concrete half-cell potential, Concrete temperature, Dew point - evaporation point, Impact measurements."
      },
      images: [
        structureRepairEval1,
        structureRepairEval2,
        structureRepairEval3,
        structureRepairEval4,
        structureRepairEval5,
        structureRepairEval6,
        structureRepairEval7
      ]
    },
    {
      title: {
        el: "Φωτορεαλισμός μονοκατοικίας - Ανέγερση διώροφης μονοκατοικίας",
        en: "House photorealism - Construction of a two-story house"
      },
      description: {
        el: "Φωτορεαλισμός μονοκατοικίας",
        en: "House photorealism"
      },
      images: [
        photorealismHouse1,
        photorealismHouse2,
        photorealismHouse3,
        photorealismHouse4,
        photorealismHouse5,
        photorealismHouse6,
        photorealismHouse7
      ]
    },
    {
      title: {
        el: "Ανέγερση οικοδομής χρήσης κατοικίας",
        en: "Construction of residential building"
      },
      description: {
        el: "ARCHInima αρχιτεκτονικό γραφείο, Νίκη Μαυρίδου, Αρχιτέκτων Μηχανικός, Ιωάννης Μαυρίδης, Πολιτικός Μηχανικός",
        en: "ARCHInima architectural office, Niki Mavridou, Architect Engineer, Ioannis Mavridis, Civil Engineer"
      },
      images: [constructionResidential]
    },
    {
      title: {
        el: "Ανέγερση ισόγειας μονοκατοικίας. Πρόοδος εργοταξίου- κατασκευαστικό στάδιο θερμοπρόσοψης-επιχρισμάτων",
        en: "Construction of a single-storey house. Construction site progress - thermal facade and plastering stage"
      },
      description: {
        el: "εκτιμήσεις, ταυτότητα κτιρίου, κτηματολόγιο, αυθαίρετα, έρευνα ακινήτων Ελλάδας, άδειες δόμησης Ελλάδας, Μαρώνεια, Φανάρι, Κομοτηνή",
        en: "valuations, building identity, cadastre, unauthorized buildings, Greek real estate research, Greek building permits, Maronia, Fanari, Komotini"
      },
      images: [
        singleStoreyHouse1,
        singleStoreyHouse2,
        singleStoreyHouse3,
        singleStoreyHouse4
      ]
    },
    {
      title: {
        el: "PenetronAdmix, step by step",
        en: "PenetronAdmix, step by step"
      },
      description: {
        el: "The step-by-step process",
        en: "The step-by-step process"
      },
      images: [penetronAdmix]
    },
    {
      title: {
        el: "Construction of a detached house - construction progress",
        en: "Construction of a detached house - construction progress"
      },
      description: {
        el: "Ανέγερση μονοκατοικίας- εξέλιξη κατασκευής- επιχρίσματα, εργασίες αποπεράτωσης",
        en: "Construction of a detached house - construction progress - plastering, completion works"
      },
      images: [
        constructionDetachedHouse1,
        constructionDetachedHouse2,
        constructionDetachedHouse3,
        constructionDetachedHouse4,
        constructionDetachedHouse5,
        constructionDetachedHouse6,
        constructionDetachedHouse7,
        constructionDetachedHouse8
      ]
    },
    {
      title: {
        el: "Ανέγερση μονοκατοικίας στην Κομοτηνή",
        en: "Construction of a detached house in Komotini"
      },
      description: {
        el: "Ανέγερση μονοκατοικίας στην Κομοτηνή. εξέλιξη κατασκεύης- επιχρίσματα",
        en: "Construction of a detached house in Komotini. construction progress - plastering"
      },
      images: [
        constructionOfDetachedHouse1,
        constructionOfDetachedHouse2,
        constructionOfDetachedHouse3
      ]
    },
    {
      title: {
        el: "Παραλια Πλατανιτη Μαρωνειας, Συγκροτημα εξι θερινων κατοικιων",
        en: "Platanitis Beach Maronia, Complex of six summer residences"
      },
      description: {
        el: "Επιθυμείτε να επενδύσετε στην παραλιακή ζώνη της Μαρώνειας; ή του Φαναρίου; Συγκρότημα θερινών κατοικιών , Πλατανίτης , Παραλία Μαρώνειας , Νομού Ροδόπης",
        en: "Would you like to invest in the coastal zone of Maronia? or Fanari? Summer residence complex, Platanitis, Maronia Beach, Rodopi Prefecture"
      },
      images: [
        summerResidenceComplex1,
        summerResidenceComplex2,
        summerResidenceComplex3,
        summerResidenceComplex4,
        summerResidenceComplex5,
        summerResidenceComplex6
      ]
    },
    {
      title: {
        el: "Προσθήκη καθ ύψος στην Κομοτηνή",
        en: "Vertical addition in Komotini"
      },
      description: {
        el: "Προσθήκη καθ ύψος στην Κομοτηνή, προετοιμασία εργασιών: Υδροβολή, Απόξεση, Προστατευτικό οπλισμού, Ενισχυτικό πρόσφυσης, Αγκυρώσεις, έλεγχος κλίσεων",
        en: "Vertical addition in Komotini, preparation works: Hydroblasting, Scraping, Reinforcement protection, Adhesion enhancer, Anchoring, slope control"
      },
      images: [heightIncreaseKomotini]
    },
    {
      title: {
        el: "Ανέγερση μονοκατοικίας στην Κομοτηνή",
        en: "Construction of a detached house in Komotini"
      },
      description: {
        el: "Ανέγερση μονοκατοικίας στην Κομοτηνή. εξέλιξη κατασκεύης- επιχρίσματα",
        en: "Construction of a detached house in Komotini. construction progress - plastering"
      },
      images: [
        constructionOfDetachedHouse1,
        constructionOfDetachedHouse2,
        constructionOfDetachedHouse3
      ]
    },
    {
      title: {
        el: "Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων",
        en: "Construction of Private Projects, Renovations, Waterproofing of terraces - balconies - basements"
      },
      description: {
        el: "Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer...",
        en: "Architectural Office, Civil Engineering Office MSc Civil Engineer..."
      },
      images: [
        constructionOfPrivateProjects1,
        constructionOfPrivateProjects2,
        constructionOfPrivateProjects3,
        constructionOfPrivateProjects4
      ]
    },
    {
      title: {
        el: "Παλαιότερα projects",
        en: "Past projects"
      },
      description: {
        el: "Αρχιτεκτονικές, Στατικές & Ενεργειακές Μελέτες (ΚΕΝΑΚ)\nΜελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Penetron, Αποτίμηση Φέρουσας Ικανότητας\nΠροσθήκες ορόφων, Ολοκληρωμένη Επίβλεψη & Διαχείριση Έργων\nΝομιμοποιήσεις Αυθαιρέτων, Ταυτότητα Κτιρίου, Άδειες Δόμησης & Λειτουργίας\nΕκτιμήσεις REV Ακινήτων, Ενεργειακά Πιστοποιητικά, Ελεγκτές Δόμησης & Προσβασιμότητας\nΑνακαινίσεις, Μονώσεις, Κατασκευή Ιδιωτικών Έργων\nΥποβολή επενδυτικών σχεδίων (ΕΣΠΑ - LEADER)",
        en: "Architectural, Structural & Energy Studies (KENAK)\nReinforcement Studies & KANEPE, Penetron, Load-bearing Capacity Assessment\nFloor additions, Complete Project Supervision & Management\nLegalization of Unauthorized Buildings, Building Identity, Building & Operating Permits\nREV Property Valuations, Energy Certificates, Building & Accessibility Inspectors\nRenovations, Insulation, Private Project Construction\nSubmission of investment plans (ESPA - LEADER)"
      },
      images: [
        mikelIkea1,
        mikelIkea2,
        mikelIkea3,
        mikelIkea4
      ]
    },
    {
      title: {
        el: "Ανέγερση τριών ομοίων παραθεριστικών ισογείων κατοικιών σε οικόπεδο στον οικισμό Προφήτη Ηλία Δ. Μαρωνειας -Σαπων ΠΕ Ροδόπης",
        en: "Construction of three identical holiday ground floor residences on a plot in Profitis Ilias settlement, Maroneia-Sapon, Rodopi"
      },
      description: {
        el: "Νίκη Μαυρίδου Yiannis Mavridis Γεωργιος Λαζαριδης Α. και Ι. Μαυρίδης και Σια ο.ε. - Real Estate Development & Consulting",
        en: "Niki Mavridou Yiannis Mavridis Georgios Lazaridis A. & I. Mavridis & Co. - Real Estate Development & Consulting"
      },
      images: [holidayGroundFloorResidences]
    },
    {
      title: {
        el: "Έρευνα βλαβών, αιτιών, αποκαταστάσεων, Μετρήσεις υγρασίας, Υλοποιήσεις αρχιτεκτονικών μελετών",
        en: "Investigation of damages, causes, restorations, Moisture measurements, Implementation of architectural studies"
      },
      description: {
        el: "Έρευνα βλαβών, αιτιών, αποκαταστάσεων, Μετρήσεις υγρασίας, Υλοποιήσεις αρχιτεκτονικών μελετών, Αρχιτεκτονικές μελέτες, Επίβλεψη ειδικών εργασιών, Μελέτες πολιτικού μηχανικού, Νομιμοποιήσεις, Έλεγχοι δόμησης, Έλεγχοι προσβασιμότητας, Προσεισμικός έλεγχος",
        en: "Investigation of damages, causes, restorations, Moisture measurements, Implementation of architectural studies, Architectural studies, Supervision of special works, Civil engineering studies, Legalizations, Building inspections, Accessibility controls, Pre-seismic control"
      },
      images: [
        damagesCausesRestorations1,
        damagesCausesRestorations2,
        damagesCausesRestorations3,
        damagesCausesRestorations4,
        damagesCausesRestorations5,
        damagesCausesRestorations6,
        damagesCausesRestorations7
      ]
    },
    {
      title: {
        el: "Construction in progress",
        en: "Construction in progress"
      },
      description: {
        el: "Construction in progress! Architect: Niki Mavridou , Civil Engineering: Ioannis Mavridis , Σύμβουλοι Μηχανικοί Ολοκληρωμένες υπηρεσίες και διαχείριση εργοταξίου, Civil Engineering , Architecture, offices , Komotini , Fanari , Maronia",
        en: "Construction in progress! Architect: Niki Mavridou , Civil Engineering: Ioannis Mavridis , Engineering Consultants Complete services and construction site management, Civil Engineering , Architecture, offices , Komotini , Fanari , Maronia"
      },
      images: [constructionInProgress]
    },
    {
      title: {
        el: "Γωνιακό οικόπεδο Αστικής μονοκατοικίας. Περιοχή εκτενεπολ",
        en: "Corner plot Urban detached house. Ektenepol area"
      },
      description: {
        el: "Excavation days! Γωνιακό οικόπεδο Αστικής μονοκατοικίας. Περιοχή εκτενεπολ. All set.",
        en: "Excavation days! Corner plot Urban detached house. Ektenepol area. All set."
      },
      images: [
        cornerPlotUrbanHouse1,
        cornerPlotUrbanHouse2
      ]
    },
    {
      title: {
        el: "Νέος επαγγελματικός χώρος",
        en: "New business space"
      },
      description: {
        el: "Αρχιτεκτονικός σχεδιασμός, Μελέτη, Πλήρης οργάνωση χρονοδιαγράμματος & Λειτουργική υλοποίηση. Νέος επαγγελματικός χώρος.",
        en: "Architectural design, Study, Complete timeline organization & Functional implementation. New business space."
      },
      images: [
        newBusinessSpace1,
        newBusinessSpace2,
        newBusinessSpace3
      ]
    },
    {
      title: {
        el: "Κατασκευή σε εξέλιξη!",
        en: "Construction in progress!"
      },
      description: {
        el: "Κατασκευή σε εξέλιξη! Πολιτικός Μηχανικός: Ioannis Mavridis , Σύμβουλοι Μηχανικοί Ολοκληρωμένες υπηρεσίες και διαχείριση εργοταξίου, Civil Engineering , Architecture, offices , Komotini , Fanari , Maronia",
        en: "Construction in progress! Civil Engineer: Ioannis Mavridis , Engineering Consultants Complete services and construction site management, Civil Engineering , Architecture, offices , Komotini , Fanari , Maronia"
      },
      images: [constructionProgress]
    },
    {
      title: {
        el: "In progress, Κομοτηνή",
        en: "In progress, Komotini"
      },
      description: {
        el: "In progress, Κομοτηνή",
        en: "In progress, Komotini"
      },
      images: [
        insideConstruction1,
        insideConstruction2
      ]
    },
    {
      title: {
        el: "πολυώροφα έργα κατοικιών. Κομοτηνή",
        en: "Multi-storey residential projects. Komotini"
      },
      description: {
        el: "πολυώροφα έργα κατοικιών Κομοτηνή.",
        en: "Multi-storey residential projects Komotini."
      },
      images: [
        pastMultiStoreyProjects1,
        pastMultiStoreyProjects2,
        pastMultiStoreyProjects3,
        pastMultiStoreyProjects4,
        pastMultiStoreyProjects5,
        pastMultiStoreyProjects6,
        pastMultiStoreyProjects7,
        pastMultiStoreyProjects8,
        pastMultiStoreyProjects9
      ]
    },
    {
      title: {
        el: "Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης",
        en: "Comprehensive engineering consulting services, Architectural study, Building legislation"
      },
      description: {
        el: "Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης, αδειών λειτουργίας καταστημάτων, αυθαιρέτων, Ταυτότητα Κτιρίου, Πιστοποιημένες εκτιμήσεις REV, Στατικές Μελέτες, Εφαρμογή, Κοστολόγηση κατά στάδιο, Επίβλεψη με χρονικό προγραμματισμό, Διαχείριση εργοταξίου ανέγερσης - ανακαίνισης επιχειρήσεων/κατοικιών, Ειδίκευση σε διάβρωση σκυροδέματος, επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων.",
        en: "Comprehensive engineering consulting services, Architectural study, Building legislation, business operating permits, unauthorized buildings, Building Identity, Certified REV valuations, Structural Studies, Implementation, Stage costing, Supervision with time scheduling, Construction site management for business/residential construction - renovation, Specialization in concrete corrosion, interventions in older buildings, Building repairs."
      },
      images: [
        constructionSiteManagement1,
        constructionSiteManagement2,
        constructionSiteManagement3,
        constructionSiteManagement4,
        constructionSiteManagement5,
        constructionSiteManagement6,
        constructionSiteManagement7,
        constructionSiteManagement8,
        constructionSiteManagement9
      ]
    },
    {
      title: {
        el: "Αρχιτεκτονικό Γραφείο - Παλαιότερα projects",
        en: "Architectural Office - Past projects"
      },
      description: {
        el: "Αρχιτεκτονικές, Στατικές & Ενεργειακές Μελέτες (ΚΕΝΑΚ)\nΜελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Penetron, Αποτίμηση Φέρουσας Ικανότητας\nΠροσθήκες ορόφων, Ολοκληρωμένη Επίβλεψη & Διαχείριση Έργων\nΝομιμοποιήσεις Αυθαιρέτων, Ταυτότητα Κτιρίου, Άδειες Δόμησης & Λειτουργίας\nΕκτιμήσεις REV Ακινήτων, Ενεργειακά Πιστοποιητικά, Ελεγκτές Δόμησης & Προσβασιμότητας\nΑνακαινίσεις, Μονώσεις, Κατασκευή Ιδιωτικών Έργων\nΥποβολή επενδυτικών σχεδίων (ΕΣΠΑ - LEADER)",
        en: "Architectural, Structural & Energy Studies (KENAK)\nReinforcement Studies & KANEPE, Penetron, Load Bearing Capacity Assessment\nFloor additions, Complete Supervision & Project Management\nLegalization of Unauthorized Buildings, Building Identity, Building & Operating Permits\nREV Property Valuations, Energy Certificates, Building & Accessibility Inspectors\nRenovations, Insulations, Private Project Construction\nSubmission of investment plans (ESPA - LEADER)"
      },
      images: [
        olderProjects1,
        olderProjects2,
        olderProjects3,
        olderProjects4
      ]
    },
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function(i: number) {
      return (
        <button
          type="button"
          className="w-2 h-2 mx-1 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity"
          aria-label={`Go to slide ${i + 1}`}
        />
      );
    }
  };

  const modalSliderSettings = {
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

  useEffect(() => {
    // Ορισμός title και meta description για SEO
    document.title = language === 'el' 
      ? 'Αρχιτεκτονικό Γραφείο | IN-MAVRIDIS - Σχεδιασμός, Μελέτες & Κατασκευές στην Κομοτηνή'
      : 'Architectural Office | IN-MAVRIDIS - Design, Studies & Construction in Komotini';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Ολοκληρωμένες αρχιτεκτονικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικός σχεδιασμός, μελέτες, κατασκευές, ανακαινίσεις και εσωτερική διακόσμηση. Εμπειρία 17+ ετών στον κλάδο.'
        : 'Comprehensive architectural services in Komotini, Greece. Architectural design, studies, construction, renovations and interior design. 17+ years of industry experience.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Ολοκληρωμένες αρχιτεκτονικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικός σχεδιασμός, μελέτες, κατασκευές, ανακαινίσεις και εσωτερική διακόσμηση. Εμπειρία 17+ ετών στον κλάδο.'
        : 'Comprehensive architectural services in Komotini, Greece. Architectural design, studies, construction, renovations and interior design. 17+ years of industry experience.';
      document.head.appendChild(meta);
    }
  }, [language]);

  const detailedServices = {
    el: [
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Αρχιτεκτονικός σχεδιασμός και αρχιτεκτονική μελέτη - επίβλεψη'
      },
      {
        icon: <Award className="w-5 h-5" />,
        text: 'Πιστοποημένη εκτιμήτρια ακινήτων - REV- Expert Valuer in Property Tegova, αρ μητρώου 552 του Υπ. Οικονομικών.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Έκδοση πλήρους φακέλου οικοδομικής άδειας (στατικά, η/μ μέλέτη, ΚΕΝΑΚ, καύσιμο αέριο, πυροπραστασία, φορολογικά, προυπολογισμός έργου κτλ.) και επίβλεψη του έργου.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Ενεργειακος Επιθεωρητης Α\'ταξης.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Έκδοση αδειών λειτουργίας υγειονομικού ενδιαφέροντος παντός τύπου (συνάθροιση κοινού, παρασκευστήρια κτλ.) με πλήρη φάκελο μελετών που απαιτούνται.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Ρυθμίσεις αυθαιρέτων, βεβαίωση νομιμότητας για μεταβιβάσεις κ.τ.λ.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Ενεργειακή επιθεώρηση - ένταξη στο πρόγραμμα "εξοικονομώ κατ\'οίκον" και σύνταξη πλήρους φακέλου.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Ελεγκτής δόμησης, ιδιότητα που επιτρέπει στον κύριο του έργου να είναι σε θέση να γνωρίζει τον τρόπο και τη διαδικασία ελέγχου.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Επιθεωρητης κτιριολογικων στο μητρωο επιθεωρητων του ΕΟΠΠΕΠ για κεντρα φροντιστηρια μεσης εκπαιδευσης, ξενων γλωσσων, κεντρα δια βιου μαθησης επιπεδου Ι και ΙΙ.'
      },
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Ανακαινίσεις (σχεδιασμός και κατασκευή έργου) διαμερισμάτων και καταστημάτων, με εξασφάλιση προνομιακών τιμών στη κατασκευή.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Διακόσμηση εσωτερικών χώρων, φωτορεαλιστική απεικόνιση, σχεδιασμός επίπλων, φωτορεαλισμός και virtual video.'
      }
    ],
    en: [
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Architectural design and architectural study - supervision'
      },
      {
        icon: <Award className="w-5 h-5" />,
        text: 'Certified property valuer - REV- Expert Valuer in Property Tegova, registry number 552 of the Ministry of Finance.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Issuance of complete building permit file (structural, E/M study, KENAK, fuel gas, fire protection, tax, project budget etc.) and project supervision.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Class A Energy Inspector.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Issuance of health-related operating licenses of all types (public gathering, preparation areas etc.) with complete study files as required.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Unauthorized building settlements, legality certificates for transfers etc.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Energy inspection - inclusion in the "Energy Saving at Home" program and preparation of complete file.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Building inspector, a qualification that allows the project owner to understand the method and process of inspection.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Building inspector in EOPPEP\'s registry for secondary education tutoring centers, foreign languages, lifelong learning centers level I and II.'
      },
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Renovations (design and construction) of apartments and stores, ensuring preferential construction prices.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Interior decoration, photorealistic rendering, furniture design, photorealism and virtual video.'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('architecturalOffice.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              {t('architecturalOffice.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.title')}
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.description')}
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services[language].map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  {service.link ? (
                    <Link 
                      to={service.link}
                      className="group inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {service.title}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  )}
                  <p className="text-gray-600 mt-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {language === 'el' ? 'Αναλυτικές Υπηρεσίες' : 'Detailed Services'}
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {detailedServices[language].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="text-blue-600 p-3 bg-blue-50 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {language === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Contact Us'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.projects.title')}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {selectedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64">
                  <Slider {...sliderSettings} className="relative" aria-label="Project images slider">
                    {project.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="h-64 cursor-pointer"
                        onClick={() => openImageModal(project.images, imgIndex)}
                      >
                        <img
                          src={image}
                          alt={`${project.title[language]} ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
                  <p className="text-gray-600 mb-2">{project.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>



      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.whyChooseUs.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(t('architecturalOffice.whyChooseUs.reasons') as string[]).map((item: string, index: number) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover-card"
                variants={itemVariants}
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
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
              <Slider {...modalSliderSettings}>
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

export default ArchitecturalOffice;