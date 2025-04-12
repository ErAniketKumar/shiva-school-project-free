import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
	return (
		<div
			className="relative text-white py-10 px-6 md:px-16 bg-cover bg-center bg-no-repeat p-10"
			style={{
				backgroundImage: "url('/Images/schoolBuilding.jpg')",
				backgroundAttachment: "fixed",
			}}
		>
			{/* background black trans */}
			<div className="absolute inset-0 bg-black opacity-90 z-0"></div>

			<div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
				{/* Left Section */}
				<div className="space-y-4">
					<img
						src="/Images/logo.png"
						alt="Logo"
						className="w-28 h-28 object-contain"
					/>
					<p className="flex items-center">
						<FaPhoneAlt className="text-[#f1992d] mr-2" />
						Phone: +91 9219405028, +91 9411670674, +91 9837643451
					</p>
					<p className="flex items-center">
						<FaEnvelope className="text-[#f1992d] mr-2" />
						Email: lalajpsvm123mzn@gmail.com
					</p>
				</div>

				{/* Right Section */}
				<div>
					<h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
					<div className="w-14 h-[2px] bg-[#f1992d] mb-4" />
					<ul className="space-y-2 text-lg">
						<li className="hover:underline cursor-pointer">› Home</li>
						<li className="hover:underline cursor-pointer">› Campus</li>
						<li className="hover:underline cursor-pointer">› Gallery</li>
						<li className="hover:underline cursor-pointer">› Download</li>
						<li className="hover:underline cursor-pointer">› News</li>
					</ul>
				</div>
			</div>
			<hr className="h-[.1rem] bg-white" />
			{/* social media icon */}
			<div className="z-11 relative flex flex-col items-center">
				<div className="flex gap-4 p-2 text-2xl">
					<Link className="hover:bg-white hover:text-[#f1992d] rounded-full p-2" to="">
						<FaFacebook />
					</Link>
					<Link className="hover:bg-white hover:text-[#f1992d] rounded-full p-2" to="">
						<IoLogoInstagram />
					</Link>
					<Link className="hover:bg-white hover:text-[#f1992d] rounded-full p-2" to="https://www.youtube.com/channel/UCChwAKlyOKYnjL4xNOJn6Iw" target="blank">
						<TfiYoutube />
					</Link>
				</div>
				<div>
					<h3>Designed & Developed By <Link to="https://eraniket.netlify.app" target="blank" className="text-[#f1992d] font-semibold">Er. Aniket</Link> </h3>
				</div>
			</div>
		</div>
	);
};

export default Footer;
