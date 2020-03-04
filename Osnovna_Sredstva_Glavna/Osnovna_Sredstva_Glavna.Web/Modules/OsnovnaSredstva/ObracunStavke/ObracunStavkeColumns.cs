
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.ObracunStavke")]
    [BasedOnRow(typeof(Entities.ObracunStavkeRow), CheckNames = true)]
    public class ObracunStavkeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ObracunStavkeId { get; set; }
        public String ObracunNapomena { get; set; }
        public String PartnerNaziv { get; set; }
        public String OsnovnoNazivOpreme { get; set; }
        public String SektorNaziv { get; set; }
        public String AmGrupaNaziv { get; set; }
        public Decimal StopaAmort { get; set; }
        public Decimal IznosOsnovice { get; set; }
        public Decimal IznosAmortizacije { get; set; }
        public DateTime DatumOdObracuna { get; set; }
        [EditLink]
        public String Napomena { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}