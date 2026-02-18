import VendorSwitchInfo from './pages/VendorSwitchInfo';
import InoglleVideo from './pages/InoglleVideo';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import '@tailwindcss/browser';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import SecurityCompliance from './pages/SecurityCompliance';
import DataAnalytics from './pages/DataAnalytics';
import BankingFinance from './pages/BankingFinance';
import Healthcare from './pages/Healthcare';
import Manufacturing from './pages/Manufacturing';
import RetailEcommerce from './pages/RetailEcommerce';
import FintechScale from './pages/case-studies/FintechScale';
import LogisticsSaaS from './pages/case-studies/LogisticsSaaS';
import CloudMigration from './pages/case-studies/CloudMigration';
import LegacyModernizationCase from './pages/case-studies/LegacyModernizationCase';
import SecurityAuditCase from './pages/case-studies/SecurityAuditCase';
import DataAnalyticsCase from './pages/case-studies/DataAnalyticsCase';
import DigitalStrategyCase from './pages/case-studies/DigitalStrategyCase';
import Leadership from './pages/Leadership';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SLAAgreement from './pages/SLAAgreement';

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			easing: 'ease-in-out',
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				{/* Service Routes */}
				<Route path="/services/software" element={<CustomSoftware />} />
				<Route path="/services/cloud" element={<CloudDevOps />} />
				<Route path="/services/modernization" element={<LegacyModernization />} />

				{/* Consulting Routes */}
				<Route path="/consulting/strategy" element={<DigitalStrategy />} />
				<Route path="/consulting/security" element={<SecurityCompliance />} />
				<Route path="/consulting/data" element={<DataAnalytics />} />

				{/* Industry Routes */}
				<Route path="/industries/bfsi" element={<BankingFinance />} />
				<Route path="/industries/healthcare" element={<Healthcare />} />
				<Route path="/industries/manufacturing" element={<Manufacturing />} />
				<Route path="/industries/retail" element={<RetailEcommerce />} />

				{/* Case Studies */}
				<Route path="/case-studies/fintech-scale" element={<FintechScale />} />
				<Route path="/case-studies/logistics-saas" element={<LogisticsSaaS />} />
				<Route path="/case-studies/cloud-migration" element={<CloudMigration />} />
				<Route path="/case-studies/legacy-modernization" element={<LegacyModernizationCase />} />
				<Route path="/case-studies/security-audit" element={<SecurityAuditCase />} />
				<Route path="/case-studies/data-analytics" element={<DataAnalyticsCase />} />
				<Route path="/case-studies/digital-strategy" element={<DigitalStrategyCase />} />

				{/* Legacy/Existing Routes */}
				<Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
				<Route path="/SystemIntegration" element={<SystemIntegration />} />
				<Route path="/DigitalTransformation" element={<DigitalTransformation />} />
				<Route path="/ITConsulting" element={<ITConsulting />} />
				<Route path="/ITInfrastructurePlanning" element={<ITInfrastructurePlanning />} />
				<Route path="/DeployAITalent" element={<DeployAITalent />} />
				<Route path="/FeaturedResourceLLMs" element={<FeaturedResourceLLMs />} />
				<Route path="/EnterpriseInsights" element={<EnterpriseInsights />} />
				<Route path="/case-studies" element={<CaseStudies />} />
				<Route path="/UseCases" element={<UseCases />} />
				<Route path="/ContactUs" element={<ContactUs />} />
				<Route path="/HelpCenter" element={<HelpCenter />} />
				<Route path="/InoglleCareers" element={<InoglleCareers />} />
				<Route path="/HowToGetHired" element={<HowToGetHired />} />
				<Route path="/DeveloperResources" element={<DeveloperResources />} />
				<Route path="/TalentSupport" element={<TalentSupport />} />
				<Route path="/about" element={<About />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/leadership" element={<Leadership />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
				<Route path="/terms" element={<TermsOfService />} />
				<Route path="/sla" element={<SLAAgreement />} />
				<Route path="/Blog" element={<Blog />} />
				<Route path="/Press" element={<Press />} />
				<Route path="/ContactUsCompany" element={<ContactUsCompany />} />
				<Route path="/VendorSwitchInfo" element={<VendorSwitchInfo />} />
				<Route path="/inoglle-video" element={<InoglleVideo />} />
			</Routes>
		</BrowserRouter>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);