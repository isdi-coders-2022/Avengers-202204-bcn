import Comic from "../Comic/Comic";

const ComicList = () => {
  return (
    <ul>
      <Comic
        imageUrl="/assets/Alien.jpeg"
        title="Alien"
        info="Alien"
        selected={true}
      />
    </ul>
  );
};
export default ComicList;
