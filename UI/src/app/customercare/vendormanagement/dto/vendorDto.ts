import { CityDto }  from  './CityDto';
import { MemberDto}  from  './memberDto';
import  {ServiceDto}  from './servicesDto';

export  interface  VendorDto {

    Username : String;
    Id :  String;
    Cities  : CityDto[];
    Status : Number;
    Services : ServiceDto[];
    Members  : MemberDto[];
    
}

