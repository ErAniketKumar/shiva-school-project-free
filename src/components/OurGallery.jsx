import React from "react";

const OurGallery = () => {
	return (
		<div className="mx-[4rem] md:mt-12 mt-5">
			<div className="flex flex-col items-center ">
				<h1 className="text-4xl font-bold mb-2">
					Our&nbsp;<span className="text-[#f1992d]">Gallery</span>
				</h1>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
			</div>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{[
					{
						src: "/Images/g1.png",
					},
					{
						src: "/Images/g2.png",
					},
					{
						src: "/Images/g3.png",
					},
					{
						src: "/Images/g4.png",
					},
				].map((member, index) => (
					<div key={index} className="flex flex-col items-center">
						<img
							src={member.src}
							alt=""
							className="object-cover h-72 w-full max-w-xs rounded-md shadow-md"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurGallery;
