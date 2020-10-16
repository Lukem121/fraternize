import * as firebaseAdmin from 'firebase-admin';

const dotenv = require('dotenv');
dotenv.config();


if (typeof window === 'undefined' && !firebaseAdmin.apps.length) {
	firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert({
			privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
			clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
			projectId: process.env.FIREBASE_ADMIN_PROJECT_ID
		}),
		databaseURL: 'https://' + process.env.FIREBASE_ADMIN_PROJECT_ID + '.firebaseio.com'
	});
}

export { firebaseAdmin };