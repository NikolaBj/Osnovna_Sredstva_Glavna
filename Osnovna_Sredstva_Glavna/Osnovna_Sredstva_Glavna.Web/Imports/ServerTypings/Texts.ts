namespace Osnovna_Sredstva_Glavna.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Default {

            namespace OsnovnoSredstvo {
                export const Active: string;
                export const AmGrupaActive: string;
                export const AmGrupaAmVijekTrajanja: string;
                export const AmGrupaDateTimeCreated: string;
                export const AmGrupaDvostrukaGodisnjaAm: string;
                export const AmGrupaGodisnjaAmortizacija: string;
                export const AmGrupaId: string;
                export const AmGrupaKontoIvId: string;
                export const AmGrupaKontoTrId: string;
                export const AmGrupaNaziv: string;
                export const AmGrupaNaziv2: string;
                export const AmortiziranaVrijednost: string;
                export const DateTimeCreated: string;
                export const DatumAmortizacije: string;
                export const DatumNabave: string;
                export const DatumOtpisa: string;
                export const DatumPripreme: string;
                export const DatumServisa: string;
                export const InventarskiBroj: string;
                export const JedinicaMjere: string;
                export const KnjigovodstvenaVrijednost: string;
                export const Količina: string;
                export const Konto: string;
                export const KontoActive: string;
                export const KontoDateTimeCreated: string;
                export const KontoId: string;
                export const KontoIvActive: string;
                export const KontoIvDateTimeCreated: string;
                export const KontoIvId: string;
                export const KontoIvKonto: string;
                export const KontoIvNaziv: string;
                export const KontoNaziv: string;
                export const NabavnaVrijednost: string;
                export const Napomena: string;
                export const NazivOpreme: string;
                export const OsnovnoId: string;
                export const Otpisano: string;
                export const PartnerActive: string;
                export const PartnerAdresa: string;
                export const PartnerDateTimeCreated: string;
                export const PartnerDrzava: string;
                export const PartnerGrad: string;
                export const PartnerId: string;
                export const PartnerMjesto: string;
                export const PartnerNaziv: string;
                export const PartnerPtt: string;
                export const SektorActive: string;
                export const SektorDateTimeCreated: string;
                export const SektorId: string;
                export const SektorNaziv: string;
                export const SektorŠifra: string;
                export const SerijskiBroj: string;
                export const StopaAmSredstva: string;
                export const UmanjenjeVrijednosti: string;
                export const UraActive: string;
                export const UraBrojRacuna: string;
                export const UraDateTimeCreated: string;
                export const UraDatumDospijeca: string;
                export const UraDatumIsporuke: string;
                export const UraDatumKnjizenja: string;
                export const UraDatumRacuna: string;
                export const UraId: string;
                export const UraIznosOsnovice: string;
                export const UraIznosPoreza: string;
                export const UraMjestoTroskaId: string;
                export const UraOpis: string;
                export const UraPArtnerId: string;
                export const UraPoslovnaGodina: string;
                export const UraUkupanIznos: string;
                export const UraUraBroj: string;
                export const UvecanjeVrijednosti: string;
            }
        }

        namespace Northwind {

            namespace Category {
                export const CategoryID: string;
                export const CategoryName: string;
                export const Description: string;
                export const Picture: string;
            }

            namespace CategoryLang {
                export const CategoryId: string;
                export const CategoryName: string;
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
            }

            namespace Customer {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const CustomerID: string;
                export const Email: string;
                export const Fax: string;
                export const ID: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const NoteList: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const Representatives: string;
                export const SendBulletin: string;
            }

            namespace CustomerCustomerDemo {
                export const CustomerAddress: string;
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerRegion: string;
                export const CustomerTypeCustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDemographic {
                export const CustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDetails {
                export const Email: string;
                export const Id: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const LastContactedByAddress: string;
                export const LastContactedByBirthDate: string;
                export const LastContactedByCity: string;
                export const LastContactedByCountry: string;
                export const LastContactedByExtension: string;
                export const LastContactedByFirstName: string;
                export const LastContactedByHireDate: string;
                export const LastContactedByHomePhone: string;
                export const LastContactedByLastName: string;
                export const LastContactedByNotes: string;
                export const LastContactedByPhoto: string;
                export const LastContactedByPhotoPath: string;
                export const LastContactedByPostalCode: string;
                export const LastContactedByRegion: string;
                export const LastContactedByReportsTo: string;
                export const LastContactedByTitle: string;
                export const LastContactedByTitleOfCourtesy: string;
                export const SendBulletin: string;
            }

            namespace CustomerGrossSales {
                export const ContactName: string;
                export const CustomerId: string;
                export const GrossAmount: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace CustomerRepresentatives {
                export const CustomerId: string;
                export const EmployeeId: string;
                export const RepresentativeId: string;
            }

            namespace DragDropSample {
                export const Id: string;
                export const ParentId: string;
                export const Title: string;
            }

            namespace Employee {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeID: string;
                export const Extension: string;
                export const FirstName: string;
                export const FullName: string;
                export const Gender: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const LastName: string;
                export const Notes: string;
                export const Photo: string;
                export const PhotoPath: string;
                export const PostalCode: string;
                export const Region: string;
                export const ReportsTo: string;
                export const ReportsToAddress: string;
                export const ReportsToBirthDate: string;
                export const ReportsToCity: string;
                export const ReportsToCountry: string;
                export const ReportsToExtension: string;
                export const ReportsToFirstName: string;
                export const ReportsToFullName: string;
                export const ReportsToHireDate: string;
                export const ReportsToHomePhone: string;
                export const ReportsToLastName: string;
                export const ReportsToNotes: string;
                export const ReportsToPhoto: string;
                export const ReportsToPhotoPath: string;
                export const ReportsToPostalCode: string;
                export const ReportsToRegion: string;
                export const ReportsToReportsTo: string;
                export const ReportsToTitle: string;
                export const ReportsToTitleOfCourtesy: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
            }

            namespace EmployeeTerritory {
                export const EmployeeAddress: string;
                export const EmployeeBirthDate: string;
                export const EmployeeCity: string;
                export const EmployeeCountry: string;
                export const EmployeeExtension: string;
                export const EmployeeFirstName: string;
                export const EmployeeHireDate: string;
                export const EmployeeHomePhone: string;
                export const EmployeeID: string;
                export const EmployeeLastName: string;
                export const EmployeeNotes: string;
                export const EmployeePhoto: string;
                export const EmployeePhotoPath: string;
                export const EmployeePostalCode: string;
                export const EmployeeRegion: string;
                export const EmployeeReportsTo: string;
                export const EmployeeTitle: string;
                export const EmployeeTitleOfCourtesy: string;
                export const TerritoryID: string;
                export const TerritoryRegionID: string;
                export const TerritoryTerritoryDescription: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Order {
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerRegion: string;
                export const DetailList: string;
                export const EmployeeFullName: string;
                export const EmployeeGender: string;
                export const EmployeeID: string;
                export const EmployeeReportsToFullName: string;
                export const Freight: string;
                export const OrderDate: string;
                export const OrderID: string;
                export const RequiredDate: string;
                export const ShipAddress: string;
                export const ShipCity: string;
                export const ShipCountry: string;
                export const ShipName: string;
                export const ShipPostalCode: string;
                export const ShipRegion: string;
                export const ShipVia: string;
                export const ShipViaCompanyName: string;
                export const ShipViaPhone: string;
                export const ShippedDate: string;
                export const ShippingState: string;
            }

            namespace OrderDetail {
                export const DetailID: string;
                export const Discount: string;
                export const LineTotal: string;
                export const OrderCustomerID: string;
                export const OrderDate: string;
                export const OrderEmployeeID: string;
                export const OrderID: string;
                export const OrderShipCity: string;
                export const OrderShipCountry: string;
                export const OrderShipVia: string;
                export const OrderShippedDate: string;
                export const ProductDiscontinued: string;
                export const ProductID: string;
                export const ProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductSupplierID: string;
                export const ProductUnitPrice: string;
                export const Quantity: string;
                export const UnitPrice: string;
            }

            namespace Product {
                export const CategoryDescription: string;
                export const CategoryID: string;
                export const CategoryName: string;
                export const CategoryPicture: string;
                export const Discontinued: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierAddress: string;
                export const SupplierCity: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountry: string;
                export const SupplierFax: string;
                export const SupplierHomePage: string;
                export const SupplierID: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierRegion: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
            }

            namespace ProductLang {
                export const Id: string;
                export const LanguageId: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace ProductLog {
                export const CategoryID: string;
                export const ChangingUserId: string;
                export const Discontinued: string;
                export const OperationType: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductLogID: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierID: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const ValidFrom: string;
                export const ValidUntil: string;
            }

            namespace Region {
                export const RegionDescription: string;
                export const RegionID: string;
            }

            namespace SalesByCategory {
                export const CategoryId: string;
                export const CategoryName: string;
                export const ProductName: string;
                export const ProductSales: string;
            }

            namespace Shipper {
                export const CompanyName: string;
                export const Phone: string;
                export const ShipperID: string;
            }

            namespace Supplier {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const Fax: string;
                export const HomePage: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const SupplierID: string;
            }

            namespace Territory {
                export const ID: string;
                export const RegionDescription: string;
                export const RegionID: string;
                export const TerritoryDescription: string;
                export const TerritoryID: string;
            }
        }

        namespace OsnovnaSredstva {

            namespace AktivacijaSredstva {
                export const DatumAktivacije: string;
                export const Int: string;
                export const OsnovnoActive: string;
                export const OsnovnoAmGrupaId: string;
                export const OsnovnoAmortiziranaVrijednost: string;
                export const OsnovnoDateTimeCreated: string;
                export const OsnovnoDatumAmortizacije: string;
                export const OsnovnoDatumNabave: string;
                export const OsnovnoDatumOtpisa: string;
                export const OsnovnoDatumPripreme: string;
                export const OsnovnoId: string;
                export const OsnovnoInventarskiBroj: string;
                export const OsnovnoJedinicaMjere: string;
                export const OsnovnoKnjigovodstvenaVrijednost: string;
                export const OsnovnoKoličina: string;
                export const OsnovnoKontoId: string;
                export const OsnovnoKontoIvId: string;
                export const OsnovnoNabavnaVrijednost: string;
                export const OsnovnoNapomena: string;
                export const OsnovnoNazivOpreme: string;
                export const OsnovnoOtpisano: string;
                export const OsnovnoPartnerId: string;
                export const OsnovnoSektorId: string;
                export const OsnovnoSerijskiBroj: string;
                export const OsnovnoStopaAmSredstva: string;
                export const OsnovnoUmanjenjeVrijednosti: string;
                export const OsnovnoUraId: string;
                export const OsnovnoUvecanjeVrijednosti: string;
            }

            namespace AmortizacijskeGrupe {
                export const Active: string;
                export const AmGrupaId: string;
                export const AmVijekTrajanja: string;
                export const DateTimeCreated: string;
                export const DvostrukaGodisnjaAm: string;
                export const GodisnjaAmortizacija: string;
                export const KontoIvActive: string;
                export const KontoIvDateTimeCreated: string;
                export const KontoIvId: string;
                export const KontoIvKonto: string;
                export const KontoIvNaziv: string;
                export const KontoTrActive: string;
                export const KontoTrDateTimeCreated: string;
                export const KontoTrId: string;
                export const KontoTrKonto: string;
                export const KontoTrNaziv: string;
                export const Naziv: string;
                export const Naziv2: string;
            }

            namespace Dokumentacija {
                export const Active: string;
                export const DateTimeCreated: string;
                export const DokumentId: string;
                export const FileContent: string;
                export const Naziv: string;
                export const OsnovnoActive: string;
                export const OsnovnoAmGrupaId: string;
                export const OsnovnoAmortiziranaVrijednost: string;
                export const OsnovnoDateTimeCreated: string;
                export const OsnovnoDatumAmortizacije: string;
                export const OsnovnoDatumNabave: string;
                export const OsnovnoDatumOtpisa: string;
                export const OsnovnoDatumPripreme: string;
                export const OsnovnoDatumServisa: string;
                export const OsnovnoId: string;
                export const OsnovnoInventarskiBroj: string;
                export const OsnovnoJedinicaMjere: string;
                export const OsnovnoKnjigovodstvenaVrijednost: string;
                export const OsnovnoKoličina: string;
                export const OsnovnoKontoId: string;
                export const OsnovnoKontoIvId: string;
                export const OsnovnoNabavnaVrijednost: string;
                export const OsnovnoNapomena: string;
                export const OsnovnoNazivOpreme: string;
                export const OsnovnoOtpisano: string;
                export const OsnovnoPartnerId: string;
                export const OsnovnoSektorId: string;
                export const OsnovnoSerijskiBroj: string;
                export const OsnovnoStopaAmSredstva: string;
                export const OsnovnoUmanjenjeVrijednosti: string;
                export const OsnovnoUraId: string;
                export const OsnovnoUvecanjeVrijednosti: string;
                export const ServisActive: string;
                export const ServisDateTimeCreated: string;
                export const ServisDatumEndServisa: string;
                export const ServisDatumServisa: string;
                export const ServisId: string;
                export const ServisIznosServisa: string;
                export const ServisNapomena: string;
                export const ServisOsnovnoId: string;
                export const ServisPartnerId: string;
                export const ServisVrstaTroskaId: string;
            }

            namespace Konta {
                export const Active: string;
                export const DateTimeCreated: string;
                export const Konto: string;
                export const KontoId: string;
                export const Naziv: string;
            }

            namespace KontaUra {
                export const Active: string;
                export const DateTimeCreated: string;
                export const IznosDuguje: string;
                export const IznosPotrazuje: string;
                export const KontaUraId: string;
                export const Konto: string;
                export const KontoActive: string;
                export const KontoDateTimeCreated: string;
                export const KontoId: string;
                export const KontoNaziv: string;
                export const MjestoTroskaActive: string;
                export const MjestoTroskaDateTimeCreated: string;
                export const MjestoTroskaId: string;
                export const MjestoTroskaNaziv: string;
                export const MjestoTroskaSifra: string;
                export const Opis: string;
                export const UraActive: string;
                export const UraBrojRacuna: string;
                export const UraDateTimeCreated: string;
                export const UraDatumDospijeca: string;
                export const UraDatumIsporuke: string;
                export const UraDatumKnjizenja: string;
                export const UraDatumRacuna: string;
                export const UraId: string;
                export const UraIznosOsnovice: string;
                export const UraIznosPoreza: string;
                export const UraMjestoTroskaId: string;
                export const UraOpis: string;
                export const UraPArtnerId: string;
                export const UraPoslovnaGodina: string;
                export const UraUkupanIznos: string;
                export const UraUraBroj: string;
            }

            namespace MjestoTroska {
                export const Active: string;
                export const DateTimeCreated: string;
                export const MjestoTroskaId: string;
                export const Naziv: string;
                export const Sifra: string;
            }

            namespace Obracun {
                export const Active: string;
                export const AmGrupaActive: string;
                export const AmGrupaAmVijekTrajanja: string;
                export const AmGrupaDateTimeCreated: string;
                export const AmGrupaDvostrukaGodisnjaAm: string;
                export const AmGrupaGodisnjaAmortizacija: string;
                export const AmGrupaId: string;
                export const AmGrupaKontoIvId: string;
                export const AmGrupaKontoTrId: string;
                export const AmGrupaNaziv: string;
                export const AmGrupaNaziv2: string;
                export const DateTimeCreated: string;
                export const DatumObracuna: string;
                export const Napomena: string;
                export const ObracunId: string;
                export const OsnovnoActive: string;
                export const OsnovnoAmGrupaId: string;
                export const OsnovnoAmortiziranaVrijednost: string;
                export const OsnovnoDateTimeCreated: string;
                export const OsnovnoDatumAmortizacije: string;
                export const OsnovnoDatumNabave: string;
                export const OsnovnoDatumOtpisa: string;
                export const OsnovnoDatumPripreme: string;
                export const OsnovnoId: string;
                export const OsnovnoInventarskiBroj: string;
                export const OsnovnoJedinicaMjere: string;
                export const OsnovnoKnjigovodstvenaVrijednost: string;
                export const OsnovnoKoličina: string;
                export const OsnovnoKontoId: string;
                export const OsnovnoKontoIvId: string;
                export const OsnovnoNabavnaVrijednost: string;
                export const OsnovnoNapomena: string;
                export const OsnovnoNazivOpreme: string;
                export const OsnovnoOtpisano: string;
                export const OsnovnoPartnerId: string;
                export const OsnovnoSektorId: string;
                export const OsnovnoSerijskiBroj: string;
                export const OsnovnoStopaAmSredstva: string;
                export const OsnovnoUmanjenjeVrijednosti: string;
                export const OsnovnoUraId: string;
                export const OsnovnoUvecanjeVrijednosti: string;
                export const Otpisano: string;
                export const PartnerActive: string;
                export const PartnerAdresa: string;
                export const PartnerDateTimeCreated: string;
                export const PartnerDrzava: string;
                export const PartnerGrad: string;
                export const PartnerId: string;
                export const PartnerMjesto: string;
                export const PartnerNaziv: string;
                export const PartnerPtt: string;
                export const RazdobljeDo: string;
                export const RazdobljeOd: string;
                export const SektorActive: string;
                export const SektorDateTimeCreated: string;
                export const SektorId: string;
                export const SektorNaziv: string;
                export const SektorŠifra: string;
                export const Zavrsen: string;
            }

            namespace ObracunStavke {
                export const Active: string;
                export const AmGrupaActive: string;
                export const AmGrupaAmVijekTrajanja: string;
                export const AmGrupaDateTimeCreated: string;
                export const AmGrupaDvostrukaGodisnjaAm: string;
                export const AmGrupaGodisnjaAmortizacija: string;
                export const AmGrupaId: string;
                export const AmGrupaKontoIvId: string;
                export const AmGrupaKontoTrId: string;
                export const AmGrupaNaziv: string;
                export const AmGrupaNaziv2: string;
                export const DateTimeCreated: string;
                export const DatumOdObracuna: string;
                export const IznosAmortizacije: string;
                export const IznosOsnovice: string;
                export const Napomena: string;
                export const ObracunActive: string;
                export const ObracunAmGrupaId: string;
                export const ObracunDateTimeCreated: string;
                export const ObracunDatumObracuna: string;
                export const ObracunId: string;
                export const ObracunNapomena: string;
                export const ObracunOsnovnoId: string;
                export const ObracunOtpisano: string;
                export const ObracunPartnerId: string;
                export const ObracunRazdobljeDo: string;
                export const ObracunRazdobljeOd: string;
                export const ObracunSektorId: string;
                export const ObracunStavkeId: string;
                export const ObracunZavrsen: string;
                export const OsnovnoActive: string;
                export const OsnovnoAmGrupaId: string;
                export const OsnovnoAmortiziranaVrijednost: string;
                export const OsnovnoDateTimeCreated: string;
                export const OsnovnoDatumAmortizacije: string;
                export const OsnovnoDatumNabave: string;
                export const OsnovnoDatumOtpisa: string;
                export const OsnovnoDatumPripreme: string;
                export const OsnovnoId: string;
                export const OsnovnoInventarskiBroj: string;
                export const OsnovnoJedinicaMjere: string;
                export const OsnovnoKnjigovodstvenaVrijednost: string;
                export const OsnovnoKoličina: string;
                export const OsnovnoKontoId: string;
                export const OsnovnoKontoIvId: string;
                export const OsnovnoNabavnaVrijednost: string;
                export const OsnovnoNapomena: string;
                export const OsnovnoNazivOpreme: string;
                export const OsnovnoOtpisano: string;
                export const OsnovnoPartnerId: string;
                export const OsnovnoSektorId: string;
                export const OsnovnoSerijskiBroj: string;
                export const OsnovnoStopaAmSredstva: string;
                export const OsnovnoUmanjenjeVrijednosti: string;
                export const OsnovnoUraId: string;
                export const OsnovnoUvecanjeVrijednosti: string;
                export const PartnerActive: string;
                export const PartnerAdresa: string;
                export const PartnerDateTimeCreated: string;
                export const PartnerDrzava: string;
                export const PartnerGrad: string;
                export const PartnerId: string;
                export const PartnerMjesto: string;
                export const PartnerNaziv: string;
                export const PartnerPtt: string;
                export const SektorActive: string;
                export const SektorDateTimeCreated: string;
                export const SektorId: string;
                export const SektorNaziv: string;
                export const SektorŠifra: string;
                export const StopaAmort: string;
            }

            namespace OsnovnoSredstvo {
                export const Active: string;
                export const AmGrupaActive: string;
                export const AmGrupaAmVijekTrajanja: string;
                export const AmGrupaDateTimeCreated: string;
                export const AmGrupaDvostrukaGodisnjaAm: string;
                export const AmGrupaGodisnjaAmortizacija: string;
                export const AmGrupaId: string;
                export const AmGrupaKontoIvId: string;
                export const AmGrupaKontoTrId: string;
                export const AmGrupaNaziv: string;
                export const AmGrupaNaziv2: string;
                export const AmortiziranaVrijednost: string;
                export const DateTimeCreated: string;
                export const DatumAmortizacije: string;
                export const DatumNabave: string;
                export const DatumOtpisa: string;
                export const DatumPripreme: string;
                export const DatumServisa: string;
                export const InventarskiBroj: string;
                export const JedinicaMjere: string;
                export const KnjigovodstvenaVrijednost: string;
                export const Količina: string;
                export const Konto: string;
                export const KontoActive: string;
                export const KontoDateTimeCreated: string;
                export const KontoId: string;
                export const KontoIvActive: string;
                export const KontoIvDateTimeCreated: string;
                export const KontoIvId: string;
                export const KontoIvKonto: string;
                export const KontoIvNaziv: string;
                export const KontoNaziv: string;
                export const NabavnaVrijednost: string;
                export const Napomena: string;
                export const NazivOpreme: string;
                export const OsnovnoId: string;
                export const Otpisano: string;
                export const PartnerActive: string;
                export const PartnerAdresa: string;
                export const PartnerDateTimeCreated: string;
                export const PartnerDrzava: string;
                export const PartnerGrad: string;
                export const PartnerId: string;
                export const PartnerMjesto: string;
                export const PartnerNaziv: string;
                export const PartnerPtt: string;
                export const SektorActive: string;
                export const SektorDateTimeCreated: string;
                export const SektorId: string;
                export const SektorNaziv: string;
                export const SektorŠifra: string;
                export const SerijskiBroj: string;
                export const StopaAmSredstva: string;
                export const UmanjenjeVrijednosti: string;
                export const UraActive: string;
                export const UraBrojRacuna: string;
                export const UraDateTimeCreated: string;
                export const UraDatumDospijeca: string;
                export const UraDatumIsporuke: string;
                export const UraDatumKnjizenja: string;
                export const UraDatumRacuna: string;
                export const UraId: string;
                export const UraIznosOsnovice: string;
                export const UraIznosPoreza: string;
                export const UraMjestoTroskaId: string;
                export const UraOpis: string;
                export const UraPArtnerId: string;
                export const UraPoslovnaGodina: string;
                export const UraUkupanIznos: string;
                export const UraUraBroj: string;
                export const UvecanjeVrijednosti: string;
            }

            namespace Partneri {
                export const Active: string;
                export const Adresa: string;
                export const DateTimeCreated: string;
                export const Drzava: string;
                export const Grad: string;
                export const Mjesto: string;
                export const Naziv: string;
                export const PartnerId: string;
                export const Ptt: string;
            }

            namespace Sektori {
                export const Active: string;
                export const DateTimeCreated: string;
                export const Naziv: string;
                export const SektorId: string;
                export const Šifra: string;
            }

            namespace Servis {
                export const Active: string;
                export const DateTimeCreated: string;
                export const DatumEndServisa: string;
                export const DatumServisa: string;
                export const DetailList: string;
                export const IznosServisa: string;
                export const Napomena: string;
                export const OsnovnoActive: string;
                export const OsnovnoAmGrupaId: string;
                export const OsnovnoAmortiziranaVrijednost: string;
                export const OsnovnoDateTimeCreated: string;
                export const OsnovnoDatumAmortizacije: string;
                export const OsnovnoDatumNabave: string;
                export const OsnovnoDatumOtpisa: string;
                export const OsnovnoDatumPripreme: string;
                export const OsnovnoDatumServisa: string;
                export const OsnovnoId: string;
                export const OsnovnoInventarskiBroj: string;
                export const OsnovnoJedinicaMjere: string;
                export const OsnovnoKnjigovodstvenaVrijednost: string;
                export const OsnovnoKoličina: string;
                export const OsnovnoKontoId: string;
                export const OsnovnoKontoIvId: string;
                export const OsnovnoNabavnaVrijednost: string;
                export const OsnovnoNapomena: string;
                export const OsnovnoNazivOpreme: string;
                export const OsnovnoOtpisano: string;
                export const OsnovnoPartnerId: string;
                export const OsnovnoSektorId: string;
                export const OsnovnoSerijskiBroj: string;
                export const OsnovnoStopaAmSredstva: string;
                export const OsnovnoUmanjenjeVrijednosti: string;
                export const OsnovnoUraId: string;
                export const OsnovnoUvecanjeVrijednosti: string;
                export const PartnerActive: string;
                export const PartnerAdresa: string;
                export const PartnerDateTimeCreated: string;
                export const PartnerDrzava: string;
                export const PartnerGrad: string;
                export const PartnerId: string;
                export const PartnerMjesto: string;
                export const PartnerNaziv: string;
                export const PartnerPtt: string;
                export const ServisId: string;
                export const VrstaTroskaActive: string;
                export const VrstaTroskaDateTimeCreated: string;
                export const VrstaTroskaId: string;
                export const VrstaTroskaNaziv: string;
            }

            namespace TemeljnicaStavke {
                export const DateTimeCreated: string;
                export const Duguje: string;
                export const Kontoid: string;
                export const ObracunActive: string;
                export const ObracunAmGrupaId: string;
                export const ObracunDateTimeCreated: string;
                export const ObracunDatumObracuna: string;
                export const ObracunId: string;
                export const ObracunNapomena: string;
                export const ObracunOsnovnoId: string;
                export const ObracunOtpisano: string;
                export const ObracunPartnerId: string;
                export const ObracunRazdobljeDo: string;
                export const ObracunRazdobljeOd: string;
                export const ObracunSektorId: string;
                export const ObracunZavrsen: string;
                export const Potrazuje: string;
                export const TemeljnicaId: string;
            }

            namespace UlazniRacun {
                export const Active: string;
                export const BrojRacuna: string;
                export const DateTimeCreated: string;
                export const DatumDospijeca: string;
                export const DatumIsporuke: string;
                export const DatumKnjizenja: string;
                export const DatumRacuna: string;
                export const IznosOsnovice: string;
                export const IznosPoreza: string;
                export const MjestoTroskaActive: string;
                export const MjestoTroskaDateTimeCreated: string;
                export const MjestoTroskaId: string;
                export const MjestoTroskaNaziv: string;
                export const MjestoTroskaSifra: string;
                export const Opis: string;
                export const PArtnerActive: string;
                export const PArtnerAdresa: string;
                export const PArtnerDateTimeCreated: string;
                export const PArtnerDrzava: string;
                export const PArtnerGrad: string;
                export const PArtnerId: string;
                export const PArtnerMjesto: string;
                export const PArtnerNaziv: string;
                export const PArtnerPtt: string;
                export const PoslovnaGodina: string;
                export const UkupanIznos: string;
                export const UraBroj: string;
                export const UraId: string;
            }

            namespace VrstaTroska {
                export const Active: string;
                export const DateTimeCreated: string;
                export const Naziv: string;
                export const VrstaTroskaId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const NorthwindPhone: string;
        export const NorthwindPhoneMultiple: string;
        export const SavePrimaryKeyError: string;
    }

    Osnovna_Sredstva_Glavna['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Default:{OsnovnoSredstvo:{Active:1,AmGrupaActive:1,AmGrupaAmVijekTrajanja:1,AmGrupaDateTimeCreated:1,AmGrupaDvostrukaGodisnjaAm:1,AmGrupaGodisnjaAmortizacija:1,AmGrupaId:1,AmGrupaKontoIvId:1,AmGrupaKontoTrId:1,AmGrupaNaziv:1,AmGrupaNaziv2:1,AmortiziranaVrijednost:1,DateTimeCreated:1,DatumAmortizacije:1,DatumNabave:1,DatumOtpisa:1,DatumPripreme:1,DatumServisa:1,InventarskiBroj:1,JedinicaMjere:1,KnjigovodstvenaVrijednost:1,Količina:1,Konto:1,KontoActive:1,KontoDateTimeCreated:1,KontoId:1,KontoIvActive:1,KontoIvDateTimeCreated:1,KontoIvId:1,KontoIvKonto:1,KontoIvNaziv:1,KontoNaziv:1,NabavnaVrijednost:1,Napomena:1,NazivOpreme:1,OsnovnoId:1,Otpisano:1,PartnerActive:1,PartnerAdresa:1,PartnerDateTimeCreated:1,PartnerDrzava:1,PartnerGrad:1,PartnerId:1,PartnerMjesto:1,PartnerNaziv:1,PartnerPtt:1,SektorActive:1,SektorDateTimeCreated:1,SektorId:1,SektorNaziv:1,SektorŠifra:1,SerijskiBroj:1,StopaAmSredstva:1,UmanjenjeVrijednosti:1,UraActive:1,UraBrojRacuna:1,UraDateTimeCreated:1,UraDatumDospijeca:1,UraDatumIsporuke:1,UraDatumKnjizenja:1,UraDatumRacuna:1,UraId:1,UraIznosOsnovice:1,UraIznosPoreza:1,UraMjestoTroskaId:1,UraOpis:1,UraPArtnerId:1,UraPoslovnaGodina:1,UraUkupanIznos:1,UraUraBroj:1,UvecanjeVrijednosti:1}},Northwind:{Category:{CategoryID:1,CategoryName:1,Description:1,Picture:1},CategoryLang:{CategoryId:1,CategoryName:1,Description:1,Id:1,LanguageId:1},Customer:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,CustomerID:1,Email:1,Fax:1,ID:1,LastContactDate:1,LastContactedBy:1,NoteList:1,Phone:1,PostalCode:1,Region:1,Representatives:1,SendBulletin:1},CustomerCustomerDemo:{CustomerAddress:1,CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerPostalCode:1,CustomerRegion:1,CustomerTypeCustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDemographic:{CustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDetails:{Email:1,Id:1,LastContactDate:1,LastContactedBy:1,LastContactedByAddress:1,LastContactedByBirthDate:1,LastContactedByCity:1,LastContactedByCountry:1,LastContactedByExtension:1,LastContactedByFirstName:1,LastContactedByHireDate:1,LastContactedByHomePhone:1,LastContactedByLastName:1,LastContactedByNotes:1,LastContactedByPhoto:1,LastContactedByPhotoPath:1,LastContactedByPostalCode:1,LastContactedByRegion:1,LastContactedByReportsTo:1,LastContactedByTitle:1,LastContactedByTitleOfCourtesy:1,SendBulletin:1},CustomerGrossSales:{ContactName:1,CustomerId:1,GrossAmount:1,ProductId:1,ProductName:1},CustomerRepresentatives:{CustomerId:1,EmployeeId:1,RepresentativeId:1},DragDropSample:{Id:1,ParentId:1,Title:1},Employee:{Address:1,BirthDate:1,City:1,Country:1,EmployeeID:1,Extension:1,FirstName:1,FullName:1,Gender:1,HireDate:1,HomePhone:1,LastName:1,Notes:1,Photo:1,PhotoPath:1,PostalCode:1,Region:1,ReportsTo:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToFullName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToReportsTo:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,Title:1,TitleOfCourtesy:1},EmployeeTerritory:{EmployeeAddress:1,EmployeeBirthDate:1,EmployeeCity:1,EmployeeCountry:1,EmployeeExtension:1,EmployeeFirstName:1,EmployeeHireDate:1,EmployeeHomePhone:1,EmployeeID:1,EmployeeLastName:1,EmployeeNotes:1,EmployeePhoto:1,EmployeePhotoPath:1,EmployeePostalCode:1,EmployeeRegion:1,EmployeeReportsTo:1,EmployeeTitle:1,EmployeeTitleOfCourtesy:1,TerritoryID:1,TerritoryRegionID:1,TerritoryTerritoryDescription:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Order:{CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerRegion:1,DetailList:1,EmployeeFullName:1,EmployeeGender:1,EmployeeID:1,EmployeeReportsToFullName:1,Freight:1,OrderDate:1,OrderID:1,RequiredDate:1,ShipAddress:1,ShipCity:1,ShipCountry:1,ShipName:1,ShipPostalCode:1,ShipRegion:1,ShipVia:1,ShipViaCompanyName:1,ShipViaPhone:1,ShippedDate:1,ShippingState:1},OrderDetail:{DetailID:1,Discount:1,LineTotal:1,OrderCustomerID:1,OrderDate:1,OrderEmployeeID:1,OrderID:1,OrderShipCity:1,OrderShipCountry:1,OrderShipVia:1,OrderShippedDate:1,ProductDiscontinued:1,ProductID:1,ProductName:1,ProductQuantityPerUnit:1,ProductSupplierID:1,ProductUnitPrice:1,Quantity:1,UnitPrice:1},Product:{CategoryDescription:1,CategoryID:1,CategoryName:1,CategoryPicture:1,Discontinued:1,ProductID:1,ProductImage:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierAddress:1,SupplierCity:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountry:1,SupplierFax:1,SupplierHomePage:1,SupplierID:1,SupplierPhone:1,SupplierPostalCode:1,SupplierRegion:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1},ProductLang:{Id:1,LanguageId:1,ProductId:1,ProductName:1},ProductLog:{CategoryID:1,ChangingUserId:1,Discontinued:1,OperationType:1,ProductID:1,ProductImage:1,ProductLogID:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierID:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,ValidFrom:1,ValidUntil:1},Region:{RegionDescription:1,RegionID:1},SalesByCategory:{CategoryId:1,CategoryName:1,ProductName:1,ProductSales:1},Shipper:{CompanyName:1,Phone:1,ShipperID:1},Supplier:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,Fax:1,HomePage:1,Phone:1,PostalCode:1,Region:1,SupplierID:1},Territory:{ID:1,RegionDescription:1,RegionID:1,TerritoryDescription:1,TerritoryID:1}},OsnovnaSredstva:{AktivacijaSredstva:{DatumAktivacije:1,Int:1,OsnovnoActive:1,OsnovnoAmGrupaId:1,OsnovnoAmortiziranaVrijednost:1,OsnovnoDateTimeCreated:1,OsnovnoDatumAmortizacije:1,OsnovnoDatumNabave:1,OsnovnoDatumOtpisa:1,OsnovnoDatumPripreme:1,OsnovnoId:1,OsnovnoInventarskiBroj:1,OsnovnoJedinicaMjere:1,OsnovnoKnjigovodstvenaVrijednost:1,OsnovnoKoličina:1,OsnovnoKontoId:1,OsnovnoKontoIvId:1,OsnovnoNabavnaVrijednost:1,OsnovnoNapomena:1,OsnovnoNazivOpreme:1,OsnovnoOtpisano:1,OsnovnoPartnerId:1,OsnovnoSektorId:1,OsnovnoSerijskiBroj:1,OsnovnoStopaAmSredstva:1,OsnovnoUmanjenjeVrijednosti:1,OsnovnoUraId:1,OsnovnoUvecanjeVrijednosti:1},AmortizacijskeGrupe:{Active:1,AmGrupaId:1,AmVijekTrajanja:1,DateTimeCreated:1,DvostrukaGodisnjaAm:1,GodisnjaAmortizacija:1,KontoIvActive:1,KontoIvDateTimeCreated:1,KontoIvId:1,KontoIvKonto:1,KontoIvNaziv:1,KontoTrActive:1,KontoTrDateTimeCreated:1,KontoTrId:1,KontoTrKonto:1,KontoTrNaziv:1,Naziv:1,Naziv2:1},Dokumentacija:{Active:1,DateTimeCreated:1,DokumentId:1,FileContent:1,Naziv:1,OsnovnoActive:1,OsnovnoAmGrupaId:1,OsnovnoAmortiziranaVrijednost:1,OsnovnoDateTimeCreated:1,OsnovnoDatumAmortizacije:1,OsnovnoDatumNabave:1,OsnovnoDatumOtpisa:1,OsnovnoDatumPripreme:1,OsnovnoDatumServisa:1,OsnovnoId:1,OsnovnoInventarskiBroj:1,OsnovnoJedinicaMjere:1,OsnovnoKnjigovodstvenaVrijednost:1,OsnovnoKoličina:1,OsnovnoKontoId:1,OsnovnoKontoIvId:1,OsnovnoNabavnaVrijednost:1,OsnovnoNapomena:1,OsnovnoNazivOpreme:1,OsnovnoOtpisano:1,OsnovnoPartnerId:1,OsnovnoSektorId:1,OsnovnoSerijskiBroj:1,OsnovnoStopaAmSredstva:1,OsnovnoUmanjenjeVrijednosti:1,OsnovnoUraId:1,OsnovnoUvecanjeVrijednosti:1,ServisActive:1,ServisDateTimeCreated:1,ServisDatumEndServisa:1,ServisDatumServisa:1,ServisId:1,ServisIznosServisa:1,ServisNapomena:1,ServisOsnovnoId:1,ServisPartnerId:1,ServisVrstaTroskaId:1},Konta:{Active:1,DateTimeCreated:1,Konto:1,KontoId:1,Naziv:1},KontaUra:{Active:1,DateTimeCreated:1,IznosDuguje:1,IznosPotrazuje:1,KontaUraId:1,Konto:1,KontoActive:1,KontoDateTimeCreated:1,KontoId:1,KontoNaziv:1,MjestoTroskaActive:1,MjestoTroskaDateTimeCreated:1,MjestoTroskaId:1,MjestoTroskaNaziv:1,MjestoTroskaSifra:1,Opis:1,UraActive:1,UraBrojRacuna:1,UraDateTimeCreated:1,UraDatumDospijeca:1,UraDatumIsporuke:1,UraDatumKnjizenja:1,UraDatumRacuna:1,UraId:1,UraIznosOsnovice:1,UraIznosPoreza:1,UraMjestoTroskaId:1,UraOpis:1,UraPArtnerId:1,UraPoslovnaGodina:1,UraUkupanIznos:1,UraUraBroj:1},MjestoTroska:{Active:1,DateTimeCreated:1,MjestoTroskaId:1,Naziv:1,Sifra:1},Obracun:{Active:1,AmGrupaActive:1,AmGrupaAmVijekTrajanja:1,AmGrupaDateTimeCreated:1,AmGrupaDvostrukaGodisnjaAm:1,AmGrupaGodisnjaAmortizacija:1,AmGrupaId:1,AmGrupaKontoIvId:1,AmGrupaKontoTrId:1,AmGrupaNaziv:1,AmGrupaNaziv2:1,DateTimeCreated:1,DatumObracuna:1,Napomena:1,ObracunId:1,OsnovnoActive:1,OsnovnoAmGrupaId:1,OsnovnoAmortiziranaVrijednost:1,OsnovnoDateTimeCreated:1,OsnovnoDatumAmortizacije:1,OsnovnoDatumNabave:1,OsnovnoDatumOtpisa:1,OsnovnoDatumPripreme:1,OsnovnoId:1,OsnovnoInventarskiBroj:1,OsnovnoJedinicaMjere:1,OsnovnoKnjigovodstvenaVrijednost:1,OsnovnoKoličina:1,OsnovnoKontoId:1,OsnovnoKontoIvId:1,OsnovnoNabavnaVrijednost:1,OsnovnoNapomena:1,OsnovnoNazivOpreme:1,OsnovnoOtpisano:1,OsnovnoPartnerId:1,OsnovnoSektorId:1,OsnovnoSerijskiBroj:1,OsnovnoStopaAmSredstva:1,OsnovnoUmanjenjeVrijednosti:1,OsnovnoUraId:1,OsnovnoUvecanjeVrijednosti:1,Otpisano:1,PartnerActive:1,PartnerAdresa:1,PartnerDateTimeCreated:1,PartnerDrzava:1,PartnerGrad:1,PartnerId:1,PartnerMjesto:1,PartnerNaziv:1,PartnerPtt:1,RazdobljeDo:1,RazdobljeOd:1,SektorActive:1,SektorDateTimeCreated:1,SektorId:1,SektorNaziv:1,SektorŠifra:1,Zavrsen:1},ObracunStavke:{Active:1,AmGrupaActive:1,AmGrupaAmVijekTrajanja:1,AmGrupaDateTimeCreated:1,AmGrupaDvostrukaGodisnjaAm:1,AmGrupaGodisnjaAmortizacija:1,AmGrupaId:1,AmGrupaKontoIvId:1,AmGrupaKontoTrId:1,AmGrupaNaziv:1,AmGrupaNaziv2:1,DateTimeCreated:1,DatumOdObracuna:1,IznosAmortizacije:1,IznosOsnovice:1,Napomena:1,ObracunActive:1,ObracunAmGrupaId:1,ObracunDateTimeCreated:1,ObracunDatumObracuna:1,ObracunId:1,ObracunNapomena:1,ObracunOsnovnoId:1,ObracunOtpisano:1,ObracunPartnerId:1,ObracunRazdobljeDo:1,ObracunRazdobljeOd:1,ObracunSektorId:1,ObracunStavkeId:1,ObracunZavrsen:1,OsnovnoActive:1,OsnovnoAmGrupaId:1,OsnovnoAmortiziranaVrijednost:1,OsnovnoDateTimeCreated:1,OsnovnoDatumAmortizacije:1,OsnovnoDatumNabave:1,OsnovnoDatumOtpisa:1,OsnovnoDatumPripreme:1,OsnovnoId:1,OsnovnoInventarskiBroj:1,OsnovnoJedinicaMjere:1,OsnovnoKnjigovodstvenaVrijednost:1,OsnovnoKoličina:1,OsnovnoKontoId:1,OsnovnoKontoIvId:1,OsnovnoNabavnaVrijednost:1,OsnovnoNapomena:1,OsnovnoNazivOpreme:1,OsnovnoOtpisano:1,OsnovnoPartnerId:1,OsnovnoSektorId:1,OsnovnoSerijskiBroj:1,OsnovnoStopaAmSredstva:1,OsnovnoUmanjenjeVrijednosti:1,OsnovnoUraId:1,OsnovnoUvecanjeVrijednosti:1,PartnerActive:1,PartnerAdresa:1,PartnerDateTimeCreated:1,PartnerDrzava:1,PartnerGrad:1,PartnerId:1,PartnerMjesto:1,PartnerNaziv:1,PartnerPtt:1,SektorActive:1,SektorDateTimeCreated:1,SektorId:1,SektorNaziv:1,SektorŠifra:1,StopaAmort:1},OsnovnoSredstvo:{Active:1,AmGrupaActive:1,AmGrupaAmVijekTrajanja:1,AmGrupaDateTimeCreated:1,AmGrupaDvostrukaGodisnjaAm:1,AmGrupaGodisnjaAmortizacija:1,AmGrupaId:1,AmGrupaKontoIvId:1,AmGrupaKontoTrId:1,AmGrupaNaziv:1,AmGrupaNaziv2:1,AmortiziranaVrijednost:1,DateTimeCreated:1,DatumAmortizacije:1,DatumNabave:1,DatumOtpisa:1,DatumPripreme:1,DatumServisa:1,InventarskiBroj:1,JedinicaMjere:1,KnjigovodstvenaVrijednost:1,Količina:1,Konto:1,KontoActive:1,KontoDateTimeCreated:1,KontoId:1,KontoIvActive:1,KontoIvDateTimeCreated:1,KontoIvId:1,KontoIvKonto:1,KontoIvNaziv:1,KontoNaziv:1,NabavnaVrijednost:1,Napomena:1,NazivOpreme:1,OsnovnoId:1,Otpisano:1,PartnerActive:1,PartnerAdresa:1,PartnerDateTimeCreated:1,PartnerDrzava:1,PartnerGrad:1,PartnerId:1,PartnerMjesto:1,PartnerNaziv:1,PartnerPtt:1,SektorActive:1,SektorDateTimeCreated:1,SektorId:1,SektorNaziv:1,SektorŠifra:1,SerijskiBroj:1,StopaAmSredstva:1,UmanjenjeVrijednosti:1,UraActive:1,UraBrojRacuna:1,UraDateTimeCreated:1,UraDatumDospijeca:1,UraDatumIsporuke:1,UraDatumKnjizenja:1,UraDatumRacuna:1,UraId:1,UraIznosOsnovice:1,UraIznosPoreza:1,UraMjestoTroskaId:1,UraOpis:1,UraPArtnerId:1,UraPoslovnaGodina:1,UraUkupanIznos:1,UraUraBroj:1,UvecanjeVrijednosti:1},Partneri:{Active:1,Adresa:1,DateTimeCreated:1,Drzava:1,Grad:1,Mjesto:1,Naziv:1,PartnerId:1,Ptt:1},Sektori:{Active:1,DateTimeCreated:1,Naziv:1,SektorId:1,Šifra:1},Servis:{Active:1,DateTimeCreated:1,DatumEndServisa:1,DatumServisa:1,DetailList:1,IznosServisa:1,Napomena:1,OsnovnoActive:1,OsnovnoAmGrupaId:1,OsnovnoAmortiziranaVrijednost:1,OsnovnoDateTimeCreated:1,OsnovnoDatumAmortizacije:1,OsnovnoDatumNabave:1,OsnovnoDatumOtpisa:1,OsnovnoDatumPripreme:1,OsnovnoDatumServisa:1,OsnovnoId:1,OsnovnoInventarskiBroj:1,OsnovnoJedinicaMjere:1,OsnovnoKnjigovodstvenaVrijednost:1,OsnovnoKoličina:1,OsnovnoKontoId:1,OsnovnoKontoIvId:1,OsnovnoNabavnaVrijednost:1,OsnovnoNapomena:1,OsnovnoNazivOpreme:1,OsnovnoOtpisano:1,OsnovnoPartnerId:1,OsnovnoSektorId:1,OsnovnoSerijskiBroj:1,OsnovnoStopaAmSredstva:1,OsnovnoUmanjenjeVrijednosti:1,OsnovnoUraId:1,OsnovnoUvecanjeVrijednosti:1,PartnerActive:1,PartnerAdresa:1,PartnerDateTimeCreated:1,PartnerDrzava:1,PartnerGrad:1,PartnerId:1,PartnerMjesto:1,PartnerNaziv:1,PartnerPtt:1,ServisId:1,VrstaTroskaActive:1,VrstaTroskaDateTimeCreated:1,VrstaTroskaId:1,VrstaTroskaNaziv:1},TemeljnicaStavke:{DateTimeCreated:1,Duguje:1,Kontoid:1,ObracunActive:1,ObracunAmGrupaId:1,ObracunDateTimeCreated:1,ObracunDatumObracuna:1,ObracunId:1,ObracunNapomena:1,ObracunOsnovnoId:1,ObracunOtpisano:1,ObracunPartnerId:1,ObracunRazdobljeDo:1,ObracunRazdobljeOd:1,ObracunSektorId:1,ObracunZavrsen:1,Potrazuje:1,TemeljnicaId:1},UlazniRacun:{Active:1,BrojRacuna:1,DateTimeCreated:1,DatumDospijeca:1,DatumIsporuke:1,DatumKnjizenja:1,DatumRacuna:1,IznosOsnovice:1,IznosPoreza:1,MjestoTroskaActive:1,MjestoTroskaDateTimeCreated:1,MjestoTroskaId:1,MjestoTroskaNaziv:1,MjestoTroskaSifra:1,Opis:1,PArtnerActive:1,PArtnerAdresa:1,PArtnerDateTimeCreated:1,PArtnerDrzava:1,PArtnerGrad:1,PArtnerId:1,PArtnerMjesto:1,PArtnerNaziv:1,PArtnerPtt:1,PoslovnaGodina:1,UkupanIznos:1,UraBroj:1,UraId:1},VrstaTroska:{Active:1,DateTimeCreated:1,Naziv:1,VrstaTroskaId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,NorthwindPhone:1,NorthwindPhoneMultiple:1,SavePrimaryKeyError:1}});
}

