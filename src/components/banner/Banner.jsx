import React from "react";
import "./Banner.css";
import Marquee from "react-fast-marquee";

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
			<div>
				<div className="text-white text-center pb-3 fs-4">
					TRUSTED BY 60,000+ BUSINESSES OF ALL SIZES
				</div>
				<Marquee
					gradient="true"
					pauseOnClick="true"
					gradientColor="#151619"
					className="text-white"
					speed={40}
					autoFill="true"
				>
					<div className="d-flex">
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
						<p className="p-4">apple</p>
					</div>
				</Marquee>
			</div>
		</div>
	);
};

export default Banner;
