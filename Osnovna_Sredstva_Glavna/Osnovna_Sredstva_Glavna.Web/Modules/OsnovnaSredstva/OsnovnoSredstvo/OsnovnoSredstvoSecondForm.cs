
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Osnovna_Sredstva_Glavna.OsnovnaSredstva.OsnovnoSredstvo.OsnovnoSredstvoSecondForm")]
    [BasedOnRow(typeof(Entities.OsnovnoSredstvoRow), CheckNames = true)]
    public class OsnovnoSredstvoSecondForm
    {


        [Category("Datumi")]
        [HalfWidth]
        public DateTime DatumServisa { get; set; }
        

         
    }
}