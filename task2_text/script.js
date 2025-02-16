// считываем текст из элемента с id "originalText"
const originalText = document.getElementById('originalText').textContent;

// 1. Выведите в консоль количество символов в тексте.
console.log("Количество символов в тексте: " + originalText.length);

// 2. Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.
let result = originalText.replace(/;/g, ';\n');

// 3. Удалите все пробелы в переменной result и сохраните результат в переменную substring.
let substring = result.replace(/\s/g, '');

// 4. Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
let newText = result.substring(28, 50);

// 5. Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.
let replacedText = newText.replace(/клён/g, 'дуб');

// 6. Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.
let replacedText2 = result.toUpperCase();

// 7. Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.
let replacedText3 = result.replace(/клён/g, 'дуб');

// 8. Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.
let index = originalText.indexOf("моря");

// 9. Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.
let modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);

// 10. Выведите значения всех полученных переменных на экран.
console.log(`1. Количество символов в тексте: ${originalText.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

// хочу попробоваьь сделать все изменения за раз
// 
const originalTextFalse = document.getElementById('originalText').textContent;

let finalText = originalTextFalse
.replace(/;/g, '\n')                 
.replace(/клён/g, 'дуб');

document.getElementById('modifiedText').innerHTML = finalText.replace(/\n/g, '<br>');
console.log(`replacedText3: ${replacedText3}`); // тест


// Применяем все изменения к строке в одной цепочке
//document.getElementById('modifiedText').textContent = originalTextFalse
//  .replace(/;/g, ';\n')                   // Добавляем перенос строки после каждого ";"
//  .replace(/клён/g, 'дуб');                 // Заменяем "клён" на "дуб"
  
//console.log(document.getElementById('modifiedText').textContent); // Выводим результат в консоль
// с textcontent не получается в параграфе на странице выводить с переносом на новую строку. 
// Наставница подсказала использовать innerHTML. 
//  скрипт оставляю неубранным, чтобы запомнить эту попытку и с опытом решить по-другому


