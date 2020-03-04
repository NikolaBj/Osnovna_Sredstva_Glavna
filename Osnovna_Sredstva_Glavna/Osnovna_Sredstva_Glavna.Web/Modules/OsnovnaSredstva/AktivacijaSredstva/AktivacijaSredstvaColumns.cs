
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.AktivacijaSredstva")]
    [BasedOnRow(typeof(Entities.AktivacijaSredstvaRow), CheckNames = true)]
    public class AktivacijaSredstvaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Int { get; set; }
        public String OsnovnoNazivOpreme { get; set; }
        public DateTime DatumAktivacije { get; set; }
    }
}