
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace UlazniRacunService {
        export const baseUrl = 'OsnovnaSredstva/UlazniRacun';

        export declare function Create(request: Serenity.SaveRequest<UlazniRacunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UlazniRacunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UlazniRacunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UlazniRacunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
        }
        export declare const enum Methode {

            GetNextNumber = "Osnovnosredstva/UlazniRacun/GetNextNumber",

        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'GetNextNumber',
            'List'
        ].forEach(x => {
            (<any>UlazniRacunService)[x] = function (r, s, o) { 
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o); 
            };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}