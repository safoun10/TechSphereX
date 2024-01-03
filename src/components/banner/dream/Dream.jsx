import React from "react";

const Dream = () => {
	return (
		<div style={{ maxWidth: "1200px" }} className="mx-auto my-5 row">
			<div className="col-11 col-md-5">photo</div>
			<div className="col-11 col-md-7 text-end">
				<p>Build your dream with us</p>
				<div className="">
					<img
						className="img-fluid w-25 border"
						src="https://i.postimg.cc/Px4gyh3S/proper-techspherex-without-bg-Photo-Room-png-Photo-Room.png"
					/>
					{/* <img className="img-fluid w-25 border" src="https://i.postimg.cc/BQ3qnKqW/Screenshot-2023-10-10-203023-removebg-preview-3.png" />  */}
				</div>
				<div className="btn btn-outline-dark border-3 fs-5 py-1 px-4">
					join now
				</div>
			</div>
		</div>
	);
};

export default Dream;
