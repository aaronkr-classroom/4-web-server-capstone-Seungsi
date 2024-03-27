// router. js
"using strict";

// Listing 7.6 (p. 123-124)

/**
 * listing6.5.js (router.js)
 * router.js에서 exports 객체에 함수 추가
 *
 * (이 router.js 파일을 listing6.6js (main.js)에서 require로 사용해야 한다)
 */
const httpStatus = require('http-status-codes'),
    contentTypes = require('./content-types'),
    utils= require('./utils'),
  routes = {
    GET: {
     
        }
    ,
    POST: {

    }
  };

// 라우트에 따른 콜백 함수를 처리하기 위한 함수 handle의 생성
exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req,res)
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
    console.log("error: " +e);
  }
};

// main.js로부터 routes에 등록하기 위한 get 및 post 함수 생성
exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["GET"][url] = action;
};