namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace AmortizacijskeGrupeService {
        export const baseUrl = 'OsnovnaSredstva/AmortizacijskeGrupe';

        export declare function Create(request: Serenity.SaveRequest<AmortizacijskeGrupeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AmortizacijskeGrupeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmortizacijskeGrupeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmortizacijskeGrupeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/AmortizacijskeGrupe/Create",
            Update = "OsnovnaSredstva/AmortizacijskeGrupe/Update",
            Delete = "OsnovnaSredstva/AmortizacijskeGrupe/Delete",
            Retrieve = "OsnovnaSredstva/AmortizacijskeGrupe/Retrieve",
            List = "OsnovnaSredstva/AmortizacijskeGrupe/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AmortizacijskeGrupeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

