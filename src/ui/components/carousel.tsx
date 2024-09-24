"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Carousel({ images }: { images: (string | null) [] }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const delay = 3000; // Time interval for auto sliding (e.g., 3 seconds)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	// Automatically update the slide index every few seconds
	useEffect(() => {
		const interval = setInterval(() => {
		  setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		  );
		}, delay);
	
		// Clean up the interval on component unmount
		return () => clearInterval(interval);
	  }, [images.length]);

	return (
		<div className="group relative mx-auto w-full max-w-7xl overflow-hidden">
			{/* Slider Container */}
			<div
				className="flex transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className="w-full flex-shrink-0">
						<Image
								src={image? image: ""}
								width={2000}
								height={1000}
								alt={`Slide ${index + 1}`}
								className="h-full w-full object-cover object-center"
							/>
				  </div>
				))}
			</div>

			{/* Left Arrow */}
			<div
				className="absolute left-5 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-100 p-2 opacity-30 group-hover:opacity-60"
				onClick={prevSlide}
			>
				‹
			</div>

			{/* Right Arrow */}
			<div
				className="absolute right-5 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-100 p-2 opacity-30 group-hover:opacity-60"
				onClick={nextSlide}
			>
				›
			</div>

			{/* Indicator dots */}
			<div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform space-x-2">
				{images.map((_, index) => (
					<div
						key={index}
						className={`h-3 w-3 cursor-pointer rounded-full bg-gray-300 opacity-40 ${
							currentIndex === index ? "bg-gray-700 opacity-70" : "bg-gray-300"
						}`}
						onClick={() => setCurrentIndex(index)}
					></div>
				))}
			</div>
		</div>
	);
}
