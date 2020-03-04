
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class PartneriGrid extends Serenity.EntityGrid<PartneriRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.Partneri'; }
        protected getDialogType() { return PartneriDialog; }
        protected getIdProperty() { return PartneriRow.idProperty; }
        protected getInsertPermission() { return PartneriRow.insertPermission; }
        protected getLocalTextPrefix() { return PartneriRow.localTextPrefix; }
        protected getService() { return PartneriService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}