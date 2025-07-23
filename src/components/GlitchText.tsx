/**
 * A component that renders text with a CSS-based "glitch" effect.
 * The effect is achieved by duplicating the text content in ::before and ::after
 * pseudo-elements and then rapidly shifting them. The actual text is passed
 * via the `data-text` attribute to be used by the CSS.
 */
interface GlitchTextProps {
	/** The text to be displayed and glitched. */
	text: string;
	/** Optional CSS class to apply to the container. */
	className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
	return (
		<div
			className={`glitch ${className}`}
			data-text={text}
			style={{
				position: "relative",
			}}
		>
			{text}
		</div>
	);
}
