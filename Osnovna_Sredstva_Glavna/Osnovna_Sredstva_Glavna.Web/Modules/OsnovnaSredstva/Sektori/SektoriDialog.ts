
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class SektoriDialog extends Serenity.EntityDialog<SektoriRow, any> {
        protected getFormKey() { return SektoriForm.formKey; }
        protected getIdProperty() { return SektoriRow.idProperty; }
        protected getLocalTextPrefix() { return SektoriRow.localTextPrefix; }
        protected getNameProperty() { return SektoriRow.nameProperty; }
        protected getService() { return SektoriService.baseUrl; }
        protected getDeletePermission() { return SektoriRow.deletePermission; }
        protected getInsertPermission() { return SektoriRow.insertPermission; }
        protected getUpdatePermission() { return SektoriRow.updatePermission; }

        protected form = new SektoriForm(this.idPrefix);

    }
}