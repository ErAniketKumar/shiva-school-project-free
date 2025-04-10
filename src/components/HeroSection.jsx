import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Optional: for custom styles

const images = ["/Images/one.jpg", "/Images/two.jpg", "/Images/three.jpg"];

function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		pauseOnHover: false,
	};

	return (
		<div>
			<div className="slider-container">
				<Slider {...settings}>
					{images.map((url, index) => (
						<div key={index} className="slide">
							<div
								className="background-image"
								style={{
									backgroundImage: `url(${url})`,
								}}
							></div>
						</div>
					))}
				</Slider>
			</div>

			<div className="grid md:grid-cols-3 gap-8 px-4 py-8 items-stretch">
				{/* Video Section */}
				<div className="w-full h-full">
					<div className="aspect-w-16 aspect-h-9 h-full">
						<iframe
							src="https://www.youtube.com/embed/X2lDFvkJc5M?si=LfA2YrqJ_xgefeGd"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="w-full h-full"
						></iframe>
					</div>
				</div>

				{/* Our Vision Section */}
				<div className="flex flex-col justify-between h-full">
					<div>
						<h1 className="text-2xl font-bold mb-4">Our Vision</h1>
						<p className="text-justify text-gray-700 mb-4">
							The goal is to develop a national education system that fosters a
							generation imbued with Hindutva and patriotism. This generation
							should be fully developed physically, energetically, mentally,
							intellectually, and spiritually, capable of facing the current
							challenges of life. Their lives should be dedicated to uplifting
							the underprivileged brothers and sisters living in rural areas,
							remote mountains, slums, and deprived conditions, liberating them
							from social evils, exploitation, and injustice, thereby
							contributing to making the nation's life harmonious, prosperous,
							and cultured.
						</p>
					</div>
					<div>
          <button className="mt-4 px-6 py-3 bg-[#f1992d] hover:bg-black text-white font-semibold transition-all">
						OUR CAMPUS
					</button>
          </div>
				</div>

				{/* News & Events Section */}
				<div className="h-full flex flex-col">
					<h1 className="text-2xl font-bold mb-4">News and Events</h1>
					<div className="vertical-marquee bg-[#f0f0f0] relative p-4 rounded">
						<div className="marquee-content text-red-500 font-bold animate-scroll-up text-sm">
							<p className="p-5">
								- विद्यालय के उन्नयन हेतु आधारभूत बिंदुओं पर परिचर्चा
								<br />
								का आयोजन।
							</p>
							<p className="p-5">
								- विद्यालय में श्री कृष्ण जन्माष्टमी पर्व मनाया गया।
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SimpleSlider;
