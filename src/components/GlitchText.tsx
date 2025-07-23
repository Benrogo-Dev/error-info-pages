interface GlitchTextProps {
	text: string;
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
