import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/templates/nav/Navbar';
import Homepage from './Component/pages/Homepage';
import Footer from './Component/templates/footer/Footer';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path="/" element={<Homepage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
