
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class MjestoTroskaDialog extends Serenity.EntityDialog<MjestoTroskaRow, any> {
        protected getFormKey() { return MjestoTroskaForm.formKey; }
        protected getIdProperty() { return MjestoTroskaRow.idProperty; }
        protected getLocalTextPrefix() { return MjestoTroskaRow.localTextPrefix; }
        protected getNameProperty() { return MjestoTroskaRow.nameProperty; }
        protected getService() { return MjestoTroskaService.baseUrl; }
        protected getDeletePermission() { return MjestoTroskaRow.deletePermission; }
        protected getInsertPermission() { return MjestoTroskaRow.insertPermission; }
        protected getUpdatePermission() { return MjestoTroskaRow.updatePermission; }

        protected form = new MjestoTroskaForm(this.idPrefix);

    }
}