
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.OsnovnoSredstvo")]
    [BasedOnRow(typeof(Entities.OsnovnoSredstvoRow), CheckNames = true)]
    public class OsnovnoSredstvoColumns
    {
        [ DisplayName("Db.Shared.RecordId"), AlignRight]
         
        public Int32 OsnovnoId { get; set; }
        [EditLink,QuickFilter]
        public String NazivOpreme { get; set; }
        [QuickFilter]
        public String PartnerNaziv { get; set; }
        public String UraBrojRacuna { get; set; }
        [QuickFilter]
        public String SerijskiBroj { get; set; }

        public String InventarskiBroj { get; set; }
        public Decimal NabavnaVrijednost { get; set; }
        public Decimal AmortiziranaVrijednost { get; set; }
        [QuickFilter]
        public Decimal KnjigovodstvenaVrijednost { get; set; }
        
        [Hidden]
        public Decimal UvecanjeVrijednosti { get; set; }
        [Hidden]
        public Decimal UmanjenjeVrijednosti { get; set; }
        public String SektorNaziv { get; set; }
        [QuickFilter]
       [Hidden]
        public Boolean Active { get; set; }
        [QuickFilter]
        public DateTime DatumNabave { get; set; }
        [Hidden]
        public DateTime DatumAmortizacije { get; set; }
        [Hidden]
        public DateTime DatumOtpisa { get; set; }
        [Hidden]
        public DateTime DatumPripreme { get; set; }
        [Hidden]
        public Boolean Otpisano { get; set; }
       
        public Decimal Količina { get; set; }
        [QuickFilter]
        [Hidden]
        public String AmGrupaNaziv { get; set; }
        [Hidden]
        public DateTime DateTimeCreated { get; set; }
        [Hidden]
        public String KontoNaziv { get; set; }
        [Hidden]
        public String KontoIvNaziv { get; set; }
        [Hidden]
        public String Napomena { get; set; }
        [Hidden]
        public String JedinicaMjere { get; set; }
        [Hidden]
        public Decimal StopaAmSredstva { get; set; }
    }
}