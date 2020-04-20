
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.Dokumentacija")]
    [BasedOnRow(typeof(Entities.DokumentacijaRow), CheckNames = true)]
    public class DokumentacijaForm
    {
        public String Naziv { get; set; }
        public Boolean Active { get; set; }
        public String FileContent { get; set; }
        
        [DefaultValue("now"),Hidden]
        public DateTime DateTimeCreated { get; set; }
        public Int32 OsnovnoId { get; set; }
      //  public Int32 ServisId { get; set; }
    }
}