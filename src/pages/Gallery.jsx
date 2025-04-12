import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";

const Gallery = () => {
    const pageInfo = {
        pageHeading:"Gallery",
        pageName:"Gallery",
        path:"/gallery"
    }
	return (
		<div>
            <HelpingPage pageInfo={pageInfo}></HelpingPage>
        </div>
	);
};

export default Gallery;
