
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/OsnovnoSredstvo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OsnovnoSredstvoRow))]
    public class OsnovnoSredstvoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/OsnovnoSredstvo/OsnovnoSredstvoIndex.cshtml");
        }
    }
}