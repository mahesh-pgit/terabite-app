const About = () => {
	const divStyles = "my-[30px] p-[20px] rounded-[0.2cm] shadow-[0_4px_6px_-1px_#0000001A] ";

	const h1Styles = "text-[30px] font-[700] m-[10px] text-[#3D3737] text-center ";

	const pStyles = "text-[20px] font-[500] text-[#645757] text-center ";

	return (
		<div className="about w-10/12 mx-auto">
			<div className={divStyles + "bg-[#FFE6E6]"}>
				<h1 className={h1Styles}>ABOUT US</h1>
				<p className={pStyles}>
					Terabite is a modern, consumer-centric application dedicated to delivering food
					through a seamless convenience platform. Designed, Engineered, Developed and
					Maintained by Mahesh Narava.
				</p>
			</div>
			<div className={divStyles + "bg-[#E2FBFB]"}>
				<h1 className={h1Styles}>MEET THE DEVELOPER</h1>
				<p className={pStyles}>
					Terabite was thoughtfully crafted by{" "}
					<span className="text-[#333738] font-[600]">MAHESH</span>, a passionate frontend
					developer with a strong focus on performance, user experience, and clean
					architecture. With expertise in modern front-end stack including React, Redux,
					Tailwind CSS, and Parcel, he has brought Terabite to life with a single page
					application with modern and efficient design. From intuitive user flows to
					seamless state management, every detail has been engineered to enhance the food
					ordering experience. His attention to detail, clean coding practices, and
					commitment to usability have played a key role in shaping the seamless food
					ordering experience Terabite delivers today.
				</p>
			</div>
			<div className={divStyles + "bg-[#FFF1E6]"}>
				<h1 className={h1Styles}>MISSION</h1>
				<p className={pStyles}>
					Our mission is to elevate the quality of life of the urban consumer by offering
					unparalleled convenience. Experience unparalleled ease and efficiency with
					Terabite, designed to enhance your daily life.
				</p>
			</div>
			<div className={divStyles + "bg-[#FDE4F2]"}>
				<h1 className={h1Styles}>VISION</h1>
				<p className={pStyles}>
					As lives are getting busier, To-do lists are getting longer and bucket lists
					getting shorter. Chores get in the way of plans. Distances get in the way of
					Destinations. And doing gets in the way of living. But at the end of the day, we
					all want a life that's a little easier, a little happier and a little more in
					our control. We all want to... Live it up! With Terabite, we want to change how
					people Eat, Live and Work.
				</p>
			</div>
			<div className={divStyles + "bg-[#E4FDE4]"}>
				<h1 className={h1Styles}>WHAT WE DO</h1>
				<p className={pStyles}>
					On our Food Delivery marketplace, users can conveniently search and discover
					multiple restaurant listings, browse their menus, place food orders, pay
					seamlessly, and track order deliveries. These orders are received and prepared
					by our restaurant partners and delivered to users through the large fleet of
					delivery partners on our platform.
				</p>
			</div>
		</div>
	);
};

export default About;
