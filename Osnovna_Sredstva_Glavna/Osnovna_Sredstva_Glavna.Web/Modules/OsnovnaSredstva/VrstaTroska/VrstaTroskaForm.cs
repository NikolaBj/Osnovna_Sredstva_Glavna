
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.VrstaTroska")]
    [BasedOnRow(typeof(Entities.VrstaTroskaRow), CheckNames = true)]
    public class VrstaTroskaForm
    {
        public String Naziv { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public Boolean Active { get; set; }
    }
}