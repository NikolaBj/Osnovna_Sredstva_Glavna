
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class AmortizacijskeGrupeGrid extends Serenity.EntityGrid<AmortizacijskeGrupeRow, any> {
        protected getColumnsKey() { return 'OsnovnaSredstva.AmortizacijskeGrupe'; }
        protected getDialogType() { return AmortizacijskeGrupeDialog; }
        protected getIdProperty() { return AmortizacijskeGrupeRow.idProperty; }
        protected getInsertPermission() { return AmortizacijskeGrupeRow.insertPermission; }
        protected getLocalTextPrefix() { return AmortizacijskeGrupeRow.localTextPrefix; }
        protected getService() { return AmortizacijskeGrupeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}