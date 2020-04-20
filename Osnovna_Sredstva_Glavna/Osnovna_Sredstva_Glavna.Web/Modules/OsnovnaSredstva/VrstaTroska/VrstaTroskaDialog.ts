
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class VrstaTroskaDialog extends Serenity.EntityDialog<VrstaTroskaRow, any> {
        protected getFormKey() { return VrstaTroskaForm.formKey; }
        protected getIdProperty() { return VrstaTroskaRow.idProperty; }
        protected getLocalTextPrefix() { return VrstaTroskaRow.localTextPrefix; }
        protected getNameProperty() { return VrstaTroskaRow.nameProperty; }
        protected getService() { return VrstaTroskaService.baseUrl; }
        protected getDeletePermission() { return VrstaTroskaRow.deletePermission; }
        protected getInsertPermission() { return VrstaTroskaRow.insertPermission; }
        protected getUpdatePermission() { return VrstaTroskaRow.updatePermission; }

        protected form = new VrstaTroskaForm(this.idPrefix);

    }
}