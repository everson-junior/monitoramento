#Include 'Protheus.ch'
#INCLUDE 'FWMVCDEF.CH'
#INCLUDE 'TOPCONN.CH'
#INCLUDE "FWLIBVERSION.CH"
#INCLUDE "TBICONN.CH"

Function MainCallApp()
    FwCallApp("smarttools")
return

Static Function JsToAdvpl(oWebChannel, cType, cContent)
	Local oJson := JsonObject():New()
	Local xret := Nil

	Do CASE
		Case cType == "monitor"
			RmiNewMoni()
		Case cType == "advplToJs"
			oWebChannel:AdvplToJs("advplToJs", "Mandei um Alert")
		Case cType == "conpad"
			conout(cContent)
			xret := oJson:FromJson(cContent) 
			if ValType(xret) == "C"
				oWebChannel:AdvplToJs("retCompad", '{"status":"erro", "alias":"", "conteudo":"Erro na Consulta PAdr?o"}')
			else
				if oJson["alias"] == "XXX"
					&("sadsad->sdfsdfsdf")
				endIf
				If ConPad1(,,,oJson["alias"],,,.F.)
					oWebChannel:AdvplToJs("retCompad", '{"status":"sucesso", "alias":"'+oJson["alias"]+'", "conteudo":"'+&(oJson["alias"] + '->' + oJson["campo"])+'"}')
				else
					oWebChannel:AdvplToJs("retCompad", '{"status":"erro", "alias":"", "conteudo":"Cancelei o Compad"}')
				EndIf
			EndIf
	ENDCASE

Return .T.
