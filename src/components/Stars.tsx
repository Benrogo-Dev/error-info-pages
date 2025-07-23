"use client";

import { useEffect, useRef } from "react";

interface StarsProps {
	count?: number;
}

export default function Stars({ count = 100 }: StarsProps) {
	const starsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const starsContainer = starsRef.current;
		if (!starsContainer) return;

		starsContainer.innerHTML = "";

		for (let i = 0; i < count; i++) {
			const star = document.createElement("div");
			star.className = "star";

			const sizes = ["small", "medium", "large"];
			star.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);

			star.style.left = `${Math.random() * 100}%`;
			star.style.top = `${Math.random() * 100}%`;
			star.style.animationDelay = `${Math.random() * 2}s`;

			starsContainer.appendChild(star);
		}

		const handleMouseMove = (e: MouseEvent) => {
			const stars = starsContainer.querySelectorAll(".star");
			const x = e.clientX / window.innerWidth;
			const y = e.clientY / window.innerHeight;

			stars.forEach((star, index) => {
				const speed = ((index % 3) + 1) * 0.5;
				const xMovement = (x - 0.5) * speed;
				const yMovement = (y - 0.5) * speed;
				(star as HTMLElement).style.transform =
					`translate(${xMovement}px, ${yMovement}px)`;
			});
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [count]);

	return (
		<div
			ref={starsRef}
			className="stars"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "transparent",
			}}
		/>
	);
}
