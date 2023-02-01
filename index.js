'use strict';
const createPDF = require("./pdf-generator");
const fs = require("fs");

async function runSample() {
	console.log('running sample');

	const reporteData = require("./output.json");
	console.log('reporteData', reporteData);
	
	await createPDF(reporteData);
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;