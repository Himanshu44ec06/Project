

export class  AbstractHttp {

    private  readonly  baseUrl : string;
    
    protected  constructor(baseUrl : string){
        this.baseUrl = baseUrl;
    }

    protected   appendToBaseUrl(serviceUrl : string){
        return this.baseUrl + serviceUrl;
    }

    protected  Get<T>(){
        
    }


}