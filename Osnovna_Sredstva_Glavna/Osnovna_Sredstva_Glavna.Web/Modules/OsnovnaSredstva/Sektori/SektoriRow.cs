
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Sektori]")]
    [DisplayName("Sektori"), InstanceName("Sektori")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SektoriRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sektor Id"), Identity]
        public Int32? SektorId
        {
            get { return Fields.SektorId[this]; }
            set { Fields.SektorId[this] = value; }
        }

        [DisplayName("Naziv"), Size(100), NotNull, QuickSearch]
        public String Naziv
        {
            get { return Fields.Naziv[this]; }
            set { Fields.Naziv[this] = value; }
        }

        [DisplayName("Šifra"), Size(100), NotNull]
        public String Šifra
        {
            get { return Fields.Šifra[this]; }
            set { Fields.Šifra[this] = value; }
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
            get { return Fields.SektorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Naziv; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SektoriRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SektorId;
            public StringField Naziv;
            public StringField Šifra;
            public BooleanField Active;
            public DateTimeField DateTimeCreated;
        }
    }
}
