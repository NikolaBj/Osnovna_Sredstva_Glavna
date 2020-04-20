
namespace Osnovna_Sredstva.Default.Lookups
{

 
   
   

    using Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("OsnovnaSredstva.NameUserLookup")]
    public sealed class NameUserLookup : RowLookupScript<AmortizacijskeGrupeRow>
    {
        public NameUserLookup()
        {
            IdField = AmortizacijskeGrupeRow.Fields.AmGrupaId.PropertyName;
            TextField = AmortizacijskeGrupeRow.Fields.Naziv.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = AmortizacijskeGrupeRow.Fields;

            query.Select(fldComputer.AmGrupaId, fldComputer.Naziv);

        }
    }

    [LookupScript("OsnovnaSredstva.OsnovnoLookup")]
    public sealed class OsnovnoLookup : RowLookupScript<OsnovnoSredstvoRow>
    {
        public OsnovnoLookup()
        {
            IdField = OsnovnoSredstvoRow.Fields.OsnovnoId.PropertyName;
            TextField = OsnovnoSredstvoRow.Fields.NazivOpreme.PropertyName;
        }




        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = OsnovnoSredstvoRow.Fields;
            var flcComputer = OsnovnoSredstvoRow.Fields.SerijskiBroj.ToString() + " " + OsnovnoSredstvoRow.Fields.NazivOpreme.ToString();
            query.Select(fldComputer.OsnovnoId, fldComputer.NazivOpreme );

        }
    }

    [LookupScript("OsnovnaSredstva.OsnovnoLookup2")]
    public sealed class OsnovnoLookup2 : RowLookupScript<OsnovnoSredstvoRow>
    {
        public OsnovnoLookup2()
        {
            IdField = OsnovnoSredstvoRow.Fields.OsnovnoId.PropertyName;
            TextField = OsnovnoSredstvoRow.Fields.OsnovnoId.PropertyName;
        }




        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = OsnovnoSredstvoRow.Fields;
            var flcComputer = OsnovnoSredstvoRow.Fields.SerijskiBroj.ToString() + " " + OsnovnoSredstvoRow.Fields.OsnovnoId.ToString();
            query.Select(fldComputer.OsnovnoId, fldComputer.OsnovnoId);

        }
    }


    [LookupScript("OsnovnaSredstva.VrstaTroska")]
    public sealed class VrstaTroska : RowLookupScript<VrstaTroskaRow>
    {
        public VrstaTroska()
        {
            IdField = VrstaTroskaRow.Fields.VrstaTroskaId.PropertyName;
            TextField = VrstaTroskaRow.Fields.Naziv.PropertyName;
        }




        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = VrstaTroskaRow.Fields;

            query.Select(fldComputer.VrstaTroskaId, fldComputer.Naziv);

        }
    
}

    //[LookupScript("OsnovnaSredstva.OsnovnoLookup2")]
    //public sealed class OsnovnoLookup2 : RowLookupScript<OsnovnoSredstvoRow>
    //{
    //    public OsnovnoLookup2()
    //    {
    //        IdField = OsnovnoSredstvoRow.Fields.OsnovnoId.PropertyName;
    //        TextField = OsnovnoSredstvoRow.Fields.NazivOpreme.PropertyName;
    //    }




    //    protected override void PrepareQuery(SqlQuery query)
    //    {

    //        base.PrepareQuery(query);
    //        var fldComputer = OsnovnoSredstvoRow.Fields;
    //        var flcComputer = OsnovnoSredstvoRow.Fields.SerijskiBroj.ToString() + " " + OsnovnoSredstvoRow.Fields.NazivOpreme.ToString();
    //        query.Select(fldComputer.OsnovnoId, fldComputer.NazivOpreme);

    //    }
    //}

    [LookupScript("OsnovnaSredstva.PartnerUserLookup")]
    public sealed class PartnerUserLookup : RowLookupScript<PartneriRow>
    {
        public PartnerUserLookup()
        {
            IdField = PartneriRow.Fields.PartnerId.PropertyName;
            TextField = PartneriRow.Fields.Naziv.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = PartneriRow.Fields;

            query.Select(fldComputer.PartnerId, fldComputer.Naziv);

        }
    }

    [LookupScript("OsnovnaSredstva.SektorLookup")]
    public sealed class SektorLookup : RowLookupScript<SektoriRow>
    {
        public SektorLookup()
        {
            IdField = SektoriRow.Fields.SektorId.PropertyName;
            TextField = SektoriRow.Fields.Naziv.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = SektoriRow.Fields;

            query.Select(fldComputer.SektorId, fldComputer.Naziv );

        }
    }

    [LookupScript("OsnovnaSredstva.KontaLookup")]
    public sealed class KontaLookup : RowLookupScript<KontaRow>
    {
        public KontaLookup()
        {
            IdField = KontaRow.Fields.KontoId.PropertyName;
            TextField = KontaRow.Fields.Naziv.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = KontaRow.Fields;

            query.Select(fldComputer.KontoId, fldComputer.Naziv)
                .Where(fldComputer.Konto.StartsWith("0"))
                .Where(fldComputer.Konto.NotContains("9")); 
                

        }
    }

    [LookupScript("OsnovnaSredstva.KontaTrLookup")]
    public sealed class KontaTrLookup : RowLookupScript<KontaRow>
    {
        public KontaTrLookup()
        {
            IdField = KontaRow.Fields.KontoId.PropertyName;
            TextField = KontaRow.Fields.Naziv.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = KontaRow.Fields;

            query.Select(fldComputer.KontoId, fldComputer.Naziv)
                .Where(fldComputer.Konto.StartsWith("43"));
               


        }
    }

    [LookupScript("OsnovnaSredstva.KontaSvaLookup")]
    public sealed class KontaSvaLookup : RowLookupScript<KontaRow>
    {
        public KontaSvaLookup()
        {
            IdField = KontaRow.Fields.KontoId.PropertyName;
            TextField = KontaRow.Fields.Naziv.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = KontaRow.Fields;

            query.Select(fldComputer.KontoId, fldComputer.Naziv);
             



        }
    }
    [LookupScript("OsnovnaSredstva.KontaIVLookup")]
    public sealed class KontaIVLookup : RowLookupScript<KontaRow>
    {
        public KontaIVLookup()
        {
            IdField = KontaRow.Fields.KontoId.PropertyName;
            TextField = KontaRow.Fields.Naziv.PropertyName;
                 
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = KontaRow.Fields;

            query.Select(fldComputer.KontoId, fldComputer.Naziv)
                .Where(fldComputer.Naziv.Contains("Akumulirana amortizacija"))
                .Where(fldComputer.Konto.StartsWith("0"));
            
                 
                

        }
    }


    [LookupScript("OsnovnaSredstva.PartnerUraLookup")]
    public sealed class PartnerUraLookup : RowLookupScript<UlazniRacunRow>
    {
        public PartnerUraLookup()
        {
            IdField = UlazniRacunRow.Fields.UraId.PropertyName;
            TextField = UlazniRacunRow.Fields.UraBroj.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = UlazniRacunRow.Fields;

            query.Select(fldComputer.UraId, fldComputer.UraBroj);
                

        }
    }

    [LookupScript("OsnovnaSredstva.MjestoTroskaLookup")]
    public sealed class MjestoTroskaLookup : RowLookupScript<MjestoTroskaRow>
    {
        public MjestoTroskaLookup()
        {
            IdField = MjestoTroskaRow.Fields.MjestoTroskaId.PropertyName;
            TextField = MjestoTroskaRow.Fields.Naziv.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var fldComputer = MjestoTroskaRow.Fields;

            query.Select(fldComputer.MjestoTroskaId, fldComputer.Naziv);

        }
    }

    [LookupScript]
    public class GodAmortizacijaLookup : RowLookupScript<AmortizacijskeGrupeRow>
    {
        public GodAmortizacijaLookup()
        {
            IdField = TextField = AmortizacijskeGrupeRow.Fields.GodisnjaAmortizacija.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = AmortizacijskeGrupeRow.Fields;
            query.Distinct(true)
                .Select(fld.AmGrupaId)
                .Select(fld.GodisnjaAmortizacija);
                 
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }


    [LookupScript]
    public class NabavnaVrijednostLookup : RowLookupScript<OsnovnoSredstvoRow>
    {
        public NabavnaVrijednostLookup()
        {
            IdField = TextField = OsnovnoSredstvoRow.Fields.NabavnaVrijednost.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = OsnovnoSredstvoRow.Fields;
            query.Distinct(true)
                .Select(fld.OsnovnoId)
                .Select(fld.NabavnaVrijednost);

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }


    //  protected override void PrepareQuery(SqlQuery query)
    /// {
    // }
}
