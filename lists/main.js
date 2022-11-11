var data1 = {
   Москва: ["№1", "№6", "№9"],
   Рязань: ["№3", "№4", "№11", "№17"],
   Красноярск: ["№7", "№13"],
   Тюмень: ["№2", "№10", "№12"],
   Оренбург: ["№8", "№15", "№18"],
   Омск: ["№5", "№16"],
   Надым: ["№14"]
};
var data2 = {
   '№1': ["Петров", "Сидоров"],
   '№2': ["Лобиков", "Тонкова", "Шпильц"],
   '№3': ["Любова", "Добрый"],
   '№4': ["Шарапов", "Куприянов", "Шереметьева"],
   '№5': ["Сулавко", "Мухин", "Бухольц"],
   '№6': ["Никитенко", "Горный", "Мирзунок"],
   '№7': ["Иванов", "Назаров", "Артемьева"],
   '№8': ["Белова", "Серый"],
   '№9': ["Сулавко", "Булатова"],
   '№10': ["Кот", "Тигранюк", "Мивка"],
   '№11': ["Хомченко", "Неупокоев"],
   '№12': ["Чурсин", "Кобальт", "Хворый"],
   '№13': ["Саталкин", "Терентьев", "Валов"],
   '№14': ["Любимо", "Трепачёв"],
   '№15': ["Литвинов", "Скочко"],
   '№16': ["Прокопьеф", "Хворястяной", "Семенюк"],
   '№16': ["Грилько", "Шарпович"],
   '№16': ["Зубов", "Хомяк", "Семенов"]
};
var data3 = {
   Петров: ["1"],
   Сидоров: ["2"],
   Лобиков: ["1"],
   Тонкова: ["2"],
   Шпильц: ["3"],
   Любова: ["1"],
   Добрый: ["2"],
   Шарапов: ["1"],
   Куприянов: ["2"],
   Шереметьева: ["2"],
   Сулавко: ["1"],
   Мухин: ["2"],
   Бухольц: ["3"],
   Никитенко: ["1"],
   Горный: ["2"],
   Мирзунок: ["3"],
   Иванов: ["1"],
   Назаров: ["2"],
   Артемьева: ["3"],
   Белова: ["1"],
   Серый: ["2"],
   Сулавко: ["1"],
   Булатова: ["2"],
   Кот: ["1"],
   Тигранюк: ["2"],
   Мивка: ["3"],
   Хомченко: ["1"],
   Неупокоев: ["2"],
   Чурсин: ["1"],
   Кобальт: ["2"],
   Хворый: ["3"],
   Саталкин: ["1"],
   Терентьев: ["2"],
   Валов: ["3"],
   Любимо: ["1"],
   Трепачёв: ["2"],
   Литвинов: ["1"],
   Скочко: ["2"],
   Прокопьеф: ["1"],
   Хворястяной: ["2"],
   Семенюк: ["3"],
   Грилько: ["1"],
   Шарпович: ["2"],
   Зубов: ["1"],
   Хомяк: ["2"],
   Семенов: ["3"]
};
var data4 = {
   '1': ["Первая"],
   '2': ["Вторая"],
   '3': ["Первая"]
};
var city = document.getElementById("city");
var gild = document.querySelector('#gild');
var employee = document.querySelector('#employee');
var brigade = document.querySelector('#brigade');
var change = document.querySelector('#change');
//city select
var citeis = Object.keys(data1);

for (var i = 0; i < citeis.length; i++) {
   city.add(new Option(citeis[i]));
};

city.addEventListener('change', function() {
   var gilds = data1[this.value];
   gild.length = 0;

   for (var i = 0; i < gilds.length; i++) {
      gild.add(new Option(gilds[i]));
   }
});

//gild select
var guilds = Object.keys(data2);

for (var i = 0; i < guilds.length; i++) {
   gild.add(new Option(guilds[i]));
};

gild.addEventListener('change', function() {
   var employees = data2[this.value];
   employee.length = 0;

   for (var i = 0; i < employees.length; i++) {
      employee.add(new Option(employees[i]));
   }
});

//employee select
var employment = Object.keys(data3);

for (var i = 0; i < employment.length; i++) {
   employee.add(new Option(employment[i]));
};

employee.addEventListener('change', function() {
   var brigades = data3[this.value];
   brigade.length = 0;

   for (var i = 0; i < brigades.length; i++) {
      brigade.add(new Option(brigades[i]));
   }
});

//brigade select
var team = Object.keys(data4);

for (var i = 0; i < team.length; i++) {
   brigade.add(new Option(team[i]));
};

brigade.addEventListener('click', function() {
   var changes = data4[this.value];
   change.length = 0;

   for (var i = 0; i < changes.length; i++) {
      change.add(new Option(changes[i]));
   }
});
