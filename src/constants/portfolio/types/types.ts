 export interface Project {
  id: number,
  title:string,
  bgImage: string,
  link: string,
  info: string,
  github?: string,
  delay?: number,
  target?: string,
  rel?: string
}