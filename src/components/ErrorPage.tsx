"use client";

import GlitchText from "./GlitchText";
import Particles from "./Particles";
import Stars from "./Stars";

interface ErrorPageProps {
	code: string;
	title: string;
	message: string;
	descriptions?: string[];
	primaryColor?: string;
	primaryRgba?: string;
}

export default function ErrorPage({
	code,
	// biome-ignore lint/correctness/noUnusedFunctionParameters: used in build script for HTML title
	title,
	message,
	descriptions = [],
	primaryColor = "#ff8c00",
	primaryRgba = "255, 140, 0",
}: ErrorPageProps) {
	const cssVariables = {
		"--primary-color": primaryColor,
		"--primary-rgba": primaryRgba,
	} as React.CSSProperties;

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          font-family: 'Orbitron', monospace;
          background: #000;
          color: var(--primary-color, #ff8c00);
          overflow: hidden;
          height: 100vh;
          position: relative;
          --primary-color: ${primaryColor};
          --primary-rgba: ${primaryRgba};
        }

        a {
          color: inherit;
        }

        .star {
          position: absolute;
          background: var(--primary-color);
          border-radius: 50%;
          animation: twinkle 2s infinite alternate;
        }

        .star:nth-child(odd) {
          animation-delay: 1s;
        }

        .star.small {
          width: 2px;
          height: 2px;
          opacity: 0.6;
        }

        .star.medium {
          width: 3px;
          height: 3px;
          opacity: 0.8;
        }

        .star.large {
          width: 4px;
          height: 4px;
          opacity: 1;
        }

        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        .particle {
          position: absolute;
          width: 1px;
          height: 1px;
          background: var(--primary-color);
          border-radius: 50%;
          animation: float 8s infinite linear;
        }

        @keyframes float {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(100px); opacity: 0; }
        }

        .container {
          position: relative;
          z-index: 10;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% { transform: translate(0); }
          15%, 49% { transform: translate(-2px, 2px); }
        }

        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% { transform: translate(0); }
          21%, 62% { transform: translate(2px, -2px); }
        }

        .error-code {
          font-size: ${code === "DEPRECATED" ? "clamp(4rem, 10vw, 8rem)" : "clamp(4rem, 15vw, 12rem)"};
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(${primaryRgba}, 0.8);
          letter-spacing: 0.1em;
        }

        .error-message {
          font-size: clamp(1.2rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 30px;
          text-shadow: 0 0 8px rgba(${primaryRgba}, 0.6);
          letter-spacing: 0.05em;
        }

        .error-description {
          font-size: clamp(0.9rem, 2.5vw, 1.4rem);
          font-weight: 400;
          margin-bottom: 40px;
          text-shadow: 0 0 5px rgba(${primaryRgba}, 0.5);
          letter-spacing: 0.1em;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
        }
      `}</style>

			<div style={cssVariables}>
				<Stars />
				<Particles />

				<div className="container">
					<GlitchText text={code} className="error-code" />
					<div className="error-message">{message}</div>
					{descriptions.map((desc) => (
						<div
							key={desc}
							className="error-description"
							dangerouslySetInnerHTML={{ __html: desc }}
						/>
					))}
				</div>
			</div>
		</>
	);
}
