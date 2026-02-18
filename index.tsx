import VendorSwitchInfo from './pages/VendorSwitchInfo';
import InoglleVideo from './pages/InoglleVideo';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import '@tailwindcss/browser';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import SystemIntegration from './pages/SystemIntegration';
import DigitalTransformation from './pages/DigitalTransformation';
import ITConsulting from './pages/ITConsulting';
import ITInfrastructurePlanning from './pages/ITInfrastructurePlanning';
import DeployAITalent from './pages/DeployAITalent';
import FeaturedResourceLLMs from './pages/FeaturedResourceLLMs';
import EnterpriseInsights from './pages/EnterpriseInsights';
import CaseStudies from './pages/CaseStudies';
import UseCases from './pages/UseCases';
import ContactUs from './pages/ContactUs';
import HelpCenter from './pages/HelpCenter';
import InoglleCareers from './pages/InoglleCareers';
import HowToGetHired from './pages/HowToGetHired';
import DeveloperResources from './pages/DeveloperResources';
import TalentSupport from './pages/TalentSupport';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Press from './pages/Press';
import ContactUsCompany from './pages/ContactUsCompany';

import CustomSoftware from './pages/CustomSoftware';
import CloudDevOps from './pages/CloudDevOps';
import LegacyModernization from './pages/LegacyModernization';
import DigitalStrategy from './pages/DigitalStrategy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services/software" element={<CustomSoftware />} />
			<Route path="/services/cloud" element={<CloudDevOps />} />
			<Route path="/services/modernization" element={<LegacyModernization />} />
			<Route path="/consulting/strategy" element={<DigitalStrategy />} />
			<Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
			<Route path="/SystemIntegration" element={<SystemIntegration />} />
			<Route path="/DigitalTransformation" element={<DigitalTransformation />} />
			<Route path="/ITConsulting" element={<ITConsulting />} />
			<Route path="/ITInfrastructurePlanning" element={<ITInfrastructurePlanning />} />
			<Route path="/DeployAITalent" element={<DeployAITalent />} />
			<Route path="/FeaturedResourceLLMs" element={<FeaturedResourceLLMs />} />
			<Route path="/EnterpriseInsights" element={<EnterpriseInsights />} />
			<Route path="/CaseStudies" element={<CaseStudies />} />
			<Route path="/UseCases" element={<UseCases />} />
			<Route path="/ContactUs" element={<ContactUs />} />
			<Route path="/HelpCenter" element={<HelpCenter />} />
			<Route path="/InoglleCareers" element={<InoglleCareers />} />
			<Route path="/HowToGetHired" element={<HowToGetHired />} />
			<Route path="/DeveloperResources" element={<DeveloperResources />} />
			<Route path="/TalentSupport" element={<TalentSupport />} />
			<Route path="/About" element={<About />} />
			<Route path="/Careers" element={<Careers />} />
			<Route path="/Blog" element={<Blog />} />
			<Route path="/Press" element={<Press />} />
			<Route path="/ContactUsCompany" element={<ContactUsCompany />} />
			<Route path="/VendorSwitchInfo" element={<VendorSwitchInfo />} />
			<Route path="/inoglle-video" element={<InoglleVideo />} />
		</Routes>
	</BrowserRouter>
);