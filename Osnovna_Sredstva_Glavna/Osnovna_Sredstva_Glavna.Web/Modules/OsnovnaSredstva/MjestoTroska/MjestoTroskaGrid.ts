
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class MjestoTroskaGrid extends Serenity.EntityGrid<MjestoTroskaRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.MjestoTroska'; }
        protected getDialogType() { return MjestoTroskaDialog; }
        protected getIdProperty() { return MjestoTroskaRow.idProperty; }
        protected getInsertPermission() { return MjestoTroskaRow.insertPermission; }
        protected getLocalTextPrefix() { return MjestoTroskaRow.localTextPrefix; }
        protected getService() { return MjestoTroskaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}