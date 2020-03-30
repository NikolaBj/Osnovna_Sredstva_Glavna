namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace MjestoTroskaService {
        export const baseUrl = 'OsnovnaSredstva/MjestoTroska';

        export declare function Create(request: Serenity.SaveRequest<MjestoTroskaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MjestoTroskaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MjestoTroskaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MjestoTroskaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/MjestoTroska/Create",
            Update = "OsnovnaSredstva/MjestoTroska/Update",
            Delete = "OsnovnaSredstva/MjestoTroska/Delete",
            Retrieve = "OsnovnaSredstva/MjestoTroska/Retrieve",
            List = "OsnovnaSredstva/MjestoTroska/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MjestoTroskaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

