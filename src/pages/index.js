import Leftside from '@/Components/Leftside'
import Image from 'next/image'
import Feed from '@/Components/Feed'
  



export default function Home() {
  return (
    <main className="">
      <div className='flex'> 
        {/*LeftSide*/}
        <div className=''>
          <Leftside/>
        </div>
        {/*Feed*/}
        <div><Feed/></div>
        {/*RightSide*/}

      </div>

    </main>
  )
}
