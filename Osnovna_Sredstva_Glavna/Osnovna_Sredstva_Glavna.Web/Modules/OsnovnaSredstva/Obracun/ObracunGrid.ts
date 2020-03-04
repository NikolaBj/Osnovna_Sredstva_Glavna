
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

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
    }
}