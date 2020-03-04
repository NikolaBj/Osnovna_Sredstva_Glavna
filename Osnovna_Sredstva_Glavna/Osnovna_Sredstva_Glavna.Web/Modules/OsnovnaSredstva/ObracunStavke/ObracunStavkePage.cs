
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/ObracunStavke"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ObracunStavkeRow))]
    public class ObracunStavkeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/ObracunStavke/ObracunStavkeIndex.cshtml");
        }
    }
}