import React from "react";
import "./Banner.css";
import BannerMarquee from "./bannerMarquee/BannerMarquee";

const Banner = () => {
	return (
		<div className="bg-one py-4">
			<div
				style={{ maxWidth: "1200px" }}
				className="banner row text-white center mx-auto "
			>
				<div className="col-11 col-md-7">
					<p>
						<span className="display-2 ">TechSphereX </span>
						<br />
						<span className="display-5">
							Your team of nerd developers
						</span>
					</p>
					<div className="btn border-2 px-5 bg-three text-one">
						sign up
					</div>
				</div>
				<div className="col-11 col-md-5">logo</div>
			</div>
			<BannerMarquee></BannerMarquee>
		</div>
	);
};

export default Banner;
