const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Febuari', 'Maret', 'April', 
                    'Mei', 'Juni', 'Juli', 'Agustus', 'September', 
                    'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'))
        }
    }, 4000);
}

function showMonth(err, data) {
    if(!err){ 
        console.log(data.map(month => month));
    }
    return err
}
getMonth(showMonth)