import type { Metadata } from "next";
import InfoPage from "../../../components/InfoPage";

export const metadata: Metadata = {
	title: "Bare - Benrogo",
};

export default function BarePage() {
	return (
		<InfoPage
			title="BARE"
			subtitle='<a href="https://github.com/tomphttp/bare-server-node">bare-server-node</a>'
			content="OLD HTTP-BASED PROXY, COMPATIBLE WITH <strong>OLD UV-STATIC AND DERIVATIVES!</strong>"
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
					content: [
						'MEMORY: <strong><span id="memory">0.0</span> MiB</strong>',
						"BENROGO POOL ID: <strong>{{POOL-ID}}</strong>",
						'VERSION: <strong><span id="version">0.0.0</span></strong>',
					],
				},
			]}
			primaryColor="rgb(13, 242, 223)"
			primaryRgba="13, 242, 223"
		/>
	);
}
