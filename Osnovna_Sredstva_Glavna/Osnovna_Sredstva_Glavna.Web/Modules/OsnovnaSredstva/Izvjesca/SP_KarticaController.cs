using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Izvjesca
{
    public class SP_KarticaController : Controller
    {
        // GET: SP_Kartica
        [HttpPost, JsonFilter]
        public Result<ServiceResponse> ExecuteProc(ProcParam request)
        {
            return this.UseConnection("Osnovna_Sredstva_GlavnaEntities", connection =>
            {
                using (IDbCommand command = connection.CreateCommand())
                {
                    IDbDataParameter Param1 = command.CreateParameter();
                    Param1.ParameterName = "@OsnovnoId";
                    Param1.Value = request.OsnovnoId;
                    command.Parameters.Add(Param1);

                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "[<sp_KarticaSredstvaPojedinacno>]";
                    //command.ExecuteNonQuery(); Can be execute with corret proc.

                    ProcResponse oProcResponse = new ProcResponse();
                    oProcResponse.ExecutionResult = "Success";
                    return (ServiceResponse)oProcResponse;
                }
            });
        }
    }
}