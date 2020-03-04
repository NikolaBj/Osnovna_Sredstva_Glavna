namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Partneri")]
    public partial class Partneri
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Partneri()
        {
            Osnovno_Sredstvo = new HashSet<Osnovno_Sredstvo>();
            Ulazni_racun = new HashSet<Ulazni_racun>();
        }

        [Key]
        public int PartnerId { get; set; }

        [Required]
        [StringLength(100)]
        public string Naziv { get; set; }

        [Required]
        [StringLength(100)]
        public string Adresa { get; set; }

        public int PTT { get; set; }

        [Required]
        [StringLength(50)]
        public string Mjesto { get; set; }

        [Required]
        [StringLength(100)]
        public string Grad { get; set; }

        public bool? Active { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DateTimeCreated { get; set; }

        [Required]
        [StringLength(100)]
        public string Drzava { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Osnovno_Sredstvo> Osnovno_Sredstvo { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Ulazni_racun> Ulazni_racun { get; set; }
    }
}
