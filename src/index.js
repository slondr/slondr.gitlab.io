// const firebase = require('firebase');
import * as firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyDeGcCLR3rxUHnSTnX11pPkPZzKQpn7wqA",
    authDomain: "slondr-site.firebaseapp.com",
    databaseURL: "https://slondr-site.firebaseio.com",
    projectId: "slondr-site",
    storageBucket: "",
    messagingSenderId: "1033960889693",
    appId: "1:1033960889693:web:a4288d0ff950999f"
});

const db = firebase.firestore();

function update_clicks(id) {
    db.collection('links').doc(id).get().then(doc => {
	if(doc.exists) {
	    db.collection('links').doc(id).set({
		count: doc.count + 1,
	    });
	} else {
	    db.collection('links').doc(id).set({
		count: 1,
	    });
	}
    });
}

const $ = id => {
    document.getElementById(id).addEventListener('click', update_clicks(id));
};

$('gitlab');
$('mystevens');
$('todoist');
$('peoplefinder');
$('canvas');
$('apota');
$('workday');
$('youtube');
$('ducklink');
$('virtualems');
$('googlemessages');
$('play');
$('groupme');
$('catering');
$('github');
$('catering');
$('teamdynamix');
$('kek');
$('intervalcalculator');
$('songs');
$('chords');
