
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Osnovna_Sredstva"), Module("OsnovnaSredstva"), TableName("[dbo].[Partneri]")]
    [DisplayName("Partneri"), InstanceName("Partneri")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PartneriRow : Row, IIdRow, INameRow
    {
        [DisplayName("Partner Id"), Identity]
        public Int32? PartnerId
        {
            get { return Fields.PartnerId[this]; }
            set { Fields.PartnerId[this] = value; }
        }

        [DisplayName("Naziv"), Size(100), NotNull, QuickSearch]
        public String Naziv
        {
            get { return Fields.Naziv[this]; }
            set { Fields.Naziv[this] = value; }
        }

        [DisplayName("Adresa"), Size(100), NotNull]
        public String Adresa
        {
            get { return Fields.Adresa[this]; }
            set { Fields.Adresa[this] = value; }
        }

        [DisplayName("Ptt"), Column("PTT"), NotNull]
        public Int32? Ptt
        {
            get { return Fields.Ptt[this]; }
            set { Fields.Ptt[this] = value; }
        }

        [DisplayName("Mjesto"), Size(50), NotNull]
        public String Mjesto
        {
            get { return Fields.Mjesto[this]; }
            set { Fields.Mjesto[this] = value; }
        }

        [DisplayName("Grad"), Size(100), NotNull]
        public String Grad
        {
            get { return Fields.Grad[this]; }
            set { Fields.Grad[this] = value; }
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

        [DisplayName("Drzava"), Size(100), NotNull]
        public String Drzava
        {
            get { return Fields.Drzava[this]; }
            set { Fields.Drzava[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PartnerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Naziv; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PartneriRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PartnerId;
            public StringField Naziv;
            public StringField Adresa;
            public Int32Field Ptt;
            public StringField Mjesto;
            public StringField Grad;
            public BooleanField Active;
            public DateTimeField DateTimeCreated;
            public StringField Drzava;
        }
    }
}
