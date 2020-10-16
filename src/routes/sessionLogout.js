import { firebaseAdmin } from '../_firebaseAdmin';

export async function post(req, res, next) {
	if (req.method == 'POST') {
		const sessionCookie = req.cookies.fireCookie || '';
		res.clearCookie('fireCookie');
		firebaseAdmin
			.auth()
			.verifySessionCookie(sessionCookie)
			.then((decodedClaims) => {
				firebaseAdmin.auth().revokeRefreshTokens(decodedClaims.sub);
				res.end(JSON.stringify({ success: true }));
			})
			.catch((error) => {
				res.end(JSON.stringify({ success: false }));
			});
	}
}