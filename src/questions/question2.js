import React from 'react'

function Question2() {
    const a = (cl) => document.querySelector(cl)

    let question = 'Qual é a fórmula da água?'
    let options = {
        opt1: 'Bh7S',
        opt2: 'H2O',
        opt3: 'CO2'
    }

    const checkOpt = (e) => {
       if( e.target.id === '001' ) {
        a('.resposta2').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta2').style.background = 'red'
        a('.resposta2').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '002' ) {
        a('.resposta2').innerHTML = 'RESPOSTA CORRETA!'
        a('.resposta2').style.background = 'green'
        a('.resposta2').style.color = 'white'
        a('.right-questions').innerHTML = parseInt(a('.right-questions').innerHTML) + 1
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '003' ) {
        a('.resposta2').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta2').style.background = 'red'
        a('.resposta2').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       }
       a('.num-questions').innerHTML = '2/5'
    }

  return (
    <div className='question2'>
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
        <div className='resposta2'></div>
    </div>
  )
}

export default Question2
