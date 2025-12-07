
1. Огляд реалізованої функціональності
Робота з DOM та динамічний контент

| Пункт | Опис | Приклад використаного селектора |
| **Бургер-меню** | Клік на #mobile-menu-btn для відображення/приховування #nav-menu через toggle класу `active`. | `#mobile-menu-btn`, `#nav-menu` |
| **Лічильник осіб** | Кнопки `+` / `-` змінюють значення input#personsInput з обмеженням min/max. | `#personsInput`, `#personsPlus`, `#personsMinus` |
| **Показати більше** | Кнопка #read-more-btn перемикає видимість блоку #more-text (акордеон). | `#read-more-btn`, `#more-text` |
| **Динамічна дата** | Автоматично встановлює поточну дату у футері. | `new Date().toLocaleDateString()` |
| **Додавання елемента** | **Нереалізовано.** *Див. секцію 4 для прикладу.* |  |
| **Маніпуляція стилями** | **Нереалізовано.** *Див. секцію 4 для прикладу.* |  |

Події та Обробники

| Пункт | Опис | Технологія |
| :--- | :--- | :--- |
| **Перемикач теми** | Кнопка #theme-toggle додає/забирає клас `dark-theme` на `<body>` та зберігає стан у LocalStorage. | `click`, `localStorage` |
| **Підсвітка меню** | **Нереалізовано.** *Див. секцію 4.* |  |
| **Зміна шрифту клавішами** | **Нереалізовано.** *Див. секцію 4.* |  |

### ✅ Робота з формами та валідація

| Пункт | Опис валідації | Логіка |
| :--- | :--- | :--- |
| **Обробка Submit** | Заборона стандартної відправки, виведення даних у консоль. | `form.addEventListener('submit', ...)` |
| **Клієнтська валідація** | Ім'я ≥ 3 символи, Email перевірка формату, Повідомлення ≥ 10 символів. | Функції `validateForm`, `setError`, `setSuccess` |
| **Візуальна зворотна реакція** | При помилці поле червоне (.invalid), при успіху зелене (.valid). | `classList.add/remove` |

---

## 2. Використані технології JavaScript

### 2.1. DOM (Document Object Model)
- Знаходження: `document.getElementById()`, `document.querySelectorAll()`
- Маніпуляція стилями/класами: `classList.toggle()`, `classList.add()`, `style.display`
- Створення/контент: `document.createElement()`, `element.textContent = ...`, `appendChild()`

### 2.2. Events (Події)
- Кліки: `addEventListener('click', ...)`
- Форми: `form.addEventListener('submit', event.preventDefault())`

### 2.3. Validation (Валідація)
- Регулярні вирази: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Умови: перевірка довжини `.length`, порожніх значень `.trim()`

### 2.4. LocalStorage
- Збереження теми сайту: `localStorage.setItem('saved-theme', ...)`
- Збереження імені користувача після відправки форми: `localStorage.getItem('user_name')`

---

