namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Amortizacijske_grupe
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Amortizacijske_grupe()
        {
            Osnovno_Sredstvo = new HashSet<Osnovno_Sredstvo>();
        }

        [Key]
        public int AmGrupaId { get; set; }

        [Required]
        [StringLength(100)]
        public string Naziv { get; set; }

        [Required]
        [StringLength(200)]
        public string Naziv2 { get; set; }

        public int Am_vijek_trajanja { get; set; }

        public decimal Godisnja_amortizacija { get; set; }

        public decimal Dvostruka_Godisnja_am { get; set; }

        public int KontoIVId { get; set; }

        public int KontoTrId { get; set; }

        public bool? Active { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DateTimeCreated { get; set; }

        public virtual Konta Konta { get; set; }

        public virtual Konta Konta1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Osnovno_Sredstvo> Osnovno_Sredstvo { get; set; }
    }
}
