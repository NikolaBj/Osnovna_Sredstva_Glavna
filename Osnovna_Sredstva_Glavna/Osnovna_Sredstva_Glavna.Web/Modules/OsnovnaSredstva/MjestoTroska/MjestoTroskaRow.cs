
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Mjesto_Troska]")]
    [DisplayName("Mjesto Troska"), InstanceName("Mjesto Troska")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MjestoTroskaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Mjesto Troska Id"), Identity]
        public Int32? MjestoTroskaId
        {
            get { return Fields.MjestoTroskaId[this]; }
            set { Fields.MjestoTroskaId[this] = value; }
        }

        [DisplayName("Sifra"), Size(100), NotNull, QuickSearch]
        public String Sifra
        {
            get { return Fields.Sifra[this]; }
            set { Fields.Sifra[this] = value; }
        }

        [DisplayName("Naziv"), Size(100), NotNull]
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

        [DisplayName("Date Time Created"), NotNull]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MjestoTroskaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Sifra; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MjestoTroskaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MjestoTroskaId;
            public StringField Sifra;
            public StringField Naziv;
            public BooleanField Active;
            public DateTimeField DateTimeCreated;
        }
    }
}
