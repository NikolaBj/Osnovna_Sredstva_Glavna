
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Ulazni_racun]")]
    [DisplayName("Ulazni Racun"), InstanceName("Ulazni Racun")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UlazniRacunRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ura Id"), Identity]
        public Int32? UraId
        {
            get { return Fields.UraId[this]; }
            set { Fields.UraId[this] = value; }
        }

        [DisplayName("Partner"), NotNull, ForeignKey("[dbo].[Partneri]", "PartnerId"), LeftJoin("jPArtner"), TextualField("PArtnerNaziv"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.PartnerUserLookup), AutoComplete = true)]
        public Int32? PArtnerId
        {
            get { return Fields.PArtnerId[this]; }
            set { Fields.PArtnerId[this] = value; }
        }

        [DisplayName("Ura Broj"), Size(10),NotNull]
        public String UraBroj
        {
            get { return Fields.UraBroj[this]; }
            set { Fields.UraBroj[this] = value; }
        }
       
        [DisplayName("Broj Racuna"), Size(140), QuickSearch]
        public String BrojRacuna
        {
            get { return Fields.BrojRacuna[this]; }
            set { Fields.BrojRacuna[this] = value; }
        }

        [DisplayName("Datum Racuna"), Column("Datum_racuna")]
        public DateTime? DatumRacuna
        {
            get { return Fields.DatumRacuna[this]; }
            set { Fields.DatumRacuna[this] = value; }
        }

        [DisplayName("Datum Knjizenja"), Column("Datum_knjizenja")]
        public DateTime? DatumKnjizenja
        {
            get { return Fields.DatumKnjizenja[this]; }
            set { Fields.DatumKnjizenja[this] = value; }
        }

        [DisplayName("Datum Dospijeca"), Column("Datum_dospijeca")]
        public DateTime? DatumDospijeca
        {
            get { return Fields.DatumDospijeca[this]; }
            set { Fields.DatumDospijeca[this] = value; }
        }

        [DisplayName("Datum Isporuke"), Column("Datum_isporuke")]
        public DateTime? DatumIsporuke
        {
            get { return Fields.DatumIsporuke[this]; }
            set { Fields.DatumIsporuke[this] = value; }
        }
        [DefaultValue("2020")]
        [DisplayName("Poslovna Godina"), Column("Poslovna_Godina"), NotNull]
        public Int32? PoslovnaGodina
        {
            get { return Fields.PoslovnaGodina[this]; }
            set { Fields.PoslovnaGodina[this] = value; }
        }

        [DisplayName("Mjesto Troska"), NotNull, ForeignKey("[dbo].[Mjesto_Troska]", "MjestoTroskaId"), LeftJoin("jMjestoTroska"), TextualField("MjestoTroskaSifra"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.MjestoTroskaLookup), AutoComplete = true)]
        public Int32? MjestoTroskaId
        {
            get { return Fields.MjestoTroskaId[this]; }
            set { Fields.MjestoTroskaId[this] = value; }
        }

        [DisplayName("Iznos Osnovice"), Column("Iznos_Osnovice"), Size(11), Scale(2), NotNull]
        public Decimal? IznosOsnovice
        {
            get { return Fields.IznosOsnovice[this]; }
            set { Fields.IznosOsnovice[this] = value; }
        }

        [DisplayName("Iznos Poreza"), Column("Iznos_Poreza"), Size(11), Scale(2), NotNull]
        public Decimal? IznosPoreza
        {
            get { return Fields.IznosPoreza[this]; }
            set { Fields.IznosPoreza[this] = value; }
        }

        [DisplayName("Ukupan Iznos"), Column("Ukupan_Iznos"), Size(11), Scale(2), NotNull]
        public Decimal? UkupanIznos
        {
            get { return Fields.UkupanIznos[this]; }
            set { Fields.UkupanIznos[this] = value; }
        }

        [DisplayName("Opis"), Size(200), NotNull]
        public String Opis
        {
            get { return Fields.Opis[this]; }
            set { Fields.Opis[this] = value; }
        }
        [DefaultValue("1")]
        [DisplayName("Active"),Hidden]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Date Time Created"), NotNull,Hidden]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }

        [DisplayName("P Artner Naziv"), Expression("jPArtner.[Naziv]")]
        public String PArtnerNaziv
        {
            get { return Fields.PArtnerNaziv[this]; }
            set { Fields.PArtnerNaziv[this] = value; }
        }

        [DisplayName("P Artner Adresa"), Expression("jPArtner.[Adresa]")]
        public String PArtnerAdresa
        {
            get { return Fields.PArtnerAdresa[this]; }
            set { Fields.PArtnerAdresa[this] = value; }
        }

        [DisplayName("P Artner Ptt"), Expression("jPArtner.[PTT]")]
        public Int32? PArtnerPtt
        {
            get { return Fields.PArtnerPtt[this]; }
            set { Fields.PArtnerPtt[this] = value; }
        }

        [DisplayName("P Artner Mjesto"), Expression("jPArtner.[Mjesto]")]
        public String PArtnerMjesto
        {
            get { return Fields.PArtnerMjesto[this]; }
            set { Fields.PArtnerMjesto[this] = value; }
        }

        [DisplayName("P Artner Grad"), Expression("jPArtner.[Grad]")]
        public String PArtnerGrad
        {
            get { return Fields.PArtnerGrad[this]; }
            set { Fields.PArtnerGrad[this] = value; }
        }

        [DisplayName("P Artner Active"), Expression("jPArtner.[Active]")]
        public Boolean? PArtnerActive
        {
            get { return Fields.PArtnerActive[this]; }
            set { Fields.PArtnerActive[this] = value; }
        }

        [DisplayName("P Artner Date Time Created"), Expression("jPArtner.[DateTimeCreated]")]
        public DateTime? PArtnerDateTimeCreated
        {
            get { return Fields.PArtnerDateTimeCreated[this]; }
            set { Fields.PArtnerDateTimeCreated[this] = value; }
        }

        [DisplayName("P Artner Drzava"), Expression("jPArtner.[Drzava]")]
        public String PArtnerDrzava
        {
            get { return Fields.PArtnerDrzava[this]; }
            set { Fields.PArtnerDrzava[this] = value; }
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
            get { return Fields.UraId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BrojRacuna; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UlazniRacunRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UraId;
            public Int32Field PArtnerId;
            public StringField UraBroj;
            public StringField BrojRacuna;
            public DateTimeField DatumRacuna;
            public DateTimeField DatumKnjizenja;
            public DateTimeField DatumDospijeca;
            public DateTimeField DatumIsporuke;
            public Int32Field PoslovnaGodina;
            public Int32Field MjestoTroskaId;
            public DecimalField IznosOsnovice;
            public DecimalField IznosPoreza;
            public DecimalField UkupanIznos;
            public StringField Opis;
            public BooleanField Active;
            public DateTimeField DateTimeCreated;

            public StringField PArtnerNaziv;
            public StringField PArtnerAdresa;
            public Int32Field PArtnerPtt;
            public StringField PArtnerMjesto;
            public StringField PArtnerGrad;
            public BooleanField PArtnerActive;
            public DateTimeField PArtnerDateTimeCreated;
            public StringField PArtnerDrzava;

            public StringField MjestoTroskaSifra;
            public StringField MjestoTroskaNaziv;
            public BooleanField MjestoTroskaActive;
            public DateTimeField MjestoTroskaDateTimeCreated;
        }
    }
}
