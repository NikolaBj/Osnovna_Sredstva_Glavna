namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Konta")]
    public partial class Konta
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Konta()
        {
            Amortizacijske_grupe = new HashSet<Amortizacijske_grupe>();
            Amortizacijske_grupe1 = new HashSet<Amortizacijske_grupe>();
            KontaUra = new HashSet<KontaUra>();
            Osnovno_Sredstvo = new HashSet<Osnovno_Sredstvo>();
            Osnovno_Sredstvo1 = new HashSet<Osnovno_Sredstvo>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int KontoId { get; set; }

        [Required]
        [StringLength(200)]
        public string Naziv { get; set; }

        public bool? Active { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DateTimeCreated { get; set; }

        [StringLength(14)]
        public string Konto { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Amortizacijske_grupe> Amortizacijske_grupe { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Amortizacijske_grupe> Amortizacijske_grupe1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<KontaUra> KontaUra { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Osnovno_Sredstvo> Osnovno_Sredstvo { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Osnovno_Sredstvo> Osnovno_Sredstvo1 { get; set; }
    }
}
