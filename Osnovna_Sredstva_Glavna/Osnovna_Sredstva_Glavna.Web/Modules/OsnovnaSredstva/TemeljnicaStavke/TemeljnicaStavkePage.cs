
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/TemeljnicaStavke"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TemeljnicaStavkeRow))]
    public class TemeljnicaStavkeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/TemeljnicaStavke/TemeljnicaStavkeIndex.cshtml");
        }
    }
}