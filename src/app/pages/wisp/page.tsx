import type { Metadata } from "next";
import InfoPage from "../../../components/InfoPage";

export const metadata: Metadata = {
	title: "Wisp - Benrogo",
};

/**
 * Renders the "Wisp" info page.
 * This page provides information about the "Wisp" proxy server, which is a newer, WebSocket-based proxy.
 * The content for this page is hardcoded here, but it uses the reusable `InfoPage` component.
 */
export default function WispPage() {
	return (
		<InfoPage
			title="WISP"
			subtitle='<a href="https://github.com/MercuryWorkshop/epoxy-tls">epoxy-tls</a>'
			content="ADVANCED WEBSOCKET-BASED PROXY, BEST FOR <strong>NEWER PROJECTS!</strong>"
			cards={[
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
			]}
			primaryColor="rgb(242, 13, 212)"
			primaryRgba="242, 13, 212"
		/>
	);
}
