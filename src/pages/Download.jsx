import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";
const Download = () => {
	const pageInfo = {
		pageHeading: "Downloads",
		pageName: "Download",
		path: "/download",
	};
	return (
		<div>
			<HelpingPage pageInfo={pageInfo}></HelpingPage>

			<div className="flex flex-col items-center my-5">
				<h1 className="text-4xl font-bold mb-2">
					Our&nbsp;<span className="text-[#f1992d]">Downloads</span>
				</h1>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
			</div>

			<div className="grid md:grid-cols-2 grid-cols-1 md:mx-[4rem]">
				<div className="flex flex-col gap-1 p-4">
					<span className="bg-[#f1992d] text-white p-5 font-medium" >Mandatory Disclosure</span>
					<span className="bg-[#f1992d] text-white p-5 font-medium" >Class 9 Syllabus</span>
					<span className="bg-[#f1992d] text-white p-5 font-medium" >Class 6 to 8 Syllabus</span>
				</div>
				<div className="flex flex-col gap-1 p-4">
					<span className="bg-[#f1992d] text-white p-5 font-medium" >Class 12 Syllabus</span>
					<span className="bg-[#f1992d] text-white p-5 font-medium" >Class 10 Syllabus</span>
					<span className="bg-[#f1992d] text-white p-5 font-medium" > Class 11 Syllabus</span>
				</div>
			</div>
		</div>
	);
};

export default Download;
