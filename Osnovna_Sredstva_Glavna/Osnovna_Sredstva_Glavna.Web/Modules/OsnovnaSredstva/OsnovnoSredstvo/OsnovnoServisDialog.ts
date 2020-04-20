/// <reference path="../Servis/ServisDialog.ts" />

namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class OsnovnoServisDialog extends ServisDialog  { 

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OsnovnoId, true);
        }
    }
}