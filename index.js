'use strict';
const createPDF = require("./pdf-generator");

async function runSample() {
	console.log('running sample');

	const data = {
		title: "A new Brazilian School",
		date: "05/12/2018",
		name: "Rodolfo Luis Marcos",
		age: 28,
		birthdate: "12/07/1990",
		course: "Computer Science",
		obs: "Graduated in 2014 by Federal University of Lavras, work with Full-Stack development and E-commerce."
	}
	
	await createPDF(data);
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;