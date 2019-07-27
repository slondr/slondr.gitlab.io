const updateLinkCount = id => {
    fetch('http://api.slondr.ml/favorites', {
	method: 'POST',
	body: { id: id },
	headers: { 'Content-Type': 'application/json' }
    }).then(result => result.json()).then(response => console.log(response)).catch(error => console.error(error)); 
};

const getLinkCount = id => {
    var linkCount;
    fetch(`http://api.slondr.ml/favorites/${id}`).then(result => result.json()).then(response => document.getElementById(id).innerHTML += ` (${response.count})`).catch(error => console.error(error));
};

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
