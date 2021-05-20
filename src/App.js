import "./App.css";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";

function App() {
  return (
    <div className='app'>
      <div className='top'>
        <p className='top_save-the-date'>save the date</p>
        <p className='top_for'>for the wedding celebration of</p>
        <div className='top_name-holder'>
          <div className='top_name-first'>
            <p className='name'>HARRY</p>
            <p className='surname'>Minnie</p>
          </div>
          <div>
            <p className='and_sign'>and</p>
          </div>
          <div className='top_name-second'>
            <p className='name'>CHANEL</p>
            <p className='surname'>Vallun</p>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <CountdownTimer />
        <div className='bottom__info'>
          <p className='bottom__date'>September 30, 2022</p>
          <p className='bottom__location'>Paarl, Cape Town</p>
        </div>
      </div>
    </div>
  );
}

export default App;
