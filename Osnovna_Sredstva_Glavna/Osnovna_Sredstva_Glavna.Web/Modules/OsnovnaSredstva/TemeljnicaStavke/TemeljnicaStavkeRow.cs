
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[TemeljnicaStavke]")]
    [DisplayName("Temeljnica Stavke"), InstanceName("Temeljnica Stavke")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TemeljnicaStavkeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Temeljnica Id"), Identity]
        public Int32? TemeljnicaId
        {
            get { return Fields.TemeljnicaId[this]; }
            set { Fields.TemeljnicaId[this] = value; }
        }

        [DisplayName("Obracun"), Column("Obracun_id"), ForeignKey("[dbo].[Obracun]", "ObracunId"), LeftJoin("jObracun"), TextualField("ObracunNapomena")]
        public Int32? ObracunId
        {
            get { return Fields.ObracunId[this]; }
            set { Fields.ObracunId[this] = value; }
        }

        [DisplayName("Date Time Created"), NotNull]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }

        [DisplayName("Kontoid"), Size(14), NotNull, QuickSearch]
        public String Kontoid
        {
            get { return Fields.Kontoid[this]; }
            set { Fields.Kontoid[this] = value; }
        }

        [DisplayName("Duguje"), Size(11), Scale(2)]
        public Decimal? Duguje
        {
            get { return Fields.Duguje[this]; }
            set { Fields.Duguje[this] = value; }
        }

        [DisplayName("Potrazuje"), Size(11), Scale(2)]
        public Decimal? Potrazuje
        {
            get { return Fields.Potrazuje[this]; }
            set { Fields.Potrazuje[this] = value; }
        }

        [DisplayName("Obracun Partner Id"), Expression("jObracun.[PartnerId]")]
        public Int32? ObracunPartnerId
        {
            get { return Fields.ObracunPartnerId[this]; }
            set { Fields.ObracunPartnerId[this] = value; }
        }

        [DisplayName("Obracun Osnovno Id"), Expression("jObracun.[OsnovnoId]")]
        public Int32? ObracunOsnovnoId
        {
            get { return Fields.ObracunOsnovnoId[this]; }
            set { Fields.ObracunOsnovnoId[this] = value; }
        }

        [DisplayName("Obracun Sektor Id"), Expression("jObracun.[SektorId]")]
        public Int32? ObracunSektorId
        {
            get { return Fields.ObracunSektorId[this]; }
            set { Fields.ObracunSektorId[this] = value; }
        }

        [DisplayName("Obracun Am Grupa Id"), Expression("jObracun.[AmGrupaId]")]
        public Int32? ObracunAmGrupaId
        {
            get { return Fields.ObracunAmGrupaId[this]; }
            set { Fields.ObracunAmGrupaId[this] = value; }
        }

        [DisplayName("Obracun Datum Obracuna"), Expression("jObracun.[Datum_Obracuna]")]
        public DateTime? ObracunDatumObracuna
        {
            get { return Fields.ObracunDatumObracuna[this]; }
            set { Fields.ObracunDatumObracuna[this] = value; }
        }

        [DisplayName("Obracun Razdoblje Od"), Expression("jObracun.[RazdobljeOd]")]
        public DateTime? ObracunRazdobljeOd
        {
            get { return Fields.ObracunRazdobljeOd[this]; }
            set { Fields.ObracunRazdobljeOd[this] = value; }
        }

        [DisplayName("Obracun Razdoblje Do"), Expression("jObracun.[RazdobljeDo]")]
        public DateTime? ObracunRazdobljeDo
        {
            get { return Fields.ObracunRazdobljeDo[this]; }
            set { Fields.ObracunRazdobljeDo[this] = value; }
        }

        [DisplayName("Obracun Napomena"), Expression("jObracun.[Napomena]")]
        public String ObracunNapomena
        {
            get { return Fields.ObracunNapomena[this]; }
            set { Fields.ObracunNapomena[this] = value; }
        }

        [DisplayName("Obracun Otpisano"), Expression("jObracun.[Otpisano]")]
        public Boolean? ObracunOtpisano
        {
            get { return Fields.ObracunOtpisano[this]; }
            set { Fields.ObracunOtpisano[this] = value; }
        }

        [DisplayName("Obracun Active"), Expression("jObracun.[Active]")]
        public Boolean? ObracunActive
        {
            get { return Fields.ObracunActive[this]; }
            set { Fields.ObracunActive[this] = value; }
        }

        [DisplayName("Obracun Zavrsen"), Expression("jObracun.[Zavrsen]")]
        public Boolean? ObracunZavrsen
        {
            get { return Fields.ObracunZavrsen[this]; }
            set { Fields.ObracunZavrsen[this] = value; }
        }

        [DisplayName("Obracun Date Time Created"), Expression("jObracun.[DateTimeCreated]")]
        public DateTime? ObracunDateTimeCreated
        {
            get { return Fields.ObracunDateTimeCreated[this]; }
            set { Fields.ObracunDateTimeCreated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TemeljnicaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Kontoid; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TemeljnicaStavkeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TemeljnicaId;
            public Int32Field ObracunId;
            public DateTimeField DateTimeCreated;
            public StringField Kontoid;
            public DecimalField Duguje;
            public DecimalField Potrazuje;

            public Int32Field ObracunPartnerId;
            public Int32Field ObracunOsnovnoId;
            public Int32Field ObracunSektorId;
            public Int32Field ObracunAmGrupaId;
            public DateTimeField ObracunDatumObracuna;
            public DateTimeField ObracunRazdobljeOd;
            public DateTimeField ObracunRazdobljeDo;
            public StringField ObracunNapomena;
            public BooleanField ObracunOtpisano;
            public BooleanField ObracunActive;
            public BooleanField ObracunZavrsen;
            public DateTimeField ObracunDateTimeCreated;
        }
    }
}
