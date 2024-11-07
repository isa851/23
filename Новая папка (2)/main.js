// Создаем объект book
const book = {
    title: "Гарри Поттер",
    author: "J.K. Rowling"
  };
  
  // Функция для изменения значения свойства
  function change(obj, property) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = "изменено";
    }
  }
  
  // Пример использования
  change(book, "title");
  console.log(book); // {title: "изменено", author: "J.K. Rowling"}

  
  // Функция для проверки четности числа
function checkEvenOdd() {
    const num = prompt("Введите число:");
  
    // Проверяем, является ли введенное значение числом
    if (isNaN(num)) {
      alert("введите только числа");
    } else {
      // Преобразуем строку в число
      const number = Number(num);
      // Проверяем четность
      if (number % 2 === 0) {
        alert("четное");
      } else {
        alert("нечетное");
      }
    }
  }
  
  // Пример использования
  checkEvenOdd();
  