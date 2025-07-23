import type { Metadata } from "next";
import ErrorPage from "../../../components/ErrorPage";
import { errorPageConfigs } from "../../../config/errorPages";

const config = errorPageConfigs["404"];

export const metadata: Metadata = {
	title: config.title,
};

/**
 * Renders the 404 Not Found error page.
 * The configuration for this page is pulled from `errorPageConfigs`.
 */
export default function Error404Page() {
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
