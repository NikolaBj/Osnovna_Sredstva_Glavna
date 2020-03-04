using Serenity.Services;

namespace Osnovna_Sredstva_Glavna.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}