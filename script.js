function clock() {
    setInterval(function () {
        let jam = new Date().getHours();
        let menit = new Date().getMinutes();
        let detik = new Date().getSeconds();

        let hari = new Date().getDay();
        let tanggal = new Date().getDate();
        let bulan = new Date().getMonth() + 1;
        let tahun = new Date().getFullYear();

        switch (hari) {
            case 0:
                hari = "Minggu";
                break;
            case 1:
                hari = "Senin";
                break;
            case 2:
                hari = "Selasa";
                break;
            case 3:
                hari = "Rabu";
                break;
            case 4:
                hari = "Kamis";
                break;
            case 5:
                hari = "Jum'at";
                break;
            case 6:
                hari = "Sabtu";
                break;
        }

        switch (bulan) {
            case 1:
                bulan = "Januari";
                break;
            case 2:
                bulan = "Februari";
                break;
            case 3:
                bulan = "Maret";
                break;
            case 4:
                bulan = "April";
                break;
            case 5:
                bulan = "Mei";
                break;
            case 6:
                bulan = "Juni";
                break;
            case 7:
                bulan = "Juli";
                break;
            case 8:
                bulan = "Agustus";
                break;
            case 9:
                bulan = "September";
                break;
            case 10:
                bulan = "Oktober";
                break;
            case 11:
                bulan = "November";
                break;
            case 12:
                bulan = "Desember";
                break;
        }
        if (jam === 24 || jam < 10) {
            jam = "0" + jam;
        }
        if (menit < 10) {
            menit = "0" + menit;
        }
        if (detik < 10) {
            detik = "0" + detik;
        }

        document.getElementById("day").innerHTML =
            hari + ", " + tanggal + " " + bulan + " " + tahun;

        document.querySelectorAll(".text")[0].innerHTML = jam + ":";
        document.querySelectorAll(".text")[1].innerHTML = menit + ":";
        document.querySelectorAll(".text")[2].innerHTML = detik;
    }, 1000);
}
clock();
