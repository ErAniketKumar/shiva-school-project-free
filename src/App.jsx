import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Campus from "./pages/Campus";
import Gallery from "./pages/Gallery";
import Download from "./pages/Download";
import News from "./pages/News";

const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<HeroSection />} />
				<Route path="/campus" element={<Campus />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/download" element={<Download />} />
				<Route path="/news" element={<News />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
};

export default App;
