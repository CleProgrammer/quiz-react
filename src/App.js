import './App.css';
import Next from './questions/next';
import Question1 from './questions/question1';
import Question2 from './questions/question2';
import Question3 from './questions/question3';
import Question4 from './questions/question4';
import Question5 from './questions/question5';

function App() {
  const a = (cl) => document.querySelector(cl)

  const closeModal = () => {
    a('.modal-check-answer').style.display = 'none'
  }

  return (
    <div className="App">
      <div className='num-questions'>1/5</div>
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Next />
      <div className='end-quiz'>QUIZ FINALIZADO!</div>
      <div className='right-questions' id='false'>0</div>
      <div className='modal-check-answer'>
        <div>VOCÊ NÃO ESCOLHEU SUA RESPOSTA</div>
        <div className='close-modal' onClick={closeModal}>X</div>
      </div>
    </div>
  );
}

export default App;
