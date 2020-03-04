
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.Konta")]
    [BasedOnRow(typeof(Entities.KontaRow), CheckNames = true)]
    public class KontaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KontoId { get; set; }
        [EditLink]
        public String Naziv { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public String Konto { get; set; }
    }
}