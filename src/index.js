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

function updateValueById(id) {
    var linkCount;
    db.collection('links').doc(id).get().then(doc => {
	if(isNaN(doc.count) || (!doc.count)) {
	    db.collection('links').doc(id).set({ count: 0 });
	    linkCount = 0;
	} else {
	    linkCount = doc.count;
	}
	document.getElementById(id).innerHTML += ` (${linkCount})`;
    });
}
	

function updateClicks(id) {
    db.collection('links').doc(id).get().then(doc => {
	db.collection('links').doc(id).set({
	    count: (doc.count ? doc.count : 0) + 1
	});
    });
}

const $ = id => {
    updateValuebyId(id);
    document.getElementById(id).addEventListener('click', () => updateClicks(id));
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
