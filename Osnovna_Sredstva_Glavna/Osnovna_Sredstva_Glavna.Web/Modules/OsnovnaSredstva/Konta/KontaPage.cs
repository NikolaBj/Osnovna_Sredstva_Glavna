
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/Konta"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.KontaRow))]
    public class KontaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/Konta/KontaIndex.cshtml");
        }
    }
}