let map = new Map([['xxx',1],['yyy',8],['zzz',444]]);
for (let [values,key] of map) {
    console.log(`Ключ — ${values}, значение — ${key}`)
}