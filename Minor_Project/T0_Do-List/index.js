let text = document.getElementById('text');
let submit = document.getElementById('submit');
let cont = document.getElementById('last-cont');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let taskdiv = document.createElement('div');
    taskdiv.innerHTML = `
        <p>${text.value}</p>
        <div>
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash"></i>
            <input type="checkbox">
        </div>
    `;
    cont.appendChild(taskdiv);
    text.value = '';

    let trash = taskdiv.querySelector('.fa-trash');
    trash.addEventListener('click', (e) => {
        taskdiv.remove();
    });

    let pen = taskdiv.querySelector('.fa-pen');
    pen.addEventListener('click', () => {
        let data = taskdiv.querySelector('p').innerText;
        text.value = data;
        taskdiv.style.display = 'none';
    });
});
    