
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.MjestoTroska")]
    [BasedOnRow(typeof(Entities.MjestoTroskaRow), CheckNames = true)]
    public class MjestoTroskaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MjestoTroskaId { get; set; }
        [EditLink]
        public String Sifra { get; set; }
        public String Naziv { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}