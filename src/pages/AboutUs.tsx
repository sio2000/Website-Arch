import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import constructionImage from '../assets/images/construction.jpg';
import buildingImage from '../assets/images/building.jpg';
import architectureImage from '../assets/images/pr1.jpg';
import realEstateImage from '../assets/images/real estate.jpg';
import officeImage from '../assets/images/office.jpg';

const AboutUs = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    // SEO - Dynamic title and meta description
    document.title = language === 'el' 
      ? 'Σχετικά με Εμάς | IN-MAVRIDIS - Αρχιτεκτονικό Γραφείο & Τεχνικές Υπηρεσίες'
      : 'About Us | IN-MAVRIDIS - Architectural Office & Technical Services';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Το γραφείο IN-MAVRIDIS προσφέρει υψηλής ποιότητας αρχιτεκτονικές και τεχνικές υπηρεσίες στην Κομοτηνή και τη Θράκη. 40+ χρόνια εμπειρίας στον κατασκευαστικό τομέα.'
        : 'IN-MAVRIDIS office offers high-quality architectural and technical services in Komotini and Thrace. 40+ years of experience in the construction sector.'
      );
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          {t('aboutUs.title')}
        </h1>
        <p className="text-lg text-center mb-8 text-gray-700">
          {t('aboutUs.description')}
        </p>
        <img src={realEstateImage} alt="Real Estate" className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg" />

        <h2 className="text-3xl font-bold mb-4 text-blue-500">{t('aboutUs.subTitle')}</h2>
        <p className="text-lg text-center mb-8 text-gray-700">
          {t('aboutUs.details')}
        </p>
        <img src={officeImage} alt="Office" className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg" />

        <h2 className="text-3xl font-bold mb-4 text-blue-500">{t('aboutUs.touristAttractions.title')}</h2>
        <ul className="list-disc list-inside mb-8 text-gray-700">
          {(t('aboutUs.touristAttractions.items') as string[]).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <img src={constructionImage} alt="Construction" className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg" />

        <h2 className="text-3xl font-bold mb-4 text-blue-500">{t('aboutUs.constructionServices.title')}</h2>
        <p className="text-lg mb-8 text-gray-700">
          {t('aboutUs.constructionServices.description')}
        </p>
        <img src={buildingImage} alt="Building" className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg" />

        <h3 className="text-2xl font-bold mb-4 text-blue-500">{t('aboutUs.constructionServicesList.title')}</h3>
        <ul className="list-disc list-inside mb-8 text-gray-700">
          {(t('aboutUs.constructionServicesList.items') as string[]).map((service: string, index: number) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold mb-4 text-blue-500">{t('aboutUs.certifications.title')}</h2>
        <ul className="list-disc list-inside mb-8 text-gray-700">
          {(t('aboutUs.certifications.items') as string[]).map((certification: string, index: number) => (
            <li key={index}>{certification}</li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold mb-4 text-blue-500">{t('aboutUs.recentProjects.title')}</h2>
        <p className="text-lg mb-8 text-gray-700">
          {t('aboutUs.recentProjects.description')}
        </p>
        <p className="text-lg mb-8 text-gray-700">
          {t('aboutUs.recentProjects.conclusion')}
        </p>

        {/* Κουμπιά */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link to="/portfolio" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
            {t('aboutUs.portfolioButton')}
          </Link>
          <Link to="/blog" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold">
            {t('aboutUs.blogButton')}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;