
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/Servis"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ServisRow))]
    public class ServisController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/Servis/ServisIndex.cshtml");
        }
    }
}