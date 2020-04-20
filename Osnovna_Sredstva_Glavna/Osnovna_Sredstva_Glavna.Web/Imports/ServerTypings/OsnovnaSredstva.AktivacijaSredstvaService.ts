namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace AktivacijaSredstvaService {
        export const baseUrl = 'OsnovnaSredstva/AktivacijaSredstva';

        export declare function Create(request: Serenity.SaveRequest<AktivacijaSredstvaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AktivacijaSredstvaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AktivacijaSredstvaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AktivacijaSredstvaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/AktivacijaSredstva/Create",
            Update = "OsnovnaSredstva/AktivacijaSredstva/Update",
            Delete = "OsnovnaSredstva/AktivacijaSredstva/Delete",
            Retrieve = "OsnovnaSredstva/AktivacijaSredstva/Retrieve",
            List = "OsnovnaSredstva/AktivacijaSredstva/List",
            GetNextNumber = "OsnovnaSredstva/AktivacijaSredstva/GetNextNumber"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber'
        ].forEach(x => {
            (<any>AktivacijaSredstvaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

