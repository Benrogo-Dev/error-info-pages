import type { Metadata } from "next";
import ErrorPage from "../../../../components/ErrorPage";
import { errorPageConfigs } from "../../../../config/errorPages";

const config = errorPageConfigs.migration;

export const metadata: Metadata = {
	title: config.title,
};

export default function MigrationPage() {
	return (
		<ErrorPage
			code={config.code}
			title={config.title}
			message={config.message}
			descriptions={config.descriptions}
			primaryColor={config.primaryColor}
			primaryRgba={config.primaryRgba}
		/>
	);
}
