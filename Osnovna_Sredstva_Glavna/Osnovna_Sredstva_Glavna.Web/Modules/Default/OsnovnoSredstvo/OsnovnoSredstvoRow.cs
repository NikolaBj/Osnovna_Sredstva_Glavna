
namespace Osnovna_Sredstva_Glavna.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Osnovno_Sredstvo]")]
    [DisplayName("Osnovno Sredstvo"), InstanceName("Osnovno Sredstvo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OsnovnoSredstvoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Osnovno Id"), Identity]
        public Int32? OsnovnoId
        {
            get { return Fields.OsnovnoId[this]; }
            set { Fields.OsnovnoId[this] = value; }
        }

        [DisplayName("Naziv Opreme"), Column("Naziv_opreme"), Size(80), NotNull, QuickSearch]
        public String NazivOpreme
        {
            get { return Fields.NazivOpreme[this]; }
            set { Fields.NazivOpreme[this] = value; }
        }

        [DisplayName("Partner"), NotNull, ForeignKey("[dbo].[Partneri]", "PartnerId"), LeftJoin("jPartner"), TextualField("PartnerNaziv")]
        public Int32? PartnerId
        {
            get { return Fields.PartnerId[this]; }
            set { Fields.PartnerId[this] = value; }
        }

        [DisplayName("Ura"), NotNull, ForeignKey("[dbo].[Ulazni_racun]", "UraId"), LeftJoin("jUra"), TextualField("UraUraBroj")]
        public Int32? UraId
        {
            get { return Fields.UraId[this]; }
            set { Fields.UraId[this] = value; }
        }

        [DisplayName("Serijski Broj"), Column("Serijski_broj"), Size(50), NotNull]
        public String SerijskiBroj
        {
            get { return Fields.SerijskiBroj[this]; }
            set { Fields.SerijskiBroj[this] = value; }
        }

        [DisplayName("Inventarski Broj"), Column("Inventarski_broj"), Size(50), NotNull]
        public String InventarskiBroj
        {
            get { return Fields.InventarskiBroj[this]; }
            set { Fields.InventarskiBroj[this] = value; }
        }

        [DisplayName("Nabavna Vrijednost"), Column("Nabavna_vrijednost"), Size(11), Scale(2), NotNull]
        public Decimal? NabavnaVrijednost
        {
            get { return Fields.NabavnaVrijednost[this]; }
            set { Fields.NabavnaVrijednost[this] = value; }
        }

        [DisplayName("Amortizirana Vrijednost"), Column("Amortizirana_vrijednost"), Size(11), Scale(2)]
        public Decimal? AmortiziranaVrijednost
        {
            get { return Fields.AmortiziranaVrijednost[this]; }
            set { Fields.AmortiziranaVrijednost[this] = value; }
        }

        [DisplayName("Knjigovodstvena Vrijednost"), Column("Knjigovodstvena_vrijednost"), Size(11), Scale(2)]
        public Decimal? KnjigovodstvenaVrijednost
        {
            get { return Fields.KnjigovodstvenaVrijednost[this]; }
            set { Fields.KnjigovodstvenaVrijednost[this] = value; }
        }

        [DisplayName("Uvecanje Vrijednosti"), Column("Uvecanje_vrijednosti"), Size(11), Scale(2)]
        public Decimal? UvecanjeVrijednosti
        {
            get { return Fields.UvecanjeVrijednosti[this]; }
            set { Fields.UvecanjeVrijednosti[this] = value; }
        }

        [DisplayName("Umanjenje Vrijednosti"), Column("Umanjenje_vrijednosti"), Size(11), Scale(2)]
        public Decimal? UmanjenjeVrijednosti
        {
            get { return Fields.UmanjenjeVrijednosti[this]; }
            set { Fields.UmanjenjeVrijednosti[this] = value; }
        }

        [DisplayName("Sektor"), NotNull, ForeignKey("[dbo].[Sektori]", "SektorId"), LeftJoin("jSektor"), TextualField("SektorNaziv")]
        public Int32? SektorId
        {
            get { return Fields.SektorId[this]; }
            set { Fields.SektorId[this] = value; }
        }

        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Datum Nabave"), Column("Datum_nabave"), NotNull]
        public DateTime? DatumNabave
        {
            get { return Fields.DatumNabave[this]; }
            set { Fields.DatumNabave[this] = value; }
        }

        [DisplayName("Datum Amortizacije"), Column("Datum_amortizacije")]
        public DateTime? DatumAmortizacije
        {
            get { return Fields.DatumAmortizacije[this]; }
            set { Fields.DatumAmortizacije[this] = value; }
        }

        [DisplayName("Datum Otpisa"), Column("Datum_otpisa")]
        public DateTime? DatumOtpisa
        {
            get { return Fields.DatumOtpisa[this]; }
            set { Fields.DatumOtpisa[this] = value; }
        }

        [DisplayName("Datum Pripreme"), Column("Datum_pripreme")]
        public DateTime? DatumPripreme
        {
            get { return Fields.DatumPripreme[this]; }
            set { Fields.DatumPripreme[this] = value; }
        }

        [DisplayName("Otpisano")]
        public Boolean? Otpisano
        {
            get { return Fields.Otpisano[this]; }
            set { Fields.Otpisano[this] = value; }
        }

        [DisplayName("Količina"), Size(11), Scale(2), NotNull]
        public Decimal? Količina
        {
            get { return Fields.Količina[this]; }
            set { Fields.Količina[this] = value; }
        }

        [DisplayName("Am Grupa"), NotNull, ForeignKey("[dbo].[Amortizacijske_grupe]", "AmGrupaId"), LeftJoin("jAmGrupa"), TextualField("AmGrupaNaziv")]
        public Int32? AmGrupaId
        {
            get { return Fields.AmGrupaId[this]; }
            set { Fields.AmGrupaId[this] = value; }
        }

        [DisplayName("Date Time Created"), NotNull]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }

        [DisplayName("Konto"), NotNull, ForeignKey("[dbo].[Konta]", "KontoId"), LeftJoin("jKonto"), TextualField("KontoNaziv")]
        public Int32? KontoId
        {
            get { return Fields.KontoId[this]; }
            set { Fields.KontoId[this] = value; }
        }

        [DisplayName("Konto Iv"), Column("KontoIVId"), NotNull, ForeignKey("[dbo].[Konta]", "KontoId"), LeftJoin("jKontoIv"), TextualField("KontoIvNaziv")]
        public Int32? KontoIvId
        {
            get { return Fields.KontoIvId[this]; }
            set { Fields.KontoIvId[this] = value; }
        }

        [DisplayName("Napomena"), Size(200)]
        public String Napomena
        {
            get { return Fields.Napomena[this]; }
            set { Fields.Napomena[this] = value; }
        }

        [DisplayName("Jedinica Mjere"), Column("Jedinica_mjere"), Size(30), NotNull]
        public String JedinicaMjere
        {
            get { return Fields.JedinicaMjere[this]; }
            set { Fields.JedinicaMjere[this] = value; }
        }

        [DisplayName("Stopa Am Sredstva"), Column("Stopa_am_sredstva"), Size(5), Scale(2)]
        public Decimal? StopaAmSredstva
        {
            get { return Fields.StopaAmSredstva[this]; }
            set { Fields.StopaAmSredstva[this] = value; }
        }

        [DisplayName("Datum Servisa"), NotNull]
        public DateTime? DatumServisa
        {
            get { return Fields.DatumServisa[this]; }
            set { Fields.DatumServisa[this] = value; }
        }

        [DisplayName("Partner Naziv"), Expression("jPartner.[Naziv]")]
        public String PartnerNaziv
        {
            get { return Fields.PartnerNaziv[this]; }
            set { Fields.PartnerNaziv[this] = value; }
        }

        [DisplayName("Partner Adresa"), Expression("jPartner.[Adresa]")]
        public String PartnerAdresa
        {
            get { return Fields.PartnerAdresa[this]; }
            set { Fields.PartnerAdresa[this] = value; }
        }

        [DisplayName("Partner Ptt"), Expression("jPartner.[PTT]")]
        public Int32? PartnerPtt
        {
            get { return Fields.PartnerPtt[this]; }
            set { Fields.PartnerPtt[this] = value; }
        }

        [DisplayName("Partner Mjesto"), Expression("jPartner.[Mjesto]")]
        public String PartnerMjesto
        {
            get { return Fields.PartnerMjesto[this]; }
            set { Fields.PartnerMjesto[this] = value; }
        }

        [DisplayName("Partner Grad"), Expression("jPartner.[Grad]")]
        public String PartnerGrad
        {
            get { return Fields.PartnerGrad[this]; }
            set { Fields.PartnerGrad[this] = value; }
        }

        [DisplayName("Partner Active"), Expression("jPartner.[Active]")]
        public Boolean? PartnerActive
        {
            get { return Fields.PartnerActive[this]; }
            set { Fields.PartnerActive[this] = value; }
        }

        [DisplayName("Partner Date Time Created"), Expression("jPartner.[DateTimeCreated]")]
        public DateTime? PartnerDateTimeCreated
        {
            get { return Fields.PartnerDateTimeCreated[this]; }
            set { Fields.PartnerDateTimeCreated[this] = value; }
        }

        [DisplayName("Partner Drzava"), Expression("jPartner.[Drzava]")]
        public String PartnerDrzava
        {
            get { return Fields.PartnerDrzava[this]; }
            set { Fields.PartnerDrzava[this] = value; }
        }

        [DisplayName("Ura P Artner Id"), Expression("jUra.[PArtnerId]")]
        public Int32? UraPArtnerId
        {
            get { return Fields.UraPArtnerId[this]; }
            set { Fields.UraPArtnerId[this] = value; }
        }

        [DisplayName("Ura Ura Broj"), Expression("jUra.[UraBroj]")]
        public String UraUraBroj
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

        [DisplayName("Sektor Naziv"), Expression("jSektor.[Naziv]")]
        public String SektorNaziv
        {
            get { return Fields.SektorNaziv[this]; }
            set { Fields.SektorNaziv[this] = value; }
        }

        [DisplayName("Sektor šifra"), Expression("jSektor.[Šifra]")]
        public String SektorŠifra
        {
            get { return Fields.SektorŠifra[this]; }
            set { Fields.SektorŠifra[this] = value; }
        }

        [DisplayName("Sektor Active"), Expression("jSektor.[Active]")]
        public Boolean? SektorActive
        {
            get { return Fields.SektorActive[this]; }
            set { Fields.SektorActive[this] = value; }
        }

        [DisplayName("Sektor Date Time Created"), Expression("jSektor.[DateTimeCreated]")]
        public DateTime? SektorDateTimeCreated
        {
            get { return Fields.SektorDateTimeCreated[this]; }
            set { Fields.SektorDateTimeCreated[this] = value; }
        }

        [DisplayName("Am Grupa Naziv"), Expression("jAmGrupa.[Naziv]")]
        public String AmGrupaNaziv
        {
            get { return Fields.AmGrupaNaziv[this]; }
            set { Fields.AmGrupaNaziv[this] = value; }
        }

        [DisplayName("Am Grupa Naziv2"), Expression("jAmGrupa.[Naziv2]")]
        public String AmGrupaNaziv2
        {
            get { return Fields.AmGrupaNaziv2[this]; }
            set { Fields.AmGrupaNaziv2[this] = value; }
        }

        [DisplayName("Am Grupa Am Vijek Trajanja"), Expression("jAmGrupa.[Am_vijek_trajanja]")]
        public Int32? AmGrupaAmVijekTrajanja
        {
            get { return Fields.AmGrupaAmVijekTrajanja[this]; }
            set { Fields.AmGrupaAmVijekTrajanja[this] = value; }
        }

        [DisplayName("Am Grupa Godisnja Amortizacija"), Expression("jAmGrupa.[Godisnja_amortizacija]")]
        public Decimal? AmGrupaGodisnjaAmortizacija
        {
            get { return Fields.AmGrupaGodisnjaAmortizacija[this]; }
            set { Fields.AmGrupaGodisnjaAmortizacija[this] = value; }
        }

        [DisplayName("Am Grupa Dvostruka Godisnja Am"), Expression("jAmGrupa.[Dvostruka_Godisnja_am]")]
        public Decimal? AmGrupaDvostrukaGodisnjaAm
        {
            get { return Fields.AmGrupaDvostrukaGodisnjaAm[this]; }
            set { Fields.AmGrupaDvostrukaGodisnjaAm[this] = value; }
        }

        [DisplayName("Am Grupa Konto Iv Id"), Expression("jAmGrupa.[KontoIVId]")]
        public Int32? AmGrupaKontoIvId
        {
            get { return Fields.AmGrupaKontoIvId[this]; }
            set { Fields.AmGrupaKontoIvId[this] = value; }
        }

        [DisplayName("Am Grupa Konto Tr Id"), Expression("jAmGrupa.[KontoTrId]")]
        public Int32? AmGrupaKontoTrId
        {
            get { return Fields.AmGrupaKontoTrId[this]; }
            set { Fields.AmGrupaKontoTrId[this] = value; }
        }

        [DisplayName("Am Grupa Active"), Expression("jAmGrupa.[Active]")]
        public Boolean? AmGrupaActive
        {
            get { return Fields.AmGrupaActive[this]; }
            set { Fields.AmGrupaActive[this] = value; }
        }

        [DisplayName("Am Grupa Date Time Created"), Expression("jAmGrupa.[DateTimeCreated]")]
        public DateTime? AmGrupaDateTimeCreated
        {
            get { return Fields.AmGrupaDateTimeCreated[this]; }
            set { Fields.AmGrupaDateTimeCreated[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.OsnovnoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NazivOpreme; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OsnovnoSredstvoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OsnovnoId;
            public StringField NazivOpreme;
            public Int32Field PartnerId;
            public Int32Field UraId;
            public StringField SerijskiBroj;
            public StringField InventarskiBroj;
            public DecimalField NabavnaVrijednost;
            public DecimalField AmortiziranaVrijednost;
            public DecimalField KnjigovodstvenaVrijednost;
            public DecimalField UvecanjeVrijednosti;
            public DecimalField UmanjenjeVrijednosti;
            public Int32Field SektorId;
            public BooleanField Active;
            public DateTimeField DatumNabave;
            public DateTimeField DatumAmortizacije;
            public DateTimeField DatumOtpisa;
            public DateTimeField DatumPripreme;
            public BooleanField Otpisano;
            public DecimalField Količina;
            public Int32Field AmGrupaId;
            public DateTimeField DateTimeCreated;
            public Int32Field KontoId;
            public Int32Field KontoIvId;
            public StringField Napomena;
            public StringField JedinicaMjere;
            public DecimalField StopaAmSredstva;
            public DateTimeField DatumServisa;

            public StringField PartnerNaziv;
            public StringField PartnerAdresa;
            public Int32Field PartnerPtt;
            public StringField PartnerMjesto;
            public StringField PartnerGrad;
            public BooleanField PartnerActive;
            public DateTimeField PartnerDateTimeCreated;
            public StringField PartnerDrzava;

            public Int32Field UraPArtnerId;
            public StringField UraUraBroj;
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

            public StringField SektorNaziv;
            public StringField SektorŠifra;
            public BooleanField SektorActive;
            public DateTimeField SektorDateTimeCreated;

            public StringField AmGrupaNaziv;
            public StringField AmGrupaNaziv2;
            public Int32Field AmGrupaAmVijekTrajanja;
            public DecimalField AmGrupaGodisnjaAmortizacija;
            public DecimalField AmGrupaDvostrukaGodisnjaAm;
            public Int32Field AmGrupaKontoIvId;
            public Int32Field AmGrupaKontoTrId;
            public BooleanField AmGrupaActive;
            public DateTimeField AmGrupaDateTimeCreated;

            public StringField KontoNaziv;
            public BooleanField KontoActive;
            public DateTimeField KontoDateTimeCreated;
            public StringField Konto;

            public StringField KontoIvNaziv;
            public BooleanField KontoIvActive;
            public DateTimeField KontoIvDateTimeCreated;
            public StringField KontoIvKonto;
        }
    }
}
