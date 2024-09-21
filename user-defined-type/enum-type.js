// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, heterogenous
// numeric enum
// enum  RequestType{
//     readData,
//     saveData,
//     deleteData
// }
// enum  RequestType{
//     readData = 1,
//     saveData,
//     deleteData
// }
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType["readData"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2.deleteData);
// console.log(RequestType2["deleteData"]);
// heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["id"] = 121] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.id);
console.log(RequestType3["id"]);
