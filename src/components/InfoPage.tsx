/**
 * A reusable component for creating animated, informational pages.
 * Similar to the ErrorPage, it includes a starry background and particle effects.
 * It's designed to display a title, subtitle, main content, and a grid of info cards.
 * Styles are embedded to ensure the component is self-contained for static generation.
 */
"use client";

import GlitchText from "./GlitchText";
import Particles from "./Particles";
import Stars from "./Stars";

/** Defines the structure for an information card. */
interface InfoCard {
	/** The title of the card. */
	title: string;
	/** An array of content lines for the card. Can contain HTML. */
	content: string[];
}

interface InfoPageProps {
	/** The main title of the page, displayed with a glitch effect. */
	title: string;
	/** A subtitle displayed below the main title. Can contain HTML. */
	subtitle: string;
	/** The main content/body of the page. Can contain HTML. */
	content: string;
	/** An array of `InfoCard` objects to be displayed in a grid. */
	cards: InfoCard[];
	/** The primary color for text and effects. */
	primaryColor: string;
	/** The RGB version of the primary color for use in rgba() values. */
	primaryRgba: string;
}

export default function InfoPage({
	title,
	subtitle,
	content,
	cards,
	primaryColor,
	primaryRgba,
}: InfoPageProps) {
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
          overflow-y: auto;
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

        .page-title {
          font-size: clamp(4rem, 15vw, 12rem);
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(${primaryRgba}, 0.8);
          letter-spacing: 0.1em;
        }

        .page-subtitle {
          font-size: clamp(1.2rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 30px;
          text-shadow: 0 0 8px rgba(${primaryRgba}, 0.6);
          letter-spacing: 0.05em;
          text-decoration: underline;
        }

        .page-content {
          font-size: clamp(0.9rem, 2.5vw, 1.4rem);
          font-weight: 400;
          margin-bottom: 40px;
          text-shadow: 0 0 5px rgba(${primaryRgba}, 0.5);
          letter-spacing: 0.1em;
          opacity: 0.9;
          max-width: 800px;
          line-height: 1.6;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1000px;
          width: 100%;
          margin: 20px 0;
        }

        .info-card {
          background: rgba(${primaryRgba}, 0.08);
          border: 1px solid rgba(${primaryRgba}, 0.4);
          border-radius: 12px;
          padding: 24px;
          text-align: left;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 0 20px rgba(${primaryRgba}, 0.1),
            inset 0 1px 0 rgba(${primaryRgba}, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(${primaryRgba}, 0.6), transparent);
        }

        .info-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          text-shadow: 0 0 8px rgba(${primaryRgba}, 0.8);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .info-card p {
          font-size: 0.9rem;
          font-weight: 400;
          opacity: 0.85;
          line-height: 1.5;
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }

        .info-card p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .info-card {
            padding: 15px;
          }
        }
      `}</style>

			<div style={cssVariables}>
				<Stars />
				<Particles />

				<div className="container">
					<GlitchText text={title} className="page-title" />
					<div
						className="page-subtitle"
						dangerouslySetInnerHTML={{ __html: subtitle }}
					/>
					<div
						className="page-content"
						dangerouslySetInnerHTML={{ __html: content }}
					/>

					<div className="info-grid">
						{cards.map((card) => (
							<div key={card.title} className="info-card">
								<h3>{card.title}</h3>
								{card.content.map((line) => (
									<p key={line} dangerouslySetInnerHTML={{ __html: line }} />
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
