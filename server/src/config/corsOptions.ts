import { CorsOptions } from "cors";

const allowedOrigin = ["http://localhost:3000"];
export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || (origin && allowedOrigin.includes(origin))) {
      callback(null, true);
    } else {
      callback(new Error("Cors not allowed"));
    }
  },
};
