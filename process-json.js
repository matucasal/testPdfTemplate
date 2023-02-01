function processJson(json){
	const nombre = json.IdentificacionConsultada[0].NombreSujeto;
	const documento = json.IdentificacionConsultada[0].NumeroDocumentoDobleInfo;
	return {nombre, documento}
}

module.exports = processJson;