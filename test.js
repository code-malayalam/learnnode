const fs = require("fs");
var dateFormat = require("dateformat");

fs.readdir("./myfiles", (_, files) =>  {
    files.forEach((file) => {
        if(/-01-/.test(file)) {
            const aa = file.substring(0, file.indexOf('.'));
            console.log(file, dateFormat(aa, 'dddd, mmmm dS, yyyy'))
        }
      })
})
