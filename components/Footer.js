import Image from "next/image";

function Footer() {
  return (
    <div className=" footer-background  p-16 lg:pl-48 md:-pl-24 mt-4">
    <div className=" mb-72 grid grid-cols-1 md:grid-cols-2">
    <div className="pt-10  block">
        <div>
          <Image
            className="h-100 w-100"
            src="/logo2.svg"
            width={150}
            height={150}
          />
        </div>
        <div>
          <p className=" footer-para pt-6 md:text-base  text-sm font-bold  mr-28 lg:mr-72 mt-4">
            APIs for continuous access to verified, creator-permissioned data
            across different platforms
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 lg:-ml-72 lg:pr-48 md:-ml-24 ">
        <div className="mt-12 block space-y-2">
          <div className="font-bold text-base  ">Product</div>
          <div className="footer-link-wrapper ">
            <h2 className="text-sm  font-bold text-gray-400 mt-4">Identity</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className=" text-sm  font-bold text-gray-400 mt-4">Income</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className="  text-sm  font-bold text-gray-400 mt-4">Engagement</h2>
          </div>
        </div>

        <div className="pt-12 flex flex-col ml-2 ">
          <div className="font-bold text-base">Industries</div>

          <div className="footer-link-wrapper">
            <h2 className="text-sm  mt-4 font-bold text-gray-400">Influencer marketing</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className="text-sm  font-bold text-gray-400 mt-4">Financial services</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className="text-sm  font-bold text-gray-400 mt-4">Web3</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className="text-sm  font-bold text-gray-400 mt-4">Creator tools</h2>
          </div>
        </div>
        <div className="pt-12 flex flex-col ml-2 ">
          <div className="font-bold text-base">Company</div>
          <div className="footer-link-wrapper">
            <h2 className="text-sm f font-bold text-gray-400 mt-4">Careers</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className="text-sm  font-bold text-gray-400 mt-4">Terms of service</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className="text-sm  font-bold text-gray-400 mt-4">Privacy policy</h2>
          </div>
          <div className="footer-link-wrapper">
            <h2 className="text-sm  font-bold text-gray-400 mt-4">End user agreement</h2>
          </div>
         
        </div>

        <div className="pt-12 flex flex-col  ml-2">
          <div className="font-bold text-base">Developer</div>
           <div className="footer-link-wrapper">
           <h2 className="text-sm  font-bold text-gray-400 mt-4"> Get Started</h2>
           </div>
           <div className="footer-link-wrapper">
           <h2 className="text-sm  font-bold text-gray-400 mt-4">Docs</h2>
           </div>
           <div className="footer-link-wrapper">
           <h2 className="text-sm font-bold text-gray-400 mt-4">Platform Coverage</h2>
           </div>
            
            
            
          
        </div>
      </div>
    </div>
     
    </div>
  );
}
export default Footer;
