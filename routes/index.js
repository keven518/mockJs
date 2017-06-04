var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'categorys|3-5': [{
        categoryName: '@cname@cname',
        'categoryID|+1': 10,
        logo: '@image(64x64,#eee,文)',
        'categoryItems|1-4': [{
          cname: '@cname',
          'cid|+1': 100,
          'item|3-7':[{
            name: 'cname',
            'id|+1': 1000,
            link: '@url'
          }]
        }],
        'seller|8-15': [{
          name: '@cname@cname',
          url: '@url'
        }]
    }]
})
// 'categorys|3-5': [{
//     categoryName: '@chineseName',
//     'categoryID|+1': 10
// }]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mock', function(req, res, next) {
  res.send(JSON.stringify(data, null, 4));
});


module.exports = router;
