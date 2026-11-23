import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';

import SeminarsConventions from './pages/Home/SeminarsConventions';
import AwardsAccreditations from './pages/Home/AwardsAccreditations';

// ADDED: New Home sub-pages
import DMessage from './pages/Home/DMessage';   
import InstitutionalActivities from './pages/Home/InstitutionalActivities';
import LiturgicalActivities from './pages/Home/LiturgicalActivities';
import News from './pages/Home/News'; 

// ABOUT
import History from './pages/About/History';
import SirVAC from './pages/About/SirVAC';
import VMVCV from './pages/About/VMVCV';
import Goals from './pages/About/Goals';
import Logo from './pages/About/Logo';
import OrganizationalChart from './pages/About/OrganizationalChart';
import Hymn from './pages/About/Hymn';
import DivisionPledge from './pages/About/DivisionPledge';
import SVDsaints from './pages/About/SVDsaints';

// ADMINISTRATION
import SchoolDirector from './pages/Administration/SchoolDirector';
import DirectorsCouncil from './pages/Administration/DirectorsCouncil';
import QualityAssurance from './pages/Administration/QualityAssurance';
import RPDO from './pages/Administration/RPDO';                 // NEW: Director's Council
import Minister from './pages/Administration/Minister';         // NEW: Director's Council
import Principal from './pages/Administration/Principal';       // NEW: Director's Council
import AsstPrincipal from './pages/Administration/AsstPrincipal'; // NEW: Director's Council
import John from './pages/Administration/External';                 // NEW: Director's Council
import SSSO from './pages/Administration/SSSO';                 // NEW: Director's Council
import AGTC_Admin from './pages/Administration/AGTC';           // NEW: Director's Council (Renamed to avoid conflict with Student Services)
import Research from './pages/Administration/Research';
import Finance from './pages/Administration/Finance';
import HR from './pages/Administration/HR';
import PhysicalPlant from './pages/Administration/PhysicalPlant';
import IT from './pages/Administration/IT';
import Security from './pages/Administration/Security';

// ACADEMICS
import AcademicPersonnel from './pages/Academics/AcademicPersonnel';
import PCDC from './pages/Academics/PCDC';
import GradeSchool from './pages/Academics/GradeSchool';
import JuniorHighSchool from './pages/Academics/JuniorHighSchool';
import SeniorHighSchool from './pages/Academics/SeniorHighSchool';

// FORMATION (Only 3 items as specified)
import CMO from './pages/Formation/CMO';
import PrefectOfDiscipline from './pages/Formation/PrefectOfDiscipline';
import CES_SC from './pages/Formation/CES_SC';

// STUDENT SERVICES
import Registrar from './pages/StudentServices/Registrar';
import Library from './pages/StudentServices/Library';
import HWO from './pages/StudentServices/HWO';
import SAO from './pages/StudentServices/SAO';
import SBQRT from './pages/StudentServices/SBQRT';
import Sports from './pages/StudentServices/Sports';
import AGTC from './pages/StudentServices/AGTC'; // Kept for Student Services route
import Transportation from './pages/StudentServices/Transportation';

// EXTERNAL AFFAIRS
import RadioPublication from './pages/ExternalAffairs/RadioPublication';
import PTA from './pages/ExternalAffairs/PTA';
import AA from './pages/ExternalAffairs/AA';
import ALS from './pages/ExternalAffairs/ALS';
import FSA from './pages/ExternalAffairs/FSA';

import './index.css';

