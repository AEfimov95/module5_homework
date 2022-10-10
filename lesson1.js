let anyNumber = +prompt('Введите число','');
if (isNaN(anyNumber) || typeof anyNumber != 'number') {
    alert('Упс, кажется, вы ошиблись')
} else if (typeof anyNumber == 'number' && anyNumber % 2 == 0) {
    alert('Четное')
} else if (typeof anyNumber == 'number' && anyNumber % 2 != 0) {
    alert('Нечетное')
}
console.log(typeof anyNumber)
console.log(anyNumber)