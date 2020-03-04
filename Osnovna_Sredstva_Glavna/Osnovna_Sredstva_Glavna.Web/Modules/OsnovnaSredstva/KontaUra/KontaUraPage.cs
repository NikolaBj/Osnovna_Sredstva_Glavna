
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/KontaUra"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.KontaUraRow))]
    public class KontaUraController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/KontaUra/KontaUraIndex.cshtml");
        }
    }
}