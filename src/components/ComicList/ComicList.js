import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";

const ComicList = () => {
  const { comics, dispatch } = useContext(ComicContext);

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
