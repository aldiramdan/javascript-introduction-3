const momentjs = require('moment'); // package moment
const dayjs = require('what-day-id'); // package what-day-id

const date = dayjs(new Date()) // data hari ini dalam bentuk bahasa indonesia
// const daySplit = date.split(1)
// const day = daySplit[0]
const day = momentjs().format('dddd') // data har ini dalam bentuk bahasa inggris
// const day = 'Monday'

const cekHariKerja = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // mengelola data
            // const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            const dataDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                // jika data masuk
                resolve(cek)
            } else {
                // jika data tidak masuk
                reject(new Error('Hari ini bukan hari Kerja'))
            }
        }, 3000)
    })
}

function checkDayThenCatch() {
    cekHariKerja()
    .then((dayCheck) => {
        // mengcek kembali hari ini
        // console.log(`Output : Then Catch\nTanggal : ${date}\nKeterangan : Hari ini Kerja`);
        if (dayCheck === day) {
            console.log(`Output : Then Catch\nTanggal : ${date}\nKeterangan : Hari ini Kerja`); 
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

async function checkDayTryCatch() {
    try {
        const nowDay = await cekHariKerja()
        // console.log(`Output : Try Catch\nTanggal : ${date}\nKeterangan : Hari ini Kerja`);
        if (nowDay === day) {
            console.log(`Output : Try Catch\nTanggal : ${date}\nKeterangan : Hari ini Kerja`); 
        }
    } catch (err) {
        console.log(err);
    }
}
checkDayThenCatch()
checkDayTryCatch()