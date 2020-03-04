using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Izvjesca
{
    public class ProcResponse : ServiceResponse
    {
        public string ExecutionResult { get; set; }
    }
}