const x = 89;
let y;
y = 988;
var g = 0;
let c = 78;

const str = "kaukoputki";
let num = 1.3338;
let numn2 = 89;
let k = 274724842472.0;
let bool = true;
bool = false;
let h = undefined;
let j = null;

j = "ewr";

let a = 17;
let b = 18;
console.log("a+b", a + b);
console.log("a*b", a * b);
let rf = 87;
let nf = rf % 7;
console.log(nf);
let st = 90;
console.log(st % 2);

let clock = 16;
console.log(clock % 12);


let rnd = Math.random() * 10 + 5;
console.log(rnd * 10);
let flr = Math.ceil(rnd);
console.log("PP", flr);
let min = Math.min(25, 8, 91, 7, 6, 54);
console.log(min);


/// Jos kello on 16:00, mitä se on 97 tunnin jälkeen?
let kello = 16 + 97 % 12;
console.log("kello on", kello);

// muuttujien nimi koostuu kirjaimista ja numeroista ja _, dollarsign merkeistä
// mutta ei voi alkaa numerolla

// esim

let kauppa16448484;
let _jjj;


let io = 0;
io++;
console.log(io);

// statement ja expression, siis lause ja lauseke

let tr = 8;
let am = 9 * 17 + tr;  //statement
9 * 17;    //expression


// funktiot

function FnNimi (a,b,c) {
    let result = a+b+c;
    return result;

}

let pl = FnNimi(1,2,3);
console.log("funktio", pl);

const arrow = (a,b,c)=>{
    return a + b + c;
}

console.log("nuolifunktio", arrow(1, 2, 3));

function tulostaNimi(F){
    function inner(d,e) {
        console.log("inner", a + b);
    }
    console.log(F(1,2,3));
}

console.log(tulostaNimi(FnNimi));

let bv = 13;
const obj1 = {
    fname: "Mikko",
    lname: "Korpi",
    age: 54,
    fn: function () {
        console.log("objekti funktion");
        console.log(this.fname)
    },
    obj2: {
        a: 9,
        b: 8,
        ob3: { x: 54, y: 76}

    }
};

obj1.country = "Finland";
console.log(obj1);

obj1.fn();

delete obj1.lname;
delete obj1.obj2;

console.log(obj1);


function count (a,b,c=4, str = "ggg") {
    console.log(a + b + c);
    console.log(str);
}

count(8,9);





let obj2 = obj1;

console.log(obj1);

obj1.fname = "Kauko";
console.log(obj1);

obj2.lname = "Kukkola";

console.log(obj1);
console.log(obj2);

//stack (pino)
//obj2 ->
//obj1 ->

 //kasa (heap)
//{
//    fname: "Kauko",
//    lname: "Kukkola"
//}
//bv


/*
function objekti (ob){
    obj1.lname = "Karhu";
    return ob;

}

console.log(obj1["lname"]);

console.log("objekti", objekti(obj1));


*/


// palauta tehtävät omaan githubiin

// 1. muuta stringin "kauhava" ensimmäinen kirjain isoksi.
let text1 = "kauhava";
let newtext1 = text1.replace("k", "K");
console.log(newtext1);
// 2. poista stringista "kala, hevonen, kana" sana kana.
let text2 = "kala, hevonen, kana";
let newtext2 = text2.slice(0,15);
console.log(newtext2);
// 3. tulosta sanan "rovaniemi" viides kirjain
let text3 = "rovaniemi";
let newtext3 = text3.slice(4,5);
console.log(newtext3);
// 4. muuta string "yhden yön tarinoita" stringiksi "yhden päivän tarinoita"
let text4 = "yhden yön tarinoita";
let newtext4 = text4.replace("yön", "päivän");
console.log(newtext4);
// 5. Tee funktio, joka saa parametreiksi merkkijonon str ja kokonais luvun a
// funktio palauttaa merkkijonon viimeiset a merkkiä
function funktio5 (str, a){
    let viimeisetmerkit = str.slice(str.length - a, str.length);

    return viimeisetmerkit;
}
console.log(funktio5("moi",2));

