// let a =Math.floor(7.9);
// console.log(a);

let sayi = Number(prompt("Lütfen bir sayı giriniz"));
let sonuc = true;
for(let i =2; i<=Math.floor(sayi/2); i++){
   if(sayi%i==0){
     //asal değil
     sonuc=false;
    break;
   }
}
if(sonuc){
    alert(sayi + " Asaldır");
}else{
    alert(sayi + " Asal değildir");
}