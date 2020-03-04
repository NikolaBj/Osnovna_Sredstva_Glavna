
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/MjestoTroska"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MjestoTroskaRow))]
    public class MjestoTroskaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/MjestoTroska/MjestoTroskaIndex.cshtml");
        }
    }
}