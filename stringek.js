console.log("Hello")

let s = "karakterlánc \"Hello\" ";
console.log(s);

let ujsor = "karakterlánc \n \"Hello\" ";
console.log(ujsor);

let kocsi = "karakterlánc \r \"Hello\" ";
console.log(kocsi);  

console.log(ujsor)
console.log(ujsor.length)

//for ciklus index-el
let s2 = "JavaScript";
for(let i = 0; i < s2.length; i++) {
console.log(s2[i]);
}

//for of ciklus index nélkül
let s3 = "MySql";
for(betu of s3){
    console.log(betu);
}

//szövegösszefűzés
console.log(s2 + s3);
console.log(s2 + " " + s3);
console.log(`${s2} ${s3}`);

//concat method haszálata:
let szövegösszefűzés = s2.concat(" ", s3);
console.log(szövegösszefűzés)

// console.log(s2.toUpperCase());
// console.log(s2.toLowerCase());

console.log(s3.charAt(4));
console.log(s3.charCodeAt(4));

console.log(s3.startsWith("m"));
console.log(s3.endsWith("l"));

let b = "Hello világ!";
console.log(b.startsWith("Hello"));
console.log(b.endsWith("világ"));

let c = "105";
console.log(c.padStart(50000, "0"));
console.log(c.padEnd(5, "0"));