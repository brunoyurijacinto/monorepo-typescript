import { Request, Response } from "express"
import { isEven } from "@monorepo/utils"
export const testHandler = async (req: Request, resp: Response) => {
  resp.setHeader("Content-Type", "application/json")
  resp.json({ message: "Hello from the server!", isEven: isEven(2), isOdd: isEven(3) })
  resp.end()
}
