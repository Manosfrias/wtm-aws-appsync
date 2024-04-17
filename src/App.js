import './assets/styles/App.css';
import { Form } from './components/form/form';
import { Card } from './components/card/card';
import { useSpeakers } from './contexts/speakersContext';

function App() {
  const { speakers } = useSpeakers();

  return (
    <main className="speakers">
     
      <h1 className="speakers-title">Ponentes</h1>
      <section className='speakers__wrapper'>
        {speakers?.map(speaker => <Card key={speaker.name} speaker={speaker} />)}
      </section>
      <Form />
    </main>
  );
}

export default App;
