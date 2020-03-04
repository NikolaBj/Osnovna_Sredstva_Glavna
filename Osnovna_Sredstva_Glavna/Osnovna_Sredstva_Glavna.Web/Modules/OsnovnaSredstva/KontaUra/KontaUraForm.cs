
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.KontaUra")]
    [BasedOnRow(typeof(Entities.KontaUraRow), CheckNames = true)]
    public class KontaUraForm
    {
        public Int32 UraId { get; set; }
        public Int32 KontoId { get; set; }
        public Decimal IznosDuguje { get; set; }
        public Decimal IznosPotrazuje { get; set; }
        public Int32 MjestoTroskaId { get; set; }
        public String Opis { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}