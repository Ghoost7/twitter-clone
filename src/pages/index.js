import Leftside from '@/Components/Leftside'
import Image from 'next/image'
import Feed from '@/Components/Feed'
import RightSide from '@/Components/RightSide'
  

export default function Home() {
  return (
    <main className="">
      <div className='flex mx-auto'> 
        {/*LeftSide*/}
        
          <Leftside/>
        
        {/*Feed*/}
        <Feed/>
        {/*RightSide*/}
        <RightSide/>

      </div>

    </main>
  )
}
