
declare namespace Express {
   interface Request {
    user?: {
      scope?: string,
      sub?: string
    }
    session?:{
      login?: boolean
    }
  }
}