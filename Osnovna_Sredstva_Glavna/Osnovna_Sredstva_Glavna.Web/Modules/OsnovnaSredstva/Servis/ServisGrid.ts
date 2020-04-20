
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class ServisGrid extends Serenity.EntityGrid<ServisRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.Servis'; }
        protected getDialogType() { return ServisDialog; }
        protected getIdProperty() { return ServisRow.idProperty; }
        protected getInsertPermission() { return ServisRow.insertPermission; }
        protected getLocalTextPrefix() { return ServisRow.localTextPrefix; }
        protected getService() { return ServisService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}