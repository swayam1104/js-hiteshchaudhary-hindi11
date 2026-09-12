const map = new Map();
map.set('IN',"India")
map.set('USA',"Uinted States Of America")
map.set('PAK',"Pakistan")
map.set('EN',"India");

console.log(map);
// agar same key higa to sirf unique he store krega but value same ho skti
//order m store krta
 
for(const [key,value] of map) {
    console.log(key, ':- ', value);
}

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    java: 'java',
    rb: 'ruby',
    swift: 'swift ny apple'
}

for (const  key in myObject) {
    console.log(myObject[key]);
}
//objects me use karne ka tareeka forin loop ka

for(const key in myObject) {
    console.log(key)
}
