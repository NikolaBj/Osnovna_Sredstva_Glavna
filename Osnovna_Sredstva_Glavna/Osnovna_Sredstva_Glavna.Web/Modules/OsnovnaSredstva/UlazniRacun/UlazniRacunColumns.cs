
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OsnovnaSredstva.UlazniRacun")]
    [BasedOnRow(typeof(Entities.UlazniRacunRow), CheckNames = true)]
    public class UlazniRacunColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UraId { get; set; }
        public String PArtnerNaziv { get; set; }
        public String UraBroj { get; set; }
        [EditLink]
        public String BrojRacuna { get; set; }
        public DateTime DatumRacuna { get; set; }
        public DateTime DatumKnjizenja { get; set; }
        public DateTime DatumDospijeca { get; set; }
        public DateTime DatumIsporuke { get; set; }
        public Int32 PoslovnaGodina { get; set; }
        public String MjestoTroskaSifra { get; set; }
        public Decimal IznosOsnovice { get; set; }
        public Decimal IznosPoreza { get; set; }
        public Decimal UkupanIznos { get; set; }
        public String Opis { get; set; }
        public Boolean Active { get; set; }
        public DateTime DateTimeCreated { get; set; }
    }
}