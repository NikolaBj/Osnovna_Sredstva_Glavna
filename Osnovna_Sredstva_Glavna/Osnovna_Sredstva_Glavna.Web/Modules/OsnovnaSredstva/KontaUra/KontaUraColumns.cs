
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.KontaUra")]
    [BasedOnRow(typeof(Entities.KontaUraRow), CheckNames = true)]
    public class KontaUraColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KontaUraId { get; set; }
        public String UraBrojRacuna { get; set; }
        public String KontoNaziv { get; set; }
        public Decimal IznosDuguje { get; set; }
        public Decimal IznosPotrazuje { get; set; }
        public String MjestoTroskaSifra { get; set; }
        [EditLink]
        public String Opis { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}