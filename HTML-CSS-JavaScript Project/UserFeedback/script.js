document.addEventListener('DOMContentLoaded', ()=>{
    const wrapper = document.querySelector('.container');
    const container = document.querySelector('.emojis');
    const emojis = document.querySelectorAll('.emoji');
    const btn = document.querySelector('button');
    let feedback;
    container.addEventListener('click', (e) =>{
        emojis.forEach((emoji) => {
            emoji.className = 'emoji';
        })
        e.target.className = 'emoji active';
        feedback = e.target.children[1].textContent;

    })
    btn.addEventListener('click', () =>{
        wrapper.innerHTML = `
        <p>🎈</p> 
        <p>Thank You!</p>
        <p>Feedback: ${feedback}</p>
        
        `;
    })

})