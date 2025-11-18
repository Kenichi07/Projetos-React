import tags from "./tags.json";

const Tags = () => {
  return (
    <>
      <p>Busque por tags:</p>
      {tags.map((tag) => (
        <button key={tag.id} className="tag-button">
          {tag.titulo}
        </button>
      ))}
    </>
  );
};

export default Tags;
