
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OsnovnaSredstva.UlazniRacun")]
    [BasedOnRow(typeof(Entities.UlazniRacunRow), CheckNames = true)]
    public class UlazniRacunForm
    {
        public Int32 PArtnerId { get; set; }
        [ReadOnly(true)]
        public String UraBroj { get; set; }
     
        public String BrojRacuna { get; set; }
        public DateTime DatumRacuna { get; set; }
        public DateTime DatumKnjizenja { get; set; }
        public DateTime DatumDospijeca { get; set; }
        public DateTime DatumIsporuke { get; set; }
        [ReadOnly(true)]
        public Int32 PoslovnaGodina { get; set; }
        public Int32 MjestoTroskaId { get; set; }
        public Decimal IznosOsnovice { get; set; }
        public Decimal IznosPoreza { get; set; }
        [ReadOnly(true)]
        public Decimal UkupanIznos { get; set; }
        public String Opis { get; set; }
        [ReadOnly(true), Hidden, DefaultValue(true)]
        public Boolean Active { get; set; }
        [DefaultValue("now"), Hidden]
        public DateTime DateTimeCreated { get; set; }
    }
}