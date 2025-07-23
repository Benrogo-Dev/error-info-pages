"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
	count?: number;
}

export default function Particles({ count = 20 }: ParticlesProps) {
	const particlesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const particlesContainer = particlesRef.current;
		if (!particlesContainer) return;

		particlesContainer.innerHTML = "";

		for (let i = 0; i < count; i++) {
			const particle = document.createElement("div");
			particle.className = "particle";

			particle.style.left = `${Math.random() * 100}%`;
			particle.style.animationDelay = `${Math.random() * 8}s`;

			particlesContainer.appendChild(particle);
		}
	}, [count]);

	return (
		<div
			ref={particlesRef}
			className="particles"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none",
			}}
		/>
	);
}
