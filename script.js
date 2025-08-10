function startGameOne() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessedCorrectly = false;

    alert("Привет! Начинаем игру 'Угадай Число'.\nЯ загадал число от 1 до 100.");

    while (!guessedCorrectly) {
        let userInput = prompt("Введи свое предположение (число от 1 до 100). Если хочешь сдаться, нажми 'Отмена'.");
         if (userInput === null) {
            alert('Игра окончена.');
            return;
        }

         const userGuess = parseInt(userInput);

         if (isNaN(userGuess)) {
            alert('Ошибка! Введи целое число.');
            continue;
        }

        if (userGuess < 1 || userGuess > 100) {
            alert("Число должно быть в диапазоне от 1 до 100. Попробуй еще раз.");
            continue;
        }

        if (userGuess < randomNumber) {
            alert(`Загаданное число БОЛЬШЕ, чем ${userGuess}. Попробуй еще!`);
        } else if (userGuess > randomNumber) {
            alert(`Загаданное число МЕНЬШЕ, чем ${userGuess}. Попробуй еще!`);
        } else {
                  guessedCorrectly = true;
        alert(`🎉 Поздравляю! Ты угадал! Загаданное число было ${randomNumber}.`);
        }
      }
    }
 
    const playGameRockPaperScissors = () => {
      const choices = ["камень", "ножницы", "бумага"];
      
      let userChoice = prompt("Выберите: камень, ножницы или бумага");
      
      if (userChoice === null) {
          alert("Игра отменена");
          return;
      }
      
      userChoice = userChoice.toLowerCase().trim();
      
      if (!choices.includes(userChoice)) {
          alert("Некорректный выбор! Попробуйте еще раз.");
          return;
      }
      
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];
      
      let result;
      
      if (userChoice === computerChoice) {
          result = "Ничья!";
      } else if (
          (userChoice === "камень" && computerChoice === "ножницы") ||
          (userChoice === "ножницы" && computerChoice === "бумага") ||
          (userChoice === "бумага" && computerChoice === "камень")
      ) {
          result = "Вы выиграли!";
      } else {
          result = "Вы проиграли!";
      }
      
      alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
  };
  