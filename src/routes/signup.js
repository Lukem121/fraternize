import fetch from 'node-fetch';
import { firebaseAdmin } from '../_firebaseAdmin';

const dotenv = require('dotenv');
dotenv.config();

export async function post(req, res, next) {
	if (req.method == 'POST') {
		const { email, password, displayName } = req.body;

		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			console.log('Email does not seem right');
			return res.end(JSON.stringify({ success: false }));
		}

		if (!/^.{6,}$/i.test(password)) {
			console.log('Password does seem right');
			return res.end(JSON.stringify({ success: false }));
        }
        
        firebaseAdmin.auth().createUser({
            email: email,
            password: password,
            displayName: displayName,
          })
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
            res.end(JSON.stringify({ success: true }));
            
        })
        .catch(function(error) {
            console.log('Error creating new user:', error);
        });          
	}
}