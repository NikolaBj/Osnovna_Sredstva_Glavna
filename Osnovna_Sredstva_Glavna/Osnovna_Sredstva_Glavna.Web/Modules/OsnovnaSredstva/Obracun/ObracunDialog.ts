
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class ObracunDialog extends Serenity.EntityDialog<ObracunRow, any> {
        protected getFormKey() { return ObracunForm.formKey; }
        protected getIdProperty() { return ObracunRow.idProperty; }
        protected getLocalTextPrefix() { return ObracunRow.localTextPrefix; }
        protected getNameProperty() { return ObracunRow.nameProperty; }
        protected getService() { return ObracunService.baseUrl; }
        protected getDeletePermission() { return ObracunRow.deletePermission; }
        protected getInsertPermission() { return ObracunRow.insertPermission; }
        protected getUpdatePermission() { return ObracunRow.updatePermission; }

        protected form = new ObracunForm(this.idPrefix);

         

        constructor() {
            super();

            this.form.Napomena.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.Napomena.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'O').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                Osnovna_Sredstva_Glavna.OsnovnaSredstva.ObracunService.GetNextNumber({
                    Prefix: prefix,
                    Length: 5 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.Napomena.value = response.Serial;


                    // this is to mark numerical part after prefix
                    (this.form.Napomena.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}