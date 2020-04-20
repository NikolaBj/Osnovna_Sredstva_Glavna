
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/Dokumentacija"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DokumentacijaRow))]
    public class DokumentacijaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/Dokumentacija/DokumentacijaIndex.cshtml");
        }
    }
}