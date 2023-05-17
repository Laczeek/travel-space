import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import data from '../data.json';
import HomePage from './pages/home/HomePage.jsx';
import RootLayout from './pages/RootLayout';
import DestinationPage from './pages/destination/DestinationPage';
import CrewPage from './pages/crew/CrewPage';
import TechnologyPage from './pages/technology/Technology';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: 'destination', element: <DestinationPage destinations={data.destinations} /> },
			{ path: 'crew', element: <CrewPage crew={data.crew} /> },
			{ path: 'technology', element: <TechnologyPage technology={data.technology} /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
