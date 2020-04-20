

namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {



    import fld = OsnovnaSredstva.OsnovnoSredstvoRow.Fields;
    @Serenity.Decorators.registerClass()
    export class OsnovnoSredstvoGrid extends Serenity.EntityGrid<OsnovnoSredstvoRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.OsnovnoSredstvo'; }
        protected getDialogType() { return OsnovnaSredstva.OsnovnoSredstvoDialog; }
        protected getIdProperty() { return OsnovnoSredstvoRow.idProperty; }
        protected getInsertPermission() { return OsnovnoSredstvoRow.insertPermission; }
        protected getLocalTextPrefix() { return OsnovnoSredstvoRow.localTextPrefix; }
        protected getService() { return OsnovnoSredstvoService.baseUrl; }

        //protected shippingStateFilter: Serenity.EnumEditor;

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: OsnovnoSredstvoService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => {
                    var curItem = <OsnovnoSredstvoRow>ctx.item;
                    var divId: string = "";
                    if (curItem.Active != true)
                        divId =
                            '<a class="inline-action delete-row" title="Obriši sredstvo">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'
                    return divId;





                },


                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(1, 0, {
                field: 'View Details',
                name: '',

                format: ctx => {
                    var curItem = <OsnovnoSredstvoRow>ctx.item;

                    var divId: string = "";
                    if (curItem.Active != true)
                        divId = '<a class="inline-action   view-details" title = "Aktivacija Sredstva" > </a>'
                    return divId;


                },


                //  format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(2, 0, {
                field: 'Aktivacija sredstva',
                name: '',
                format: ctx => {
                    var curItem = <OsnovnoSredstvoRow>ctx.item;
                    var divId: string = "";
                    if (curItem.Active != true)
                        divId = '<a class="inline-action   glyphicon glyphicon-modal-window" title="Aktivacija sredstva"></a>'
                    return divId;
                },

                width: 24,
                minWidth: 24,
                maxWidth: 24,

            });

            columns.splice(2, 0, {
                field: 'Upozorenje servisa',
                name: '',
                format: ctx => {
                    var curItem = <OsnovnoSredstvoRow>ctx.item;
                    var dateItem = <OsnovnoSredstvoRow.Fields.DatumServisa>ctx.item;

                    //Konverzija cjelokupnog datuma u text kako bi usporedio podatke s Datumom servisa

                    var dan = new Date().getDate();
                    var mjesec = (new Date().getUTCMonth() + 1);
                    var izracun = "";
                    var izracunDan = "";
                    if (mjesec < 10) {
                        izracun = "0" + mjesec.toString();
                    }
                    else {
                        izracun = mjesec.toString();
                    }

                    if (dan < 10) {
                        izracunDan = "0" + dan.toString();
                    }

                    else {
                        izracunDan = dan.toString();
                    }
                    var godina = new Date().getFullYear();
                    var datum = godina + "-" + izracun + "-" + izracunDan + "T00:00:00.000";
                    var divId: string = "";


                    // Konverzija datuma servisa iz stringa u datum 

                    var godinaServisa = Number(curItem.DatumServisa.substring(0, 4));
                    var mjesecServisa = Number(curItem.DatumServisa.substr(5, 2));
                    var danServisa = Number(curItem.DatumServisa.substr(8, 2));

                    var DatumServisa = new Date(godinaServisa, mjesecServisa, danServisa);
                    var Datum = new Date(godina, mjesec, dan + 7);
                    if (DatumServisa <= Datum)
                        divId = '<a class="inline-action glyphicon glyphicon-wrench " style="color:red" title = "Obavi servis!" > </a>' + 'Datum idućeg servisa: ' + (danServisa + "-" + mjesecServisa + "-" + godinaServisa + " godine");
                    return divId;


                },

                // format: ctx => '<a class="inline-action   glyphicon glyphicon-play" title="Aktivacija Sredstva"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24,
            });

            columns.unshift({
                field: 'Approves',
                name: '',
                format: ctx => '<a class="inline-action approve-form" title="Approves">' +
                    '<i class="fa fa-hand-o-up text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });


            columns.splice(2, 0, {
                field: 'Obračun amortizacije',
                name: '',
                format: ctx => {
                    var curItem = <OsnovnoSredstvoRow>ctx.item;

                    var divId: string = "";
                    if (curItem.KnjigovodstvenaVrijednost != 0 || curItem.Active == true)
                        divId = '<a class="inline-action   glyphicon glyphicon-cog" title = "Obračun amortizacije" > </a>'
                    return divId;


                },
                width: 24,
                minWidth: 24,
                maxWidth: 24,



            });

            columns.splice(2, 0, {
                field: 'Kartica Sredstva',
                name: '',
                format: ctx => {
                    var curItem = <OsnovnoSredstvoRow>ctx.item;

                    var divId: string = "";
                    if (curItem.KnjigovodstvenaVrijednost != 0 || curItem.Active == true)
                        divId = '<a class="inline-action     glyphicon glyphicon-duplicate" title = "Kartica sredstva" > </a>'
                    return divId;


                },
                width: 24,
                minWidth: 24,
                maxWidth: 24,



            });








            return columns;

        }



        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {





                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        OsnovnaSredstva.OsnovnoSredstvoService.Delete({
                            EntityId: item.OsnovnoId,
                        }, response => {



                            Q.confirm(
                                "Da li ste sigurni da želite obrisati sredstvo?",
                                () => {
                                    Q.notifySuccess("Osnovno sredstvo:" + " " + item.NazivOpreme + " obrisano");
                                },
                                {
                                    onNo: () => {
                                        Q.notifyInfo("No?");
                                    },
                                    onCancel: () => {
                                        Q.notifyError("Brisanje sredstva poništeno!");
                                    },
                                    dialogClass: 's-MessageDialog s-WarningDialog'
                                });







                            this.refresh();
                        });
                    });
                }
                else if (target.hasClass('view-details')) {
                    this.editItem(item.OsnovnoId);


                }
                else if (target.hasClass('glyphicon glyphicon-modal-window')) {
                    var dlg = new AktivacijaSredstvaDialog;
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog(<AktivacijaSredstvaRow>{
                        OsnovnoId: item.OsnovnoId


                    });


                }
                else if (target.hasClass('approve-form')) {
                    new OsnovnoSredstvoSecondDialog().loadByIdAndOpenDialog(item.OsnovnoId);


                }


                

 
            else if (target.hasClass('glyphicon glyphicon-play')) {



                var servicecall = OsnovnoSredstvoService.PokreniAktivaciju(
                    {
                        OsnovnoId: item.OsnovnoId,
                        osnovnoId: item.OsnovnoId
                    },
                    response => {
                        // Q.notifySuccess("Aktivacija Sredstva izvršena");


                        Q.confirm(
                            "Da li ste sigurni da želite aktivirati sredstvo?",
                            () => {
                                Q.notifySuccess("Osnovno sredstvo:" + " " + item.OsnovnoId + " aktivirano");
                            },
                            {
                                onNo: () => {
                                    Q.notifyInfo("No?");
                                },
                                onCancel: () => {
                                    Q.notifyError("Aktivacija poništena!");
                                },
                                dialogClass: 's-MessageDialog s-WarningDialog'
                            });






                        this.refresh();
                    });



                //var dlg = new AktivacijaSredstvaDialog;
                //this.initDialog(dlg);
                //dlg.loadEntityAndOpenDialog(<AktivacijaSredstvaRow>{
                //    OsnovnoId: item.OsnovnoId
                //});
            }
            else if (target.hasClass('glyphicon glyphicon-cog')) {
                var dlga = new ObracunDialog;
                this.initDialog(dlga);
                dlga.loadEntityAndOpenDialog(<ObracunRow>{
                    OsnovnoId: item.OsnovnoId,
                    PartnerId: item.PartnerId,
                    SektorId: item.SektorId,
                    AmGrupaId: item.AmGrupaId,
                    RazdobljeOd: item.DatumAmortizacije

                });
            }
            //else if (target.hasClass('glyphicon glyphicon-duplicate')) {




            //    //    Q.serviceCall(new ServiceCallOptions
            //    //    {
            //    //            URL = Q.ResolveUrl("~/Accounting/LedgersBalance/ExecuteProc"),
            //    //            Request = new ProcParam{ Param1="Param1" },
            //    //        OnSuccess = response => {
            //    //            var result = ((ProcResponse)response);
            //    //    Q.alert(result.ExecutionResult);
            //    //}



            //    //  onclick = "location.href='<%: Url.Action("Action", "Controller") %>'" />


            //    //var dlga = new ObracunDialog;
            //    //this.initDialog(dlga);
            //    //    var id = null
            //    window.location.href = 'http://desktop-jbaab7c/ReportServer/Pages/ReportViewer.aspx?%2fKarticaSredstvaGlavna&rs:Command=Render&OsnovnoId=' + item.OsnovnoId;
            //    //  //

            //    //       =”javascript: void(window.open(‘http://myserver/mypath/myasppage.html&#8217;, ‘_blank’, ‘width=300,height=300,top=300,left=500,toolbar=1,menubar=1,location=1,status=1,scrollbars=1,resizable=1′))”
            //    // window.location.href ='javascript: void (window.open(‘http://desktop-jbaab7c/Reports/Pages/Report.aspx?ItemPath=%2fKarticaSredstva;, ‘_blank’, ‘width=300,height=300,top=300,left=500,toolbar=1,menubar=1,location=1,status=1,scrollbars=1,resizable=1′))'
            //}

            //}


        }
    }


        //protected createQuickFilters() {
        //    super.createQuickFilters();

        //    this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.Active);
        //}

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();

            // we start by turning CustomerID filter to a Not Equal one
            let filter = Q.first(filters, x => x.field == fld.NazivOpreme);
            filter.title = "Naziv opreme";
            filter.handler = h => {
                // if filter is active, e.g. editor has some value
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.NazivOpreme], 'like', '%'+h.value+'%']);
                }
            };

            let endFreight: Serenity.DecimalEditor = null;

            filters.push({
                field: fld.KnjigovodstvenaVrijednost,
                type: Serenity.DecimalEditor,
                title: 'Knjigovodstvena vrijednost od do',
                element: e1 => {
                    e1.css("width", "80px");
                    endFreight = Serenity.Widget.create({
                        type: Serenity.DecimalEditor,
                        element: e2 => e2.insertAfter(e1).css("width", "80px")
                    });

                    endFreight.element.change(x => e1.triggerHandler("change"));
                    $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                },
                handler: h => {
                    var active1 = h.value != null && !isNaN(h.value);
                    var active2 = endFreight.value != null && !isNaN(endFreight.value);
                    h.active = active1 || active2;

                    if (active1)
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.KnjigovodstvenaVrijednost], '>=', h.value]);

                    if (active2)
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.KnjigovodstvenaVrijednost], '<=', endFreight.value]);
                }
            });
 

            return filters;
        }

 

        //public set_shippingState(value: number): void {
        //    this.shippingStateFilter.value = value == null ? '' : value.toString();
        //}

    }
}