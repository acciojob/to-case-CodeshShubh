function toCase(text) {
  // write your code here
	if( text ==''){
		return '-';
	}
	const trimmedStr = text.trim();
	let lowercase = trimmedStr.toLowerCase().trim();
	let uppercase = trimmedStr.toUpperCase().trim();
	return `${lowercase}-${uppercase}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
  