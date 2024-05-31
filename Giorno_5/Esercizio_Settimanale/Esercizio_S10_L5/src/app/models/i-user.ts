import { iTodos } from "./i-todos"

export interface iUser {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
  title: string
  todos?: iTodos[]
}
