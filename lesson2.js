const x = (item) => {
    if (typeof item == 'number'||typeof item == 'string'||typeof item == 'boolean') {
        console.log(item+' is '+typeof item)
    } else console.log(item+ ' is not defined')
}
x(343);
x('start');
x(false);
x({a:1,s:2})