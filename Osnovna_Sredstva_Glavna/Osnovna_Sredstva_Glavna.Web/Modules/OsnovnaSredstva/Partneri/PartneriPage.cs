﻿
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OsnovnaSredstva/Partneri"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PartneriRow))]
    public class PartneriController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OsnovnaSredstva/Partneri/PartneriIndex.cshtml");
        }
    }
}