import Comic from "../Comic/Comic";

const WantComicList = () => {
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
export default WantComicList;
