
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.Sektori")]
    [BasedOnRow(typeof(Entities.SektoriRow), CheckNames = true)]
    public class SektoriForm
    {
        public String Naziv { get; set; }
        public String Šifra { get; set; }
        [ReadOnly(true), Hidden, DefaultValue(true)]
        public Boolean Active { get; set; }
        [DefaultValue("now"), Hidden]
        public DateTime DateTimeCreated { get; set; }
    }
}



