
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.AmortizacijskeGrupe")]
    [BasedOnRow(typeof(Entities.AmortizacijskeGrupeRow), CheckNames = true)]
    public class AmortizacijskeGrupeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AmGrupaId { get; set; }
        [EditLink]
        public String Naziv { get; set; }
        public String Naziv2 { get; set; }
        public Int32 AmVijekTrajanja { get; set; }
        public Decimal GodisnjaAmortizacija { get; set; }
        public Decimal DvostrukaGodisnjaAm { get; set; }
        public String KontoIvNaziv { get; set; }
        public String KontoTrNaziv { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}