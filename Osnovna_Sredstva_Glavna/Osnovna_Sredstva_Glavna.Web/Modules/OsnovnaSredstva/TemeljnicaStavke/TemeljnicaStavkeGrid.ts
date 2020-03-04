
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class TemeljnicaStavkeGrid extends Serenity.EntityGrid<TemeljnicaStavkeRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.TemeljnicaStavke'; }
        protected getDialogType() { return TemeljnicaStavkeDialog; }
        protected getIdProperty() { return TemeljnicaStavkeRow.idProperty; }
        protected getInsertPermission() { return TemeljnicaStavkeRow.insertPermission; }
        protected getLocalTextPrefix() { return TemeljnicaStavkeRow.localTextPrefix; }
        protected getService() { return TemeljnicaStavkeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}