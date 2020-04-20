using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;
using System.Collections.Generic;

namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.OsnovnoSredstvo
{
    
    public class PokreniAktivacijuRequest : ServiceRequest
        {
            // public List<int> ObracunID { get; set; }
            public int OsnovnoId { get; set; }
            public int osnovnoId { get; set; }

           

        }

    public class PokreniAktivacijuAction : ServiceResponse
    {
        // public List<int> ObracunID { get; set; }
        public int OsnovnoId { get; set; }
        public int osnovnoId { get; set; }
    }
}


 
   

 