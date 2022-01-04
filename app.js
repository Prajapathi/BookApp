//fetching data from API

window.addEventListener('DOMContentLoaded', (event) => {
    fetch(`https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6`)
        .then(response => response.json()).then(data => {

            const list = document.querySelector('.list');

            data.clients.forEach(client => {
                const tr = document.createElement('tr');
                const nametd = document.createElement('td');
                const companytd = document.createElement('td');
                nametd.classList.add('name', 'mb-0', 'text-sm');
                nametd.appendChild(document.createTextNode(client.name));
                companytd.appendChild(document.createTextNode(client.company))
                tr.appendChild(nametd)
                tr.appendChild(companytd)
                list.appendChild(tr);
            });
        })
});