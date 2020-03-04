
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class KontaUraGrid extends Serenity.EntityGrid<KontaUraRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.KontaUra'; }
        protected getDialogType() { return KontaUraDialog; }
        protected getIdProperty() { return KontaUraRow.idProperty; }
        protected getInsertPermission() { return KontaUraRow.insertPermission; }
        protected getLocalTextPrefix() { return KontaUraRow.localTextPrefix; }
        protected getService() { return KontaUraService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}