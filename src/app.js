import { hot } from "react-hot-loader/root";
import Counter from "./components/counter";

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')

export default hot(Counter);
