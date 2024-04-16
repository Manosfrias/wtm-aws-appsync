export function Card({ beer }) {
  return (
    beer && (
      <article>
        <p>{beer?.name}</p>
        <image src={beer?.img} />
      </article>
    )
  );
}
