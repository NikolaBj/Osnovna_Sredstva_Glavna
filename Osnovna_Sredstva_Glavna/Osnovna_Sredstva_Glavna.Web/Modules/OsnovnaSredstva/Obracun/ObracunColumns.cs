
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.Obracun")]
    [BasedOnRow(typeof(Entities.ObracunRow), CheckNames = true)]
    public class ObracunColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ObracunId { get; set; }
        public String PartnerNaziv { get; set; }
        public String OsnovnoNazivOpreme { get; set; }
        public String SektorNaziv { get; set; }
        public String AmGrupaNaziv { get; set; }
        public DateTime DatumObracuna { get; set; }
        public DateTime RazdobljeOd { get; set; }
        public DateTime RazdobljeDo { get; set; }
        [EditLink]
        public String Napomena { get; set; }
        public Boolean Otpisano { get; set; }
        public Boolean Active { get; set; }
        public Boolean Zavrsen { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}