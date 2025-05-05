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

//multidimentional Array

let arr=[["X","","O"],
["","X",""],
["O","","X"]];

for(let i=0;i<arr[0].length;i++){
    for(let j=0;j<arr[1].length;j++){
        console.log(arr[i][j]);
    }
}

let arrr=[7,9,0,-2];
let n=3;
let ans=arrr.slice(0,n);
console.log(ans);

let arr2=[7,9,0,-2];
let n2=3;
let ans2=arr2.slice(arr.length-n2);
console.log(ans2);


let str=prompt("pleaseenterastring");
if(str.length==0)
    {
        console.log("stringisempty");
    }
    else
    {
        console.log("stringisnotempty");
    }


    let str2="ApNaCoLlEgE";
    let idx=3;
    if(str2[idx]==str2[idx].toLowerCase())
        {
            console.log("characterislowercase");
        
    }
    else
    {
        console.log("characterisnotlowercase");
    }


    let str3=prompt("pleaseenterastring");
    console.log(`originalstring=${str3}`);
    console.log(`stringwithoutspaces=${str3.trim()}`);



    let ar=["hello",'a',23,64,99,-6];
    let item=64;
    if(arr.indexOf(item)!=-1){
        console.log("elementexistsinarray");
    }
    else
    {
        console.log("elementdoesn'texistinarray");
    }