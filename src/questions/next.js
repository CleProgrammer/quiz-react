import React, { useState } from 'react'

function Next() {
    const a = (cl) => document.querySelector(cl)

    const [numQeuestions, setnumQuestions] = useState(5)

    const nextQuestion = () => {
        if(a('.right-questions').id === 'false') {
            a('.modal-check-answer').style.display = 'block'
            a('.modal-check-answer').style.display = 'flex'
        } else {
            setnumQuestions( numQeuestions - 1 )
            if( numQeuestions > 1 ) {
                a('.num-questions').innerHTML = `${parseInt( a('.num-questions').innerHTML[0] ) + 1}/5`
                a(`.question${parseInt( a('.num-questions').innerHTML[0] ) - 1}`).style.display = 'none'
                a(`.question${parseInt( a('.num-questions').innerHTML[0] )}`).style.display = 'block'
            } else if( a('.num-questions').innerHTML === '5/5') {
                if( parseInt(a('.right-questions').innerHTML) <= 2 ) {
                    a('.right-questions').style.background = 'red'
                } else if( parseInt(a('.right-questions').innerHTML) === 3 ) {
                    a('.right-questions').style.background = '#d3be00'
                } else if( parseInt(a('.right-questions').innerHTML) > 3 ) {
                    a('.right-questions').style.background = 'green'
                }
                a('.question5').style.display = 'none'
                a('.num-questions').style.display = 'none'
                a('.next-question').style.display = 'none'
                a('.end-quiz').style.display = 'block'
                a('.right-questions').style.display = 'block'
                a('.right-questions').innerHTML = 'VOCÊ ACERTOU ' + a('.right-questions').innerHTML + '/5 QUESTÕES!'
            }
            a('.right-questions').setAttribute('id', 'false')
        }
    }

  return (
    <button className='next-question' onClick={nextQuestion}>PRÓXIMA</button>
  )
}

export default Next
