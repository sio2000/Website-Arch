import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Award, Ruler, FileText, Building, 
  Lightbulb, Zap, ClipboardCheck, Users, BadgeCheck, Home, Palette, Video, User, Building2, CheckCircle 
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import backofficeImage from '../assets/images/backoffice.png';
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import bb3Image from '../assets/images/bb3.jpg';

interface CeoItem {
  category: string;
  details: string[];
}

const EngineeringServices = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('engineeringServices.title');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Ολοκληρωμένες υπηρεσίες μηχανικού στην Κομοτηνή. Στατικές μελέτες, ενεργειακός σχεδιασμός, επιβλέψεις έργων.'
        : 'Comprehensive engineering services in Komotini. Structural studies, energy design, construction supervision.');
    }
  }, [language, t]);

  const renderBoldText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const ceoItems = language === 'el' ? [
    {
      category: "Πιστοποιήσεις / Achievements",
      details: [
        "Μόνιμος Ελεγκτής Προσεισμικού Ελέγχου",
        "Μόνιμος Ελεγκτής Δόμησης της μεγαλύτερης κατηγορίας",
        "Μόνιμος Ελεκγτής Προσβασιμότητας",
        "Ενεργειακός Επιθεωρητής",
        "Εργολάβος και δημοσίων έργων Ε.Δ.Ε. έως έτος 2020",
        "Μέλος συμβουλίου ΣΥΠΟΘΑ Α"
      ]
    },
    {
      category: "Πιστοποιήσεις",
      details: [
        "Πιστοποιητικό Επιμόρφωσης Project Management από Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών 2005",
        "Εξοικονόμηση Ενέργειας – Ενεργειακή αποδοτικότητα κτιρίων 2009",
        "Ενεργειακή Απόδοση κτιρίων 2011",
        "Κατάρτιση Ενεργειακών επιθεωρητών 2012",
        "Σχεδιασμός κτιρίων σκυροδέματος με βάση Ευρωκώδικες 2011",
        "Πιστοποίηση Τεχνικού Ασφαλείας 2014",
        "Εσωτερικός Επιθεωρητής συστημάτων διαχείρισης ποιότητας με το πρότυπο ISO 9001:2015 από TUV Austria 2017",
        "Πιστοποιημένος Επιθεωρητής Τουριστικών Καταλυμμάτων 2017"
      ]
    },
    {
      category: "Ειδίκευση",
      details: [
        "Στατικές μελέτες σκυροδέματος πολυορόφων κτιρίων",
        "Στατικές μελέτες",
        "Ενισχύσεις",
        "Αγκυρώσεις",
        "Προσθήκες καθ ύψος",
        "Στεγανώσεις",
        "Εφαρμογή πιστοποιημένου σύστηματος Penetron",
        "Μανδύες"
      ]
    }
  ] : [
    {
      category: "Certifications / Achievements",
      details: [
        "Permanent Pre-earthquake Inspector",
        "Permanent Building Inspector of the highest category",
        "Permanent Accessibility Inspector",
        "Energy Inspector",
        "Contractor and public works contractor until 2020",
        "Member of SYPOTHA A council"
      ]
    },
    {
      category: "Certifications",
      details: [
        "Project Management Training Certificate from National and Kapodistrian University of Athens 2005",
        "Energy Saving - Building Energy Efficiency 2009",
        "Building Energy Performance 2011",
        "Energy Inspectors Training 2012",
        "Concrete Building Design based on Eurocodes 2011",
        "Technical Safety Certification 2014",
        "Internal Auditor of quality management systems with ISO 9001:2015 from TUV Austria 2017",
        "Certified Tourist Accommodation Inspector 2017"
      ]
    },
    {
      category: "Specialization",
      details: [
        "Static studies of multi-story concrete buildings",
        "Static studies",
        "Reinforcements",
        "Anchorages",
        "Height additions",
        "Waterproofing",
        "Application of certified Penetron system",
        "Concrete jackets"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${backofficeImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('engineeringServices.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('engineeringServices.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* About ARCHInima Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6">ARCHInima</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  {language === 'el' 
                    ? 'Με σπουδές στη Σχολή Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (2000-2007) και μια φρέσκια, δημιουργική ματιά στην ελληνική αρχιτεκτονική και οικοδομική πραγματικότητα, ξεκίνησα το ταξίδι μου στον κόσμο του σχεδιασμού.'
                    : 'With studies at the Aristotle University of Thessaloniki (2000-2007) and a fresh, creative perspective on Greek architectural and construction reality, I began my journey in the world of design.'}
                </p>
                
                <p className="mb-6">
                  {language === 'el'
                    ? 'Μαζί με τον αδελφό μου, Ιωάννη Μαυρίδη, πολιτικό μηχανικό (MSc Structural Engineering, Univ. of Surrey, UK), και τις πολύτιμες συμβουλές του πατέρα μας, Ανέστη Μαυρίδη, μηχανικού με 30 χρόνια εμπειρίας στον κατασκευαστικό τομέα, αναλαμβάνουμε το έργο σας από την αρχή έως την ολοκλήρωσή του.'
                    : 'Together with my brother, Ioannis Mavridis, civil engineer (MSc Structural Engineering, Univ. of Surrey, UK), and the valuable advice of our father, Anestis Mavridis, an engineer with 30 years of experience in the construction sector, we undertake your project from start to finish.'}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {language === 'el' ? 'Αναλαμβάνουμε:' : 'We undertake:'}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el' 
                          ? renderBoldText('**Αρχιτεκτονικό σχεδιασμό**')
                          : renderBoldText('**Architectural design**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Μελέτη & προϋπολογισμό**')
                          : renderBoldText('**Study & budget**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Κατασκευή & διαχείριση έργου**')
                          : renderBoldText('**Construction & project management**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Εσωτερική διακόσμηση**')
                          : renderBoldText('**Interior decoration**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Ολοκληρωμένη καθοδήγηση προς την υλοποίηση κάθε οράματος**')
                          : renderBoldText('**Complete guidance towards realizing every vision**')}
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  {language === 'el'
                    ? 'Το ομαδικό πνεύμα, η θέληση και η φιλική διάθεση που μας χαρακτηρίζουν δημιουργούν έναν δεσμό εμπιστοσύνης με τους ανθρώπους που μας επιλέγουν. Για εμάς, η πραγματική επιτυχία δεν βρίσκεται μόνο στην ολοκλήρωση ενός έργου, αλλά στη δημιουργία σχέσεων που αντέχουν στον χρόνο.'
                    : 'The team spirit, willingness, and friendly attitude that characterize us create a bond of trust with the people who choose us. For us, real success lies not only in completing a project but in creating relationships that stand the test of time.'}
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[300px]">
              <img 
                src={photo1} 
                alt="ARCHInima Office" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* CEO Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'el' ? 'Γιάννης Μαυρίδης, Διευθύνων Σύμβουλος' : 'Ioannis Mavridis, CEO'}
              </h2>
            </motion.div>

            {/* Προσθήκη της εικόνας */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[600px] md:h-[800px] rounded-xl overflow-hidden">
                <img 
                  src={photo2} 
                  alt="Γιάννης Μαυρίδης" 
                  className="absolute inset-0 w-full h-full object-contain scale-75 md:scale-90"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Πιστοποιήσεις / Achievements */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {language === 'el' ? 'Πιστοποιήσεις / Achievements' : 'Certifications / Achievements'}
                </h3>
                <ul className="space-y-3">
                  {language === 'el' ? [
                    "Μόνιμος Ελεγκτής Προσεισμικού Ελέγχου",
                    "Μόνιμος Ελεγκτής Δόμησης της μεγαλύτερης κατηγορίας",
                    "Μόνιμος Ελεκγτής Προσβασιμότητας",
                    "Ενεργειακός Επιθεωρητής",
                    "Εργολάβος και δημοσίων έργων Ε.Δ.Ε. έως έτος 2020",
                    "Μέλος συμβουλίου ΣΥΠΟΘΑ Α"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  )) : [
                    "Permanent Pre-earthquake Inspector",
                    "Permanent Building Inspector of the highest category",
                    "Permanent Accessibility Inspector",
                    "Energy Inspector",
                    "Contractor and public works contractor until 2020",
                    "Member of SYPOTHA A council"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Πιστοποιήσεις */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {language === 'el' ? 'Πιστοποιήσεις' : 'Certifications'}
                </h3>
                <ul className="space-y-3">
                  {language === 'el' ? [
                    "Πιστοποιητικό Επιμόρφωσης Project Management από Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών 2005",
                    "Εξοικονόμηση Ενέργειας – Ενεργειακή αποδοτικότητα κτιρίων 2009",
                    "Ενεργειακή Απόδοση κτιρίων 2011",
                    "Κατάρτιση Ενεργειακών επιθεωρητών 2012",
                    "Σχεδιασμός κτιρίων σκυροδέματος με βάση Ευρωκώδικες 2011",
                    "Πιστοποίηση Τεχνικού Ασφαλείας 2014",
                    "Εσωτερικός Επιθεωρητής συστημάτων διαχείρισης ποιότητας με το πρότυπο ISO 9001:2015 από TUV Austria 2017",
                    "Πιστοποιημένος Επιθεωρητής Τουριστικών Καταλυμμάτων 2017"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  )) : [
                    "Project Management Training Certificate from National and Kapodistrian University of Athens 2005",
                    "Energy Saving - Building Energy Efficiency 2009",
                    "Building Energy Performance 2011",
                    "Energy Inspectors Training 2012",
                    "Concrete Building Design based on Eurocodes 2011",
                    "Technical Safety Certification 2014",
                    "Internal Auditor of quality management systems with ISO 9001:2015 from TUV Austria 2017",
                    "Certified Tourist Accommodation Inspector 2017"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Ειδίκευση */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {language === 'el' ? 'Ειδίκευση' : 'Specialization'}
                </h3>
                <ul className="space-y-3">
                  {language === 'el' ? [
                    "Στατικές μελέτες σκυροδέματος πολυορόφων κτιρίων",
                    "Στατικές μελέτες",
                    "Ενισχύσεις",
                    "Αγκυρώσεις",
                    "Προσθήκες καθ ύψος",
                    "Στεγανώσεις",
                    "Εφαρμογή πιστοποιημένου σύστηματος Penetron",
                    "Μανδύες"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  )) : [
                    "Static studies of multi-story concrete buildings",
                    "Static studies",
                    "Reinforcements",
                    "Anchorages",
                    "Height additions",
                    "Waterproofing",
                    "Application of certified Penetron system",
                    "Concrete jackets"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url(${bb3Image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative max-w-7xl mx-auto px-4 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {t('engineeringServices.aboutUs.title')}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {t('engineeringServices.aboutUs.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/about-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Η Εμπειρία μας Section */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">
                {language === 'el' ? 'Γιάννης Μαυρίδης - Εμπειρία' : 'Giannis Mavridis - Experience'}
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el' 
                      ? <><span className="font-bold">25 ετής</span> συνεχής εμπειρία στον Τομέα Στατικών Μελετών Αντισεισμικού Σχεδιασμού και Κατασκευής Κτιρίων από Οπλισμένο Σκυρόδεμα, με επιπλέον εξειδίκευση στον Σχεδιασμό κατά της Διάβρωσης Σκυροδέματος.</>
                      : <><span className="font-bold">25 years</span> of continuous experience in Structural Studies of Seismic Design and Construction of Reinforced Concrete Buildings, with additional specialization in Design against Concrete Corrosion.</>}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? <><span className="font-bold">10 ετής</span> εμπειρία στον τομέα του Ενεργειακού Σχεδιασμού κατά ΚΕΝΑΚ, και στις Ενεργειακές Μελέτες και Ενεργειακές Επιθεωρήσεις. Διεκπεραίωση προγράμματος <span className="font-bold">"Εξοικονομώ κατ\' Οίκον"</span>.</>
                      : <><span className="font-bold">10 years</span> of experience in Energy Design according to KENAK, and in Energy Studies and Energy Inspections. Implementation of the <span className="font-bold">"Save at Home"</span> program.</>}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? <><span className="font-bold">Πιστοποιημένος Ελεγκτής Δόμησης</span> της μεγαλύτερης κατηγορίας Έργων.</>
                      : <><span className="font-bold">Certified Building Inspector</span> of the highest category of Projects.</>}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? <><span className="font-bold">17 ετής</span> εμπειρία στην Κατασκευή Ιδιωτικών Έργων – <span className="font-bold">6 ετής</span> εμπειρία στον τομέα Δημοσίων Έργων.</>
                      : <><span className="font-bold">17 years</span> of experience in Private Projects Construction – <span className="font-bold">6 years</span> of experience in Public Projects.</>}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? <><span className="font-bold">8 ετής</span> εμπειρία στον Τομέα Εκτιμήσεων Ακινήτων (Πανελλήνια Τράπεζα, Ασπίς Τράπεζα, Αγροτική Τράπεζα, Τράπεζα Πειραιώς).</>
                      : <><span className="font-bold">8 years</span> of experience in Real Estate Appraisals (Panellinia Bank, Aspis Bank, Agricultural Bank, Piraeus Bank).</>}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? 'Εμπειρία σε Τεχνικές Πραγματογνωμοσύνες (ΤΕΕ Θράκης, ιδιωτών, Δικαστηρίων).'
                      : 'Experience in Technical Expert Reports (TEE of Thrace, private individuals, Courts).'}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? 'Μέλος της Μόνιμης Επιτροπής Χωροταξίας και Περιβάλλοντος του ΤΕΕ Θράκης.'
                      : 'Member of the Permanent Committee for Urban Planning and Environment of TEE Thrace.'}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? 'Άδειες Δόμησης, Άδειες λειτουργίας Καταστημάτων, Καταστημάτων Υγειονομικού Ενδιαφέροντος, Βιοτεχνιών, Μεταποιητικών επιχειρήσεων, Άδειες διατήρησης σταύλων.'
                      : 'Building Permits, Store Operation Licenses, Health-Related Establishments, Craft Industries, Manufacturing Companies, Stable Maintenance Permits.'}
                  </span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    {language === 'el'
                      ? <><span className="font-bold">Πιστοποιημένος Επιθεωρητής Καταλυμάτων</span> για Κατηγοριοποίηση Ξενοδοχειακών Μονάδων (Αστεροποίηση) / Ενοικιαζόμενων Δωματίων (Κλειδιά) <span className="font-bold">TUV Austria</span></>
                      : <><span className="font-bold">Certified Accommodation Inspector</span> for Hotel Unit Classification (Star Rating) / Rental Rooms (Keys) <span className="font-bold">TUV Austria</span></>}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>



        {/* Our Services Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center text-blue-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('engineeringServices.servicesTitle')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('engineeringServices.servicesItems').map((service: string, index: number) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {/* ... εικονίδιο ... */}
                  </div>
                  <p className="text-gray-700">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringServices; 