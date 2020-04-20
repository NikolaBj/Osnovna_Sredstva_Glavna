namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace VrstaTroskaService {
        export const baseUrl = 'OsnovnaSredstva/VrstaTroska';

        export declare function Create(request: Serenity.SaveRequest<VrstaTroskaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VrstaTroskaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VrstaTroskaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VrstaTroskaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/VrstaTroska/Create",
            Update = "OsnovnaSredstva/VrstaTroska/Update",
            Delete = "OsnovnaSredstva/VrstaTroska/Delete",
            Retrieve = "OsnovnaSredstva/VrstaTroska/Retrieve",
            List = "OsnovnaSredstva/VrstaTroska/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VrstaTroskaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

