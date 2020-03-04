
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class ObracunStavkeGrid extends Serenity.EntityGrid<ObracunStavkeRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.ObracunStavke'; }
        protected getDialogType() { return ObracunStavkeDialog; }
        protected getIdProperty() { return ObracunStavkeRow.idProperty; }
        protected getInsertPermission() { return ObracunStavkeRow.insertPermission; }
        protected getLocalTextPrefix() { return ObracunStavkeRow.localTextPrefix; }
        protected getService() { return ObracunStavkeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}