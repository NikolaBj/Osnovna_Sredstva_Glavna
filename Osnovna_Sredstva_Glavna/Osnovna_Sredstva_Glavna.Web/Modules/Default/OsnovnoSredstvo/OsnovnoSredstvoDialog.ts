
namespace Osnovna_Sredstva_Glavna.Default {

    @Serenity.Decorators.registerClass()
    export class OsnovnoSredstvoDialog extends Serenity.EntityDialog<OsnovnoSredstvoRow, any> {
        protected getFormKey() { return OsnovnoSredstvoForm.formKey; }
        protected getIdProperty() { return OsnovnoSredstvoRow.idProperty; }
        protected getLocalTextPrefix() { return OsnovnoSredstvoRow.localTextPrefix; }
        protected getNameProperty() { return OsnovnoSredstvoRow.nameProperty; }
        protected getService() { return OsnovnoSredstvoService.baseUrl; }
        protected getDeletePermission() { return OsnovnoSredstvoRow.deletePermission; }
        protected getInsertPermission() { return OsnovnoSredstvoRow.insertPermission; }
        protected getUpdatePermission() { return OsnovnoSredstvoRow.updatePermission; }

        protected form = new OsnovnoSredstvoForm(this.idPrefix);

    }
}