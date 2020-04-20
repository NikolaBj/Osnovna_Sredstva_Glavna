
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/VrstaTroska"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VrstaTroskaRow))]
    public class VrstaTroskaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/VrstaTroska/VrstaTroskaIndex.cshtml");
        }
    }
}