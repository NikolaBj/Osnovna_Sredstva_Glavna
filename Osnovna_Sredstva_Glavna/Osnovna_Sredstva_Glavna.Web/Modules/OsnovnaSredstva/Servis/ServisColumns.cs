
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.Servis")]
    [BasedOnRow(typeof(Entities.ServisRow), CheckNames = true)]
    public class ServisColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ServisId { get; set; }
        public String PartnerNaziv { get; set; }
        public String OsnovnoNazivOpreme { get; set; }
        public DateTime DatumServisa { get; set; }
        public DateTime DatumEndServisa { get; set; }
        [EditLink]
        public String Napomena { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public Decimal IznosServisa { get; set; }
        public String VrstaTroskaNaziv { get; set; }
       // public String DokumentNaziv { get; set; }
    }
}