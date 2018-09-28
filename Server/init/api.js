const  express  = require('express'),
cors = require('cors'),
path  = require('path'),
bodyparser  =  require('body-parser');


var app  =  ((function(){

    function App(){}

    App.prototype.start =  function(){
        const appObject  = express();
        appObject.use(bodyparser.json());

        appObject.options('*', cors());
        appObject.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        
        return appObject;
    }

    App.prototype.setUI = function(app,dirname,path){
        
        //var  dir  = __dirname;
        // Setting Angular Project  
        app.use(express.static(dirname +  path));
        app.get('/',(req,res)=> res.sendFile(path.join(dirname)));
    }

    App.prototype.listen =  function(appObject,port){

        appObject.listen(port,function(){
            console.log("Listening to  port " + port);
        });
        return appObject;

    };
    App.prototype.registerRoutes = function(appObject){
        appObject.use("/api",(req,res,next)=>{
                res.send("I am  API");
        });
    }

    App.prototype.static

    var  instance;

    return  {
        getInstance : function(){
            if(null  == instance){
                instance  = new  App();
                instance.constructor  = null; //  hiding  constructor to prevent instantiation
            }
            return  instance;  
        }
    }

}))();


module.exports = app.getInstance();