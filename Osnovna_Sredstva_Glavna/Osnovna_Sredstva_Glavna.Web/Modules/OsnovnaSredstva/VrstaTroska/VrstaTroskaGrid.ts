
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class VrstaTroskaGrid extends Serenity.EntityGrid<VrstaTroskaRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.VrstaTroska'; }
        protected getDialogType() { return VrstaTroskaDialog; }
        protected getIdProperty() { return VrstaTroskaRow.idProperty; }
        protected getInsertPermission() { return VrstaTroskaRow.insertPermission; }
        protected getLocalTextPrefix() { return VrstaTroskaRow.localTextPrefix; }
        protected getService() { return VrstaTroskaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}