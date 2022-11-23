import Image from "next/image";

function UsecasePhoto1(){
    return (
        
        <div className="rounded-3xl relative overflow-hidden shadow-2xl m-8 md:ml-56 md:mb-48 md:mr-56 ml-16 mr-16  inline-block h-auto align-middle">
            <Image
              className="w-full pb-4"
              src="/humanbig.png"
              width={1563}
              height={1170}
            />
          </div>
       
    )
}

export default UsecasePhoto1;