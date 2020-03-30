namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace ObracunService {
        export const baseUrl = 'OsnovnaSredstva/Obracun';

        export declare function Create(request: Serenity.SaveRequest<ObracunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ObracunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ObracunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ObracunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function PokreniObracun(request: Modules.OsnovnaSredstva.Obracun.PokreniObracunRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/Obracun/Create",
            Update = "OsnovnaSredstva/Obracun/Update",
            Delete = "OsnovnaSredstva/Obracun/Delete",
            Retrieve = "OsnovnaSredstva/Obracun/Retrieve",
            GetNextNumber = "OsnovnaSredstva/Obracun/GetNextNumber",
            List = "OsnovnaSredstva/Obracun/List",
            PokreniObracun = "OsnovnaSredstva/Obracun/PokreniObracun"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'GetNextNumber', 
            'List', 
            'PokreniObracun'
        ].forEach(x => {
            (<any>ObracunService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

