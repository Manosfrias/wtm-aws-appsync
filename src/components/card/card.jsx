import "./card.css";

export function Card({ speaker }) {
  return (
    <article className="speakers__card">
      <img src={speaker?.img} />
      <p className="speakers__card_name">{speaker?.name}</p>
    </article>
  );
}
