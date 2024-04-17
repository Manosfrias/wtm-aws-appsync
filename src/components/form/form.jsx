import { useRef } from "react";
import { useSpeakers } from "../../contexts/speakersContext";
import "./form.css";

export function Form() {
  const { addSpeaker } = useSpeakers();
  const name = useRef();
  const img = useRef();

  const handleSubmit = () => {
    const speaker = {
      name: name?.current?.value,
      img: img?.current?.value,
    };
    addSpeaker(speaker);
  };

  return (
    <>
      <input type="text" id="name" ref={name} />
      <input type="text" id="img" ref={img} />
      <button onClick={() => handleSubmit()}>Enviar</button>
    </>
  );
}
