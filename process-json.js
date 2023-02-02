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

	

	const analisisSaldosPorVencerSistemaFinanciero =  json['Analisis saldos por vencer sistema financiero'];
	if(analisisSaldosPorVencerSistemaFinanciero.length > 0)
		analisisSaldosPorVencerSistemaFinanciero[analisisSaldosPorVencerSistemaFinanciero.length - 1]['Institucion'] = 'TOTAL';
	
	const morosidades = json['Resumen Protestos y Morosidades 360'][0];

	const deudaHistorica = json['Recursivo deuda historica 3601'].slice(0,10);

	const analisisSaldosPorVencer360 = {
		'actual' : json['Analisis de Saldos por Vencer 360'].find(x => x.PeriodoOperacion === "Actual").SaldosXVencer,
		'1a3meses' : json['Analisis de Saldos por Vencer 360'].find(x => x.PeriodoOperacion === "1 a 3 meses").SaldosXVencer,
		'3a6meses' : json['Analisis de Saldos por Vencer 360'].find(x => x.PeriodoOperacion === "3 a 6 meses").SaldosXVencer,
		'6a12meses' : json['Analisis de Saldos por Vencer 360'].find(x => x.PeriodoOperacion === "6 a 12 meses").SaldosXVencer,
		'mas12meses' : json['Analisis de Saldos por Vencer 360'].find(x => x.PeriodoOperacion === "+12 meses").SaldosXVencer,
	}

	const creditosUltimosMeses = json['Creditos otorgados 12 ultimos meses Educativo 3600'];
	if(creditosUltimosMeses.length > 0)
		creditosUltimosMeses[creditosUltimosMeses.length - 1]['Institucion'] = 'TOTAL ÚLTIMOS 12 MESES';

	return {nombre, documento, historico360, resumenInforme, analisisSaldosPorVencerSistemaFinanciero,morosidades, deudaHistorica, analisisSaldosPorVencer360, creditosUltimosMeses}
}

module.exports = processJson;