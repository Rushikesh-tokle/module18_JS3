console.log("Arrays");
let student=["aman","Pratik","Rushi"];
let teachers=["Shiva","Naga","pradeep"];
let newArr=student.concat(teachers);

for(let i=0;i<newArr.length;i++){
    console.log(newArr[i]);
   // console.log(teachers[i]);
}
newArr.reverse();
for(let i=0;i<newArr.length;i++){
    console.log(newArr[i]);
   // console.log(teachers[i]);
}


//slice
console.log(newArr.slice());
console.log(newArr.slice(2));
console.log(newArr.slice(2,3));
console.log(newArr.slice(-2));

//splice

console.log(newArr.splice(5));
console.log(newArr.splice(1,1));

//sorting

console.log(newArr.sort());

let marks=[2,3,5,3,5,6,9,10.1];
console.log(marks.sort());

//pQ
let months=["january","july","march","august"];
months.splice(0,2,"july","june");
console.log(months);


let month=["january","july","march","august"];
console.log(month.splice(0,2,"july","june"));

let lang=["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.length-lang.indexOf("javascript")-1);