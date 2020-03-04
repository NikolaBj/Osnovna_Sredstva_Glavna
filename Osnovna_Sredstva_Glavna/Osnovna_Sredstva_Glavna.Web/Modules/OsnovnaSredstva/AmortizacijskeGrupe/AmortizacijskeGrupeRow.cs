
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Amortizacijske_grupe]")]
    [DisplayName("Amortizacijske Grupe"), InstanceName("Amortizacijske Grupe")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AmortizacijskeGrupeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Am Grupa Id"), Identity]
        public Int32? AmGrupaId
        {
            get { return Fields.AmGrupaId[this]; }
            set { Fields.AmGrupaId[this] = value; }
        }

        [DisplayName("Naziv"), Size(100), NotNull, QuickSearch]
        public String Naziv
        {
            get { return Fields.Naziv[this]; }
            set { Fields.Naziv[this] = value; }
        }

        [DisplayName("Naziv2"), Size(200), NotNull]
        public String Naziv2
        {
            get { return Fields.Naziv2[this]; }
            set { Fields.Naziv2[this] = value; }
        }

        [DisplayName("Am Vijek Trajanja"), Column("Am_vijek_trajanja"), NotNull]
        public Int32? AmVijekTrajanja
        {
            get { return Fields.AmVijekTrajanja[this]; }
            set { Fields.AmVijekTrajanja[this] = value; }
        }

        [DisplayName("Godisnja Amortizacija"), Column("Godisnja_amortizacija"), Size(5), Scale(2), NotNull]
        public Decimal? GodisnjaAmortizacija
        {
            get { return Fields.GodisnjaAmortizacija[this]; }
            set { Fields.GodisnjaAmortizacija[this] = value; }
        }

        [DisplayName("Dvostruka Godisnja Am"), Column("Dvostruka_Godisnja_am"), Size(5), Scale(2), NotNull]
        public Decimal? DvostrukaGodisnjaAm
        {
            get { return Fields.DvostrukaGodisnjaAm[this]; }
            set { Fields.DvostrukaGodisnjaAm[this] = value; }
        }

        [DisplayName("Konto Iv"), Column("KontoIVId"), NotNull, ForeignKey("[dbo].[Konta]", "KontoId"), LeftJoin("jKontoIv"), TextualField("KontoIvNaziv"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.KontaIVLookup), AutoComplete = true)]
        public Int32? KontoIvId
        {
            get { return Fields.KontoIvId[this]; }
            set { Fields.KontoIvId[this] = value; }
        }

        [DisplayName("Konto Tr"), NotNull, ForeignKey("[dbo].[Konta]", "KontoId"), LeftJoin("jKontoTr"), TextualField("KontoTrNaziv"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.KontaTrLookup), AutoComplete = true)]
        public Int32? KontoTrId
        {
            get { return Fields.KontoTrId[this]; }
            set { Fields.KontoTrId[this] = value; }
        }

        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Date Time Created"), NotNull]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }

        [DisplayName("Konto Iv Naziv"), Expression("jKontoIv.[Naziv]")]
        public String KontoIvNaziv
        {
            get { return Fields.KontoIvNaziv[this]; }
            set { Fields.KontoIvNaziv[this] = value; }
        }

        [DisplayName("Konto Iv Active"), Expression("jKontoIv.[Active]")]
        public Boolean? KontoIvActive
        {
            get { return Fields.KontoIvActive[this]; }
            set { Fields.KontoIvActive[this] = value; }
        }

        [DisplayName("Konto Iv Date Time Created"), Expression("jKontoIv.[DateTimeCreated]")]
        public DateTime? KontoIvDateTimeCreated
        {
            get { return Fields.KontoIvDateTimeCreated[this]; }
            set { Fields.KontoIvDateTimeCreated[this] = value; }
        }

        [DisplayName("Konto Iv Konto"), Expression("jKontoIv.[Konto]")]
        public String KontoIvKonto
        {
            get { return Fields.KontoIvKonto[this]; }
            set { Fields.KontoIvKonto[this] = value; }
        }

        [DisplayName("Konto Tr Naziv"), Expression("jKontoTr.[Naziv]")]
        public String KontoTrNaziv
        {
            get { return Fields.KontoTrNaziv[this]; }
            set { Fields.KontoTrNaziv[this] = value; }
        }

        [DisplayName("Konto Tr Active"), Expression("jKontoTr.[Active]")]
        public Boolean? KontoTrActive
        {
            get { return Fields.KontoTrActive[this]; }
            set { Fields.KontoTrActive[this] = value; }
        }

        [DisplayName("Konto Tr Date Time Created"), Expression("jKontoTr.[DateTimeCreated]")]
        public DateTime? KontoTrDateTimeCreated
        {
            get { return Fields.KontoTrDateTimeCreated[this]; }
            set { Fields.KontoTrDateTimeCreated[this] = value; }
        }

        [DisplayName("Konto Tr Konto"), Expression("jKontoTr.[Konto]")]
        public String KontoTrKonto
        {
            get { return Fields.KontoTrKonto[this]; }
            set { Fields.KontoTrKonto[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AmGrupaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Naziv; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AmortizacijskeGrupeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AmGrupaId;
            public StringField Naziv;
            public StringField Naziv2;
            public Int32Field AmVijekTrajanja;
            public DecimalField GodisnjaAmortizacija;
            public DecimalField DvostrukaGodisnjaAm;
            public Int32Field KontoIvId;
            public Int32Field KontoTrId;
            public BooleanField Active;
            public DateTimeField DateTimeCreated;

            public StringField KontoIvNaziv;
            public BooleanField KontoIvActive;
            public DateTimeField KontoIvDateTimeCreated;
            public StringField KontoIvKonto;

            public StringField KontoTrNaziv;
            public BooleanField KontoTrActive;
            public DateTimeField KontoTrDateTimeCreated;
            public StringField KontoTrKonto;
        }
    }
}
