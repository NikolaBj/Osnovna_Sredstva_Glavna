
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.OsnovnoSredstvo")]
    [BasedOnRow(typeof(Entities.OsnovnoSredstvoRow), CheckNames = true)]
    public class OsnovnoSredstvoForm
    {
        
        [Category("Osnovni podaci")]
        [DefaultValue(false)]
        public Boolean Active { get; set; }
        public String NazivOpreme { get; set; }
        public Int32 PartnerId { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String SerijskiBroj { get; set; }
        [HalfWidth]
        public String InventarskiBroj { get; set; }
        [HalfWidth]
        public Decimal Količina { get; set; }
        [HalfWidth]
        public String JedinicaMjere { get; set; }
        [Category("Iznosi")]

        [DefaultValue(0.00)]
        public Decimal NabavnaVrijednost { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0.00)]
        public Decimal AmortiziranaVrijednost { get; set; }
        [ReadOnly(true)]
        [DefaultValue(0.00)]
        public Decimal KnjigovodstvenaVrijednost { get; set; }
        [DefaultValue(0.00)]
        [ReadOnly(true)]
        public Decimal UvecanjeVrijednosti { get; set; }
        [DefaultValue(0.00)]
        [ReadOnly(true)]
        public Decimal UmanjenjeVrijednosti { get; set; }
        [Category("Knjizenja")]
        [HalfWidth]
        public Int32 UraId { get; set; }

         
        public Int32 KontoId { get; set; }
        
        public Int32 KontoIvId { get; set; }
        [HalfWidth]
        [DefaultValue(false)]
        [ReadOnly(true)]
        public Boolean Otpisano { get; set; }
        [Category("Amortizacija")]
         
        public Int32 AmGrupaId { get; set; }
        [HalfWidth]
        public Decimal StopaAmSredstva { get; set; }

        
        [Category("Datumi")]
        [HalfWidth]
        public DateTime DatumNabave { get; set; }
        [HalfWidth]
        public DateTime DatumAmortizacije { get; set; }
        [HalfWidth]
        public DateTime DatumOtpisa { get; set; }
        [HalfWidth]
        public DateTime DatumPripreme { get; set; }
        [HalfWidth]
        public DateTime DatumServisa { get; set; }
        [HalfWidth]
        [DefaultValue("now")]
        public DateTime DateTimeCreated { get; set; }

        [Category("Ostalo")]
        public Int32 SektorId { get; set; }
        public String Napomena  { get; set; }

         
    }
}