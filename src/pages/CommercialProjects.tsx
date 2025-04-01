import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import StoreShoppingCenter1 from '../assets/images/store_in_a_shopping_center.jpg';
import StoreShoppingCenter2 from '../assets/images/store_in_a_shopping_center2.jpg';
import StoreShoppingCenter3 from '../assets/images/store_in_a_shopping_center3.jpg';
import StoreShoppingCenter4 from '../assets/images/store_in_a_shopping_center4.jpg';
import StoreShoppingCenter5 from '../assets/images/store_in_a_shopping_center5.jpg';
import StoreShoppingCenter6 from '../assets/images/store_in_a_shopping_center6.jpg';
import StoreShoppingCenter7 from '../assets/images/store_in_a_shopping_center7.jpg';
import StoreShoppingCenter8 from '../assets/images/store_in_a_shopping_center8.jpg';
import StoreShoppingCenter9 from '../assets/images/store_in_a_shopping_center9.jpg';
import mikel from '../assets/images/mikel.jpg';
import mikel2 from '../assets/images/mikel2.jpg';
import mikel3 from '../assets/images/mikel3.jpg';
import mikel4 from '../assets/images/mikel4.png';
import mikel5 from '../assets/images/mikel5.png';
import mikeloutside from '../assets/images/mikeloutside.jpg';
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
import IKEA from '../assets/images/IKEA.jpg';
import IKEA2 from '../assets/images/IKEA2.jpg';
import RetailStore from '../assets/images/Retail-store.jpg';
import RetailStore2 from '../assets/images/Retail-store2.jpg';
import RetailStore3 from '../assets/images/Retail-store3.jpg';
import RetailStore4 from '../assets/images/Retail-store4.jpg';
import RetailStore5 from '../assets/images/Retail-store5.jpg';
import RetailStore6 from '../assets/images/Retail-store6.jpg';
import RetailStore7 from '../assets/images/Retail-store7.jpg';
import JewelryStore from '../assets/images/Jewelry-Store.jpg';
import JewelryStore2 from '../assets/images/Jewelry-Store2.jpg';
import JewelryStore3 from '../assets/images/Jewelry-Store3.jpg';
import JewelryStore4 from '../assets/images/Jewelry-Store4.jpg';
import JewelryStore5 from '../assets/images/Jewelry-Store5.jpg';
import BusinessHeadquarters from '../assets/images/Business-Headquarters.jpg';
import BusinessHeadquarters2 from '../assets/images/Business-Headquarters2.jpg';
import BusinessHeadquarters3 from '../assets/images/Business-Headquarters3.jpg';
import BusinessHeadquarters4 from '../assets/images/Business-Headquarters4.jpg';
import BusinessHeadquarters5 from '../assets/images/Business-Headquarters5.jpg';
import KLP from '../assets/images/KLP.jpg';
import KLP2 from '../assets/images/KLP2.jpg';
import KLP3 from '../assets/images/KLP3.jpg';
import KLP4 from '../assets/images/KLP4.jpg';
import KLP5 from '../assets/images/KLP5.jpg';
import KLP6 from '../assets/images/KLP6.jpg';
import PHYSIOanaplasis from '../assets/images/PHYSIOanaplasis.jpg';
import PHYSIOanaplasis2 from '../assets/images/PHYSIOanaplasis2.jpg';
import PHYSIOanaplasis3 from '../assets/images/PHYSIOanaplasis3.jpg';
import PHYSIOanaplasis4 from '../assets/images/PHYSIOanaplasis4.jpg';

