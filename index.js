// Buatlah barisan bilangan prima dari 1 - 100

// function bilanganPrima(batas){
//  let tampungPrima = '';
//  for(let i = 1; i<=batas; i++){
//      let count = 0;
//     for(let j = 1; j<=i; j++){
//         if(i % j == 0){
//             count++;
//         }
//     }

//     if(count == 2){
//         tampungPrima += i + ' ';
//     }
    
//  }

//  return tampungPrima;
// }

// console.log(bilanganPrima(100));


// Buatlah barisan fibonacci

// function bilanganFibonacci(batas){
//     let tampungFibonacci= '';
//     let a = 1;
//     let b = 1;
//     tampungFibonacci =  a +' '+ b; 
    
//     while(b<=batas){
//         let c = a + b;
//         tampungFibonacci += ' '+ c;
//         a = b;
//         b = c;
//     }

//     return tampungFibonacci;
// }

// console.log(bilanganFibonacci(100))

// Buatlah penjumlahan dua angka yang sesuai target, lalu keluarkan index dari angka2 tersebut
//  function twoSum(x, target){
//      let tampungNilai = '';
//     for(let i = 0; i<x.length; i++ ){
//         for(let j = i + 1; j<x.length; j++){
//             if(x[i] + x[j] == target){
//                 tampungNilai = i + ' '+j;
//             }
//         }
//     }
//     return tampungNilai;
//  }

//  let input = [2, 7, 11, 15];
//  console.log(twoSum(input,9));

// Buatlah apakah sebuah angka itu polyndrome

// function polyndrome(x){
//     if(x < 0){
//         return false;
//     } else if(x == 0){
//         return true;
//     }

//     $temp = x;
//     $reverse = 0;

//     while($temp > 0){
//         $reverse = $reverse * 10 + ($temp % 10); // 3
//         $temp = Math.floor($temp / 10); // 12
//     }

//     if(x == $reverse) {
//         return true;
//     } else {
//         return false;
//     }

// }
// console.log(polyndrome(121));

// Barisan angka
// function barisanAngka1(batas){
//    let tampungAngka = ' ';
//     let x = 1;
//    for(let i = 1; i<= batas; i++){
//         x = x;
//         let y = x + 3;
//         let z = y - 2;
//         tampungAngka += x + ' '+y+ ' ' + z + ' ';
//         x = z;
//    }

//    return tampungAngka;
// }

// console.log(barisanAngka1(10));

// Konversi angka
// function konversiAngka(x){
//     let ribuan = Math.floor(x / 1000);
//     let sisa1 = x % 1000;
//     let ratusan = Math.floor(sisa1 / 100);
//     let sisa2 = sisa1 % 100;
//     let puluhan = Math.floor(sisa2 / 10);
//     let satuan = sisa2 % 10;

//     return ribuan + ' ribuan ' + ratusan+ ' ratusan '+puluhan+' puluhan '+satuan+ ' satuan.';

// }
// console.log(konversiAngka(2145));

// Jumlah Anak Ayam
// function anakAyam(x) {
//     let hasil = '';
//     for(let i = x; i>=1; i--){
//         if(i > 1){
//             hasil += "Anak ayam tinggal "+i+" mati satu tinggal "+(i-1)+ "\n";
//         } else if(i === 1){
//              hasil += "Anak ayam tinggal 1 mati satu tinggal induknya";
//         }
//     }
//     return hasil;
// }

// console.log(anakAyam(17));

// Konversi Detik
// function konversiDetik(detik) {
//     let jam = Math.floor(detik / 3600);
//     let sisa1 = detik % 3600;
//     let menit = Math.floor(sisa1 / 60);
//     let second = sisa1 % 60;

//     return "Konversi dari "+detik+" detik = "+jam+" Jam : "+menit+" menit : "+second+" detik."
// }

// console.log(konversiDetik(3662));

// Segitiga
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

function segitiga1(ukuran){
    for(let i = ukuran; i>=1; i--){
        for(let j = i; j >=1; j--){
            console.log(j);
        }
    }
}

console.log(segitiga1(5));