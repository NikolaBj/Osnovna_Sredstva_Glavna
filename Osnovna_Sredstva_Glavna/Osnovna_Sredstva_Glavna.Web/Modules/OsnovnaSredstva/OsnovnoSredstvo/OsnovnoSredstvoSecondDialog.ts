
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class OsnovnoSredstvoSecondDialog extends Serenity.EntityDialog<OsnovnoSredstvoRow, any> {
        protected getFormKey() { return OsnovnoSredstvoSecondForm.formKey; }
        protected getIdProperty() { return OsnovnoSredstvoRow.idProperty; }
        protected getLocalTextPrefix() { return OsnovnoSredstvoRow.localTextPrefix; }
        protected getNameProperty() { return OsnovnoSredstvoRow.nameProperty; }
        protected getService() { return OsnovnoSredstvoService.baseUrl; }
        protected getDeletePermission() { return OsnovnoSredstvoRow.deletePermission; }
        protected getInsertPermission() { return OsnovnoSredstvoRow.insertPermission; }
        protected getUpdatePermission() { return OsnovnoSredstvoRow.updatePermission; }


        protected form = new OsnovnoSredstvoSecondForm(this.idPrefix);




         

           




        }
    }



      
       