import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Removed invalid `data` import
import HelpingPage from "./HelpingPage";

const Gallery = () => {
	const pageInfo = {
		pageHeading: "Gallery",
		pageName: "Gallery",
		path: "/gallery",
	};

	const [imageData, setImageData] = useState([]);

	const dummyImages = Array.from({ length: 100 }, (_, index) => ({
		id: index + 1,
		url: `https://picsum.photos/seed/${index + 1}/600/400`,
		title: `Image ${index + 1}`,
	}));

	useEffect(() => {
		const dummyImages = Array.from({ length: 100 }, (_, index) => ({
			id: index + 1,
			url: `https://picsum.photos/seed/${index + 1}/600/400`,
			title: `Image ${index + 1}`,
		}));
		setImageData(dummyImages);
	}, []);

	return (
		<div>
			<HelpingPage pageInfo={pageInfo} />
			<div className="md:mx-[4rem] my-5">
				<div className="flex flex-col items-center">
					<h1 className="text-4xl font-bold mb-2">
						Our&nbsp;<span className="text-[#f1992d]">Gallery</span>
					</h1>
					<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
					<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{imageData.map((item) => (
						<div key={item.id} className="overflow-hidden rounded-lg shadow-md">
							<img
								src={item.url}
								alt={item.title}
								className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
