import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const main =
	require.main === module ||
	require.main.filename.match(/__sapper__\/build\/index.js$/);
const local = dev || main;

const expressServer = express().use(
	cookieParser(),
	compression({ threshold: 0 }),
	sirv("static", { dev }),
	sapper.middleware({
		session: async (req, res) => {
			if (req.cookies.token) {
				return {
					user: req.cookies.token
				};
			}
			return {
				user: false
			};
		}
	})
);

if (local) {
	expressServer.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
}

export { expressServer };
