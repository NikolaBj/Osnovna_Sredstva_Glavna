
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class ServisDialog extends Serenity.EntityDialog<ServisRow, any> {
        protected getFormKey() { return ServisForm.formKey; }
        protected getIdProperty() { return ServisRow.idProperty; }
        protected getLocalTextPrefix() { return ServisRow.localTextPrefix; }
        protected getNameProperty() { return ServisRow.nameProperty; }
        protected getService() { return ServisService.baseUrl; }
        protected getDeletePermission() { return ServisRow.deletePermission; }
        protected getInsertPermission() { return ServisRow.insertPermission; }
        protected getUpdatePermission() { return ServisRow.updatePermission; }

        protected form = new ServisForm(this.idPrefix);

        //private customerPropertyGrid: Serenity.PropertyGrid;
        //private customerForm: Osnovna_Sredstva_Glavna.OsnovnaSredstva.DokumentacijaForm;
        //private customerValidator: JQueryValidation.Validator;
        //private selfChange = 0;


    
    }

    }

  
 