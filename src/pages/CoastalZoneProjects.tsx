import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import plataniti from '../assets/images/plataniti.jpg';
import plataniti2 from '../assets/images/plataniti2.jpg';
import plataniti3 from '../assets/images/plataniti3.jpg';
import plataniti4 from '../assets/images/plataniti4.jpg';
import MaroniaRentalApartmentsResort from '../assets/images/maronia-rental-apartments-resort.jpg';
import MaroniaRentalApartmentsResort2 from '../assets/images/maronia-rental-apartments-resort2.jpg';
import MaroniaRentalApartmentsResort3 from '../assets/images/maronia-rental-apartments-resort3.jpg';
import MaroniaRentalApartmentsResort4 from '../assets/images/maronia-rental-apartments-resort4.jpg';
import MaroniaRentalApartmentsResort5 from '../assets/images/maronia-rental-apartments-resort5.jpg';
import houseMaroneia2 from '../assets/images/houseMaroneia2.jpg';
import houseMaroneia3 from '../assets/images/houseMaroneia3.jpg';
import houseMaroneia4 from '../assets/images/houseMaroneia4.jpg';
import houseMaroneia5 from '../assets/images/houseMaroneia5.jpg';
import groundFloorHolidayHomes from '../assets/images/ground-floor_holiday_homes.jpg';
import groundFloorHolidayHomes2 from '../assets/images/ground-floor_holiday_homes2.jpg';
import groundFloorHolidayHomes3 from '../assets/images/ground-floor_holiday_homes3.jpg';
import groundFloorHolidayHomes4 from '../assets/images/ground-floor_holiday_homes4.jpg';
import groundFloorHolidayHomes5 from '../assets/images/ground-floor_holiday_homes5.jpg';
import groundFloorHolidayHomes6 from '../assets/images/ground-floor_holiday_homes6.jpg';
import groundFloorHolidayHomes7 from '../assets/images/ground-floor_holiday_homes7.jpg';
import summerResidenceComplex1 from '../assets/images/Summer_residence_complex.jpg';
import summerResidenceComplex2 from '../assets/images/Summer_residence_complex2.jpg';
import summerResidenceComplex3 from '../assets/images/Summer_residence_complex3.jpg';
import summerResidenceComplex4 from '../assets/images/Summer_residence_complex4.jpg';
import summerResidenceComplex5 from '../assets/images/Summer_residence_complex5.jpg';
import summerResidenceComplex6 from '../assets/images/Summer_residence_complex6.jpg';
import holidayGroundFloorResidences from '../assets/images/holiday_ground_floor_residences.jpg';

// Import new images
import houseParaliaArogi from '../assets/images/house_in_Paralia_Arogi.jpg';
import houseParaliaArogi2 from '../assets/images/house_in_Paralia_Arogi2.jpg';
import houseParaliaArogi3 from '../assets/images/house_in_Paralia_Arogi3.jpg';
import SmallRentalApartments1 from '../assets/images/Small_Rental_apartments1.jpg';
import SmallRentalApartments2 from '../assets/images/Small_Rental_apartments2.jpg';
import SmallRentalApartments3 from '../assets/images/Small_Rental_apartments3.jpg';
import SmallRentalApartments4 from '../assets/images/Small_Rental_apartments4.jpg';
import SmallRentalApartments5 from '../assets/images/Small_Rental_apartments5.jpg';
import SmallRentalApartments6 from '../assets/images/Small_Rental_apartments6.jpg';
import MaroniaPlatanitis from '../assets/images/Maronia_Platanitis_beach.jpg';
import MaroniaPlatanitis2 from '../assets/images/Maronia_Platanitis_beach2.jpg';
import MaroniaPlatanitis3 from '../assets/images/Maronia_Platanitis_beach3.jpg';
import MaroniaPlatanitis4 from '../assets/images/Maronia_Platanitis_beach4.jpg';
import MaroniaPlatanitis5 from '../assets/images/Maronia_Platanitis_beach5.jpg';

