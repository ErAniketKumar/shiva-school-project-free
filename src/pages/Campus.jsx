import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";

const Campus = () => {
    const pageInfo = {
        pageHeading:"Our Campus",
        pageName:"Campus",
        path:"/campus"
    }
	return (
		<div>
            <HelpingPage pageInfo={pageInfo} ></HelpingPage>
        </div>
	);
};

export default Campus;
