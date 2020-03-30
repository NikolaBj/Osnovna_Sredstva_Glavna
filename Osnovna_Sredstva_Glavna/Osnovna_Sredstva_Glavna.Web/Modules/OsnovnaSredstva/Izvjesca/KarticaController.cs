using System.Collections.Generic;
using System.Web.Mvc;

namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Izvjesca
{
    public class KarticaController : Controller
    {
        Osnovna_Sredstva_GlavnaEntities db = new Osnovna_Sredstva_GlavnaEntities();
        public ActionResult Index(int id)
        {
            List<Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities.OsnovnoSredstvoRow> model = new List<Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities.OsnovnoSredstvoRow>();


            //Execute stored procedure as a function
            var result = db.sp_KarticaSredstvaPojedinacno(id);

            foreach (var item in result)
            {

                model.Add(new Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities.OsnovnoSredstvoRow()
                {


                    NazivOpreme = item.Naziv_opreme,
                    SerijskiBroj = item.Serijski_broj,
                    InventarskiBroj = item.Inventarski_broj,
                    DatumNabave = item.Datum_nabave,
                    NabavnaVrijednost = item.Nabavna_vrijednost,
                    AmortiziranaVrijednost = item.Iznos_Amortizacije,
                    KnjigovodstvenaVrijednost = item.Knjigovodstvena_vrijednost










                });




            }

                return View(model);
            }
        }
    }
 