const http = require('http');
const fs = require('fs');
const url = require('url');
const root = __dirname;

/* check data whether it is useful
 * useful({}) => false
 * useful(Object) => true
 * useful(1) => true
 */
var useful = function(obj , errStr){
    if(Object.prototype.toString.call(obj) == "[object Undefined]" || Object.prototype.toString.call(obj) == "[object Null]"){
        console.log(`WARNING!! ${obj} IS UNDEFINEDE OR NULL --> ${errStr}`);
        return false;
    }else if(Object.prototype.toString.call(obj) == "[object Object]" && (() => {for(var key in obj){return true;}return false;})){
        console.log(`WARNING!! ${obj} IS A EMPTY OBJECT --> ${errStr}`);
        return false;
    }else{
        return true;
    }
}

/*change string to object
* strToObj('name=xxxx;age=unknow;sex=boy') => {'name' : 'xxxx' , 'age' : unknow , 'sex' : 'boy'}
* strToObj('name=xxxx;age=20;sex=boy') => {'name' : 'xxxx' , 'age' : 20 , 'sex' : 'boy''}
* strToObj('name=xxxx;age=20.11111;sex=boy') => {'name' : 'xxxx' , 'age' : 20.11111 , 'sex' : 'boy'}
*/
var strToObj = function(str){
    if(!useful(str , 'The argument pass to Function queryString')){return;}
    var obj = {} , arr = str.trim().split(';');
    if(!useful(arr , 'The argument pass to Function querystring after split')){return;}
    for(var i = 0 , len = arr.length ; i < len ; i++){
        var objArr = arr[i].split('=');
        if(!useful(objArr , 'The argument in Function queryString which called objArr')){return;}
        var key = objArr[0].trim();
        var intNum = Number.parseInt(objArr[1]) , floatNum = Number.parseFloat(objArr[1]) , value;
        if((intNum + '') == 'NaN' && (floatNum + '') == 'NaN'){value = objArr[1].trim()}
        else if((intNum + '') == objArr[1].trim()){value = intNum;}
        else if((floatNum + '') == objArr[1].trim()){value = floatNum;}
        else{value = objArr[1].trim();}//default: consider value as string
        obj[key] = value;
    }
    return obj;
};

/*
 * This Function is used to create the cookies , and it is belong to Array
 */
var createCookie = function(key,value,obj){
    if(!useful(key , 'The argument-key passed to createCookie') || !useful(value , 'The argument-value passed to createCookie')){return;}
    var cookies = [name + '=' + value];
    if(!useful(obj)){return cookies;}
    if(obj.domain){cookies.push('domain=' + obj.domain);}
    if(obj.path){cookies.push('path=' + obj.path);}
    if(obj.expires){cookies.push('expires=' + obj.expires);}
    if(obj.maxAge){cookies.push('max-age=' + obj.maxAge);}
    if(obj.secure){cookies.push('secure');}
    return cookies;
};

var sendCookie = function(res,cookies){res.setHeader('Set-Cookie' , cookies);};
var getMIME = function(reqHeader){return reqHeader['accept'] || reqHeader['content-type'].split(';')[0].trim() || '';};
var hasBody = function(reqHeader){return 'content-length' in reqHeader || 'transfer-encoding' in reqHeader};
var getIP = function(request){return request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress;};

var serverHandler = function(req , res){
    var clientDetail = req.headers;//this is object
    var requestMethod = req.method , requestUrl = url.parse(req.url).pathname;//file-name
    console.log(requestUrl);
    var type = requestUrl.split('.')[1].trim();
    if(type == 'json'){type = 'application/json';}
    if(type == 'xml'){type = 'application/xml';}
    if(type == 'js'){type = 'text/javascript';}
    if(type == 'css'){type = 'text/css';}
    if(type == 'jpg'){type = 'image/jpg';}
    if(type == 'png'){type == 'image/png';}
    console.log(type);
    var clientData = '' , num = 1 , ip = getIP(req) , router = getMIME(clientDetail);//router
    if(hasBody(req)){
        req.on('data' , (chunk) => {clientData += chunk.toString('utf8');});
    }
    req.on('error' , (err) => {console.log('Server accur error when receive data from client');});
    req.on('end' , () => {num++;console.log(`${num}-->${ip}......${requestUrl}`);});
    fs.readFile(requestUrl , (err , chunk) => {
        if(err){console.log(`accur error in the process of read file -> ${err}`);}
        else{
            res.setHeader('Content-Type' , type);
            res.write(chunk);
            res.end();
        }
    });
};

var server = http.createServer(serverHandler);
server.on('clientError' , (err , socket) => {socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');});
server.on('close' , () => {console.log('The server has been shutdown');});
server.listen(8080 , () => {console.log('The server has running in localhost:8080');});