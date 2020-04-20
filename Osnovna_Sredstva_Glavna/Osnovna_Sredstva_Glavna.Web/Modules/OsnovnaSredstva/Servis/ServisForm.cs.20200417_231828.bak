
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.Servis")]
    [BasedOnRow(typeof(Entities.ServisRow), CheckNames = true)]
    public class ServisForm
    {
        public Int32 PartnerId { get; set; }
        public Int32 OsnovnoId { get; set; }
        public DateTime DatumServisa { get; set; }
        public DateTime DatumEndServisa { get; set; }
        public String Napomena { get; set; }
        public Boolean Active { get; set; }
        [DefaultValue("now"), Hidden]
        public DateTime DateTimeCreated { get; set; }
        public Decimal IznosServisa { get; set; }
        public Int32 VrstaTroskaId { get; set; }
      //  public Int32 DokumentId { get; set; }

    //    private List<Entities.DokumentacijaRow> detailList;

        //public List<Entities.DokumentacijaRow> GetDetailList()
        //{
        //    return detailList;
        //}

        [Category("Dokumentacija")]
        [DokumentacijaEditor]
        public List<Entities.DokumentacijaRow> DetailList { get; set; }
    }
}