import Link from "next/link";
import { Inter } from 'next/font/google'
export const isAmp = { amp: true }
export default function Home() {
  
  return (
    <>
    
    {isAmp ? (
       <div>
       <Link rel="amphtml" href="/home?amp=1" >
        login form
       </Link>
       </div>
      ) : (
        <>djsjj</>
      )}
    </>
  )
}
