
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using OsnovnaSredstva;
    using OsnovnaSredstva.Entities;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                OsnovnoSredstvoRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = OsnovnoSredstvoRow.Fields;
                    using (var connection = SqlConnections.NewFor<OsnovnoSredstvoRow>())
                    {
                        model.OpenOrders = connection.Count<OsnovnoSredstvoRow>(o.OsnovnoId ==  OsnovnoSredstvoRow.Fields.OsnovnoId);
                        var closedOrders = connection.Count<AktivacijaSredstvaRow>(o.OsnovnoId == AktivacijaSredstvaRow.Fields.OsnovnoId);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / (double)totalOrders * 100));
                        model.CustomerCount = connection.Count<PartneriRow>();
                        model.ProductCount = connection.Count<AktivacijaSredstvaRow>();
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
