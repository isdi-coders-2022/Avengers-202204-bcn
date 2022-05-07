import { useContext } from "react";
import APIContext from "../../store/contexts/APIContext";

import { DotSpinner } from "@uiball/loaders";

const Loading = () => {
  const {
    apiStatus: { loading },
  } = useContext(APIContext);

  return <>{loading && <DotSpinner size={40} speed={0.9} color="black" />}</>;
};

export default Loading;
