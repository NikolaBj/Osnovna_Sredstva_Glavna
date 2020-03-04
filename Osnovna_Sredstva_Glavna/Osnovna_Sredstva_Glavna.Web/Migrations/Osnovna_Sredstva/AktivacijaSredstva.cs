namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AktivacijaSredstva")]
    public partial class AktivacijaSredstva
    {
        [Key]
        public int INT { get; set; }

        public int? OsnovnoId { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DatumAktivacije { get; set; }
    }
}
