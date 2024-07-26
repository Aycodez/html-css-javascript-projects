document.addEventListener('DOMContentLoaded',() => {
	const hr = document.querySelector('#h');
	const min = document.querySelector('#m');
	const sec = document.querySelector('#s');
	

	const timeInterval = setInterval(() => {
        const time = new Date();
        hr.textContent = time.getHours();
        min.textContent = time.getMinutes();
        sec.textContent = time.getSeconds();
        
    }, 1000);
    
    const btn = document.querySelector('button');
    btn.addEventListener('click', () =>{
        if (btn.innerText === 'stop'){
            clearInterval(timeInterval);
            btn.innerText = 'Start';

        }
        else {
            btn.innerText = 'stop';
            timeInterval = setInterval(() => {
                const time = new Date();
                hr.textContent = time.getHours();
                min.textContent = time.getMinutes();
                sec.textContent = time.getSeconds();
                
            }, 1000);
            

        }
        
        
    })
})
