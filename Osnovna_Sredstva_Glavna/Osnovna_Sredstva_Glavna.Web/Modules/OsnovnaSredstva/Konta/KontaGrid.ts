
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class KontaGrid extends Serenity.EntityGrid<KontaRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.Konta'; }
        protected getDialogType() { return KontaDialog; }
        protected getIdProperty() { return KontaRow.idProperty; }
        protected getInsertPermission() { return KontaRow.insertPermission; }
        protected getLocalTextPrefix() { return KontaRow.localTextPrefix; }
        protected getService() { return KontaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}