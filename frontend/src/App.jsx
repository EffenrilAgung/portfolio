import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/templates/nav/Navbar';
import Homepage from './Component/pages/Homepage';
import Footer from './Component/templates/footer/Footer';
import About from './Component/pages/About';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path="/" element={<Homepage />} />
					<Route index path="/about" element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
