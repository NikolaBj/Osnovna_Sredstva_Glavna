
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class SektoriGrid extends Serenity.EntityGrid<SektoriRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.Sektori'; }
        protected getDialogType() { return SektoriDialog; }
        protected getIdProperty() { return SektoriRow.idProperty; }
        protected getInsertPermission() { return SektoriRow.insertPermission; }
        protected getLocalTextPrefix() { return SektoriRow.localTextPrefix; }
        protected getService() { return SektoriService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}