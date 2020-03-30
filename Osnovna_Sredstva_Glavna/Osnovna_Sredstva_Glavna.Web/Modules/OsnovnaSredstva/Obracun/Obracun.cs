using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;
using System.Collections.Generic;

namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Obracun
{
    public class PokreniObracunRequest : ServiceRequest
    {
        // public List<int> ObracunID { get; set; }
        public int ObracunID { get; set; }
        public int IdObracun { get; set; }

    }

    public class PokreniObracunAction : ServiceResponse
    {
        // public List<int> ObracunID { get; set; }
        public int ObracunID { get; set; }
        public int IdObracun { get; set; }
    }



}
