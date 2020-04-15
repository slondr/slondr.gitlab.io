// Palindrome functions taken from Lab 8
function isPalindrome(text)  {
    if(!text) return false;
    const string = sanitize(text);
    console.log(string);
    if(string.length === 1) return true; // single-character strings are palindromes
    else if(string.length < 1) return false; // invalid input
    for(let i = 0; i < string.length / 2; ++i) {
	if(string[i] !== string[string.length - i - 1])
	    return false; // there is a mismatch; no palindrome
    }
    return true; // there were no mismatches; palindrome
}

function sanitize(text) {
    console.log(`Received ${text}`);
    let ret = text.toLowerCase().replace(/\W+/g, '');
    console.log(`Returning ${ret}`);
    return ret;
}

// add text to list of attempts
function attempt(text, success) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(text);
    node.classList.add(success? 'is-palindrome' : 'not-palindrome');
    node.appendChild(textNode);
    document.getElementById('attempts').appendChild(node);
}

// create event listener and call functions
window.onload = () => document.getElementById('form').onsubmit = () => {
    let phrase = document.getElementById('text').value;
    let errors = [];
    try {
	if(!phrase) {
	    errors.push('No text provided!');
	} else if(sanitize(phrase).length < 1) {
	    errors.push('No alphanumeric characters in input!');
	}
    } catch(e) {
	errors.push(e);
    } finally {
	if(errors.length > 0) {
	    console.error(errors);
	    alert('Please try another phrase.');
	} else {
	    attempt(phrase, isPalindrome(phrase));
	}
    }
};
