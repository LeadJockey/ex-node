const url = require('url');
let urlStr = 'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%84%EC%9D%B4%EC%9C%A0';
let curUrl = url.parse(urlStr);
let curStr = url.format(curUrl);
let queryString = require('querystring');
const params    = queryString.parse(curUrl.query);

console.dir(curUrl);
console.log('query : ' + curUrl.query);
console.log('url : ' + curStr);
console.log('검색어 : ' + params.query);