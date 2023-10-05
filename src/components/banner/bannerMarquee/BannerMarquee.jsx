import React from 'react';
import Marquee from 'react-fast-marquee';

const BannerMarquee = () => {
    return (
		<div>
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

export default BannerMarquee;