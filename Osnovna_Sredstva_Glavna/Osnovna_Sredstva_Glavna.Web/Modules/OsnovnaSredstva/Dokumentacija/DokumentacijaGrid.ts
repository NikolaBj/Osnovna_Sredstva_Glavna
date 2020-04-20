
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class DokumentacijaGrid extends Serenity.EntityGrid<DokumentacijaRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.Dokumentacija'; }
        protected getDialogType() { return DokumentacijaDialog; }
        protected getIdProperty() { return DokumentacijaRow.idProperty; }
        protected getInsertPermission() { return DokumentacijaRow.insertPermission; }
        protected getLocalTextPrefix() { return DokumentacijaRow.localTextPrefix; }
        protected getService() { return DokumentacijaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}