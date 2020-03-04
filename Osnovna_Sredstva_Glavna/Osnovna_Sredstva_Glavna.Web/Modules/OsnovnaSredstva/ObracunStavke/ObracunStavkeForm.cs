
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.ObracunStavke")]
    [BasedOnRow(typeof(Entities.ObracunStavkeRow), CheckNames = true)]
    public class ObracunStavkeForm
    {
        public Int32 ObracunId { get; set; }
        public Int32 PartnerId { get; set; }
        public Int32 OsnovnoId { get; set; }
        public Int32 SektorId { get; set; }
        public Int32 AmGrupaId { get; set; }
        public Decimal StopaAmort { get; set; }
        public Decimal IznosOsnovice { get; set; }
        public Decimal IznosAmortizacije { get; set; }
        public DateTime DatumOdObracuna { get; set; }
        public String Napomena { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}