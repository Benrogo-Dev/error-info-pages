export default function Home() {
	return (
		<div
			style={{
				padding: "20px",
				background: "#000",
				color: "#fff",
				minHeight: "100vh",
			}}
		>
			<h1>Error Pages</h1>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
					gap: "10px",
					marginTop: "20px",
				}}
			>
				<a
					href="/errors/400"
					target="_blank"
					style={{
						color: "#ff8c00",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					400
				</a>
				<a
					href="/errors/401"
					target="_blank"
					style={{
						color: "#ff8c00",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					401
				</a>
				<a
					href="/errors/403"
					target="_blank"
					style={{
						color: "#ff8c00",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					403
				</a>
				<a
					href="/errors/404"
					target="_blank"
					style={{
						color: "#ff8c00",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					404
				</a>
				<a
					href="/errors/500"
					target="_blank"
					style={{
						color: "#ff0000",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					500
				</a>
				<a
					href="/errors/502"
					target="_blank"
					style={{
						color: "#ff0000",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					502
				</a>
				<a
					href="/errors/503"
					target="_blank"
					style={{
						color: "#ff0000",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					503
				</a>
				<a
					href="/errors/504"
					target="_blank"
					style={{
						color: "#ff0000",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					504
				</a>
				<a
					href="/errors/custom/maintenance"
					target="_blank"
					style={{
						color: "#ff0000",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					Maintenance
				</a>
				<a
					href="/errors/custom/migration"
					target="_blank"
					style={{
						color: "#ff0000",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					Migration
				</a>
				<a
					href="/pages/bare"
					target="_blank"
					style={{
						color: "rgb(13, 242, 223)",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					Bare
				</a>
				<a
					href="/pages/wisp"
					target="_blank"
					style={{
						color: "rgb(242, 13, 212)",
						textDecoration: "none",
						border: "1px solid #333",
						padding: "10px",
						textAlign: "center",
					}}
					rel="noreferrer"
				>
					Wisp
				</a>
			</div>
		</div>
	);
}
