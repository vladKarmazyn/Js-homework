'use strict';

/**
 * Слишком длинные слова
 *
 * Иногда некоторые слова вроде «localization» или «internationalization» настолько длинны,
 * что их весьма утомительно писать много раз в каком либо тексте.
 *
 * Будем считать слово слишком длинным, если его длина строго больше 10 символов.
 * Все слишком длинные слова можно заменить специальной аббревиатурой.
 *
 * Эта аббревиатура строится следующим образом: записывается первая и последняя буква слова,
 * а между ними — количество букв между первой и последней буквой (в десятичной системе счисления и без ведущих нулей).
 *
 * Таком образом, «localization» запишется как «l10n», а «internationalization» как «i18n».
 *
 * Вам предлагается автоматизировать процесс замены слов на аббревиатуры.
 * При этом все слишком длинные слова должны быть заменены аббревиатурой, а слова, не являющиеся слишком длинными,
 * должны остаться без изменений.
 */

function longWord(word) {
       if (word.length > 10) {
        const veryLongWord = word[0] + (word.length - 2) + word[word.length-1];
        return veryLongWord;
    } 
        return word;
    }


console.log(longWord("internationalization"));
console.log(longWord("localization"));
console.log(longWord("word"));
console.log(longWord(""));
console.log(longWord("1"));



/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */




function capsLock(str) {
    const strArray = str.split(' ');
     for (let i = 0; i < strArray.length; i += 1) {
         const element = strArray[i].split(''); 
        if (element.every(elem => elem === elem.toUpperCase()) || element.slice(1).every(elem => elem === elem.toUpperCase()) ) {
            for (let j = 0; j < element.length; j += 1) {
                if (element[j] === element[j].toUpperCase()) {
                    element[j] = element[j].toLowerCase();
                } else {
                    element[j] = element[j].toUpperCase();
                }
                
            }
        }
        strArray[i] = element.join('');
     }
     str = strArray.join(' ');

     return str;
    }





    
console.log(capsLock("cAPS"));
console.log(capsLock("Lock"));
console.log(capsLock("wHY DO wE NEED cAPS lOCK?"));
console.log(capsLock("FuNkY iS nOt CaPs!"));



