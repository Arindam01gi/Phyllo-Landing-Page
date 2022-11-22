import Image from 'next/image'

function Main() {
  return (
    <div className='mb-28'>
      <div className=" items-center self-center text-center pt-12">
        <h1 className="font-extrabold text-4xl  lg:text-5xl ml-auto ">
          Instant access to identify data
        </h1>
        <p className="pt-12 ml-2 text-center ">
          Easily verify creator identity and profile data to get deep insights
          into 
          <br/>their fan following and reputation
        </p>
      </div>
      
      <div className='ml-28 lg:ml-56  items-center center pt-12'>
     
          <Image className=' custom max-w-screen-lg object-fit w-10/12'  src="/img1.png"width={3136} height={1641}/>
      
         
      
         
         
      </div>
      
    </div>
  );
}
export default Main;
