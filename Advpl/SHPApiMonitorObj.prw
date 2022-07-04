#INCLUDE "PROTHEUS.CH"

//-------------------------------------------------------------------
/*/{Protheus.doc} Classe RetailItemObj
    Classe para tratamento da API de Produtos do Varejo
/*/
//-------------------------------------------------------------------
Class SHPApiMonitorObj From LojRestObj

	Method New(oWsRestObj)  Constructor

    Method SetFields()

EndClass

//-------------------------------------------------------------------
/*/{Protheus.doc} New
Método construtor da Classe
@param oWsRestObj - Objeto WSRESTFUL da API
@version 1.0
/*/
//-------------------------------------------------------------------
Method New(oWsRestObj) Class SHPApiMonitorObj

    _Super:New(oWsRestObj)

    self:SetSelect("MHL")

Return Nil

//-------------------------------------------------------------------
/*/{Protheus.doc} SetFields
Carrega os campos que serão retornados
@version 1.0
/*/
//-------------------------------------------------------------------
Method SetFields() Class SHPApiMonitorObj

    HmAdd(self:oFields, {"EMPRESA"					, ""			, "cEmpAnt"		, "empresa"					}, 1, 3)
    HmAdd(self:oFields, {"FILIAL"					, "MHL_FILIAL"  , "MHL_FILIAL"  , "filial"					}, 1, 3)
    HmAdd(self:oFields, {"SEQUECIA"					, "MHL_SEQ"     , "MHL_SEQ"     , "sequencia"				}, 1, 3)
    HmAdd(self:oFields, {"TABELA"					, "MHL_ALIAS"   , "MHL_ALIAS"   , "tabela"				    }, 1, 3)
    HmAdd(self:oFields, {"RECNO"					, "MHL_RECNO"   , "MHL_RECNO"   , "recno"					}, 1, 3)
    HmAdd(self:oFields, {"STATUS"					, "MHL_STATUS"  , "MHL_STATUS"  , "status"		    		}, 1, 3)
    HmAdd(self:oFields, {"DATA"						, "MHL_DATA"    , "MHL_DATA"    , "data"	    			}, 1, 3)
    HmAdd(self:oFields, {"HORA"						, "MHL_HORA"    , "MHL_HORA"    , "hora"				    }, 1, 3)
    HmAdd(self:oFields, {"LOCALERRO"				, "MHL_CODMEN"  , "MHL_CODMEN"  , "localerro"				}, 1, 3)
    HmAdd(self:oFields, {"ERROMSG"					, "MHL_ERROR"   , "MHL_ERROR"   , "erromsg"				    }, 1, 3)
    HmAdd(self:oFields, {"INDICE"					, "MHL_INDICE"  , "MHL_INDICE"  , "indice"				    }, 1, 3)
    HmAdd(self:oFields, {"CHAVEUNI"					, "MHL_CHAVE"   , "MHL_CHAVE"   , "chaveuni"				}, 1, 3)
    HmAdd(self:oFields, {"SISTEMA"					, "MHL_CASSIN"  , "MHL_CASSIN"  , "sistema"					}, 1, 3)
    HmAdd(self:oFields, {"PROCESSO"					, "MHL_CPROCE"  , "MHL_CPROCE"  , "processo"			    }, 1, 3)
    HmAdd(self:oFields, {"ID"		             	, "MHL_UIDORI"  , "MHL_UIDORI"  , "id"           		  	}, 1, 3)
Return Nil
