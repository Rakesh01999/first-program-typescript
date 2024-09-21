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

enum  RequestType{
    readData = 1,
    saveData = 3,
    deleteData
}
// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType["readData"]);

// string enum
enum RequestType2{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA"
}
// console.log(RequestType2.deleteData);
// console.log(RequestType2["deleteData"]);

// heterogenous enum
enum RequestType3{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = 121
}
console.log(RequestType3.id);
console.log(RequestType3["id"]);