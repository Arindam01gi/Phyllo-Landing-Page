import Image from 'next/image'
import Button1 from '../pages/Button1'
import Button2 from '../pages/Button2'


function Navbar() {
    return(
    <nav className="realtive container mx-auto p-6 sticky top-0 z-50 bg-white">
      <div className="flex items-center center m-4">
        <div className="pt-1 ml-40">
         <Image src="/logo.svg"  width={110}height ={77}/>
        </div>
        <div className='flex hidden md:flex space-x-6 ml-16'>
          <h2>Products</h2>
          <h2>Pricing</h2>
          <h2>Industries</h2>
          <h2>Developers</h2>
          <h2>Comapny</h2>
        </div>
        <div className='ml-28'>
        <div  className='flex invisible lg:visible'>
        <Button1 />
        <Button2 />
        </div>
        </div>
        
      </div>
     
    

    </nav>
    );
  }
  
  export default Navbar;