
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.AmortizacijskeGrupe")]
    [BasedOnRow(typeof(Entities.AmortizacijskeGrupeRow), CheckNames = true)]
    public class AmortizacijskeGrupeForm
    {
        public String Naziv { get; set; }
        public String Naziv2 { get; set; }
        public Int32 AmVijekTrajanja { get; set; }
        public Decimal GodisnjaAmortizacija { get; set; }
        public Decimal DvostrukaGodisnjaAm { get; set; }
        public Int32 KontoIvId { get; set; }
        public Int32 KontoTrId { get; set; }
        [ReadOnly(true), Hidden, DefaultValue(true)]
        public Boolean Active { get; set; }
        [Hidden, DefaultValue("now")]
        public DateTime DateTimeCreated { get; set; }
    }
}


