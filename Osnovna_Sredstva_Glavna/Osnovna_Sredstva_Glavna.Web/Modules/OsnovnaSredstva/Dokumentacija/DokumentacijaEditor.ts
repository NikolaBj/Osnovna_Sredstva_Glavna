/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class DokumentacijaEditor extends Common.GridEditorBase<DokumentacijaRow> {
        protected getColumnsKey() { return "OsnovnaSredstva.Dokumentacija"; }
        protected getDialogType() { return DokumentacijaDialog; }
        protected getLocalTextPrefix() { return DokumentacijaRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        //validateEntity(row, id) {
        //    row.ProductID = Q.toId(row.ProductID);

        //    var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
        //    if (sameProduct && this.id(sameProduct) !== id) {
        //        Q.alert('This product is already in order details!');
        //        return false;
        //    }

        //    row.ProductName = ProductRow.getLookup().itemById[row.ProductID].ProductName;
        //    row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
        //    return true;
        //}
    }
}