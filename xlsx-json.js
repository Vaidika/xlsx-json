/**
 * Created by Vaidika Tibrewal on 6/12/2017.
 */
convertExcel = require('excel-as-json').processFile;

        convertExcel('Brandcar_location.xlsx', 'Brandcar_location.json', null, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);

            }

});