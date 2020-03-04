
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/AktivacijaSredstva"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AktivacijaSredstvaRow))]
    public class AktivacijaSredstvaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/AktivacijaSredstva/AktivacijaSredstvaIndex.cshtml");
        }
    }
}