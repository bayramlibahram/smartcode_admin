import path from "path";
import { fileURLToPath } from "url";

export default function (moduleUrl) {
  const filename = fileURLToPath(moduleUrl);
  return path.dirname(filename);
};
