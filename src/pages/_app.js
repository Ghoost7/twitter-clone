import Leftside from '@/Components/Leftside'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return ( 
  <div className=''>
    <div className=''>
      <Leftside/>
   <Component {...pageProps} />
    
   </div>    
</div>
  
  )
}
