import development from "./development";
import production from "./production";

const settings = {
  development,
  production,
}[process.env.NODE_ENV];

export default settings;