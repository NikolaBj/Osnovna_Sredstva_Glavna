
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("OsnovnoSredstvo.UlazniRacun")]
    [ReportDesign(MVC.Views.OsnovnaSredstva.UlazniRacun.UlazniRacunReport)]
    //[RequiredPermission(PermissionKeys.General)]
    public class UlazniRacunReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OrderID { get; set; }

        public object GetData()
        {
            var data = new UlazniRacunReportData();

            using (var connection = SqlConnections.NewFor<UlazniRacunRow>())
            {
                var o = UlazniRacunRow.Fields;

                data.Order = connection.TryById<UlazniRacunRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.UraBroj)
                     .Select(o.BrojRacuna)) ?? new UlazniRacunRow();

                var od = UlazniRacunRow.Fields;
                data.Details = connection.List<UlazniRacunRow>(q => q
                    .SelectTableFields()
                    .Select(od.UraBroj)
                    .Select(od.UkupanIznos)
                    .Where(od.UraId == this.OrderID));

               
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }

    public class UlazniRacunReportData
    {
        public UlazniRacunRow Order { get; set; }
        public List<UlazniRacunRow> Details { get; set; }
        public UlazniRacunRow Customer { get; set; }
    }
}