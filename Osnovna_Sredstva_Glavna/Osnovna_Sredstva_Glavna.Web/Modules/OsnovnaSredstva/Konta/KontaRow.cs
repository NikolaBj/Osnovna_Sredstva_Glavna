
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Konta]")]
    [DisplayName("Konta"), InstanceName("Konta")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class KontaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Konto Id"), PrimaryKey]
        public Int32? KontoId
        {
            get { return Fields.KontoId[this]; }
            set { Fields.KontoId[this] = value; }
        }

        [DisplayName("Naziv"), Size(200), NotNull, QuickSearch]
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

        [DisplayName("Konto"), Size(14)]
        public String Konto
        {
            get { return Fields.Konto[this]; }
            set { Fields.Konto[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.KontoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Naziv; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KontaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field KontoId;
            public StringField Naziv;
            public BooleanField Active;
            public DateTimeField DateTimeCreated;
            public StringField Konto;
        }
    }
}
