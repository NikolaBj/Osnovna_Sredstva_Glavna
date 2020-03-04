namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("KontaUra")]
    public partial class KontaUra
    {
        public int KontaUraId { get; set; }

        public int UraId { get; set; }

        public int KontoId { get; set; }

        public decimal IznosDuguje { get; set; }

        public decimal IznosPotrazuje { get; set; }

        public int MjestoTroskaID { get; set; }

        [StringLength(200)]
        public string Opis { get; set; }

        public bool? Active { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DateTimeCreated { get; set; }

        public virtual Konta Konta { get; set; }

        public virtual Mjesto_Troska Mjesto_Troska { get; set; }

        public virtual Ulazni_racun Ulazni_racun { get; set; }
    }
}
