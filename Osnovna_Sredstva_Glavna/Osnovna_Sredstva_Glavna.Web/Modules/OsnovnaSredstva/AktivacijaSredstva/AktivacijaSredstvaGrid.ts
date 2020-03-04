
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

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
    }
}