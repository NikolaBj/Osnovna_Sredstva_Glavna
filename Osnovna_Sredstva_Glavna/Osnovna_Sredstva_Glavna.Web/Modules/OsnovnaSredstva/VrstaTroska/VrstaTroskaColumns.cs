
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.VrstaTroska")]
    [BasedOnRow(typeof(Entities.VrstaTroskaRow), CheckNames = true)]
    public class VrstaTroskaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VrstaTroskaId { get; set; }
        [EditLink]
        public String Naziv { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public Boolean Active { get; set; }
    }
}