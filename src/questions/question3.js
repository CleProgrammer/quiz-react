import React from 'react'

function Question3() {
    const a = (cl) => document.querySelector(cl)

    let question = 'Quem descobriu o Brasil?'
    let options = {
        opt1: 'Cristóvão Colombo',
        opt2: 'Pedro Álvares Cabral',
        opt3: 'Dom Pedro I'
    }

    const checkOpt = (e) => {
       if( e.target.id === '001' ) {
        a('.resposta3').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta3').style.background = 'red'
        a('.resposta3').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '002' ) {
        a('.resposta3').innerHTML = 'RESPOSTA CORRETA!'
        a('.resposta3').style.background = 'green'
        a('.resposta3').style.color = 'white'
        a('.right-questions').innerHTML = parseInt(a('.right-questions').innerHTML) + 1
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '003' ) {
        a('.resposta3').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta3').style.background = 'red'
        a('.resposta3').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       }
       a('.num-questions').innerHTML = '3/5'
    }

  return (
    <div className='question3'>
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
        <div className='resposta3'></div>
    </div>
  )
}

export default Question3
