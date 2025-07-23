import type { Metadata } from "next";
import ErrorPage from "../../../../components/ErrorPage";
import { errorPageConfigs } from "../../../../config/errorPages";

const config = errorPageConfigs.migration;

export const metadata: Metadata = {
	title: config.title,
};

/**
 * Renders a custom page to inform users about a deprecated endpoint.
 * This page provides instructions on how to update their configuration.
 * The configuration for this page is pulled from `errorPageConfigs`.
 */
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
