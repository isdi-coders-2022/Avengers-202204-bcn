import md5 from "md5";

const getQuery = () => {
  const timeStamp = 8374732;

  const hash = md5(
    timeStamp +
      process.env.react_app_private_key +
      process.env.react_app_public_key
  );

  return `ts=${timeStamp}&apikey=${process.env.react_app_public_key}&hash=${hash}`;
};

export default getQuery;
