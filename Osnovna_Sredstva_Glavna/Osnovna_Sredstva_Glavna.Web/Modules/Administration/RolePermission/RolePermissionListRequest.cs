
namespace Osnovna_Sredstva_Glavna.Administration
{
    using Serenity.Services;

    public class RolePermissionListRequest : ServiceRequest
    {
        public int? RoleID { get; set; }
        public string Module { get; set; }
        public string Submodule { get; set; }
    }
}