const updateLinkCount = id => {
    fetch('//api.slondr.ml/favorites', {
	method: 'POST',
	body: { id: id },
	headers: { 'Content-Type': 'application/json' }
    }).then(result => result.json()).then(response => console.log(response)).catch(error => console.error(error)); 
};

const getLinkCount = id => {
    var linkCount;
    fetch(`//api.slondr.ml/favorites/${id}`).then(result => result.json()).then(response => document.getElementById(id).innerHTML += ` (${response.count})`).catch(error => console.error(error));
};

/*
function updateValueById(id) {
    var linkCount;
    db.collection('links').doc(id).get().then(doc => {
	console.log(`${id}:  ${doc.data().count}`);
	if(isNaN(doc.data().count)) {
	    db.collection('links').doc(id).set({ count: 0 });
	    linkCount = 0;
	} else {
	    linkCount = doc.data().count;
	}
	document.getElementById(id).innerHTML += ` (${linkCount})`;
    });
}


function updateClicks(id) {
    db.collection('links').doc(id).get().then(doc => {
	db.collection('links').doc(id).set({
	    count: (doc.data().count ? doc.data().count : 0) + 1
	});
    });
}
*/

const $ = id => {
    // updateValueById(id);
    getLinkCount(id);
    document.getElementById(id).addEventListener('click', event => {
	event.preventDefault();
	updateLinkCount(id);
	window.location = document.getElementById(id).href;
    });
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
$('teamdynamix');
$('kek');
$('intervalcalculator');
$('songs');
$('chords');
