﻿
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/Reports"), Route("{action=index}")]
   // [PageAuthorize(PermissionKeys.General)]
    public class ReportsController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage, 
                new ReportRepository().GetReportTree("OsnovnaSredstva"));
        }
    }
}
