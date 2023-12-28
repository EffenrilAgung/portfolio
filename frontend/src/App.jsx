import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/templates/nav/Navbar';
import Homepage from './Component/pages/Homepage';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path="/" element={<Homepage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
