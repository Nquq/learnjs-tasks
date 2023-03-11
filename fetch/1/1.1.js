async function getUsers(names) {
	let users = [];

	for (let name of names) {
		let user = await fetch(`https://api.github.com/users/${name}`);

		if (user.ok) {
			let result = await user.json();
			users.push(result);
		}
	}
	return users;
}
