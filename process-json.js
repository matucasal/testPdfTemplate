function processJson(json){
	const nombre = json.IdentificacionConsultada[0].NombreSujeto;
	const documento = json.IdentificacionConsultada[0].NumeroDocumentoDobleInfo;
	const historico360 = {
		'actual' : json['Historico Score 360'].find(x => x.Retroactivo === "Actual").Score,
		'6meses' : json['Historico Score 360'].find(x => x.Retroactivo === "-6 Meses").Score,
		'12meses' : json['Historico Score 360'].find(x => x.Retroactivo === "-12 Meses").Score,
	}

	const resumenInforme = {
		'opeImpagos' : json['Datos Resumen Informe 360'].find(x => x.Tipo === "OpeImpagos"),
		'demandaJudicial' : json['Datos Resumen Informe 360'].find(x => x.Tipo === "DemandaJudicial"),
		'carteraCastigada' : json['Datos Resumen Informe 360'].find(x => x.Tipo === "CarteraCastigada"),
	}

	console.log(resumenInforme);
	return {nombre, documento, historico360, resumenInforme}
}

module.exports = processJson;