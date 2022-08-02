///////////////////////////////////////////////////////////////////////////////
// Soal 1
// Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping,
// dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan
// jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut,
// cetak menggunakan console log atau sejenisnya.
///////////////////////////////////////////////////////////////////////////////

const clgFunc = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
    } else {
      console.log(i);
    }
  }
};

///////////////////////////////////////////////////////////////////////////////
// Soal 2
// Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan
// besar kekecil dengan manual tanpa fungsi bawaan javascript.
///////////////////////////////////////////////////////////////////////////////

// Small to Big
const sortSB = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (x[i] < x[j]) {
        tmp = x[i];
        x[i] = x[j];
        x[j] = tmp;
      }
    }
  }

  console.log(x);
};

// Big to Small
const sortBS = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (x[i] > x[j]) {
        tmp = x[i];
        x[i] = x[j];
        x[j] = tmp;
      }
    }
  }

  console.log(x);
};

///////////////////////////////////////////////////////////////////////////////
// SOAL 3
// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string
// yang diinputkan maka return true jika tidak return false.
///////////////////////////////////////////////////////////////////////////////

const checkReversed = (s) => {
  let re = /[^A-Za-z0-9]/g; // Remove unwanted chars

  let loweredStr = s.toLowerCase().replace(re, "");
  let reversedStr = s.loweredStr.split("").reverse().join("");

  return reversedStr === loweredStr;
};
