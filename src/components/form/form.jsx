import { useRef } from "react";
import { API_CONNECTION } from "../../config/apiConnection";
import { beerService } from "../../utils/beers";

export function Form() {
  const { createBeer } = beerService(API_CONNECTION);
  const name = useRef();
  const img = useRef();

  const handleSubmit = async () => {
    const beer = {
      name: name?.current?.value,
      img: img?.current?.value,
    };

    const data = await createBeer(beer);
  };

  return (
    <>
      <input type="text" id="name" ref={name} />
      <input type="text" id="img" ref={img} />
      <button onClick={() => handleSubmit()}>Enviar</button>
    </>
  );
}
