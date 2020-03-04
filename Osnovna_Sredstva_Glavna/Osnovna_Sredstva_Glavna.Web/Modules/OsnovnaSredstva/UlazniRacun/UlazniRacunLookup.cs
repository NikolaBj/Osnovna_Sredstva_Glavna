
namespace UlazniRacun.Default.Lookups
{


    using Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("UlazniRacun.MjestoTroskaLookup")]
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

    [LookupScript("UlazniRacun.PartnerUfaLookup")]
    public sealed class PartnerUfaLookup : RowLookupScript<PartneriRow>
    {
        public PartnerUfaLookup()
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

   


    //  protected override void PrepareQuery(SqlQuery query)
    /// {
    // }
}
