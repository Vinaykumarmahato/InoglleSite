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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
			<Route path="/SystemIntegration" element={<SystemIntegration />} />
			<Route path="/DigitalTransformation" element={<DigitalTransformation />} />
			<Route path="/ITConsulting" element={<ITConsulting />} />
			<Route path="/ITInfrastructurePlanning" element={<ITInfrastructurePlanning />} />
			<Route path="/DeployAITalent" element={<DeployAITalent />} />
			<Route path="/FeaturedResourceLLMs" element={<FeaturedResourceLLMs />} />
		</Routes>
	</BrowserRouter>
);