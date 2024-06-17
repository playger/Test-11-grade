const buttomStart = document.getElementById('game-start');
const main = document.querySelector('.Main')
const questions = document.querySelectorAll('.question');
const Gorit = document.querySelector('.Gorit')
const NeGorit = document.querySelector('.NeGorit')
const first = document.querySelector('.first')

const result = document.querySelector('.result')
const resultText = document.querySelector('.result-text')
const resultTitle = document.querySelector('.result-title')

const BAnswers = document.querySelectorAll('.B-Answer')
const resultImg = document.querySelector('.result-img')
const test = document.getElementById('test')
let resId = 0
let indexQuestion = 0

let results = []

let Students = [{
        id: 1,
        name: "Марія Висоцька",
        description: "Марія Зерг. Дружить з Марусею Криловою і Поліною Прозапас. Найкраще малює в класі. Весела, працьовита та ніколи не запізнюється на ранкове коло. Любить носити короткі кофти щоб було видно пуп, любить сваритися з Пані Світланою. Танцює вальс з Денисом Смирновим.",
        imgSrc: "./Students/Maria.jpeg"
    },
    {
        id: 2,
        name: "Олександр Вісіконенко",
        description: "Всі його називають Вісік. Він дружить з Тимофієм Матюшко та Юрою Проником. Весь час сперечаєтсья з пані Юлією (хімія). Шарить в математиці та складає пробне НМТ на найвищий в класі бал. TaoBao Монстр. Танцює вальс з Поліною Прозапас.",
        imgSrc: "./Students/Visik.jpeg"
    },
    {
        id: 3,
        name: "Поліна Даценко",
        description: "Дружить з усіма. Дуже креативна і оптимістична. Не хвилюється, що про неї думають інші. Патріотка, любить Залужного. Танцює вальс з Тимофієм Матюшко.",
        imgSrc: "./Students/PolinaD.jpeg"
    },
    {
        id: 4,
        name: "Катерина Дворнікова",
        description: "Дружить з Юрієм Проником. Та, хто завжди відстоює права нашого класу. Активна, весела та талановита. За словом в карман не лізе. Гроза Школи. Танцює вальс з Юрою Проником.",
        imgSrc: "./Students/Kata.jpeg"
    },
    {
        id: 5,
        name: "Марія Крилова",
        description: "Дружить з Машею Висоцькою і Поліною Прозапас. Знає біологію і хімію найкраще в класі. Також грає на піаніно на всіх шкільних заходах. Танцювала з партнером по вальсу тільки 20 хвилин, після чого його виключили зі школи.",
        imgSrc: "./Students/Marysa.jpeg"
    },
    {
        id: 6,
        name: "Тимофій Матюшко",
        description: "Дружить з Юрою Проником і Сашею Вісіконенко. Обожнює німецьку та хоче вступити в Австрію.В минулому улюблений учень пані Олени Тарасівни. Найкращий плавець в нашому класі. Танцює вальс з Поліною Даценко.",
        imgSrc: "./Students/Tima.jpeg"
    },
    {
        id: 7,
        name: "Назар Пітцик",
        description: "Дружить з Денисом Смирновим. Має впертий характер. Любить порозмовляти на уроках і їсти поки всі пишуть контрольну. Танцює з Сашею Тертичніковою. Випадково порвав їй шкарпетку.",
        imgSrc: "./Students/Nazik.jpeg"
    },
    {
        id: 8,
        name: "Поліна Прозапас",
        description: "Дружить з Марією Висоцькою і Марусею Криловою. Любить організовувати свята та заходи. Лідер самоврядування школи. Дуже емоційна, коли стресує крутить волосся . Танцює вальс з Вісіконенко Олександром.",
        imgSrc: "./Students/PolinaP.jpeg"
    },
    {
        id: 9,
        name: "Юра Проник",
        description: "Дружить з Тимофієм Матюшко і Вісіконенко Олександром. Найбільш веселий, спортивний і стильний. Активно приймає участь у шкільному житті і хоче вступити в Англію. Боїться за свої кросівки більше ніж за життя. Танцює вальс з Катериною Дворніковою.",
        imgSrc: "./Students/Yra.jpeg"
    },
    {
        id: 10,
        name: "Денис Смирнов",
        description: "Дружить з Назаром Піциком. Найкращий програміст у нашій школі. Створив цей тест. Ходить в зал. Розсекретив Liko-gossip. Танцює з Марією Висоцькою (дуже сильно її любить, але вона його ігнорить(Сподіваюсь що ні)).",
        imgSrc: "./Students/Denys.jpeg"
    },
    {
        id: 11,
        name: "Саша Тертичнікова",
        description: "Готується до НМТ.Завжди чекає обід, щоб поїсти моркву, обожнює її. Танцює вальс з Назаром Пітциком.",
        imgSrc: "./Students/Tert.jpeg"
    },
    {
        id: 12,
        name: "Ксенія Щавлінська",
        description: "Дуже охайна та красива. Любить сміятися та спілкуватися на цікаві теми. Знає все про знаки згори. Любить пити каву з корицею по четвергам( думає, що гроші все ж таки з'являться).",
        imgSrc: "./Students/Ksyha.jpeg"
    },
]

const caltresult = function () {
    let numCount = {}
    for (let i = 0; i < results.length; i++) {
        let num = results[i];
        if (numCount[num]) {
            numCount[num]++
        } else {
            numCount[num] = 1;
        }
    }
    let max = 0
    let numMax = 0
    for (let num in numCount) {
        if (numCount[num] > max) {
            max = numCount[num]
            numMax = num
        }
    }
    return parseInt(numMax)
}

const nextQuestion = (indexQuestion) => {
    questions[indexQuestion].classList.add('hidden')
    if (indexQuestion !== questions.length - 1) {
        questions[indexQuestion + 1].classList.remove('hidden')
    }
    if (indexQuestion === questions.length - 1) {
        resId = caltresult()
        let resultStudent = Students.find(student => student.id === resId)
        result.classList.remove('hidden')
        resultTitle.innerHTML = resultStudent.name
        resultText.innerHTML = resultStudent.description
        resultImg.src = resultStudent.imgSrc
        console.log(results)
    }
}

for (let i = 0; i < BAnswers.length; i++) {
    BAnswers[i].addEventListener('click', () => {
        let ansValues = BAnswers[i].value.split(' ')
        for (let j = 0; j < ansValues.length; j++) {
            results.push(ansValues[j])
        }
        nextQuestion(indexQuestion)
        indexQuestion++

    })
}

buttomStart.addEventListener("click", () => {
    main.classList.add('hidden');
    first.classList.remove('hidden');
})

const resultId = caltresult()

for (let i = 0; i < Students.length; i++) {
    if (Students[i].id == resultId) {
        console.log(Students[i].name)
    }
}