const alphabets = {
    english: 'abcdefghijklmnopqrstuvwxyz',
    german: 'abcdefghijklmnopqrstuvwxyzäöüß',
    russian: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
    spanish: 'abcdefghijklmnñopqrstuvwxyzáéíóúü'
};

function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomWord(language) {
    const alphabet = alphabets[language];
    let indices = [];
    
    for (let i = 0; i < 4; i++) {
        indices.push(getRandomIndex(0, alphabet.length - 1));
    }
    
    let randomWord = indices.map(index => alphabet[index]).join('');
    
    document.getElementById('indexRange').textContent = `0 до ${alphabet.length - 1}: ${indices.join(', ')}`;
    document.getElementById('randomWord').textContent = randomWord;
}

document.getElementById('languageSelect').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    generateRandomWord(selectedLanguage);  
});

// Генерируем слово по умолчанию при загрузке
generateRandomWord('english');
