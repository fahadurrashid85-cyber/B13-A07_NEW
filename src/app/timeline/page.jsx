import { IoIosArrowDown } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import friends from "../../../public/friends.json";
import { BsChatText } from "react-icons/bs";
import { ImMobile2 } from "react-icons/im";
import { BiVideo } from "react-icons/bi";
import { RiInstagramLine } from "react-icons/ri";

const Timeline = () => {
  const data = friends.map((f) => ({
    id: f.id,
    name: f.name,
    type: f.type,
    last_contacted: f.last_contacted,
  }));

  return (
    <div className="py-15 px-25 h-full bg-[#F3F6FA] text-black">
      {/* Header */}
      <div>
        <h1 className="text-[#37A69B] text-4xl font-semibold">Timeline</h1>
        <div className="flex mt-5">
          <div className="flex items-center gap-3 text-lg border p-2 px-5 rounded-md shadow-sm">
            Filter Timeline <IoIosArrowDown />
          </div>
        </div>
      </div>

      {/* Timeline Items */}
      {data.map((item) => (
        <div
          key={item.id}
          className="p-3 flex justify-start items-center gap-4 text-[#64748B] border border-gray-300 rounded-md shadow-sm mt-5"
        >
          <p className=" text-[#244D3F] text-2xl font-semibold capitalize">
            {item.type == "call" && <ImMobile2 />}
            {item.type == "video" && <BiVideo />}
            {item.type == "text" && <BsChatText />}
            {item.type == "instagram" && <RiInstagramLine />}
            {item.type == "email" && <FiMail />}
          </p>
          <div>
            <p className="flex items-center gap-2 ">
              <span className="capitalize">{item.type} </span>
              with {item.name}
            </p>
            <p className="text-[#244D3F]">{item.last_contacted}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
