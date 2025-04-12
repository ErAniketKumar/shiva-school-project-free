import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";

const News = () => {
	const pageInfo = {
		pageHeading: "News And Events",
		pageName: "News",
		path: "/news",
	};

	return (
		<div>
			{/* Uncomment if you want the header */}
			<HelpingPage pageInfo={pageInfo} />

			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-blue-800 mb-2">News & Events</h2>
						<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Card 1 */}
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
							<img
								src="https://via.placeholder.com/400x200"
								alt="Annual Day"
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<div className="text-sm text-gray-500 mb-2">April 5, 2025</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">Annual Day Celebration</h3>
								<p className="text-gray-600 mb-4">
									Students showcased their talents through cultural performances, dance, and music at our Annual Day celebration.
								</p>
								<NavLink to="#" className="text-blue-600 font-medium hover:underline">
									Read more
								</NavLink>
							</div>
						</div>

						{/* Card 2 */}
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
							<img
								src="https://via.placeholder.com/400x200"
								alt="Science Exhibition"
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<div className="text-sm text-gray-500 mb-2">March 15, 2025</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">Science Exhibition 2025</h3>
								<p className="text-gray-600 mb-4">
									Our students demonstrated innovative science projects at the annual science exhibition, showcasing their research skills.
								</p>
								<NavLink to="#" className="text-blue-600 font-medium hover:underline">
									Read more
								</NavLink>
							</div>
						</div>

						{/* Card 3 */}
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
							<img
								src="https://via.placeholder.com/400x200"
								alt="Sports Day"
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<div className="text-sm text-gray-500 mb-2">February 20, 2025</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">Inter-House Sports Meet</h3>
								<p className="text-gray-600 mb-4">
									Students participated in various athletic events during our annual Inter-House Sports Meet, promoting sportsmanship.
								</p>
								<NavLink to="#" className="text-blue-600 font-medium hover:underline">
									Read more
								</NavLink>
							</div>
						</div>
					</div>

					<div className="text-center mt-10">
						<NavLink
							to="#"
							className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium"
						>
							View All News & Events
						</NavLink>
					</div>
				</div>
			</section>
		</div>
	);
};

export default News;
