import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";
const Download = () => {
    const pageInfo = {
        pageHeading:"Downloads",
        pageName:"Download",
        path:"/download"
    }
	return (
		<div>
            <HelpingPage pageInfo={pageInfo}></HelpingPage>
        </div>
	);
};

export default Download;
