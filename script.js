// Функция для загрузки данных
async function fetchData() {
  try {
    // Отправляем GET-запрос к API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // Парсим JSON-ответ

    // Находим элемент, куда будем добавлять данные
    const dataList = document.getElementById("data-list");

    // Перебираем полученные данные
    data.forEach((item) => {
      const listItem = document.createElement("li"); // Создаем новый элемент списка
      listItem.textContent = `${item.id}: ${item.name}`; // Заполняем его текстом
      dataList.appendChild(listItem); // Добавляем элемент на страницу
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error); // Выводим ошибку в консоль
  }
}

// Вызываем функцию после загрузки страницы
fetchData();
