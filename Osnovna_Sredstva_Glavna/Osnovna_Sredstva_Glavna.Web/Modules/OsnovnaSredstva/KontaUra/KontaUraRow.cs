
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[KontaUra]")]
    [DisplayName("Konta Ura"), InstanceName("Konta Ura")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class KontaUraRow : Row, IIdRow, INameRow
    {
        [DisplayName("Konta Ura Id"), Identity]
        public Int32? KontaUraId
        {
            get { return Fields.KontaUraId[this]; }
            set { Fields.KontaUraId[this] = value; }
        }

        [DisplayName("Ura"), NotNull, ForeignKey("[dbo].[Ulazni_racun]", "UraId"), LeftJoin("jUra"), TextualField("UraBrojRacuna"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.PartnerUraLookup), AutoComplete = true)]
        public Int32? UraId
        {
            get { return Fields.UraId[this]; }
            set { Fields.UraId[this] = value; }
        }

        [DisplayName("Konto"), NotNull, ForeignKey("[dbo].[Konta]", "KontoId"), LeftJoin("jKonto"), TextualField("KontoNaziv"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.KontaSvaLookup), AutoComplete = true)]
        public Int32? KontoId
        {
            get { return Fields.KontoId[this]; }
            set { Fields.KontoId[this] = value; }
        }

        [DefaultValue(0.00)]
        [DisplayName("Iznos Duguje"), Size(11), Scale(2), NotNull]
        public Decimal? IznosDuguje
        {
            get { return Fields.IznosDuguje[this]; }
            set { Fields.IznosDuguje[this] = value; }
        }

        [DefaultValue(0.00)]
        [DisplayName("Iznos Potrazuje"), Size(11), Scale(2), NotNull]
        public Decimal? IznosPotrazuje
        {
            get { return Fields.IznosPotrazuje[this]; }
            set { Fields.IznosPotrazuje[this] = value; }
        }

        [DisplayName("Mjesto Troska"), Column("MjestoTroskaID"), NotNull, ForeignKey("[dbo].[Mjesto_Troska]", "MjestoTroskaId"), LeftJoin("jMjestoTroska"), TextualField("MjestoTroskaSifra"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.MjestoTroskaLookup), AutoComplete = true)]
        public Int32? MjestoTroskaId
        {
            get { return Fields.MjestoTroskaId[this]; }
            set { Fields.MjestoTroskaId[this] = value; }
        }

        [DisplayName("Opis"), Size(200), QuickSearch]
        public String Opis
        {
            get { return Fields.Opis[this]; }
            set { Fields.Opis[this] = value; }
        }

        [DefaultValue(1),Hidden]
        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DefaultValue("now"),Hidden]
        [DisplayName("Date Time Created"), NotNull]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }

        [DisplayName("Ura P Artner Id"), Expression("jUra.[PArtnerId]")]
        public Int32? UraPArtnerId
        {
            get { return Fields.UraPArtnerId[this]; }
            set { Fields.UraPArtnerId[this] = value; }
        }

        [DisplayName("Ura Ura Broj"), Expression("jUra.[UraBroj]")]
        public Int32? UraUraBroj
        {
            get { return Fields.UraUraBroj[this]; }
            set { Fields.UraUraBroj[this] = value; }
        }

        [DisplayName("Ura Broj Racuna"), Expression("jUra.[BrojRacuna]")]
        public String UraBrojRacuna
        {
            get { return Fields.UraBrojRacuna[this]; }
            set { Fields.UraBrojRacuna[this] = value; }
        }

        [DisplayName("Ura Datum Racuna"), Expression("jUra.[Datum_racuna]")]
        public DateTime? UraDatumRacuna
        {
            get { return Fields.UraDatumRacuna[this]; }
            set { Fields.UraDatumRacuna[this] = value; }
        }

        [DisplayName("Ura Datum Knjizenja"), Expression("jUra.[Datum_knjizenja]")]
        public DateTime? UraDatumKnjizenja
        {
            get { return Fields.UraDatumKnjizenja[this]; }
            set { Fields.UraDatumKnjizenja[this] = value; }
        }

        [DisplayName("Ura Datum Dospijeca"), Expression("jUra.[Datum_dospijeca]")]
        public DateTime? UraDatumDospijeca
        {
            get { return Fields.UraDatumDospijeca[this]; }
            set { Fields.UraDatumDospijeca[this] = value; }
        }

        [DisplayName("Ura Datum Isporuke"), Expression("jUra.[Datum_isporuke]")]
        public DateTime? UraDatumIsporuke
        {
            get { return Fields.UraDatumIsporuke[this]; }
            set { Fields.UraDatumIsporuke[this] = value; }
        }

        [DisplayName("Ura Poslovna Godina"), Expression("jUra.[Poslovna_Godina]")]
        public Int32? UraPoslovnaGodina
        {
            get { return Fields.UraPoslovnaGodina[this]; }
            set { Fields.UraPoslovnaGodina[this] = value; }
        }

        [DisplayName("Ura Mjesto Troska Id"), Expression("jUra.[MjestoTroskaId]")]
        public Int32? UraMjestoTroskaId
        {
            get { return Fields.UraMjestoTroskaId[this]; }
            set { Fields.UraMjestoTroskaId[this] = value; }
        }

        [DisplayName("Ura Iznos Osnovice"), Expression("jUra.[Iznos_Osnovice]")]
        public Decimal? UraIznosOsnovice
        {
            get { return Fields.UraIznosOsnovice[this]; }
            set { Fields.UraIznosOsnovice[this] = value; }
        }

        [DisplayName("Ura Iznos Poreza"), Expression("jUra.[Iznos_Poreza]")]
        public Decimal? UraIznosPoreza
        {
            get { return Fields.UraIznosPoreza[this]; }
            set { Fields.UraIznosPoreza[this] = value; }
        }

        [DisplayName("Ura Ukupan Iznos"), Expression("jUra.[Ukupan_Iznos]")]
        public Decimal? UraUkupanIznos
        {
            get { return Fields.UraUkupanIznos[this]; }
            set { Fields.UraUkupanIznos[this] = value; }
        }

        [DisplayName("Ura Opis"), Expression("jUra.[Opis]")]
        public String UraOpis
        {
            get { return Fields.UraOpis[this]; }
            set { Fields.UraOpis[this] = value; }
        }

        [DisplayName("Ura Active"), Expression("jUra.[Active]")]
        public Boolean? UraActive
        {
            get { return Fields.UraActive[this]; }
            set { Fields.UraActive[this] = value; }
        }

        [DisplayName("Ura Date Time Created"), Expression("jUra.[DateTimeCreated]")]
        public DateTime? UraDateTimeCreated
        {
            get { return Fields.UraDateTimeCreated[this]; }
            set { Fields.UraDateTimeCreated[this] = value; }
        }

        [DisplayName("Konto Naziv"), Expression("jKonto.[Naziv]")]
        public String KontoNaziv
        {
            get { return Fields.KontoNaziv[this]; }
            set { Fields.KontoNaziv[this] = value; }
        }

        [DisplayName("Konto Active"), Expression("jKonto.[Active]")]
        public Boolean? KontoActive
        {
            get { return Fields.KontoActive[this]; }
            set { Fields.KontoActive[this] = value; }
        }

        [DisplayName("Konto Date Time Created"), Expression("jKonto.[DateTimeCreated]")]
        public DateTime? KontoDateTimeCreated
        {
            get { return Fields.KontoDateTimeCreated[this]; }
            set { Fields.KontoDateTimeCreated[this] = value; }
        }

        [DisplayName("Konto"), Expression("jKonto.[Konto]")]
        public String Konto
        {
            get { return Fields.Konto[this]; }
            set { Fields.Konto[this] = value; }
        }

        [DisplayName("Mjesto Troska Sifra"), Expression("jMjestoTroska.[Sifra]")]
        public String MjestoTroskaSifra
        {
            get { return Fields.MjestoTroskaSifra[this]; }
            set { Fields.MjestoTroskaSifra[this] = value; }
        }

        [DisplayName("Mjesto Troska Naziv"), Expression("jMjestoTroska.[Naziv]")]
        public String MjestoTroskaNaziv
        {
            get { return Fields.MjestoTroskaNaziv[this]; }
            set { Fields.MjestoTroskaNaziv[this] = value; }
        }

        [DisplayName("Mjesto Troska Active"), Expression("jMjestoTroska.[Active]")]
        public Boolean? MjestoTroskaActive
        {
            get { return Fields.MjestoTroskaActive[this]; }
            set { Fields.MjestoTroskaActive[this] = value; }
        }

        [DisplayName("Mjesto Troska Date Time Created"), Expression("jMjestoTroska.[DateTimeCreated]")]
        public DateTime? MjestoTroskaDateTimeCreated
        {
            get { return Fields.MjestoTroskaDateTimeCreated[this]; }
            set { Fields.MjestoTroskaDateTimeCreated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.KontaUraId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Opis; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KontaUraRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field KontaUraId;
            public Int32Field UraId;
            public Int32Field KontoId;
            public DecimalField IznosDuguje;
            public DecimalField IznosPotrazuje;
            public Int32Field MjestoTroskaId;
            public StringField Opis;
            public BooleanField Active;
            public DateTimeField DateTimeCreated;

            public Int32Field UraPArtnerId;
            public Int32Field UraUraBroj;
            public StringField UraBrojRacuna;
            public DateTimeField UraDatumRacuna;
            public DateTimeField UraDatumKnjizenja;
            public DateTimeField UraDatumDospijeca;
            public DateTimeField UraDatumIsporuke;
            public Int32Field UraPoslovnaGodina;
            public Int32Field UraMjestoTroskaId;
            public DecimalField UraIznosOsnovice;
            public DecimalField UraIznosPoreza;
            public DecimalField UraUkupanIznos;
            public StringField UraOpis;
            public BooleanField UraActive;
            public DateTimeField UraDateTimeCreated;

            public StringField KontoNaziv;
            public BooleanField KontoActive;
            public DateTimeField KontoDateTimeCreated;
            public StringField Konto;

            public StringField MjestoTroskaSifra;
            public StringField MjestoTroskaNaziv;
            public BooleanField MjestoTroskaActive;
            public DateTimeField MjestoTroskaDateTimeCreated;
        }
    }
}
