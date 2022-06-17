// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DATA } from "./data/data"
export default function handler(req, res) {
  res.status(200).json(DATA)
}
