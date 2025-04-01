import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import con1 from '../assets/images/con1.jpg';
import con2 from '../assets/images/con2.jpg';
import con3 from '../assets/images/con3.jpg';
import con4 from '../assets/images/con4.jpg';
import brush from '../assets/images/brush.jpg';
import Construction_site_management from '../assets/images/Construction_site_management.jpg';
import Construction_site_management2 from '../assets/images/Construction_site_management2.jpg';
import VelvetSkins12 from '../assets/images/VelvetSkins12.jpg';
import VelvetSkins16 from '../assets/images/VelvetSkins16.jpg';
import renovation_image_1 from '../assets/images/business_residential_renovation10.jpg';
import renovation_image_2 from '../assets/images/Renovation_of_a_detached_house_in_the_center3.jpg';
import renovation_image_3 from '../assets/images/store_in_a_shopping_center2.jpg';
import renovation_image_4 from '../assets/images/Renovation_of_Second_detached_house_in_the_center4.jpg';
import renovation_image_5 from '../assets/images/store_in_a_shopping_center6.jpg';
import renovation_image_6 from '../assets/images/inside_construction2.jpg';
import renovation_image_7 from '../assets/images/mikel5.png';
import renovation_image_8 from '../assets/images/a2.jpg';

const Renovations = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Καταστάσεις για το modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const renovationImages = [
    {
      image: con1,
      title: {
        el: 'Ανακαίνιση Κατοικίας',
        en: 'House Renovation'
      }
    },
    {
      image: con2,
      title: {
        el: 'Ανακαίνιση Μπάνιου',
        en: 'Bathroom Renovation'
      }
    },
    {
      image: con3,
      title: {
        el: 'Ανακαίνιση Κουζίνας',
        en: 'Kitchen Renovation'
      }
    },
    {
      image: con4,
      title: {
        el: 'Εσωτερική Ανακαίνιση',
        en: 'Interior Renovation'
      }
    },
    {
      image: Construction_site_management2,
      title: {
        el: 'Ανακαίνιση Διαμερίσματος',
        en: 'Apartment Renovation'
      }
    },
    {
      image: Construction_site_management,
      title: {
        el: 'Ανακαίνιση Χώρου',
        en: 'Space Renovation'
      }
    },
    {
      image: VelvetSkins12,
      title: {
        el: 'Ολική Ανακαίνιση',
        en: 'Complete Renovation'
      }
    },
    {
      image: VelvetSkins16,
      title: {
        el: 'Ανακαίνιση Καταστήματος',
        en: 'Store Renovation'
      }
    },
    {
      image: renovation_image_1,
      title: {
        el: 'Ανακαίνιση Εξωτερικού Χώρου',
        en: 'Exterior Renovation'
      }
    },
    {
      image: renovation_image_2,
      title: {
        el: 'Ανακαίνιση Γραφείου',
        en: 'Office Renovation'
      }
    },
    {
      image: renovation_image_3,
      title: {
        el: 'Ανακαίνιση Επαγγελματικού Χώρου',
        en: 'Commercial Space Renovation'
      }
    },
    {
      image: renovation_image_4,
      title: {
        el: 'Ανακαίνιση Βεράντας',
        en: 'Terrace Renovation'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div 
        className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${brush})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('renovations.title')}
          </motion.h1>
          <motion.p
            className="text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t('renovations.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-10 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-700 border-b pb-4">
            {t('renovations.introduction.title')}
          </h2>
          <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line space-y-6">
            {t('renovations.introduction.description')}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {renovationImages.map((image, index) => (
          <img key={index} src={image.image} alt={image.title.el} className="w-full h-48 object-cover rounded-lg cursor-pointer" onClick={() => openModal(image.image)} />
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">✖</button>
          <img src={selectedImage!} alt="Selected" className="max-h-full max-w-full object-contain" />
        </div>
      )}

      <motion.div
        className="bg-blue-50 rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          {t('renovations.cta.title')}
        </h3>
        <p className="text-gray-700 mb-6">
          {t('renovations.cta.description')}
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
        >
          {t('renovations.cta.button')}
        </Link>
      </motion.div>
    </div>
  );
};

export default Renovations;