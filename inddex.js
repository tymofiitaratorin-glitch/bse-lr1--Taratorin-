// Функція для валідації email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Функція для валідації паролю (мінімум 8 символів, одна велика буква, одна цифра)
function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Приклад використання при реєстрації
function registerUser(email, password) {
  if (!validateEmail(email)) {
    return "Невірний формат email";
  }
  if (!validatePassword(password)) {
    return "Пароль повинен містити мінімум 8 символів, одну велику букву та одну цифру";
  }
  // Тут можна додати логіку для збереження користувача
  return "Реєстрація успішна";
}

// Приклад виклику
console.log(registerUser("user@example.com", "Password123")); // Реєстрація успішна
console.log(registerUser("invalid-email", "pass")); // Невірний формат email
