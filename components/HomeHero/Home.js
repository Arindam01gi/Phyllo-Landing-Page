import Button from "../buttons/Button2";
import Button2 from "../buttons/Button1";


function Home(){
    return (
        <div className="row-span-1 col-span-1 items-center md:grid">
            <h1 className="font-bold text-5xl mb-5 ">
            The universal API for creator data
            </h1>

            <p className="text-base my-10 pr-12">
            Get continuous access to verified, creator-permissioned data across hundreds of platforms
            </p>
            <div className="invisble md:visible">
            <Button />
            </div>
            <div className="visible md:invisible">
            <Button />
            <Button2 />
            </div>
            

        </div>
    )
}
export default Home;