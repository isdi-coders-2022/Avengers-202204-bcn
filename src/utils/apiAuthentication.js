import { nanoid } from "nanoid";
import md5 from "md5";

const REACT_APP_PUBLIC_KEY = "c8e50321cae9b91671a256f31c430678";
const REACT_APP_PRIVATE_KEY = "2cc0c1e660b8aed3c95d656dfb37656fc3cf08b3";

const TS = nanoid(8);

const hash = md5(TS + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

const QUERY = `ts=${TS}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}`;

const baseUrl = `http://gateway.marvel.com/v1/public/comics?${QUERY}`;

export default baseUrl;
