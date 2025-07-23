import type { Metadata } from "next";
import ErrorPage from "../../../../components/ErrorPage";
import { errorPageConfigs } from "../../../../config/errorPages";

const config = errorPageConfigs.maintenance;

export const metadata: Metadata = {
	title: config.title,
};

/**
 * Renders a custom maintenance page.
 * This page is used to indicate that the service is temporarily offline for maintenance.
 * The configuration for this page is pulled from `errorPageConfigs`.
 */
export default function MaintenancePage() {
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
