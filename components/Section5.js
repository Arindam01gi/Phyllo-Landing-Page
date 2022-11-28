import Engagement from "./section5/Engagement";
import Identity from "./section5/Identity";
import Income from "./section5/Income";

function Section5() {
  return (
    <div className="section5-background lg:pt-44 pt-36 lg:pb-8  -pb-2 lg:mb-0 items-start justify-between">
      <div className="text-center">
        <h2 className="text-4xl font-bold"> Our products</h2>
      </div>
      <div className=" lg:pt-28 p-12 lg:ml-24 lg:mr-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Engagement />
        <Identity />
        <Income />
      </div>
    </div>
  );
}
export default Section5;
