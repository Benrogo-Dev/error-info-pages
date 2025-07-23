export interface ErrorPageConfig {
	code: string;
	title: string;
	message: string;
	descriptions: string[];
	primaryColor: string;
	primaryRgba: string;
}

export const errorPageConfigs: Record<string, ErrorPageConfig> = {
	"400": {
		code: "400",
		title: "400 - Bad Request",
		message: "BAD REQUEST",
		descriptions: ["YOU MESSED SOMETHING UP"],
		primaryColor: "#ff8c00",
		primaryRgba: "255, 140, 0",
	},
	"401": {
		code: "401",
		title: "401 - Unauthorized",
		message: "UNAUTHORIZED",
		descriptions: ["CAN I SEE SOME ID?"],
		primaryColor: "#ff8c00",
		primaryRgba: "255, 140, 0",
	},
	"403": {
		code: "403",
		title: "403 - Forbidden",
		message: "FORBIDDEN",
		descriptions: ["GET OUTTTTTT"],
		primaryColor: "#ff8c00",
		primaryRgba: "255, 140, 0",
	},
	"404": {
		code: "404",
		title: "404 - Not Found",
		message: "NOT FOUND",
		descriptions: [
			"NOTHING TO SEE HERE FOLKS",
			"PROXY ENDPOINTS ARE <strong>/bare</strong> AND <strong>/wisp</strong>",
		],
		primaryColor: "#ff8c00",
		primaryRgba: "255, 140, 0",
	},
	"500": {
		code: "500",
		title: "500 - Internal Server Error",
		message: "INTERNAL SERVER ERROR",
		descriptions: [
			'PLEASE REPORT THIS TO <a href="mailto:ben@benrogo.net">ben@benrogo.net</a>',
			"<strong>RAY ID:</strong> {{REQUEST-ID}}",
		],
		primaryColor: "#ff0000",
		primaryRgba: "255, 0, 0",
	},
	"502": {
		code: "502",
		title: "502 - Bad Gateway",
		message: "BAD GATEWAY",
		descriptions: [
			'PLEASE REPORT THIS TO <a href="mailto:ben@benrogo.net">ben@benrogo.net</a>',
			"<strong>RAY ID:</strong> {{REQUEST-ID}}",
		],
		primaryColor: "#ff0000",
		primaryRgba: "255, 0, 0",
	},
	"503": {
		code: "503",
		title: "503 - Service Unavailable",
		message: "SERVICE UNAVAILABLE",
		descriptions: [
			"PLEASE TRY AGAIN LATER",
			"<strong>RAY ID:</strong> {{REQUEST-ID}}",
		],
		primaryColor: "#ff0000",
		primaryRgba: "255, 0, 0",
	},
	"504": {
		code: "504",
		title: "504 - Gateway Timeout",
		message: "GATEWAY TIMEOUT",
		descriptions: [
			"THE NETWORK IS LIKELY OVERLOADED, CHECK BACK LATER",
			"<strong>RAY ID:</strong> {{REQUEST-ID}}",
		],
		primaryColor: "#ff0000",
		primaryRgba: "255, 0, 0",
	},
	maintenance: {
		code: "503",
		title: "503 - Service Unavailable",
		message: "SERVICE UNAVAILABLE",
		descriptions: ["OFFLINE FOR MAINTENANCE"],
		primaryColor: "#ff0000",
		primaryRgba: "255, 0, 0",
	},
	migration: {
		code: "DEPRECATED",
		title: "Deprecated Endpoint",
		message: "ENDPOINT DEPRECATED",
		descriptions: [
			"UPDATE YOUR UV.CONFIG.JS TO: https://service.benrogo.net/bare/",
			'<a href="https://discordapp.com/users/930935591913287762">CONTACT ME FOR CUSTOM URLS</a>',
		],
		primaryColor: "#ff8c00",
		primaryRgba: "255, 140, 0",
	},
};
