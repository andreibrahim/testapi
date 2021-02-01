const fs = require('fs');

exports.filterData = async (req, res, next) => {
    try {
        let rawdata = fs.readFileSync('./dummy/dummy.json');
        let datas = JSON.parse(rawdata);
        let newDatas = [];
        var newArray = datas.filter(function (item) {
            var denom = item.body[0];
            var myarr = denom.split(":");
            console.log();
            if(parseInt(myarr[1]) >= 100000){
                newDatas.push(parseInt(myarr[1]));
            }
            
          });
        return res.status(200).json({
            success: true,
            count: 0,
            data: json.PARSE(newDatas)
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}
