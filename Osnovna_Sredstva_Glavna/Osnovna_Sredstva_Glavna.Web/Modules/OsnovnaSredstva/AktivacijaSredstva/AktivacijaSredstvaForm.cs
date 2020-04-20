
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.AktivacijaSredstva")]
    [BasedOnRow(typeof(Entities.AktivacijaSredstvaRow), CheckNames = true)]
    public class AktivacijaSredstvaForm
    {
        [ReadOnly(true)]
        public Int32 OsnovnoId { get; set; }
        public DateTime DatumAktivacije { get; set; }
    }
}