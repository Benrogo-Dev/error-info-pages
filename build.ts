import { minify } from "html-minifier-terser";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import ErrorPage from "./src/components/ErrorPage";
import InfoPage from "./src/components/InfoPage";
import { errorPageConfigs } from "./src/config/errorPages";

const wrapHTML = (title: string, body: string): string => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  ${body}
</body>
</html>`;

const minifyOptions = {
	removeComments: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortClassName: true,
	useShortDoctype: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	preserveLineBreaks: false,
	minifyCSS: true,
	minifyJS: true,
};

async function buildErrorPages() {
	const pages = [
		{ key: "400", path: "dist/errors/400.html" },
		{ key: "401", path: "dist/errors/401.html" },
		{ key: "403", path: "dist/errors/403.html" },
		{ key: "404", path: "dist/errors/404.html" },
		{ key: "500", path: "dist/errors/500.html" },
		{ key: "502", path: "dist/errors/502.html" },
		{ key: "503", path: "dist/errors/503.html" },
		{ key: "504", path: "dist/errors/504.html" },
		{ key: "maintenance", path: "dist/errors/custom/maintenance.html" },
		{ key: "migration", path: "dist/errors/custom/migration.html" },
	];

	for (const { key, path: filePath } of pages) {
		const config = errorPageConfigs[key];
		if (!config) {
			console.error(`Config not found for ${key}`);
			continue;
		}

		const component = React.createElement(ErrorPage, config);
		const rendered = renderToStaticMarkup(component);
		const html = wrapHTML(config.title, rendered);
		const minified = await minify(html, minifyOptions);

		await Bun.write(Bun.file(filePath), minified);
		console.log(`Generated: ${filePath}`);
	}
}

async function buildInfoPages() {
	const bareComponent = React.createElement(InfoPage, {
		title: "BARE",
		subtitle:
			'<a href="https://github.com/tomphttp/bare-server-node">bare-server-node</a>',
		content:
			"OLD HTTP-BASED PROXY, COMPATIBLE WITH <strong>OLD UV-STATIC AND DERIVATIVES!</strong>",
		cards: [
			{
				title: "MAINTAINER",
				content: [
					'EMAIL: <strong><a href="mailto:ben@benrogo.net">ben@benrogo.net</a></strong>',
					'WEBSITE: <strong><a href="https://benrogo.net" target="_blank">https://benrogo.net</a></strong>',
					'DISCORD: <strong><a href="https://discord.gg/Jzkb4JEsRs" target="_blank">https://discord.gg/Jzkb4JEsRs</a></strong>',
				],
			},
			{
				title: "RUNTIME INFORMATION",
				content: [
					'MEMORY: <strong><span id="memory">0.0</span> MiB</strong>',
					"BENROGO POOL ID: <strong>{{POOL-ID}}</strong>",
					'VERSION: <strong><span id="version">0.0.0</span></strong>',
				],
			},
		],
		primaryColor: "rgb(13, 242, 223)",
		primaryRgba: "13, 242, 223",
	});

	const bareRendered = renderToStaticMarkup(bareComponent);
	const bareHTML = wrapHTML("BARE - Benrogo", bareRendered);
	const bareMinified = await minify(bareHTML, minifyOptions);
	await Bun.write(Bun.file("dist/pages/bare/index.html"), bareMinified);
	console.log("Generated: dist/pages/bare/index.html");

	const wispComponent = React.createElement(InfoPage, {
		title: "WISP",
		subtitle:
			'<a href="https://github.com/MercuryWorkshop/epoxy-tls">epoxy-tls</a>',
		content:
			"ADVANCED WEBSOCKET-BASED PROXY, BEST FOR <strong>NEWER PROJECTS!</strong>",
		cards: [
			{
				title: "MAINTAINER",
				content: [
					'EMAIL: <strong><a href="mailto:ben@benrogo.net">ben@benrogo.net</a></strong>',
					'WEBSITE: <strong><a href="https://benrogo.net" target="_blank">https://benrogo.net</a></strong>',
					'DISCORD: <strong><a href="https://discord.gg/Jzkb4JEsRs" target="_blank">https://discord.gg/Jzkb4JEsRs</a></strong>',
				],
			},
			{
				title: "RUNTIME INFORMATION",
				content: ["BENROGO POOL ID: <strong>{{POOL-ID}}</strong>"],
			},
		],
		primaryColor: "rgb(242, 13, 212)",
		primaryRgba: "242, 13, 212",
	});

	const wispRendered = renderToStaticMarkup(wispComponent);
	const wispHTML = wrapHTML("WISP - Benrogo", wispRendered);
	const wispMinified = await minify(wispHTML, minifyOptions);
	await Bun.write(Bun.file("dist/pages/wisp/index.html"), wispMinified);
	console.log("Generated: dist/pages/wisp/index.html");
}

async function main() {
	console.log("Building static pages...");

	await buildErrorPages();
	await buildInfoPages();
	console.log("Done!");
}

main().catch(console.error);
