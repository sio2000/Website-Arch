import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ArchitecturalOffice from '../pages/ArchitecturalOffice';
import EngineeringServices from '../pages/EngineeringServices';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import CoastalZoneProjects from '../pages/CoastalZoneProjects';
import CommercialProjects from '../pages/CommercialProjects';
import Portfolio from '../pages/Portfolio';
import ProjectDetail from '../pages/ProjectDetail';
import AboutUs from '../pages/AboutUs';
import ArchitecturalDesign from '../pages/ArchitecturalDesign';
import InteriorDesign from '../pages/InteriorDesign';
import Renovations from '../pages/Renovations';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/architectural-office" element={<ArchitecturalOffice />} />
      <Route path="/engineering-services" element={<EngineeringServices />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/coastalzoneprojects" element={<CoastalZoneProjects />} />
      <Route path="/commercial-projects" element={<CommercialProjects />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/architectural-design" element={<ArchitecturalDesign />} />
      <Route path="/interior-design" element={<InteriorDesign />} />
      <Route path="/renovations" element={<Renovations />} />
    </Routes>
  );
};

export default AppRoutes; 