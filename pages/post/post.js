Page({
  data:{
    hidden: -1,
    editbox : false,
    inputvalue:'',
    data:[],
    changeData:'',
    hiddenChangeBox:true,
    show: '',
    temp: 0
  },
 
  onpostTap: function (event) {
    var that = this;
    var num = event.currentTarget.dataset.num;
    // console.log(event)
    var arr = this.data.data;
    arr[num].state = !arr[num].state;
    var add = 0;
    arr.forEach((item, index) => {
      if (item.state == true) {
        add++;
      }
    })
    that.setData({
      data: arr,
      temp: add
    })

  },
  edit :function(event){
    this.setData({
      editbox: !this.data.editbox,
      inputvalue : ''
    })
  },
  bindTextAreaBlur: function (e) {
    var data = e.detail.value;
    this.setData({
      show: data
    })
  },
  leave: function(e){
    this.setData({
      show: ''
    })
  },
  cancel: function (event) {
    var text = this.data.show;
    console.log(text)
    if (text==''){
      return 
    }else{
      console.log(text)
      var json = {};
      json.state = false;
      json.data = text;
      var arr = this.data.data;
      arr.push(json);
    }
    this.setData({
      editbox: false,
      data: arr
    })
  },
  num: function(event){
    console.log('a1')
    this.setData({
      num :temp
    })
  },
  // 删除任务函数
  determine: function (event) {
    var arr = this.data.data;
    var newArr = [];
    arr.forEach((item, index) => {
      if (!item.state) {
        newArr.push(item)
      }
    })
    //更改数量显示
    var temp = 0;
    newArr.forEach((item, index) => {
      if (item.state == true) {
        temp++;
      }
    })
    this.setData({
      editbox: false,
      data: newArr,
      temp: temp
    })
  },


  // 更改数据
  changeValue: function(event){
    console.log(event)
    var index = event.currentTarget.dataset.num;
    console.log(index)
    var data = this.data.data[index].data;
    console.log(data)
    this.setData({
      changeData : data,
      hiddenChangeBox : false,
      currentIndex: index
    })
  },
  changeValueBlur:function(e){
    var data = e.detail.value;
    this.setData({
      newData : data
    })
  },
  updateData:function(){
    var arr = this.data.data;
    arr[this.data.currentIndex].data = this.data.newData;
    this.setData({
      data: arr,
      hiddenChangeBox : true
    })
  }, 
})
