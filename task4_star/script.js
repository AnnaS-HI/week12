function checkSpam(str) {
    const spamWords = ['viagra', 'xxx', 'ххх'];
    let result = str;
    spamWords.forEach(word => {
        const regex = new RegExp(word, 'gi'); 
        result = result.replace(regex, '***');
    });
    return result;
}

function formatName(name) {
    name = name.trim();

    const allowedCharsRegex = /^[a-zA-Zа-яА-ЯёЁ\s_&\d]+$/;  
    if (!allowedCharsRegex.test(name)) {
        return 'Ошибка: разрешены только буквы, пробелы, _ и &';
    }

    const hasDigitsInMiddle = /\d/.test(name) && !/\d$/.test(name); 
    if (hasDigitsInMiddle) {
        return 'Ошибка: цифры могут быть только в конце';
    }

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function submitComment() {
    const username = document.getElementById('username').value;
    const avatar = document.getElementById('avatar').value;
    const commentText = document.getElementById('comment').value;
    const usernameInput = document.getElementById('username');

    if (!username || !avatar || !commentText) {
        alert("Все поля должны быть заполнены!");
        return;
    }

    const formattedUsername = formatName(username);

    if (formattedUsername.startsWith('Ошибка')) {
        usernameInput.setCustomValidity(formattedUsername); 
        usernameInput.reportValidity(); 
        usernameInput.classList.add('error'); 
        return;
    } else {
        usernameInput.setCustomValidity('');
        usernameInput.classList.remove('error'); 
        usernameInput.classList.add('valid'); 
    }
    const filteredComment = checkSpam(commentText);

    const commentList = document.getElementById('commentList');
    const newComment = document.createElement('li');
    newComment.classList.add('comment');
    newComment.innerHTML = `
        <img src="${avatar}" alt="${formattedUsername}" />
        <div class="comment-text">
            <strong>${formattedUsername}</strong>
            <p>${filteredComment}</p>
        </div>
    `;
    
    commentList.prepend(newComment); 
    
    document.getElementById('username').value = '';
    document.getElementById('avatar').value = '';
    document.getElementById('comment').value = '';
}

document.getElementById('username').addEventListener('click', function() {
    this.setCustomValidity(''); 
    this.classList.remove('error');
    this.classList.remove('valid');
});
