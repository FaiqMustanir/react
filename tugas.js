//1
let umur = 18;
console.log(umur); 
umur = 17;
console.log(umur);


const nama = "Faiq";
console.log(nama); 


//2
const penjumlahan = (a, b) => a + b;
console.log(penjumlahan(3, 4)); 


//3
const kota = "Jakarta";
const ucapan = `Selamat datang di ${kota}!`;
console.log(ucapan); 


//4
const buah = ["Apel", "Jeruk", "Mangga"];
const [buah1, buah2, buah3] = buah;
console.log(buah1, buah2, buah3);

const mahasiswa = { nama1: "Ali", usia: 22, jurusan: "Teknik Informatika" };
const { nama1, usia, jurusan } = mahasiswa;
console.log(nama, usia, jurusan); 


//5
const angka1 = [1, 2];
const angka2 = [3, 4];
const gabunganAngka = [...angka1, ...angka2];
console.log(gabunganAngka); 


const dataPribadi = { nama: "Faiq", umur: 22 };
const dataAkademik = { jurusan: "Teknik Informatika", IPK: 4 };
const gabunganData = { ...dataPribadi, ...dataAkademik };
console.log(gabunganData); 


//6
const  { tambah, kurang } = require ('./hitung.js');
console.log(tambah(5, 3)); 
console.log(kurang(5, 3)); 


//7
const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data berhasil diambil");
      }, 2000);
    });
  };
  
  getData().then(response => console.log(response)); 
  
  const fetchData = async () => {
    try {
      const response = await getData();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData(); 


//8
// Membuat Class
class Person {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    perkenalan() {
      return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
  }
  
  const ali = new Person("Faiq", 25);
  console.log(ali.perkenalan());
  
  // Inheritance
  class Guru extends Person {
    constructor(nama, umur, mataPelajaran) {
      super(nama, umur);
      this.mataPelajaran = mataPelajaran;
    }
  
    mengajar() {
      return `Saya mengajar ${this.mataPelajaran}.`;
    }
  }
  
  const pakAli = new Guru("Faiq", 25, "Matematika");
  console.log(pakAli.perkenalan()); 
  console.log(pakAli.mengajar());   