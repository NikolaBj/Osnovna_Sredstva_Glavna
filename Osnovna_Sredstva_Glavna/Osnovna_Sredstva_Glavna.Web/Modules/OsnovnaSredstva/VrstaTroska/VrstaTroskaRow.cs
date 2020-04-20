
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Vrsta_troska]")]
    [DisplayName("Vrsta Troska"), InstanceName("Vrsta Troska")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VrstaTroskaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Vrsta Troska Id"), Column("VrstaTroskaID"), Identity]
        public Int32? VrstaTroskaId
        {
            get { return Fields.VrstaTroskaId[this]; }
            set { Fields.VrstaTroskaId[this] = value; }
        }

        [DisplayName("Naziv"), Size(50), NotNull, QuickSearch]
        public String Naziv
        {
            get { return Fields.Naziv[this]; }
            set { Fields.Naziv[this] = value; }
        }

        [DisplayName("Date Time Created"), NotNull]
        public DateTime? DateTimeCreated
        {
            get { return Fields.DateTimeCreated[this]; }
            set { Fields.DateTimeCreated[this] = value; }
        }

        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VrstaTroskaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Naziv; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VrstaTroskaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VrstaTroskaId;
            public StringField Naziv;
            public DateTimeField DateTimeCreated;
            public BooleanField Active;
        }
    }
}
