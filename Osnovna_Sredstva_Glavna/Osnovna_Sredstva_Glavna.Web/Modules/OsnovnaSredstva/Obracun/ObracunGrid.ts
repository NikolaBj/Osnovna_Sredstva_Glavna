


namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    import flx = OsnovnaSredstva.OsnovnoSredstvoRow.Fields;
    import fla = OsnovnaSredstva.ObracunStavkeRow.Fields;
    import fld = OsnovnaSredstva.ObracunRow.Fields; 
    @Serenity.Decorators.registerClass()
    export class ObracunGrid extends Serenity.EntityGrid<ObracunRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.Obracun'; }
        protected getDialogType() { return ObracunDialog; }
        protected getIdProperty() { return ObracunRow.idProperty; }
        protected getInsertPermission() { return ObracunRow.insertPermission; }
        protected getLocalTextPrefix() { return ObracunRow.localTextPrefix; }
        protected getService() { return ObracunService.baseUrl; }
      
        
        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ObracunService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }



        public _osnovnoId: number;

        get osnovnoId() {
            return this._osnovnoId;
        }

        set osnovnoId(value: number) {
            if (this._osnovnoId !== value) {
                this._osnovnoId = value;
                this.setEquality('OsnovnoId', value);
                this.refresh();
            }
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(1, 0, {
                field: 'View Details',
                name: '',

                format: ctx => {
                    var curItem = <ObracunRow>ctx.item;

                    var divId: string = "";
                    if (curItem.Active != true)
                        divId = '<a class="inline-action   view-details" title = "Obračun detalji" > </a>'
                    return divId;


                },


                //  format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            //columns.splice(2, 0, {
            //    field: 'New Osnovno Sredstvo',
            //    name: '',
            //    format: ctx => '<a class="inline-action   glyphicon glyphicon-modal-window" title="New Osnovno Sredstvo"></a>',
            //    width: 24,
            //    minWidth: 24,
            //    maxWidth: 24,

            //});



            columns.splice(2, 0, {
                field: 'Obračun amortizacije',
                name: '',
                format: ctx => {
                    var curItem = <ObracunRow>ctx.item;

                    var divId: string = "";
                    if (curItem.OsnovnoAmortiziranaVrijednost != 0 || curItem.Active == true)
                        divId = '<a class="inline-action   glyphicon glyphicon-cog" title = "Obračun amortizacije" > </a>'
                    return divId;


                },
                width: 24,
                minWidth: 24,
                maxWidth: 24,



            });

            columns.splice(2, 0, {
                field: 'Kreiraj obračun',
                name: '',
                format: ctx => {
                    var curItem = <ObracunStavkeRow>ctx.item;

                    var divId: string = "";
                    if (curItem.IznosAmortizacije != 0 || curItem.Active == true)
                        divId = '<a class="inline-action     glyphicon glyphicon-duplicate" title = "Kreiraj obračun" > </a>'
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
          //  var osnovno = Osno.
            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {





                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        OsnovnaSredstva.ObracunService.Delete({
                            EntityId: item.ObracunId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
                else if (target.hasClass('view-details')) {
                    this.editItem(item.ObracunId);


                }
                else if (target.hasClass('glyphicon glyphicon-modal-window')) {
                    var dlg = new ObracunDialog;
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog(<AktivacijaSredstvaRow>{
                        OsnovnoId: item.OsnovnoId
                    });
                }
                else if (target.hasClass('glyphicon glyphicon-play')) {
                    var dlg = new ObracunDialog;
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog(<AktivacijaSredstvaRow>{
                        OsnovnoId: item.OsnovnoId
                    });
                }
                else if (target.hasClass('glyphicon glyphicon-cog')) {
                    var dlga = new ObracunDialog;
                    this.initDialog(dlga);
                    dlga.loadEntityAndOpenDialog(<ObracunRow>{
                        OsnovnoId: item.OsnovnoId,
                        PartnerId: item.PartnerId,
                        SektorId: item.SektorId,
                        AmGrupaId: item.AmGrupaId,
                        RazdobljeOd: item.DatumObracuna

                    });
                }
                else if (target.hasClass('glyphicon glyphicon-duplicate')) {
            

                    var servicecall = ObracunService.PokreniObracun(
                        {
                            ObracunID: item.ObracunId
                        },
                        response => {
                            Q.notifySuccess("Operation complete.");
                        });
 
                     
                    
                     
                   
                    
                    
                     
                    //var id = Q.first(OsnovnoSredstvoRow.getLookup2().items, x => x.OsnovnoId == item.OsnovnoId);

                

                
                    //var dlgo = new ObracunStavkeDialog;
                    //this.initDialog(dlgo);
                    //dlgo.loadEntityAndOpenDialog(<ObracunStavkeRow>{
                    //    ObracunId: item.ObracunId,
                    //    PartnerId: item.PartnerId,
                    //    OsnovnoId: item.OsnovnoId,
                    //    SektorId: item.SektorId,
                    //    AmGrupaId: item.AmGrupaId,
                    //    Iznos_Osnovice: id.NabavnaVrijednost / 12,
                    //    //IznosOsnovice: 70,

                       
                    //    DatumOdObracuna: item.OsnovnoDatumAmortizacije, 
                    //    Napomena: item.Napomena,
                    //    DateTimeCreated: item.DatumObracuna

                         

                        } 


                }


            }

        }

        //protected createQuickFilters() {
        //    super.createQuickFilters();

        //    this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.Active);
        //}

        
    }
  