
namespace Osnovna_Sredstva_Glavna.Default {

    @Serenity.Decorators.registerClass()
    export class OsnovnoSredstvoGrid extends Serenity.EntityGrid<OsnovnoSredstvoRow, any> {
        protected getColumnsKey() { return 'Default.OsnovnoSredstvo'; }
        protected getDialogType() { return OsnovnoSredstvoDialog; }
        protected getIdProperty() { return OsnovnoSredstvoRow.idProperty; }
        protected getInsertPermission() { return OsnovnoSredstvoRow.insertPermission; }
        protected getLocalTextPrefix() { return OsnovnoSredstvoRow.localTextPrefix; }
        protected getService() { return OsnovnoSredstvoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}