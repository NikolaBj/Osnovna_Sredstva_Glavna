
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class PartneriDialog extends Serenity.EntityDialog<PartneriRow, any> {
        protected getFormKey() { return PartneriForm.formKey; }
        protected getIdProperty() { return PartneriRow.idProperty; }
        protected getLocalTextPrefix() { return PartneriRow.localTextPrefix; }
        protected getNameProperty() { return PartneriRow.nameProperty; }
        protected getService() { return PartneriService.baseUrl; }
        protected getDeletePermission() { return PartneriRow.deletePermission; }
        protected getInsertPermission() { return PartneriRow.insertPermission; }
        protected getUpdatePermission() { return PartneriRow.updatePermission; }

        protected form = new PartneriForm(this.idPrefix);

    }
}