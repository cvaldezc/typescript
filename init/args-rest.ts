(() => {

	const fullName = ( firstName:string , ... restArgs: string[] ): string => {
		return `${firsName} ${restArgs.join(' ')}`;
	}

	const supernam = fullname( 'Clark', 'Joseph', 'Kent' );
	console.log({ superman });

})()
