
namespace Osnovna_Sredstva_Glavna.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OsnovnoSredstvo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OsnovnoSredstvoRow))]
    public class OsnovnoSredstvoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OsnovnoSredstvo/OsnovnoSredstvoIndex.cshtml");
        }
    }
}