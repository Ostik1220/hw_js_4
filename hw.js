const fieldOne = prompt("Введіть значення для поля one:");
const fieldTwo = prompt("Введіть значення для поля two:");

if (fieldOne && fieldTwo) {
    alert("Обидва поля заповнені.");
} else {
    alert("Не всі поля заповнені.");
}

//2

let numberOne = Number(prompt("введіть число"))
let numberTwo = Number(prompt("введіть число ще раз"))

if (numberOne + numberTwo === 10) {
    alert("вийде 10")
} else if (numberOne + numberTwo >= 10) {
    alert("вийде більше ніж 10")
} else if (numberOne + numberTwo <= 10) {
    alert("вийде Менше ніж 10")
} else {
    alert("Це не число")
}

//3

let js = prompt("Напиши JavaScript").toLowerCase()

if (js === "JavaScript".toLowerCase()) {
    alert("Tекст містить слово JavaScript")
} else {
    alert("Текст не містить слово JavaScript")
}

//4
let number = Number(prompt("Напиши число від 0 до 30"))

if (number >= 10 && number <= 20) {
    alert("Число входить в діапазон від 10 до 20")
} else {
    alert("Число не входить в діапазон від 10 до 20")
}

//5



let name = prompt("Введіть ваше ім'я (не менше 3 символів):");
    let email = prompt("Введіть ваш email (має містити '@' та '.'):");
    let password = prompt("Введіть ваш пароль (не менше 6 символів):");

    let nameValid = name.length >= 3;
    let emailValid = email.includes('@') && email.includes('.') && email.indexOf('.') > email.indexOf('@');
    let passwordValid = password.length >= 6;

    if (nameValid && emailValid && passwordValid) {
        alert("Дані введені коректно! Перенаправлення, направляйтеся до https://r.mtdv.me/watch?v=XwnFgOoMLc");
    } else {
        alert( "ПЕРЕВІРТИ ЧИ ВСЕ ПРАВИЛЬНО: - Ім'я повинно містити не менше 3 символів; - Email має містити '@' та '.' після нього; - Email має містити '@' та '.' після нього.");
    }