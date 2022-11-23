import Image from "next/image";

function Footer() {
  return (
    <div className=" footer-background flex space-x-6 pr-36 pl-36 ">
      <div className="pt-12  block">
        <Image
          className="h-100 w-100"
          src="/logo2.svg"
          width={150}
          height={150}
        />
        <p className="pt-6  text-lg mr-2">
          APIs for continuous access to verified, creator-permissioned data
          across different platforms
        </p>
      </div>
      <div className="mr-12 flex">
        <div className="pt-12 block ml-0 mr-12">
          <div className="font-bold">Product</div>
          <div className="pt-6">
            <h2>Identity</h2>
            <h2 className="pt-6">Income</h2>
            <h2 className="pt-6">Engagement</h2>
          </div>
        </div>
        <div className="pt-12 block ml-12">
          <div className="font-bold">Industries</div>
          <div className="pt-6">
            <h2>Influencer marketing</h2>
            <h2 className="pt-6">Financial services</h2>
            <h2 className="pt-6">Web3</h2>
            <h2 className="pt-6">Creator tools</h2>
          </div>
        </div>
        <div className="pt-12 block ml-12">
          <div className="font-bold">Company</div>
          <div className="pt-6">
            <h2>Careers</h2>
            <h2 className="pt-6">Terms of service</h2>
            <h2 className="pt-6">Privacy policy</h2>
            <h2 className="pt-6">End user agreement</h2>
          </div>
        </div>
        <div className="pt-12 block ml-12">
          <div className="font-bold">Developer</div>
          <div className="pt-6">
            <h2> Get Started</h2>
            <h2 className="pt-6">Docs</h2>
            <h2 className="pt-6">Platform Coverage</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
