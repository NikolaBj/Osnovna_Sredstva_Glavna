
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/UlazniRacun"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UlazniRacunRow))]
    public class UlazniRacunController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/UlazniRacun/UlazniRacunIndex.cshtml");
        }
    }
}