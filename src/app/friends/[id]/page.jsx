import Image from "next/image";
import { FaTrashCan } from "react-icons/fa6";
import { PiBellSimpleZBold } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { RiMessageLine } from "react-icons/ri";
import { BiVideo } from "react-icons/bi";

export default async function FriendPage({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  const friend = data.find((f) => f.id.toString() === id);

  if (!friend) {
    return <p className="text-center py-20">Friend not found</p>;
  }

  const getStatus = (days) => {
    if (days < 7) return { label: "On Track", color: "bg-green-500" };
    if (days < 14) return { label: "Need Attention", color: "bg-yellow-500" };
    return { label: "Overdue", color: "bg-red-500" };
  };
  const { label, color } = getStatus(friend.days_since_contact);

  return (
    <div className="grid grid-cols-4 gap-6 w-full p-10">
      {/*Profile Card */}
      <div className="col-span-1 row-span-2 text-black justify-left items-left">
        <div className="p-5 max-w-3xl mx-auto shadow-sm">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <Image
              width={250}
              height={250}
              src={friend.picture}
              alt={`Profile picture of ${friend.name}`}
              className="w-32 h-32 rounded-full object-cover mx-auto"
            />
            <h1 className="text-3xl font-bold text-[#244D3F] mt-4">
              {friend.name}
            </h1>

            <div className="mt-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full font-medium ${color} text-white`}
              >
                {label}
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[#64748B] font-medium mt-2">{friend.bio}</p>
            <p className="text-[#64748B] mt-2">
              Preferred: {friend.preferred_contact_method}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-md p-8 text-center h-40">
          <h4 className="text-3xl font-semibold text-[#244D3F] mb-2">
            {friend.days_since_contact}
          </h4>
          <p className="text-[#64748B] text-lg">Days Since Contact</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 text-center h-40">
          <h4 className="text-3xl font-semibold text-[#244D3F] mb-2">
            {friend.goal}
          </h4>
          <p className="text-[#64748B] text-lg">Goal (days)</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 text-center h-40">
          <h4 className="text-3xl font-semibold text-[#244D3F] mb-2">
            {friend.next_due_date}
          </h4>
          <p className="text-[#64748B] text-lg">Next Due</p>
        </div>
      </div>
      {/* Relationship Goal */}
      <div className="col-span-3">
        <div className="bg-white rounded-xl flex justify-between items-center shadow-md p-8 text-center">
          <div>
            <p className="font-semibold text-[#1A1A1A] mb-2 text-left">
              Relationship Goal
            </p>
            <p className="text-[#64748B] text-lg text-left">
              Contact Every{" "}
              <span className="font-semibold text-[#1A1A1A]">
                {friend.goal} days
              </span>
            </p>
          </div>
          <button className="bg-[#244D3F] text-white px-4 py-2 rounded-md mt-2">
            Update
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2 text-black flex flex-col max-w-100 ">
        <div className="bg-white rounded-xl shadow-md p-8 text-center mt-2 flex justify-center items-center">
          <PiBellSimpleZBold /> Snooze 2 Weeks
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 text-center mt-2 flex justify-center items-center">
          <FaBoxArchive /> Archive
        </div>
        <div className="text-red-700 bg-white rounded-xl shadow-md p-8 mt-2 text-center flex justify-center items-center">
          <FaTrashCan /> Delete
        </div>
      </div>

      <div className="col-span-3 space-y-6">
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="font-semibold text-xl text-[#1A1A1A] mb-4">
            Quick Check-In
          </p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center bg-[#E9E9E9] text-[#1F2937] p-5 rounded-lg gap-2 max-w-80 min-w-60">
              <FaPhone /> Call
            </div>
            <div className="flex flex-col items-center bg-[#E9E9E9] text-[#1F2937] p-5 rounded-lg gap-2 max-w-80 min-w-60">
              <RiMessageLine /> Text
            </div>
            <div className="flex flex-col items-center bg-[#E9E9E9] text-[#1F2937] p-5 rounded-lg gap-2 max-w-80 min-w-60">
              <BiVideo /> Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
