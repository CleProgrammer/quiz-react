import React from 'react'

function Question4() {
    const a = (cl) => document.querySelector(cl)

    let question = 'Qual é a moeda dos EUA?'
    let options = {
        opt1: 'Dólar',
        opt2: 'Real',
        opt3: 'Euro'
    }

    const checkOpt = (e) => {
       if( e.target.id === '001' ) {
        a('.resposta4').innerHTML = 'RESPOSTA CORRETA!'
        a('.resposta4').style.background = 'green'
        a('.resposta4').style.color = 'white'
        a('.right-questions').innerHTML = parseInt(a('.right-questions').innerHTML) + 1
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '002' ) {
        a('.resposta4').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta4').style.background = 'red'
        a('.resposta4').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '003' ) {
        a('.resposta4').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta4').style.background = 'red'
        a('.resposta4').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       }
       a('.num-questions').innerHTML = '4/5'
    }

  return (
    <div className='question4'>
        <div>{question}</div>
        <div className='options'>
            <div>
                <input type='radio' id='001' name='option' onClick={checkOpt}/>
                <div>{options.opt1}</div>
            </div>
            <div>
                <input type='radio' id='002' name='option' onClick={checkOpt} />
                <div>{options.opt2}</div>
            </div>
            <div>
                <input type='radio' id='003' name='option' onClick={checkOpt} />
                <div>{options.opt3}</div>
            </div>
        </div>
        <div className='resposta4'></div>
    </div>
  )
}

export default Question4
