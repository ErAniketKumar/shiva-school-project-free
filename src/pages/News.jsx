import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";

const News = () => {
    const pageInfo = {
        pageHeading:"News And Events",
        pageName:"News",
        path:"/news"
    }
	return (
		<div>
            <HelpingPage pageInfo={pageInfo}></HelpingPage>
        </div>
	);
};

export default News;
