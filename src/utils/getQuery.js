import { nanoid } from "nanoid";
import md5 from "md5";

const getQuery = () => {
  const timeStamp = nanoid(8);

  const hash = md5(
    timeStamp +
      process.env.react_app_private_key +
      process.env.react_app_public_key
  );

  const query = `ts=${timeStamp}&apikey=${process.env.react_app_public_key}&hash=${hash}`;
  return query;
};

export default getQuery;
