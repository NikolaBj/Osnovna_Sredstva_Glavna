
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Obracun]")]
    [DisplayName("Obracun"), InstanceName("Obracun")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ObracunRow : Row, IIdRow, INameRow
    {
        [DisplayName("Obracun Id"), Identity]
        public Int32? ObracunId
        {
            get { return Fields.ObracunId[this]; }
            set { Fields.ObracunId[this] = value; }
        }

        [DisplayName("Partner"), ForeignKey("[dbo].[Partneri]", "PartnerId"), LeftJoin("jPartner"), TextualField("PartnerNaziv"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.PartnerUserLookup), AutoComplete = true)]
        public Int32? PartnerId
        {
            get { return Fields.PartnerId[this]; }
            set { Fields.PartnerId[this] = value; }
        }

        [DisplayName("Osnovno"), ForeignKey("[dbo].[Osnovno_Sredstvo]", "OsnovnoId"), LeftJoin("jOsnovno"), TextualField("OsnovnoNazivOpreme"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.OsnovnoLookup), AutoComplete = true)]
        public Int32? OsnovnoId
        {
            get { return Fields.OsnovnoId[this]; }
            set { Fields.OsnovnoId[this] = value; }
        }

        [DisplayName("Sektor"), ForeignKey("[dbo].[Sektori]", "SektorId"), LeftJoin("jSektor"), TextualField("SektorNaziv"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.SektorLookup), AutoComplete = true)]
        public Int32? SektorId
        {
            get { return Fields.SektorId[this]; }
            set { Fields.SektorId[this] = value; }
        }

        [DisplayName("Am Grupa"), ForeignKey("[dbo].[Amortizacijske_grupe]", "AmGrupaId"), LeftJoin("jAmGrupa"), TextualField("AmGrupaNaziv"), LookupEditor(typeof(Osnovna_Sredstva.Default.Lookups.NameUserLookup), AutoComplete = true)]
        public Int32? AmGrupaId
        {
            get { return Fields.AmGrupaId[this]; }
            set { Fields.AmGrupaId[this] = value; }
        }

        [DisplayName("Datum Obracuna"), Column("Datum_Obracuna")]
        public DateTime? DatumObracuna
        {
            get { return Fields.DatumObracuna[this]; }
            set { Fields.DatumObracuna[this] = value; }
        }

        [DisplayName("Razdoblje Od")]
        public DateTime? RazdobljeOd
        {
            get { return Fields.RazdobljeOd[this]; }
            set { Fields.RazdobljeOd[this] = value; }
        }

        [DisplayName("Razdoblje Do")]
        public DateTime? RazdobljeDo
        {
            get { return Fields.RazdobljeDo[this]; }
            set { Fields.RazdobljeDo[this] = value; }
        }

        [DisplayName("Napomena"), Size(200), QuickSearch]
        public String Napomena
        {
            get { return Fields.Napomena[this]; }
            set { Fields.Napomena[this] = value; }
        }

        [DisplayName("Otpisano")]
        public Boolean? Otpisano
        {
            get { return Fields.Otpisano[this]; }
            set { Fields.Otpisano[this] = value; }
        }
        
        [DisplayName("Active"), Hidden]
        [DefaultValue(1)]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Zavrsen"), Hidden]
        [DefaultValue(1)]
        public Boolean? Zavrsen
        {
            get { return Fields.Zavrsen[this]; }
            set { Fields.Zavrsen[this] = value; }
        }

        [DisplayName("Date Time Created"), NotNull, Hidden]
        [DefaultValue("now")]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
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

        [DisplayName("Osnovno Naziv Opreme"), Expression("jOsnovno.[Naziv_opreme]")]
        public String OsnovnoNazivOpreme
        {
            get { return Fields.OsnovnoNazivOpreme[this]; }
            set { Fields.OsnovnoNazivOpreme[this] = value; }
        }

        [DisplayName("Osnovno Partner Id"), Expression("jOsnovno.[PartnerId]")]
        public Int32? OsnovnoPartnerId
        {
            get { return Fields.OsnovnoPartnerId[this]; }
            set { Fields.OsnovnoPartnerId[this] = value; }
        }

        [DisplayName("Osnovno Ura Id"), Expression("jOsnovno.[UraId]")]
        public Int32? OsnovnoUraId
        {
            get { return Fields.OsnovnoUraId[this]; }
            set { Fields.OsnovnoUraId[this] = value; }
        }

        [DisplayName("Osnovno Serijski Broj"), Expression("jOsnovno.[Serijski_broj]")]
        public String OsnovnoSerijskiBroj
        {
            get { return Fields.OsnovnoSerijskiBroj[this]; }
            set { Fields.OsnovnoSerijskiBroj[this] = value; }
        }

        [DisplayName("Osnovno Inventarski Broj"), Expression("jOsnovno.[Inventarski_broj]")]
        public String OsnovnoInventarskiBroj
        {
            get { return Fields.OsnovnoInventarskiBroj[this]; }
            set { Fields.OsnovnoInventarskiBroj[this] = value; }
        }

        [DisplayName("Osnovno Nabavna Vrijednost"), Expression("jOsnovno.[Nabavna_vrijednost]")]
        public Decimal? OsnovnoNabavnaVrijednost
        {
            get { return Fields.OsnovnoNabavnaVrijednost[this]; }
            set { Fields.OsnovnoNabavnaVrijednost[this] = value; }
        }

        [DisplayName("Osnovno Amortizirana Vrijednost"), Expression("jOsnovno.[Amortizirana_vrijednost]")]
        public Decimal? OsnovnoAmortiziranaVrijednost
        {
            get { return Fields.OsnovnoAmortiziranaVrijednost[this]; }
            set { Fields.OsnovnoAmortiziranaVrijednost[this] = value; }
        }

        [DisplayName("Osnovno Knjigovodstvena Vrijednost"), Expression("jOsnovno.[Knjigovodstvena_vrijednost]")]
        public Decimal? OsnovnoKnjigovodstvenaVrijednost
        {
            get { return Fields.OsnovnoKnjigovodstvenaVrijednost[this]; }
            set { Fields.OsnovnoKnjigovodstvenaVrijednost[this] = value; }
        }

        [DisplayName("Osnovno Uvecanje Vrijednosti"), Expression("jOsnovno.[Uvecanje_vrijednosti]")]
        public Decimal? OsnovnoUvecanjeVrijednosti
        {
            get { return Fields.OsnovnoUvecanjeVrijednosti[this]; }
            set { Fields.OsnovnoUvecanjeVrijednosti[this] = value; }
        }

        [DisplayName("Osnovno Umanjenje Vrijednosti"), Expression("jOsnovno.[Umanjenje_vrijednosti]")]
        public Decimal? OsnovnoUmanjenjeVrijednosti
        {
            get { return Fields.OsnovnoUmanjenjeVrijednosti[this]; }
            set { Fields.OsnovnoUmanjenjeVrijednosti[this] = value; }
        }

        [DisplayName("Osnovno Sektor Id"), Expression("jOsnovno.[SektorId]")]
        public Int32? OsnovnoSektorId
        {
            get { return Fields.OsnovnoSektorId[this]; }
            set { Fields.OsnovnoSektorId[this] = value; }
        }

        [DisplayName("Osnovno Active"), Expression("jOsnovno.[Active]")]
        public Boolean? OsnovnoActive
        {
            get { return Fields.OsnovnoActive[this]; }
            set { Fields.OsnovnoActive[this] = value; }
        }

        [DisplayName("Osnovno Datum Nabave"), Expression("jOsnovno.[Datum_nabave]")]
        public DateTime? OsnovnoDatumNabave
        {
            get { return Fields.OsnovnoDatumNabave[this]; }
            set { Fields.OsnovnoDatumNabave[this] = value; }
        }

        [DisplayName("Osnovno Datum Amortizacije"), Expression("jOsnovno.[Datum_amortizacije]")]
        public DateTime? OsnovnoDatumAmortizacije
        {
            get { return Fields.OsnovnoDatumAmortizacije[this]; }
            set { Fields.OsnovnoDatumAmortizacije[this] = value; }
        }

        [DisplayName("Osnovno Datum Otpisa"), Expression("jOsnovno.[Datum_otpisa]")]
        public DateTime? OsnovnoDatumOtpisa
        {
            get { return Fields.OsnovnoDatumOtpisa[this]; }
            set { Fields.OsnovnoDatumOtpisa[this] = value; }
        }

        [DisplayName("Osnovno Datum Pripreme"), Expression("jOsnovno.[Datum_pripreme]")]
        public DateTime? OsnovnoDatumPripreme
        {
            get { return Fields.OsnovnoDatumPripreme[this]; }
            set { Fields.OsnovnoDatumPripreme[this] = value; }
        }

        [DisplayName("Osnovno Otpisano"), Expression("jOsnovno.[Otpisano]")]
        public Boolean? OsnovnoOtpisano
        {
            get { return Fields.OsnovnoOtpisano[this]; }
            set { Fields.OsnovnoOtpisano[this] = value; }
        }

        [DisplayName("Osnovno Količina"), Expression("jOsnovno.[Količina]")]
        public Decimal? OsnovnoKoličina
        {
            get { return Fields.OsnovnoKoličina[this]; }
            set { Fields.OsnovnoKoličina[this] = value; }
        }

        [DisplayName("Osnovno Am Grupa Id"), Expression("jOsnovno.[AmGrupaId]")]
        public Int32? OsnovnoAmGrupaId
        {
            get { return Fields.OsnovnoAmGrupaId[this]; }
            set { Fields.OsnovnoAmGrupaId[this] = value; }
        }

        [DisplayName("Osnovno Date Time Created"), Expression("jOsnovno.[DateTimeCreated]")]
        public DateTime? OsnovnoDateTimeCreated
        {
            get { return Fields.OsnovnoDateTimeCreated[this]; }
            set { Fields.OsnovnoDateTimeCreated[this] = value; }
        }

        [DisplayName("Osnovno Konto Id"), Expression("jOsnovno.[KontoId]")]
        public Int32? OsnovnoKontoId
        {
            get { return Fields.OsnovnoKontoId[this]; }
            set { Fields.OsnovnoKontoId[this] = value; }
        }

        [DisplayName("Osnovno Konto Iv Id"), Expression("jOsnovno.[KontoIVId]")]
        public Int32? OsnovnoKontoIvId
        {
            get { return Fields.OsnovnoKontoIvId[this]; }
            set { Fields.OsnovnoKontoIvId[this] = value; }
        }

        [DisplayName("Osnovno Napomena"), Expression("jOsnovno.[Napomena]")]
        public String OsnovnoNapomena
        {
            get { return Fields.OsnovnoNapomena[this]; }
            set { Fields.OsnovnoNapomena[this] = value; }
        }

        [DisplayName("Osnovno Jedinica Mjere"), Expression("jOsnovno.[Jedinica_mjere]")]
        public String OsnovnoJedinicaMjere
        {
            get { return Fields.OsnovnoJedinicaMjere[this]; }
            set { Fields.OsnovnoJedinicaMjere[this] = value; }
        }

        [DisplayName("Osnovno Stopa Am Sredstva"), Expression("jOsnovno.[Stopa_am_sredstva]")]
        public Decimal? OsnovnoStopaAmSredstva
        {
            get { return Fields.OsnovnoStopaAmSredstva[this]; }
            set { Fields.OsnovnoStopaAmSredstva[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.ObracunId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Napomena; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ObracunRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ObracunId;
            public Int32Field PartnerId;
            public Int32Field OsnovnoId;
            public Int32Field SektorId;
            public Int32Field AmGrupaId;
            public DateTimeField DatumObracuna;
            public DateTimeField RazdobljeOd;
            public DateTimeField RazdobljeDo;
            public StringField Napomena;
            public BooleanField Otpisano;
            public BooleanField Active;
            public BooleanField Zavrsen;
            public DateTimeField DateTimeCreated;

            public StringField PartnerNaziv;
            public StringField PartnerAdresa;
            public Int32Field PartnerPtt;
            public StringField PartnerMjesto;
            public StringField PartnerGrad;
            public BooleanField PartnerActive;
            public DateTimeField PartnerDateTimeCreated;
            public StringField PartnerDrzava;

            public StringField OsnovnoNazivOpreme;
            public Int32Field OsnovnoPartnerId;
            public Int32Field OsnovnoUraId;
            public StringField OsnovnoSerijskiBroj;
            public StringField OsnovnoInventarskiBroj;
            public DecimalField OsnovnoNabavnaVrijednost;
            public DecimalField OsnovnoAmortiziranaVrijednost;
            public DecimalField OsnovnoKnjigovodstvenaVrijednost;
            public DecimalField OsnovnoUvecanjeVrijednosti;
            public DecimalField OsnovnoUmanjenjeVrijednosti;
            public Int32Field OsnovnoSektorId;
            public BooleanField OsnovnoActive;
            public DateTimeField OsnovnoDatumNabave;
            public DateTimeField OsnovnoDatumAmortizacije;
            public DateTimeField OsnovnoDatumOtpisa;
            public DateTimeField OsnovnoDatumPripreme;
            public BooleanField OsnovnoOtpisano;
            public DecimalField OsnovnoKoličina;
            public Int32Field OsnovnoAmGrupaId;
            public DateTimeField OsnovnoDateTimeCreated;
            public Int32Field OsnovnoKontoId;
            public Int32Field OsnovnoKontoIvId;
            public StringField OsnovnoNapomena;
            public StringField OsnovnoJedinicaMjere;
            public DecimalField OsnovnoStopaAmSredstva;

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
        }
    }
}
