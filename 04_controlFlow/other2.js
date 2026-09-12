const programming = ["js","cpp","java","swift","python","ruby"];
for (const key in programming) {
    console.log(key);
}
// by default arrays me keys 0 to length tk jaati h
//isliye maps ka aavishkaar hua kyuki usme hm keys apne hisaab s daal skte h

for(const key in programming) {
    console.log(programming[key]);
}

const values = programming.forEach(function (item) {
    //console.log(item);
    return item // hamesha undefined return karwga
})
console.log(values)

const nums = [4.213,2,3,67,89,12];
const newNums = nums.filter( (num) => num > 10);
console.log(newNums);