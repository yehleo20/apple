simpleCart({

  checkout: {
    // type: "PayPal",
    // email: "you@yours.com",
  },

  // tax: 0.075,
  // currency: "THB",

  cartStyle: "table",





  cartColumns: [
    { attr: "name", label: "房間名稱" },
    { attr: "date", label: "預訂入住日期" }, // 新增送貨日期欄位設定
    { attr: "session", label: "預訂退房日期" },
    { attr: "total", label: "小計", view: 'currency' },
    { view: "remove", text: "✖", label: "刪除" },
  ]

  

});


// simpleCart.currency({
// code: "THB",
// name: "Thai Baht",
// symbol: "&#3647;",
// delimiter: " ",
// decimal: ",",
// after: true,
// accuracy: 0
// });

//*加入房間的時段判斷

simpleCart.bind('beforeAdd', function (item) {
  // 获取购物车中的商品列表
  var items = simpleCart.items();

  // 获取新添加的商品的信息
  var newRoomId = item.get('name');
  var newCheckInDate = new Date(item.get('date'));
  var newCheckOutDate = new Date(item.get('session'));
  var price = parseFloat(item.get('price')); //重新定義價格

 
 

    // 将时间部分设为零，只保留日期
      newCheckInDate.setHours(0, 0, 0, 0);
      newCheckOutDate.setHours(0, 0, 0, 0);

    // 计算日期差异，以天为单位
    var dateDiffInDays = (newCheckOutDate-newCheckInDate)/ (1000 * 60 * 60 * 24);
     // 设置新的 total 值
     item.set('price', price * dateDiffInDays);


  // var df=newCheckOutDate-newCheckInDate==0;
  // console.log(newCheckInDate);
  // console.log(newCheckOutDate);
  // console.log(df);

  if(newCheckInDate-newCheckOutDate==0 ) 
  {alert('至少要訂１天喔！');
  return false;}

  // 遍历购物车中已有的商品
  for (var i = 0; i < items.length; i++) {
      var existingRoomId = items[i].get('name');
      var existingCheckInDate = new Date(items[i].get('date'));
      var existingCheckOutDate = new Date(items[i].get('session'));

      // 检查是否为同一房间
      if (existingRoomId === newRoomId) {
          // 检查新的日期范围是否与已有订单有冲突
          if (newCheckInDate >= existingCheckInDate && newCheckInDate < existingCheckOutDate ||
              newCheckOutDate > existingCheckInDate && newCheckOutDate <= existingCheckOutDate || 
              newCheckOutDate > existingCheckOutDate && newCheckInDate < existingCheckInDate ) {
              // 如果冲突，阻止添加商品并给出相应提示
              alert('该房间在选定日期范围内已被预订！');
              return false;
          }
      }
  }


  // 如果没有冲突，允许添加商品到购物车
  return true;
});











//* Refresh cart once simpleCart is ready to listen.
simpleCart.ready(function () {
  simpleCart.update();
});




