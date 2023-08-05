import { useAmp } from 'next/amp'

export const config = {
  amp: 'hybrid'
}

const Home= () => {
  const isAmp = useAmp()
  return (
    <div>
      <p>{isAmp ? 'AMP Home Page' : 'Home Page'}</p>
      <style jsx>{
        `p {
            color: red;
            font-size: 50px;
            text-align: center;
          }
          a {
            color: blue;
            font-size: 60px;
          }
        `
      }</style>
      <style global jsx>{
        `
        body {
          background: black;
        }
        `
      }
      </style>
      <p>{isAmp ? 'AMP Home Page' : 'Home Page'}</p>
    </div>
  )
}
export default Home