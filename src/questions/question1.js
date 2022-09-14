function Question1() {
    const a = (cl) => document.querySelector(cl)

    let question = 'Qual é a capital do Brasil?'
    let options = {
        opt1: 'São Paulo',
        opt2: 'Rio de Janeiro',
        opt3: 'Brasília'
    }

    const checkOpt = (e) => {
       if( e.target.id === '001' ) {
        a('.resposta1').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta1').style.background = 'red'
        a('.resposta1').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '002' ) {
        a('.resposta1').innerHTML = 'RESPOSTA ERRADA!'
        a('.resposta1').style.background = 'red'
        a('.resposta1').style.color = 'white'
        a('.right-questions').setAttribute('id', 'true')
       } else if( e.target.id === '003' ) {
        a('.resposta1').innerHTML = 'RESPOSTA CORRETA!'
        a('.resposta1').style.background = 'green'
        a('.resposta1').style.color = 'white'
        a('.right-questions').innerHTML = parseInt(a('.right-questions').innerHTML) + 1
        a('.right-questions').setAttribute('id', 'true')
       }
       a('.num-questions').innerHTML = '1/5'
    }

  return (
    <div className='question1'>
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
        <div className='resposta1'></div>
    </div>
  )
}

export default Question1