// ==========================================
// SCROLL TO TOP COMPONENT
// ==========================================
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      {/* This forces the window to scroll to the top on every route change */}
      <ScrollToTop />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Home sub-pages */}
        <Route path="/directors-message" element={<DMessage />} />
        <Route path="/institutional-activities" element={<InstitutionalActivities />} />
        <Route path="/liturgical-activities" element={<LiturgicalActivities />} />
        <Route path="/seminars-conventions" element={<SeminarsConventions />} />
        <Route path="/awards-accreditations" element={<AwardsAccreditations />} />
        <Route path="/news" element={<News />} /> 

        {/* ABOUT */}
        <Route path="/about" element={<Navigate to="/about/history" replace />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/sir-vac" element={<SirVAC />} />
        <Route path="/about/vm-cv" element={<VMVCV />} />
        <Route path="/about/goals" element={<Goals />} />
        <Route path="/about/logo" element={<Logo />} />
        <Route path="/about/org-chart" element={<OrganizationalChart />} />
        <Route path="/about/hymn" element={<Hymn />} />
        <Route path="/about/div-pledge" element={<DivisionPledge />} />
        <Route path="/about/svd-saints" element={<SVDsaints />} />

        {/* ADMINISTRATION */}
        <Route path="/administration" element={<Navigate to="/administration/school-director" replace />} />
        <Route path="/administration/school-director" element={<SchoolDirector />} />
        <Route path="/administration/directors-council" element={<DirectorsCouncil />} />
        
        {/* Director's Council Member Profiles (Not in main navbar, accessed via chart) */}
        <Route path="/administration/quality-assurance" element={<QualityAssurance />} />
        <Route path="/administration/rpdo" element={<RPDO />} />
        <Route path="/administration/minister" element={<Minister />} />
        <Route path="/administration/principal" element={<Principal />} />
        <Route path="/administration/asst-principal" element={<AsstPrincipal />} />
        <Route path="/administration/john" element={<John />} />
        <Route path="/administration/agtc" element={<AGTC_Admin />} />
        <Route path="/administration/ssso" element={<SSSO />} />
        
        {/* Other Administration */}
        <Route path="/administration/research" element={<Research />} />
        <Route path="/administration/finance" element={<Finance />} />
        <Route path="/administration/hr" element={<HR />} />
        <Route path="/administration/physical-plant" element={<PhysicalPlant />} />
        <Route path="/administration/it" element={<IT />} />
        <Route path="/administration/security" element={<Security />} />
        
        {/* ACADEMICS */}
        <Route path="/academics" element={<Navigate to="/academics/pcdc" replace />} />
        <Route path="/academics/academic-personnel" element={<AcademicPersonnel />} />
        <Route path="/academics/pcdc" element={<PCDC />} />
        <Route path="/academics/gs" element={<GradeSchool />} />
        <Route path="/academics/jhs" element={<JuniorHighSchool />} />
        <Route path="/academics/shs" element={<SeniorHighSchool />} />

        {/* FORMATION */}
        <Route path="/formation" element={<Navigate to="/formation/cmo" replace />} />
        <Route path="/formation/cmo" element={<CMO />} />
        <Route path="/formation/p-discipline" element={<PrefectOfDiscipline />} />
        <Route path="/formation/ces-sc" element={<CES_SC />} />

        {/* STUDENT SERVICES */}
        <Route path="/student-services" element={<Navigate to="/student-services/registrar" replace />} />
        <Route path="/student-services/registrar" element={<Registrar />} />
        <Route path="/student-services/library" element={<Library />} />
        <Route path="/student-services/hwo" element={<HWO />} />
        <Route path="/student-services/sao" element={<SAO />} />
        <Route path="/student-services/sbqrt" element={<SBQRT />} />
        <Route path="/student-services/sports" element={<Sports />} />
        <Route path="/student-services/agtc" element={<AGTC />} />
        <Route path="/student-services/transportation" element={<Transportation />} />

        {/* EXTERNAL AFFAIRS */}
        <Route path="/external-affairs" element={<Navigate to="/external-affairs/radio-publication" replace />} />
        <Route path="/external-affairs/radio-publication" element={<RadioPublication />} />
        <Route path="/external-affairs/pta" element={<PTA />} />
        <Route path="/external-affairs/alumni-association" element={<AA />} />
        <Route path="/external-affairs/als" element={<ALS />} />
        <Route path="/external-affairs/fsa" element={<FSA />} />

        {/* Legacy Redirects */}
        <Route path="/programs" element={<Navigate to="/administration" replace />} />
        <Route path="/campus" element={<Navigate to="/academics" replace />} />
        <Route path="/activities" element={<Navigate to="/formation" replace />} />
        <Route path="/contact" element={<Navigate to="/external-affairs" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;