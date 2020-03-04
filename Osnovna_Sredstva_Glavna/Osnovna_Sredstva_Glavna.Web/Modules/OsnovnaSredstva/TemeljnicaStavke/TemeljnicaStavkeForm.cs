
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.TemeljnicaStavke")]
    [BasedOnRow(typeof(Entities.TemeljnicaStavkeRow), CheckNames = true)]
    public class TemeljnicaStavkeForm
    {
        public Int32 ObracunId { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public String Kontoid { get; set; }
        public Decimal Duguje { get; set; }
        public Decimal Potrazuje { get; set; }
    }
}