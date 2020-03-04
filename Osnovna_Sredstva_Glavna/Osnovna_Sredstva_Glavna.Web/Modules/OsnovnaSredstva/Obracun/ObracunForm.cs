
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.Obracun")]
    [BasedOnRow(typeof(Entities.ObracunRow), CheckNames = true)]
    public class ObracunForm
    {
        [ReadOnly(true)]
        public Int32 PartnerId { get; set; }
        [ReadOnly(true)]
        public Int32 OsnovnoId { get; set; }
        [ReadOnly(true)]
        public Int32 SektorId { get; set; }
        [ReadOnly(true)]
        public Int32 AmGrupaId { get; set; }
        [DefaultValue("now")]
        public DateTime DatumObracuna { get; set; }
        [ReadOnly(true)]
        public DateTime RazdobljeOd { get; set; }
        public DateTime RazdobljeDo { get; set; }
        public String Napomena { get; set; }
        public Boolean Otpisano { get; set; }
        public Boolean Active { get; set; }
        public Boolean Zavrsen { get; set; }
        [DefaultValue("now"), Hidden]
        public DateTime DateTimeCreated { get; set; }
    }
}