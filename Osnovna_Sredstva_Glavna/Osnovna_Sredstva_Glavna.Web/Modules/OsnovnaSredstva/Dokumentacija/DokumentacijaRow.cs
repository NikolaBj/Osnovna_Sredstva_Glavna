
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Dokumentacija]")]
    [DisplayName("Dokumentacija"), InstanceName("Dokumentacija")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DokumentacijaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Dokument Id"), Identity]
        public Int32? DokumentId
        {
            get { return Fields.DokumentId[this]; }
            set { Fields.DokumentId[this] = value; }
        }

        [DisplayName("Naziv"), Size(100), NotNull, QuickSearch]
        public String Naziv
        {
            get { return Fields.Naziv[this]; }
            set { Fields.Naziv[this] = value; }
        }

        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }
         
       
        [DisplayName("Dokumentacija"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "Dokumentacija/~", CopyToHistory = true)]
        public String FileContent
        {
            get { return Fields.FileContent[this]; }
            set { Fields.FileContent[this] = value; }
        }

        [DisplayName("Date Time Created"), NotNull]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }


        //[DisplayName("Osnovno"),  ForeignKey(typeof(ServisRow)), LeftJoin("i"), Updatable(false), Hidden]
        [DisplayName("Osnovno"),  ForeignKey("[dbo].[Osnovno_Sredstvo]", "OsnovnoId"), LeftJoin("jOsnovno"), TextualField("OsnovnoNazivOpreme"),Hidden]
        public Int32? OsnovnoId
        {
            get { return Fields.OsnovnoId[this]; }
            set { Fields.OsnovnoId[this] = value; }
        }
        [DisplayName("ServisId"), PrimaryKey, ForeignKey(typeof(ServisRow)), LeftJoin("o"), Updatable(false), Hidden]
      //  [DisplayName("ServisId"), ForeignKey("[dbo].[Servis]", "ServisId"), LeftJoin("jServis"), TextualField("ServisNapomena")]
        public Int32? ServisId
        {
            get { return Fields.ServisId[this]; }
            set { Fields.ServisId[this] = value; }
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

        [DisplayName("Osnovno Datum Servisa"), Expression("jOsnovno.[DatumServisa]")]
        public DateTime? OsnovnoDatumServisa
        {
            get { return Fields.OsnovnoDatumServisa[this]; }
            set { Fields.OsnovnoDatumServisa[this] = value; }
        }

        [DisplayName("Servis Partner Id"), Expression("jServis.[PartnerId]")]
        public Int32? ServisPartnerId
        {
            get { return Fields.ServisPartnerId[this]; }
            set { Fields.ServisPartnerId[this] = value; }
        }

        [DisplayName("Servis Osnovno Id"), Expression("jServis.[OsnovnoId]")]
        public Int32? ServisOsnovnoId
        {
            get { return Fields.ServisOsnovnoId[this]; }
            set { Fields.ServisOsnovnoId[this] = value; }
        }

        [DisplayName("Servis Datum Servisa"), Expression("jServis.[Datum_servisa]")]
        public DateTime? ServisDatumServisa
        {
            get { return Fields.ServisDatumServisa[this]; }
            set { Fields.ServisDatumServisa[this] = value; }
        }

        [DisplayName("Servis Datum End Servisa"), Expression("jServis.[Datum_EndServisa]")]
        public DateTime? ServisDatumEndServisa
        {
            get { return Fields.ServisDatumEndServisa[this]; }
            set { Fields.ServisDatumEndServisa[this] = value; }
        }

        [DisplayName("Servis Napomena"), Expression("jServis.[Napomena]")]
        public String ServisNapomena
        {
            get { return Fields.ServisNapomena[this]; }
            set { Fields.ServisNapomena[this] = value; }
        }

        [DisplayName("Servis Active"), Expression("jServis.[Active]")]
        public Boolean? ServisActive
        {
            get { return Fields.ServisActive[this]; }
            set { Fields.ServisActive[this] = value; }
        }

        [DisplayName("Servis Date Time Created"), Expression("jServis.[DateTimeCreated]")]
        public DateTime? ServisDateTimeCreated
        {
            get { return Fields.ServisDateTimeCreated[this]; }
            set { Fields.ServisDateTimeCreated[this] = value; }
        }

        [DisplayName("Servis Iznos Servisa"), Expression("jServis.[IznosServisa]")]
        public Decimal? ServisIznosServisa
        {
            get { return Fields.ServisIznosServisa[this]; }
            set { Fields.ServisIznosServisa[this] = value; }
        }

        [DisplayName("Servis Vrsta Troska Id"), Expression("jServis.[VrstaTroskaID]")]
        public Int32? ServisVrstaTroskaId
        {
            get { return Fields.ServisVrstaTroskaId[this]; }
            set { Fields.ServisVrstaTroskaId[this] = value; }
        }

        //[DisplayName("Servis Dokument Id"), Expression("jServis.[DokumentId]")]
        //public Int32? ServisDokumentId
        //{
        //    get { return Fields.ServisDokumentId[this]; }
        //    set { Fields.ServisDokumentId[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.DokumentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Naziv; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DokumentacijaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DokumentId;
            public StringField Naziv;
            public BooleanField Active;
            public StringField FileContent;
            public DateTimeField DateTimeCreated;
            public Int32Field OsnovnoId;
            public Int32Field ServisId;

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
            public DateTimeField OsnovnoDatumServisa;

            public Int32Field ServisPartnerId;
            public Int32Field ServisOsnovnoId;
            public DateTimeField ServisDatumServisa;
            public DateTimeField ServisDatumEndServisa;
            public StringField ServisNapomena;
            public BooleanField ServisActive;
            public DateTimeField ServisDateTimeCreated;
            public DecimalField ServisIznosServisa;
            public Int32Field ServisVrstaTroskaId;
         //   public Int32Field ServisDokumentId;
        }
    }
}
