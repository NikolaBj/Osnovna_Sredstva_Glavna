
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/AmortizacijskeGrupe"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AmortizacijskeGrupeRow))]
    public class AmortizacijskeGrupeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/AmortizacijskeGrupe/AmortizacijskeGrupeIndex.cshtml");
        }
    }
}