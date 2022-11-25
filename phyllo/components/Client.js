import Image from 'next/image'

function Client(){
    return (
        <div className='client-logo-grid items-center pt-8 pb-24  lg:pl-56 pl-12 mr-56 flex-shrink-0'>
        <div className='client-logo-block'>
        <Image className='h-auto w-full' src="/client1.png" width={234} height ={98}/>
        </div>
        <div className='client-logo-block'>
        <Image className=' h-auto w-full' src="/client2.png" width={234} height ={98}/>
        </div>
        <div className='client-logo-block'>
        <Image className='  h-auto' src="/client3.png" width={234} height ={98}/>
        </div>
        <div className='client-logo-block'>
        <Image className='  lg:w-2/3 h-auto' src="/client4.svg" width={234} height ={98}/>
        </div>
        <div className='client-logo-block'>
         
        <Image className='lg:w-2/3 h-auto' src="/client5.png" width={234} height ={98}/>
        </div>
        <div className='client-logo-block'>
        <Image className='  h-auto' src="/client6.png" width={234} height ={98}/>
        </div>
        
        
        
       
      
        
        
        
         

         
        

        </div>
    )
}

export default Client;