import React from 'react'

function Question5() {
    const a = (cl) => document.querySelector(cl)

    let question = 'Qual é o idioma da Argentina?'
    let options = {
        opt1: 'Português',
        opt2: 'Argentino',
        opt3: 'Espanhol'
    }

    const checkOpt = (e) => {
       if( e.target.id === '001' ) {
        a('.resposta5').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta5').style.background = 'red'
        a('.resposta5').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '002' ) {
        a('.resposta5').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta5').style.background = 'red'
        a('.resposta5').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '003' ) {
        a('.resposta5').innerHTML = 'RESPOSTA CORRETA!'
        a('.resposta5').style.background = 'green'
        a('.resposta5').style.color = 'white'
        a('.right-questions').innerHTML = parseInt(a('.right-questions').innerHTML) + 1
        a('.right-questions').setAttribute('id', 'true')
       }
       a('.num-questions').innerHTML = '5/5'
    }

  return (
    <div className='question5'>
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
        <div className='resposta5'></div>
    </div>
  )
}

export default Question5
