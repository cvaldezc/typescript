(() => {

	const error = (message: string):never => {
		thro new Error(message);	
	}
	
	error("auxilio");
	console.log("hello");
})()
