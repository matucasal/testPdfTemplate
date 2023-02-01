const fs = require("fs");
const path = require("path");
const puppeteer = require('puppeteer');
const handlebars = require("handlebars");

async function createPDF(data){
	console.log('data', data);
	try{
		console.log('Creating PDF');
		var templateHtml = fs.readFileSync(path.join(process.cwd(), 'template.html'), 'utf8');
		var template = handlebars.compile(templateHtml);
		var html = template(data);
		console.log('Template recieved');
		var milis = new Date();
		milis = milis.getTime();

		var pdfPath = path.join('pdf', `${data.nombre}-${milis}.pdf`);

		var options = {
			width: '1230px',
			headerTemplate: "<p></p>",
			footerTemplate: "<p></p>",
			displayHeaderFooter: false,
			margin: {
				top: "10px",
				bottom: "30px"
			},
			printBackground: true,
			path: pdfPath
		}

		const browser = await puppeteer.launch({
			headless: true,
			args: [  
				'--disable-gpu',
				'--no-sandbox',
		],
		});
		console.log('Puppeeteer launched');
		var page = await browser.newPage();
		await page.setContent(html, {
			waitUntil: 'networkidle0'
		});
		console.log(page);
		const pdf  = await page.pdf(options);
		console.log('PDF created');
		console.log(pdf);
		await browser.close();
	}
	catch(err){
		console.log(err);
	}
	
}

module.exports = createPDF;