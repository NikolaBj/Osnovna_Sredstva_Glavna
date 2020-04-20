
namespace Osnovna_Sredstva_Glavna.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OsnovnoSredstvo")]
    [BasedOnRow(typeof(Entities.OsnovnoSredstvoRow), CheckNames = true)]
    public class OsnovnoSredstvoForm
    {
        public String NazivOpreme { get; set; }
        public Int32 PartnerId { get; set; }
        public Int32 UraId { get; set; }
        public String SerijskiBroj { get; set; }
        public String InventarskiBroj { get; set; }
        public Decimal NabavnaVrijednost { get; set; }
        public Decimal AmortiziranaVrijednost { get; set; }
        public Decimal KnjigovodstvenaVrijednost { get; set; }
        public Decimal UvecanjeVrijednosti { get; set; }
        public Decimal UmanjenjeVrijednosti { get; set; }
        public Int32 SektorId { get; set; }
        public Boolean Active { get; set; }
        public DateTime DatumNabave { get; set; }
        public DateTime DatumAmortizacije { get; set; }
        public DateTime DatumOtpisa { get; set; }
        public DateTime DatumPripreme { get; set; }
        public Boolean Otpisano { get; set; }
        public Decimal Količina { get; set; }
        public Int32 AmGrupaId { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public Int32 KontoId { get; set; }
        public Int32 KontoIvId { get; set; }
        public String Napomena { get; set; }
        public String JedinicaMjere { get; set; }
        public Decimal StopaAmSredstva { get; set; }
        public DateTime DatumServisa { get; set; }
    }
}