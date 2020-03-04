
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class UlazniRacunGrid extends Serenity.EntityGrid<UlazniRacunRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.UlazniRacun'; }
        protected getDialogType() { return UlazniRacunDialog; }
        protected getIdProperty() { return UlazniRacunRow.idProperty; }
        protected getInsertPermission() { return UlazniRacunRow.insertPermission; }
        protected getLocalTextPrefix() { return UlazniRacunRow.localTextPrefix; }
        protected getService() { return UlazniRacunService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Invoice',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="Ulazni racun">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
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

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {
                    Osnovna_Sredstva_Glavna.Common.ReportHelper.execute({
                        reportKey: 'OsnovnaSredstva.UlazniRacun',
                        params: {
                            UraId: item.UraId
                        }
                    });
                }
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
                format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(2, 0, {
                field: 'New Osnovno Sredstvo',
                name: '',
                format: ctx => '<a class="inline-action   glyphicon glyphicon-modal-window" title="New Osnovno Sredstvo"></a>',
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
                            this.refresh();
                        });
                    });
                }
                else if (target.hasClass('view-details')) {
                    this.editItem(item.OsnovnoId);
                }
                else if (target.hasClass('glyphicon glyphicon-modal-window')) {
                    var dlg = new OsnovnaSredstva.OsnovnoSredstvoDialog;
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog(<OsnovnaSredstva.OsnovnoSredstvoRow>{
                        PartnerId: item.PartnerId
                    });
                }
            }
        }
    }
}