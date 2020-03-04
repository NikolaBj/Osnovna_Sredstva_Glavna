using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Izvjesca
{
    public class ProcParam : ServiceRequest
    {
        public string OsnovnoId { get; set; }
    }
}