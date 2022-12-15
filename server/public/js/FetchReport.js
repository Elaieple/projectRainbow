
console.log('dfiughkdfhk');

const inco = document.querySelector('.income');

inco.addEventListener('click', (e) => {
    if(e.target.name === 'button-inc')
    
    {
        const cli = e.detail;
        console.log(cli)  

    const nevcont = document.createElement('div')
        nevcont.className = 'newForm'
        const newinc  = document.createElement('input')
        newinc.className = 'form-control'
        const newrom = document.createElement('input')
        newrom.className = 'form-control'
        const newsts = document.createElement('select')
        newsts.className = 'form-select'
        const opt = document.createElement('option')
        opt.setAttribute('selected', true);
        const opt1 = document.createElement('option')
        const opt2 = document.createElement('option')
        opt1.value="Частное лицо"
        opt2.value="Юридическое лицо"
        opt1.innerText='Частное лицо'
        opt2.innerText='Юридическое лицо'
        newsts.appendChild(opt);
        newsts.appendChild(opt1);
        newsts.appendChild(opt2);
        const lableinc = document.createElement('label')
        lableinc.innerText = 'Поступление'
        const lablefrom = document.createElement('label')
        lablefrom.innerText = 'От кого'
        const lablestat = document.createElement('label')
        lablestat.innerText = 'Статус'

        inco.appendChild(nevcont)
        nevcont.appendChild(lableinc)
        nevcont.appendChild(newinc)
        nevcont.appendChild(lablefrom)
        nevcont.appendChild(newrom)
        nevcont.appendChild(lablestat)
        nevcont.appendChild(newsts)


    }
})

