using Serenity.Services;

namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva
{
    public class ServisListRequest : ListRequest
    {
        public int? DokumentId { get; set; }
    }
}