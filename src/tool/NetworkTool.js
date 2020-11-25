import Promise from 'promise';
import md5 from '../tool/md5';

export function shopRequest(method, url, data) {
    let headerConfig = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
        'Mall-Id': 42,
        'update':true,
        'source':'xcx',
    };
    if(url.indexOf("app/special_sale/get")>0){
      headerConfig['update2'] = true;
    }
    let keyArr = [];
    for (let key in data) {
        keyArr.push(key);
    }
    let tempStr = "";
    keyArr.sort().forEach(function (key, i) {
        tempStr += JSON.stringify(data[key]);
    });

    tempStr = StringReplace(tempStr);

    let key = md5("L8q{b=fk=4aJ3jM#cBDE8SaZ_A;bWAG]" + tempStr);
    let newURL = url + key;
    return new Promise((resolve, reject) => {
        fetch(newURL, {
            method: method.toUpperCase(),
            headers: headerConfig,
            body:JSON.stringify(data),
        }).then((response) =>
            // response.text(),
            response.json(),
        ).then((responseData) => {
            resolve(responseData);
        }).catch((err) => {
          if(err.message.indexOf("Unexpected")>=0){

          }else{

          }
          reject(err);
        });
    });
}

//六度访问方法
// export function d6Request(method, url, data) {
//     let headerConfig = {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
//         'Accept': '*/*',
//     }

//     var keyArr = [];
//     for (var key in data) {
//         keyArr.push(key);
//     }
//     var tempStr = "";
//     var bodyStr = "";

//     keyArr.sort().forEach(function (key, i) {
//         tempStr += data[key];
//         if (bodyStr == "") {
//             bodyStr = key + "=" + data[key];
//         } else {
//             bodyStr += "&" + key + "=" + data[key];
//         }
//     })
//     var key = md5(appKey + tempStr);
//     let newURL = url + key;
//     return new Promise((resolve, reject) => {
//         fetch(newURL, {
//             method: method.toUpperCase(),
//             headers: headerConfig,
//             body: bodyStr,
//         }).then((response) =>
//             response.json(),
//         ).then((responseData) => {
//             resolve(responseData);
//         }).catch((err) => {
//           if(err.message.indexOf("Unexpected")>=0){
//             showToast("服务出错啦~","fail")
//           }else{
//             showToast("网络出问题啦~","neterr")
//           }
//           reject(err);
//         });
//     });
// }

//六度saas访问方法
// export function saasRequest(method, url, data) {
//     let headerConfig = {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
//         'Accept': '*/*',
//     }

//     var keyArr = [];
//     for (var key in data) {
//         keyArr.push(key);
//     }
//     var tempStr = "";
//     var bodyStr = "";
//     keyArr.sort().forEach(function (key, i) {
//         tempStr += data[key];
//         if (tempStr == "") {
//             bodyStr = key + "=" + data[key];
//         } else {
//             bodyStr += "&" + key + "=" + data[key];
//         }
//     })
//     var key = md5(appKey + tempStr);
//     bodyStr += "&app_key=" + key;
//     let newURL = url;
//     return new Promise((resolve, reject) => {
//         fetch(newURL, {
//             method: method.toUpperCase(),
//             headers: headerConfig,
//             body: bodyStr,
//         }).then((response) =>
//             response.json(),
//         ).then((responseData) => {
//             resolve(responseData);
//         }).catch((err) => {
//           if(err.message.indexOf("Unexpected")>=0){
//             showToast("服务出错啦~","fail")
//           }else{
//             showToast("网络出问题啦~","neterr")
//           }
//             reject(err);
//         });
//     });
// }

function StringReplace(tempStr) {
    return tempStr.replace(/{/g, "").replace(/}/g, "").replace(/\"/g, "").replace(/\[/g, "").replace(/\]/g, "").replace(/,/g, "").replace(/\\/g, "\"");
}

// export function uploadImage(data,name,token){
//   let params ='{\n"app":"kf",\n"expire":"0",\n\n"token":' + token + '}';
//   let image ={"name":name,"uri":data,'subtype':'image/*'};
//   let formData = new FormData();


//   formData.append('params', params);
//   formData.append("path",image);

//   let headers = {
//       'Content-Type': 'text/html;application/json;text/json;text/javascript;text/plain; charset=utf-8',
//       'Accept': '*/*',
//   };

//   return new Promise((resolve, reject) => {
//      UploadFile.uploadImageAndGetUrl(token,data,(res)=>{
//        if(res){
//          resolve(res);
//        }else{
//          reject("文件上传失败");
//        }
//      });
//   });
// }

// export function getToken(){
//   return new Promise((resolve, reject) => {
//       fetch(imageTokenURL).then((response) =>
//           response.json(),
//       ).then((responseData) => {
//           resolve(responseData);
//       }).catch((err) => {
//           reject(err);
//       });
//   });

// }

// //批量上传图片
// export function uploadImageArr(dataArr){
//   let formData = new FormData();
//     dataArr.map(function(v,k){
//       let name = v.filename || v.path.substring(v.path.lastIndexOf("/"));
//       let type = v.type || v.mime;
//       let file = {uri: v.path, name: name,size:v.size,type:type};
//       formData.append(`photos[${k}]`,file);
//     })


//   let headerConfig = {
//       'Content-Type': 'multipart/form-data',
//       'Accept': '*/*',
//       'Mall-Id': Mall_Id,
//   };
//   return new Promise((resolve, reject) => {
//     fetch(shopURL+'xcx/upload/batch',{
//       // fetch(shopURL+'xcx/upload',{
//        method:"POST",
//        headers:headerConfig,
//        body:formData,
//      }).then((response) =>
//          response.json(),
//      ).then((responseData) => {
//          resolve(responseData);
//      }).catch((err) => {
//          reject(err);
//      });
//   });
// }