const CoastalZoneProjects = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: {
        el: 'Παραλία Πλατανίτη Μαρώνειας, Συγκρότημα έξι θερινών κατοικιών',
        en: 'Maronia Platanitis Beach, Complex of six summer houses'
      },
      description: {
        el: 'Επιθυμείτε να επενδύσετε σε νέο ακίνητο ή γη στη Μαρώνεια ή το Φανάρι;',
        en: 'You wish to invest in new property or land at Maronia or Fanari?'
      },
      images: [plataniti, plataniti2]
    },
    {
      title: {
        el: 'Επένδυση στην παραλιακή ζώνη της Μαρώνειας ή του Φαναρίου',
        en: 'Investment in coastal zone of Maronia or Fanari'
      },
      description: {
        el: 'Παραλία Πλατανίτη Μαρώνειας, Συγκρότημα έξι θερινών κατοικιών',
        en: 'Maronia Platanitis beach summer retreat development-six small summer houses'
      },
      images: [plataniti3, plataniti4]
    },
    {
      title: {
        el: 'Μαρώνεια Ενοικιαζόμενα διαμερίσματα Resort',
        en: 'Maronia Rental Apartments Resort'
      },
      description: {
        el: 'Παραθαλάσσια Μαρώνεια, Αλκυώνα, νομός Ροδόπης (Κομοτηνή)',
        en: 'Seaside Maronia, Alkiona, Rodopi Prefecture (Komotini)'
      },
      images: [
        MaroniaRentalApartmentsResort,
        MaroniaRentalApartmentsResort2,
        MaroniaRentalApartmentsResort3,
        MaroniaRentalApartmentsResort4,
        MaroniaRentalApartmentsResort5
      ]
    },
    {
      title: {
        el: 'Κατοικία στη Μαρώνεια',
        en: 'House in Maronia'
      },
      description: {
        el: 'Μελέτη και κατασκευή κατοικίας στη Μαρώνεια',
        en: 'Study and construction of house in Maronia'
      },
      images: [houseMaroneia2, houseMaroneia3, houseMaroneia4, houseMaroneia5]
    },
    {
      title: {
        el: 'Ισόγειες Παραθεριστικές Κατοικίες',
        en: 'Ground Floor Holiday Homes'
      },
      description: {
        el: 'Κατασκευή ισόγειων παραθεριστικών κατοικιών',
        en: 'Construction of ground floor holiday homes'
      },
      images: [
        groundFloorHolidayHomes,
        groundFloorHolidayHomes2,
        groundFloorHolidayHomes3,
        groundFloorHolidayHomes4,
        groundFloorHolidayHomes5,
        groundFloorHolidayHomes6,
        groundFloorHolidayHomes7
      ]
    },
    {
      title: {
        el: 'Συγκρότημα Θερινών Κατοικιών Πλατανίτης',
        en: 'Summer Residence Complex Platanitis'
      },
      description: {
        el: 'Επένδυση στην παραλιακή ζώνη της Μαρώνειας',
        en: 'Investment in the coastal zone of Maronia'
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
        el: 'Παραθεριστικές Ισόγειες Κατοικίες',
        en: 'Holiday Ground Floor Residences'
      },
      description: {
        el: 'Τρεις όμοιες παραθεριστικές κατοικίες στον Προφήτη Ηλία',
        en: 'Three identical holiday homes in Profitis Ilias'
      },
      images: [holidayGroundFloorResidences]
    },
    {
      title: {
        el: 'Μονοκατοικία στην Παραλία Αρωγής',
        en: 'House in Arogi Beach'
      },
      description: {
        el: 'Αρχιτεκτονική μελέτη, Στατική μελέτη, ισόγειας μονοκατοικίας 50 τ.μ. με σοφίτα 25 τ.μ.',
        en: 'Architectural study, Static study, ground floor house 50 sq.m. with 25 sq.m. loft'
      },
      images: [houseParaliaArogi, houseParaliaArogi2, houseParaliaArogi3]
    },
    {
      title: {
        el: 'Maronia Rental apartments Resort',
        en: 'Maronia Rental Apartments Resort'
      },
      description: {
        el: 'Συγκρότημα ενοικιαζόμενων διαμερισμάτων στη Μαρώνεια',
        en: 'Rental apartments complex in Maronia'
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
        el: 'Παραλία Πλατανίτη Μαρώνειας',
        en: 'Platanitis Beach Maronia'
      },
      description: {
        el: 'Συγκρότημα έξι θερινών κατοικιών',
        en: 'Complex of six summer residences'
      },
      images: [
        MaroniaPlatanitis,
        MaroniaPlatanitis2,
        MaroniaPlatanitis3,
        MaroniaPlatanitis4,
        MaroniaPlatanitis5
      ]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    nextArrow: <ChevronRight className="text-white" />,
    prevArrow: <ChevronLeft className="text-white" />
  };

  // Add console.log to debug
  console.log('Projects:', projects);
  console.log('Selected Images:', selectedImages);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {language === 'el' 
            ? 'Έργα Ανάπλασης Παραλιακών ζωνών'
            : 'Coastal Zone Regeneration Projects'}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedImages(project.images);
                setIsModalOpen(true);
              }}
            >
              <div className="relative h-64">
                <img
                  src={project.images[0]}
                  alt={project.title[language]}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.src = 'fallback-image.jpg'; // Add a fallback image
                  }}
                />
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    1 / {project.images.length}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600">
                  {project.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              className="absolute top-4 right-4 text-white z-10 p-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="w-full max-w-6xl">
              <Slider {...sliderSettings}>
                {selectedImages.map((image, index) => (
                  <div key={index} className="outline-none">
                    <div className="flex items-center justify-center h-[80vh]">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => console.error('Modal image failed to load:', e)}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoastalZoneProjects; 