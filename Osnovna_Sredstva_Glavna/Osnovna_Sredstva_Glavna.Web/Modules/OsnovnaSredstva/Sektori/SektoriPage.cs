
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/Sektori"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SektoriRow))]
    public class SektoriController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/Sektori/SektoriIndex.cshtml");
        }
    }
}