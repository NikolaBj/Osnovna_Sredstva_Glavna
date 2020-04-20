
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {


    import fld = OsnovnaSredstva.AktivacijaSredstvaRow.Fields;
    @Serenity.Decorators.registerClass()
    export class AktivacijaSredstvaGrid extends Serenity.EntityGrid<AktivacijaSredstvaRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.AktivacijaSredstva'; }
        protected getDialogType() { return AktivacijaSredstvaDialog; }
        protected getIdProperty() { return AktivacijaSredstvaRow.idProperty; }
        protected getInsertPermission() { return AktivacijaSredstvaRow.insertPermission; }
        protected getLocalTextPrefix() { return AktivacijaSredstvaRow.localTextPrefix; }
        protected getService() { return AktivacijaSredstvaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Aktiviraj sredstvo',
                name: '',
                format: ctx => {
                    var curItem = <AktivacijaSredstvaRow>ctx.item;
                    var divId: string = "";
                    if (curItem.DatumAktivacije != null)
                        divId =
                            '<a class="inline-action   glyphicon glyphicon-play" title = "Aktivacija Sredstva" > </a>'
                    return divId;





                },


                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }


        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);
           // var Osnovno = OsnovnaSredstva.OsnovnoSredstvoRow.Fields

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {

                //var id = Q.first(OsnovnaSredstva.OsnovnoSredstvoRow.getLookup().items, x => x.OsnovnoId == item.OsnovnoId);

                //OsnovnaSredstva.OsnovnoSredstvoService.Retrieve({
                //    EntityId: id
                //}, response => {
                //    this.setCustomerDetails(response.Entity);
                //});




                e.preventDefault();

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
            }
        }
    }
}