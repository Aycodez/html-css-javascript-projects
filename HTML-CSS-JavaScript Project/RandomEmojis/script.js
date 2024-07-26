document.addEventListener('DOMContentLoaded',() => {
    const currentEmoji = document.querySelector(".emoji");
    let emojis = [
        '😀',
        '😁',
        '😂',
        '🤣',
        '😃',
        '😅',
        '😀',
        '😊',
        '😚',
        '😶',
        '😏',
        '🥱',
        '😥',
        '😴',
        '😌',
        '😮',
        '😪',
        '🤬',
        '😱',
        '🤧',
        
    ];
    currentEmoji.addEventListener('mouseenter', () => {
        currentEmoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
    })
})