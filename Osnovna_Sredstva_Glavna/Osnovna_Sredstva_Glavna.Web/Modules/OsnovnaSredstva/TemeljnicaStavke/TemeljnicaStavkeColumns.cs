
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.TemeljnicaStavke")]
    [BasedOnRow(typeof(Entities.TemeljnicaStavkeRow), CheckNames = true)]
    public class TemeljnicaStavkeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TemeljnicaId { get; set; }
        public String ObracunNapomena { get; set; }
        public DateTime DateTimeCreated { get; set; }
        [EditLink]
        public String Kontoid { get; set; }
        public Decimal Duguje { get; set; }
        public Decimal Potrazuje { get; set; }
    }
}