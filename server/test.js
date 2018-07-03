var express = require('express');
var axios = require('axios');
var qs = require('qs');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
var name = 0;
var pass = 123456;

// for (let index = 0; index < 3000; index++) {
//     name++
//     var par = {
//         userName: JSON.stringify(name),
//         password: JSON.stringify(pass),
//         passwordRe: JSON.stringify(pass)
//     }
//     post(par)
// }

// function post(data) {
//     axios.post('http://47.106.121.134/api/user/register', qs.stringify(data)).then(function (res) {
//         console.log(res.data)
//     }).catch(ex => {
//         console.log('ex')
//     })
// }
axios.post('http://47.106.121.134/api/addVersion', {}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})