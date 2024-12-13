document.getElementById('action-button').addEventListener('click', function () {
    const message = document.getElementById('message');
    message.textContent = 'You clicked the button!';
    message.style.color = 'green';
});
