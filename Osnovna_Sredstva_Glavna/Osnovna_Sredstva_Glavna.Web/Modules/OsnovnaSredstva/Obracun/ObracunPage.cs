
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/Obracun"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ObracunRow))]
    public class ObracunController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/Obracun/ObracunIndex.cshtml");
        }
    }
}