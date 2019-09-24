/**
* Slondr.ml/index.js, the primary client-side JavaScript for slondr.ml
* @author: Eric S. Londres (slondr)
* Implements the slondr.ml Favorites API front-end
* For more information, see https://next.stoplight.io/slondr-studios/slondr-ml/version%2F1.0/Favorites.oas2.yml?view=/
*/

/**
* Stores the fully qualified URL of the API server.
*/
const uri: string = 'https://api.slondr.ml/favorites';

/**
* Implements getLinkCount of the Favorites API.
* Given a DOM node, retrieve the link click count from the database and update
* the node's display with the click count.
* @param {object} node The DOM node to be profiled and updated.
* @returns {void} Does not return.
*/
const getLinkCount = (node: HTMLAnchorElement): void => {
    fetch(uri + '/' + node.id)
        .then(result => result.json())
	.then(response => {
	    // set link count value
	    node.innerHTML += ` <span class='click-count'>${response.count}</span>`;

	    // update link click count
	    if(response.count > 100) {
		node.querySelector('.click-count').style.color = 'green';
	    } else if(response.count > 50) {
		node.querySelector('.click-count').style.color = 'GreenYellow';
	    } else if(response.count > 25) {
		node.querySelector('.click-count').style.color = 'white';
	    } else if(response.count > 5) {
		node.querySelector('.click-count').style.color = 'Gold';
	    } else {
		node.querySelector('.click-count').style.color = 'red';
	    }
	})
        .catch(error => {
	    alert('An error has occured in getLinkCount()');
	    console.error(error);
	});
};

/**
* Implements updateLinkCount of the Favorites API.
* Given an id representing a link, POSTs the server to increment the click count.
* @param {string} id The link id to update in the database.
* returns {object} Returns the reponse from the API server.
*/
const updateLinkCount = async (id: string) => await fetch(uri, {
    method: 'POST',
    body: JSON.stringify({ id: id }),
    headers: { 'Content-Type': 'application/json' }
});

/**
 * Run getLinkCount() on each favorite and attach click listeners to call updateLinkCount()
 */
(() => document.querySelectorAll('.favorite').forEach((node: HTMLAnchorElement) => {
    getLinkCount(node);
    node.addEventListener('click', event => {
        event.preventDefault();
        updateLinkCount(node.id)
            .then((response: { status: any; }) => {
                console.log(response.status);
                window.location.href = node.href;
            });
    });
}))();