a = 7;
if(a !== 6 && a !== 4){
    console.log("a = ", a);
}

if(a == 9) {
    console.log("9");
} else if (a !== 9) {
    console.log("a = ", a);
}

let str1 = "";
a === 8 ? str1 = "true" : str1 = "false";
console.log(str1);

if(a === 0){
    str1 ="true";
} else {
    str1 = "false";
}

console.log(str1);


// tehtäviä

// 6. tarkista onko jokin luku jaollinen kolmella. Jos on tulosta "jaollinen kolmella"
let luku6 = 9;
if(luku6 % 3 == 0){
    console.log("jaollinen kolmella");
}

// 7. tarkista onko joku luku välillä 17 - 25. Jos on tulosta "on välillä 17-25"
let luku7 = 17;
if(luku7 >= 17 && luku7 <= 25){
    console.log("On välillä 17-25");
}

//for silmukka

for(let i = 0; i < 10; i++) {
    console.log("i = ", i)
    if (i == 3) {
        continue;
    }
    console.log("fr")
}

// tehtäviä

// 8. tehkää silmukka, joka käy läpi luvut 1-100 ja tulostaa luvun
// jos se on jaollinen seitsemällä
for(let i = 0; i < 100; i++) {
    if (i % 7 == 0) {
        console.log(i);
        continue;
    }
}

// 8 googlatkaa tai keksikää miten tyhjennetään lista
// yksi tapa on yksinkertaisesti
console.log("Tehtävä 8");
console.log("------------------");
let listEm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(listEm);
listEm = [];
console.log(listEm);
// tässä tapauksessa listEm osoite muuttuu tyhjään listaan. 
// eli alkuperäiseen listaan ei ole enään viittausta
// tyhjennä lista niin että alkuperäinen osoite tyhjennetään eikä vaihdeta osoitetta tyhjään

let list8 = [1, 2 , 3, 4, 5];
console.log(list8);
list8.length = 0;
console.log(list8);

// 9. Tutkikaa vähän spread operaattoria googlaamalla
// Tehkää ohjelma jossa on kaksi listaa [1,2,3,4,5] ja [6,7,8,9,10]
// yhdistäkää ne käyttämällä spread operaattoria ja laittakaa väliin 2 elementtiä
// "text1" ja "text2" 
// niin että lopputulos on [1,2,3,4,5,"text1","text2",6,7,8,9,10]

console.log("Tehtävä 9");
console.log("------------------");

let lista1tehtävä9 = [1,2,3,4,5];
let lista2tehtävä9 = [6,7,8,9,10];
let lista3tehtävä9 = [...lista1tehtävä9, "text1", "text2", ...lista2tehtävä9];
//lista3tehtävä9.splice( 5, 0, "text1");
//lista3tehtävä9.splice( 6, 0, "text2");
console.log(lista3tehtävä9);

// 10. Tee funktio joka saa parametreiksi listan ja laskee sen elementtien summan
// Tässä tarvitaan listan reduce-funktiota. 

console.log("Tehtävä 10");
console.log("------------------");
let lista1tehtävä10 = [1,2,3];
function funktiotehtävä10(listaP){

    let summatehtävä10 = lista1tehtävä10.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);

    console.log(summatehtävä10);
}

funktiotehtävä10(lista1tehtävä10);

// 11. Tee luokka Cat, jonka attribuutit ovat name, age, owner.
// Luokassa on metodi getInfo(), joka palauttaa stringin
// ""Name: <name>, age: <age>, owner: <owner>""
console.log("Tehtävä 11");
console.log("------------------");


class Cat {
    constructor(name,age,owner) {
        this.name = name;
        this.age = age;
        this.owner = owner;
    }
    getInfo() {
        const name = this.name;
        const age = this.age;
        const owner = this.owner;
        return "Name: " + name + " Age: " + age + " Owner: " + owner;
    }


};

const Cat1 = new Cat("Kissa", 10, "Juno");
console.log(Cat1.getInfo());