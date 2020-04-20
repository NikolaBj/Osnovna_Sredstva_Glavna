
namespace Osnovna_Sredstva_Glavna.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.OsnovnoSredstvo")]
    [BasedOnRow(typeof(Entities.OsnovnoSredstvoRow), CheckNames = true)]
    public class OsnovnoSredstvoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OsnovnoId { get; set; }
        [EditLink]
        public String NazivOpreme { get; set; }
        public String PartnerNaziv { get; set; }
        public String UraUraBroj { get; set; }
        public String SerijskiBroj { get; set; }
        public String InventarskiBroj { get; set; }
        public Decimal NabavnaVrijednost { get; set; }
        public Decimal AmortiziranaVrijednost { get; set; }
        public Decimal KnjigovodstvenaVrijednost { get; set; }
        public Decimal UvecanjeVrijednosti { get; set; }
        public Decimal UmanjenjeVrijednosti { get; set; }
        public String SektorNaziv { get; set; }
        public Boolean Active { get; set; }
        public DateTime DatumNabave { get; set; }
        public DateTime DatumAmortizacije { get; set; }
        public DateTime DatumOtpisa { get; set; }
        public DateTime DatumPripreme { get; set; }
        public Boolean Otpisano { get; set; }
        public Decimal Količina { get; set; }
        public String AmGrupaNaziv { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public String KontoNaziv { get; set; }
        public String KontoIvNaziv { get; set; }
        public String Napomena { get; set; }
        public String JedinicaMjere { get; set; }
        public Decimal StopaAmSredstva { get; set; }
        public DateTime DatumServisa { get; set; }
    }
}