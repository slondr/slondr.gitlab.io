const uri = 'https://api.slondr.ml/favorites';

const getLinkCount = node => {
    var linkCount;
    fetch(uri + node.id)
	.then(result => result.json())
	.then(response => node.innerHTML += ` (${response.count})`)
	.catch(error => console.error(error));
};

const updateLinkCount = async id => {
    return await fetch(uri, {
	method: 'POST',
	body: JSON.stringify({ id: id }),
	headers: { 'Content-Type': 'application/json' }
    });
};

document.querySelectorAll('.favorite').forEach(node => {
    getLinkCount(node);
    node.addEventListener('click', event => {
	event.preventDefault();
	/* (async id => {
	    const response = await fetch(uri, {
		method: 'POST',
		body: JSON.stringify({ id: id }),
		headers: { 'Content-Type': 'application/json' }
	    });
	    return response;
	})(node.id).then(response => {
	    console.log(response.status);
	    window.location = node.href;
	});
	*/

	updateLinkCount(node.id)
	    .then(response => {
		console.log(response.status);
		window.location = node.href;
	    });
    });
});
