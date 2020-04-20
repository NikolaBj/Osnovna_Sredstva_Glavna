/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />


namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class DokumentacijaDialog extends Common.GridEditorDialog<DokumentacijaRow> {
        protected getFormKey() { return DokumentacijaForm.formKey; }
        protected getIdProperty() { return DokumentacijaRow.idProperty; }
        protected getLocalTextPrefix() { return DokumentacijaRow.localTextPrefix; }
        protected getNameProperty() { return DokumentacijaRow.nameProperty; }
        protected getService() { return DokumentacijaService.baseUrl; }
        protected getDeletePermission() { return DokumentacijaRow.deletePermission; }
        protected getInsertPermission() { return DokumentacijaRow.insertPermission; }
        protected getUpdatePermission() { return DokumentacijaRow.updatePermission; }

        protected form = new DokumentacijaForm(this.idPrefix);

    }
}