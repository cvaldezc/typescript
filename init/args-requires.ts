(() => {

	const fullName = (firsstName: string, lastName?:string, upper: boolean = false) => {
		return `${firstName} ${lastName || upper }`;
	}

	const name = fullName('Tony', 'Stark');

	console.log({ name });


})()
