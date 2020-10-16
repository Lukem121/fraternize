import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

import { json } from 'body-parser';
import cookieParser from 'cookie-parser';
import { firebaseAdmin } from './_firebaseAdmin';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const main =
	require.main === module ||
	require.main.filename.match(/__sapper__\/build\/index.js$/);
const local = dev || main;

const expressServer = express().use(
	json({
		type: '*/*'
	}),
	cookieParser(),
	compression({ threshold: 0 }),
	sirv("static", { dev }), 
	async (req, res, next) => {
		try {
			const sessionToken = req.cookies.fireCookie;
			const user = await firebaseAdmin.auth().verifySessionCookie(sessionToken, true);
			return sapper.middleware({
				session: () => {
					return {
						user: user.email // For example purpose I only take out the email
					};
				}
			})(req, res, next);
		} catch (e) {
			return sapper.middleware({
				session: () => {
					return {
						user: false
					};
				}
			})(req, res, next);
		}
	});

if (local) {
	expressServer.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
}

export { expressServer };
