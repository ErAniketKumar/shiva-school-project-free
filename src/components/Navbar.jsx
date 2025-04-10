import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";



const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			{/* Top Section */}
			<div
				className={`bg-gray-800 text-white text-sm transition-all duration-300 ${
					isScrolled ? "hidden" : "block"
				} md:block`}
			>
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2">
					<div className="mb-2 md:mb-0">
						<span className="font-semibold">Call Now:</span> +91 9219405028
					</div>
					<div className="mb-2 md:mb-0">
						<span className="font-semibold">Send Message:</span>{" "}
						lalajpsvm123mzn@gmail.com
					</div>
					<div>
						<span className="font-semibold">Our Location:</span> Jagdishpuram,
						State Highway 12A, Muzaffarnagar, Uttar Pradesh 251001
					</div>
				</div>
			</div>

			{/* Main Navbar */}
			<div
				className={`bg-[#f6f6f6] w-full z-50 transition-all duration-300 ${
					isScrolled ? "fixed top-0" : "relative"
				}`}
			>
				<div className="max-w-7xl mx-[4rem] flex justify-between items-center h-16">
					{/* Desktop Menu */}
					<div className="hidden md:flex gap-6 h-16">
						<NavLink to="/" className="hover:bg-[#f1992d] hover:text-white pt-5 px-3">
							Home
						</NavLink>
						<NavLink
							to="/campus"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							Campus
						</NavLink>
						<NavLink
							to="/gallery"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							Gallery
						</NavLink>
						<NavLink
							to="/download"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							Download
						</NavLink>
						<NavLink
							to="/news"
							className="hover:bg-[#f1992d] hover:text-white pt-5 px-3"
						>
							News And Events
						</NavLink>
					</div>

					<div className="text-xl font-bold">
                        <button  className="flex bg-[#f1992d] px-8 py-4 rounded-full text-white hover:bg-white hover:text-black text-sm"> <FaPen className="mt-1 mx-1" /> CONTACT NOW</button>
                    </div>

					{/* Mobile Menu Icon */}
					<div className="md:hidden">
						<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							<Menu className="h-6 w-6" />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden px-4 pb-4">
						<a href="#" className="block py-2 border-b">
							Home
						</a>
						<a href="#" className="block py-2 border-b">
							Campus
						</a>
						<a href="#" className="block py-2 border-b">
							Gallery
						</a>
						<a href="#" className="block py-2 border-b">
							Download
						</a>
						<a href="#" className="block py-2">
							News And Events
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
