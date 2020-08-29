const bcrypt = require('bcryptjs');
const saltRounds = 16;

async function main() {
	const plainTextPassword = 'mySuperAwesomePassword';
	const hash = await bcrypt.hash(plainTextPassword, saltRounds);
	console.log(hash);

	let compareToMerlin = false;

	try {
		compareToMerlin = await bcrypt.compare('merlinsbeard', hash);
	} catch (e) {
		//no op
	}

	if (compareToMerlin) {
		console.log("The passwords match.. this shouldn't be");
	} else {
		console.log('The passwords do not match');
	}

	let compareToMatch = false;

	try {
		compareToMatch = await bcrypt.compare('mySuperAwesomePassword', hash);
	} catch (e) {
		//no op
	}

	if (compareToMatch) {
		console.log('The passwords match.. this is good');
	} else {
		console.log('The passwords do not match, this is not good, they should match');
	}
}

main();