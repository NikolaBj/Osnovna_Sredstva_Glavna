
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.Partneri")]
    [BasedOnRow(typeof(Entities.PartneriRow), CheckNames = true)]
    public class PartneriForm
    {
        public String Naziv { get; set; }
        public String Adresa { get; set; }
        public Int32 Ptt { get; set; }
        public String Mjesto { get; set; }
        public String Grad { get; set; }
        [ReadOnly(true), Hidden, DefaultValue(true)]
        public Boolean Active { get; set; }
        [ReadOnly(true), Hidden, DefaultValue("now")]
        public DateTime DateTimeCreated { get; set; }
        public String Drzava { get; set; }
    }
}


