namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Osnovno_Sredstvo
    {
        [Key]
        public int OsnovnoId { get; set; }

        [Required]
        [StringLength(80)]
        public string Naziv_opreme { get; set; }

        public int PartnerId { get; set; }

        public int UraId { get; set; }

        [Required]
        [StringLength(50)]
        public string Serijski_broj { get; set; }

        [Required]
        [StringLength(50)]
        public string Inventarski_broj { get; set; }

        public decimal Nabavna_vrijednost { get; set; }

        public decimal? Amortizirana_vrijednost { get; set; }

        public decimal? Knjigovodstvena_vrijednost { get; set; }

        public decimal? Uvecanje_vrijednosti { get; set; }

        public decimal? Umanjenje_vrijednosti { get; set; }

        public int SektorId { get; set; }

        public bool? Active { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime Datum_nabave { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Datum_amortizacije { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Datum_otpisa { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Datum_pripreme { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? DatumServisa { get; set; }

        public bool? Otpisano { get; set; }

        public decimal Količina { get; set; }

        public int AmGrupaId { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DateTimeCreated { get; set; }

        public int KontoId { get; set; }

        public int KontoIVId { get; set; }

        [StringLength(200)]
        public string Napomena { get; set; }

        [Required]
        [StringLength(30)]
        public string Jedinica_mjere { get; set; }

        public decimal? Stopa_am_sredstva { get; set; }

        public virtual Amortizacijske_grupe Amortizacijske_grupe { get; set; }

        public virtual Konta Konta { get; set; }

        public virtual Konta Konta1 { get; set; }

        public virtual Partneri Partneri { get; set; }

        public virtual Sektori Sektori { get; set; }

        public virtual Ulazni_racun Ulazni_racun { get; set; }

        public decimal? Izracun()
        {
            return Nabavna_vrijednost - Amortizirana_vrijednost;
        }
    }
}
