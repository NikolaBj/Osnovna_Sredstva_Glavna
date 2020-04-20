
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.Dokumentacija")]
    [BasedOnRow(typeof(Entities.DokumentacijaRow), CheckNames = true)]
    public class DokumentacijaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DokumentId { get; set; }
        [EditLink]
        public String Naziv { get; set; }
        public Boolean Active { get; set; }
        public String FileContent { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public String OsnovnoNazivOpreme { get; set; }
      //  public String ServisNapomena { get; set; }
    }
}