const CommercialProjects = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({});

  const projects = [
    {
      title: {
        el: 'Κατάστημα σε Εμπορικό κέντρο',
        en: 'Store in Shopping Center'
      },
      description: {
        el: 'Σχεδιασμός και κατασκευή καταστήματος σε εμπορικό κέντρο',
        en: 'Design and construction of store in shopping center'
      },
      images: [StoreShoppingCenter1, StoreShoppingCenter2, StoreShoppingCenter3, StoreShoppingCenter4, 
               StoreShoppingCenter5, StoreShoppingCenter6, StoreShoppingCenter7, StoreShoppingCenter8, StoreShoppingCenter9]
    },
    {
      title: {
        el: 'Mikel Κομοτηνής',
        en: 'Mikel Komotini'
      },
      description: {
        el: 'Επαγγελματικός χώρος',
        en: 'Professional space'
      },
      images: [mikel, mikel2, mikel3, mikel4, mikel5, mikeloutside]
    },
    {
      title: {
        el: 'Velvet Skins Laser and Face Center Κομοτηνή',
        en: 'Velvet Skins Laser and Face Center Komotini'
      },
      description: {
        el: 'Αρχιτεκτονικός σχεδιασμός, Μελέτη, Πλήρης οργάνωση χρονοδιαγράμματος & Λειτουργική υλοποίηση',
        en: 'Architectural design, Study, Complete schedule organization & Functional implementation'
      },
      images: [VelvetSkins2, VelvetSkins3, VelvetSkins4, VelvetSkins5, VelvetSkins6, VelvetSkins7, VelvetSkins8,
               VelvetSkins9, VelvetSkins10, VelvetSkins11, VelvetSkins12, VelvetSkins13, VelvetSkins14, VelvetSkins15, VelvetSkins16]
    },
    {
      title: {
        el: 'IKEA',
        en: 'IKEA'
      },
      description: {
        el: 'Επαγγελματικός χώρος',
        en: 'Professional space'
      },
      images: [IKEA, IKEA2]
    },
    {
      title: {
        el: 'Retail Store',
        en: 'Retail Store'
      },
      description: {
        el: 'Μοντέρνα διαμόρφωση εμπορικού χώρου με έμφαση στη λειτουργικότητα και την αισθητική',
        en: 'Modern retail space design with emphasis on functionality and aesthetics'
      },
      images: [RetailStore, RetailStore2, RetailStore3, RetailStore4, RetailStore5, RetailStore6, RetailStore7]
    },
    {
      title: {
        el: 'Jewelry Store',
        en: 'Jewelry Store'
      },
      description: {
        el: 'Κομψός σχεδιασμός καταστήματος κοσμημάτων με έμφαση στην ανάδειξη των προϊόντων',
        en: 'Elegant jewelry store design with emphasis on product presentation'
      },
      images: [JewelryStore, JewelryStore2, JewelryStore3, JewelryStore4, JewelryStore5]
    },
    {
      title: {
        el: 'Business Headquarters',
        en: 'Business Headquarters'
      },
      description: {
        el: 'Σύγχρονος σχεδιασμός επαγγελματικών χώρων με έμφαση στην εργονομία και την παραγωγικότητα',
        en: 'Modern business space design with emphasis on ergonomics and productivity'
      },
      images: [BusinessHeadquarters, BusinessHeadquarters2, BusinessHeadquarters3, BusinessHeadquarters4, BusinessHeadquarters5]
    },
    {
      title: {
        el: 'KLP- Φροντιστήριο',
        en: 'KLP- Tutorial Center'
      },
      description: {
        el: 'Έχοντας ως αφετηρία έναν ανοικτό ισόγειο επαγγελματικό χώρο, βασικός στόχος αποτελούσε η δημιουργία πέντε φωτεινών και δημιουργικά επενδυμένων αιθουσών διδασκαλίας...',
        en: 'Starting with an open ground floor professional space, the main goal was to create five bright and creatively invested classrooms...'
      },
      images: [KLP, KLP2, KLP3, KLP4, KLP5, KLP6]
    },
    {
      title: {
        el: 'PHYSIOanaplasis',
        en: 'PHYSIOanaplasis'
      },
      description: {
        el: 'Ένας πολυχώρος φυσικοθεραπείας, που αποσκοπεί τόσο στην επούλωση τραυματισμών, όσο και στην ενδυνάμωση και περαιτέρω άσκηση...',
        en: 'A physiotherapy complex, aimed at both healing injuries and strengthening and further exercise...'
      },
      images: [PHYSIOanaplasis, PHYSIOanaplasis2, PHYSIOanaplasis3, PHYSIOanaplasis4]
    }
  ];

  const handlePrevImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] > 0 ? prev[projectIndex] - 1 : projects[projectIndex].images.length - 1
    }));
  };

  const handleNextImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] || 0) < projects[projectIndex].images.length - 1 ? (prev[projectIndex] || 0) + 1 : 0
    }));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRight className="text-white" />,
    prevArrow: <ChevronLeft className="text-white" />
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
          {language === 'el' ? 'Έργα Εμπορικών Επιχειρήσεων' : 'Commercial Business Projects'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedImages(project.images);
                setIsModalOpen(true);
              }}
            >
              <div className="relative h-64">
                <img
                  src={project.images[currentImageIndexes[index] || 0]}
                  alt={project.title[language]}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.src = 'fallback-image.jpg';
                  }}
                />
                {project.images.length > 1 && (
                  <>
                    {/* Navigation Arrows */}
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => handlePrevImage(index, e)}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => handleNextImage(index, e)}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    {/* Image Counter */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {(currentImageIndexes[index] || 0) + 1} / {project.images.length}
                    </div>
                  </>
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

export default CommercialProjects; 