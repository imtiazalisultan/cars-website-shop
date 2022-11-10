import { NextApiRequest, NextApiResponse } from "next";
import cars from "../../public/api/cars.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (_req: NextApiRequest, res: NextApiResponse) {
  return res.send(cars);
}
