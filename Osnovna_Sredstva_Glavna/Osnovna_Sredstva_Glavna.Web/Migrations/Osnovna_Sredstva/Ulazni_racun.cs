namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Ulazni_racun
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Ulazni_racun()
        {
            KontaUra = new HashSet<KontaUra>();
            Osnovno_Sredstvo = new HashSet<Osnovno_Sredstvo>();
        }

        [Key]
        public int UraId { get; set; }

        public int PArtnerId { get; set; }

        public string UraBroj { get; set; }

        [StringLength(140)]
        public string BrojRacuna { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Datum_racuna { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Datum_knjizenja { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Datum_dospijeca { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? Datum_isporuke { get; set; }

        public int Poslovna_Godina { get; set; }

        public int MjestoTroskaId { get; set; }

        public decimal Iznos_Osnovice { get; set; }

        public decimal Iznos_Poreza { get; set; }

        public decimal Ukupan_Iznos { get; set; }

        [Required]
        [StringLength(200)]
        public string Opis { get; set; }

        public bool? Active { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DateTimeCreated { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<KontaUra> KontaUra { get; set; }

        public virtual Mjesto_Troska Mjesto_Troska { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Osnovno_Sredstvo> Osnovno_Sredstvo { get; set; }

        public virtual Partneri Partneri { get; set; }
    }
}
