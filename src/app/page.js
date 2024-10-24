import Counter from "@/components/Counter/Counter";
import Image from "next/image";
// import localImage from "../assests/village.jpg"
import localImage from "@/assests/village.jpg"

export const metadata = {
  title : "home page"
}

const HomePage = () => {
  
  return (
    <div>
      <h2> this is home HomePage </h2>

      <h2 className="text-4xl text-center font-semibold mt-20 " > normal img tag   ( Google URL ) </h2>
      <img className="w-[70%] h-[80vh] mx-auto" src="https://wallpapers.com/images/featured/village-pictures-q126lp8nbqhoflgw.jpg" />

      <h2 className="text-4xl text-center font-semibold mt-20 " > Next Image img tag ( Google URL )  </h2>
      <Image height={600} width={1335} className="mx-auto mt-10" src="https://wallpapers.com/images/featured/village-pictures-q126lp8nbqhoflgw.jpg"  />

      <Image height={600} width={1335} className="mx-auto mt-10" src="https://images7.alphacoders.com/136/thumb-1920-1362861.jpeg"  />

      <h2 className="text-4xl text-center font-semibold mt-20 " > Logal file Image img </h2>
      <Image height={600} width={1335} className="mx-auto mt-10" src={localImage}  />




      <div>
       <Counter/>
      </div>
    </div>
  );
};

export default HomePage;