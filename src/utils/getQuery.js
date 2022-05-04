import { nanoid } from "nanoid";
import md5 from "md5";

const getQuery = (params) => {
  const timeStamp = nanoid(8);

  const hash = md5(
    timeStamp +
      process.env.react_app_private_key +
      process.env.react_app_public_key
  );

  const QUERY = `ts=${timeStamp}&apikey=${process.env.react_app_public_key}&hash=${hash}`;
  return QUERY;
};

export default getQuery;
