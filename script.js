document.getElementById('toggle-button').addEventListener('click', function () {
    const content = document.getElementById('dynamic-text');

    // Check current content and toggle to new content
    if (content.textContent === 'This is the default content.') {
        content.textContent = 'Here is the new content you wanted to see!';
    } else {
        content.textContent = 'This is the default content.';
    }
});
