'use strict';
const { Exception } = require("handlebars");
const createPDF = require("./pdf-generator");
const processJson = require("./process-json");

async function runSample() {
	console.log('running sample');

	const reporteData = require("./output.json");
	const dataProcessed = processJson(reporteData);
	console.log('dataProcessed', dataProcessed);
	await createPDF(dataProcessed);
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;