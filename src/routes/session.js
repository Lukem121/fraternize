import fetch from 'node-fetch';
import { firebaseAdmin } from '../_firebaseAdmin';

const dotenv = require('dotenv');
dotenv.config();


export async function post(req, res, next) {
	if (req.method == 'POST') {
		const { email, password } = req.body;

		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			console.log('Email does not seem right');
			return res.end(JSON.stringify({ success: false }));
		}

		if (!/^.{6,}$/i.test(password)) {
			console.log('Password does seem right');
			return res.end(JSON.stringify({ success: false }));
		}

		// Get idToken from firebase REST
		const userLogin = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env
				.FIREBASE_CLIENT_API_KEY}`,
			{
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({ email, password, returnSecureToken: true }), // returnSecureToken set to true is important
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const userData = await userLogin.json();

		if (userData.error) {
			console.log('Logging in error', userData.error.message);
			return res.end(JSON.stringify({ success: false }));
		}

		const expiresIn = 1000 * 60 * 60 * 24;
		const { idToken } = userData;

		firebaseAdmin.auth().createSessionCookie(idToken, { expiresIn }).then(
			(sessionCookie) => {
				// Set secure to true in production
				const options = { maxAge: expiresIn, httpOnly: true, secure: false };
				res.cookie('fireCookie', sessionCookie, options);
				res.end(JSON.stringify({ success: true }));
			},
			(error) => {
				console.log('FirebaseAdmin token check error', error);
				return res.end(JSON.stringify({ success: false }));
			}
		);
	}
}