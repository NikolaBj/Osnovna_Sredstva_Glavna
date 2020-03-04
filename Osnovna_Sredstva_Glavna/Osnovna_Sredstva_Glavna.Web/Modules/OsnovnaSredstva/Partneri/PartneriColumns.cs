
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.Partneri")]
    [BasedOnRow(typeof(Entities.PartneriRow), CheckNames = true)]
    public class PartneriColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PartnerId { get; set; }
        [EditLink]
        public String Naziv { get; set; }
        public String Adresa { get; set; }
        public Int32 Ptt { get; set; }
        public String Mjesto { get; set; }
        public String Grad { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public String Drzava { get; set; }
    }
}