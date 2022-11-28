import Image from 'next/image'

function Client(){
    return (
        <div className='grid md:grid-cols-6 gap-12 grid-cols-3  pt-6 pb-24  lg:pl-56 md:pl-12 md:pr-12 pl-12 max-w-7xl'>
        <div className='align-middle '>
        <Image className='md:h-4 md:w-28 h-6 w-36 block md:mt-2' src="/client1.png" width={234} height ={98}/>
        </div>
        <div className='align-middle'>
        <Image className='md:h-8 md:w-28 h-8 w-36 lg:-pt-4 block items-center justify-center' src="/client2.png" width={234} height ={98}/>
        </div>
        <div >
        <Image className='md:h-4 md:w-28 h-6 w-36 md:mt-2 block items-center justify-center' src="/client3.png" width={234} height ={98}/>
        </div>
        <div className='align-middle items-center justify-center'>
        <Image className='md:h-4 md:w-28 h-6 w-36 block md:mt-2' src="/client4.svg" width={234} height ={98}/>
        </div>
        <div className='align-middle items-center justify-center'>
         
        <Image className='h-8 md:w-28  w-36 block ' src="/client5.png" width={234} height ={98}/>
        </div>
        <div className='align-middle items-center justify-center'>
        <Image className=' md:w-28 h-8 w-36 block' src="/client6.png" width={234} height ={98}/>
        </div>
        </div>
    )
}

export default Client;