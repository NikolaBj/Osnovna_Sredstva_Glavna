
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.MjestoTroska")]
    [BasedOnRow(typeof(Entities.MjestoTroskaRow), CheckNames = true)]
    public class MjestoTroskaForm
    {
        public String Sifra { get; set; }
        public String Naziv { get; set; }
        [ReadOnly(true), Hidden, DefaultValue(true)]
        public Boolean Active { get; set; }
        [Hidden, DefaultValue("now")]
        public DateTime DateTimeCreated { get; set; }
    }
}



