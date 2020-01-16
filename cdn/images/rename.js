//rename.js
const fs = require('fs') //引入node内置的文件系统

function rename(preName,ext) {
  let newName = []
  fs.readdir('./', (err, oldName) => {  //读取file文件夹下的文件的名字，oldName是一个数组
    if (err) {
      console.log("has err",err);
    }
    oldName = oldName.filter(t=>t.endsWith(ext))
    for (let i = 0; i < oldName.length; i++) {
      console.log(oldName[i]);
      let name =   preName+"_"+i.toString()+".jpg" // 以图片为例
      newName[i] = name        // 把名字赋给一个新的数组
    }

    
    for (var i = 0; i < oldName.length; i++) {
      let oldPath = oldName[i]//原本的路径
      let newPath = newName[i] //新路径

      fs.rename(oldPath, newPath, (err) => {  //重命名
        if (err) {
          console.log(err)
        }
        console.log('done!')
      })
    }

  })
}


let data = process.argv.slice(2);
console.log(data);
if(data.length>=2)
{
    rename(data[0],data[1]);
}
else
{
    console.log("you must input the args");
}

