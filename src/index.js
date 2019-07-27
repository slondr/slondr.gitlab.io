const uri = 'https://api.slondr.ml/favorites';

const getLinkCount = id => {
    var linkCount;
    fetch(uri + id).then(result => result.json()).then(response => document.getElementById(id).innerHTML += ` (${response.count})`).catch(error => console.error(error));
};

const $ = id => {
    getLinkCount(id);
    document.getElementById(id).addEventListener('click', event => {
	event.preventDefault();
	(async id => {
	    const response = await fetch(uri, {
		method: 'POST',
		body: JSON.stringify({ id: id }),
		headers: { 'Content-Type': 'application/json' }
	    });
	    return response;
	})(id).then(response => {
	    console.log(response.status);
	    window.location = document.getElementById(id).href;
	});
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
