"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, []);

  // Helper function to derive status and color consistently
  const getStatus = (days) => {
    if (days < 7) return { label: "On Track", color: "bg-green-500" };
    if (days < 14) return { label: "Need Attention", color: "bg-yellow-500" };
    return { label: "Overdue", color: "bg-red-500" };
  };

  return (
    <div className="py-20">
      {/* Friends Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20 pb-16 text-center">
        <div className="card bg-white text-[#244D3F] shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold">{friends.length}</h2>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold">
              {
                friends.filter(
                  (f) => getStatus(f.days_since_contact).label === "On Track",
                ).length
              }
            </h2>
            <p className="text-[#64748B]">On Track</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold">
              {
                friends.filter(
                  (f) =>
                    getStatus(f.days_since_contact).label === "Need Attention",
                ).length
              }
            </h2>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
        </div>
        <div className="card bg-white text-[#244D3F] shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold">
              {
                friends.filter(
                  (f) => getStatus(f.days_since_contact).label === "Overdue",
                ).length
              }
            </h2>
            <p className="text-[#64748B]">Overdue</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#244D3F] my-12" />

      {/* Friends Card Grid */}
      <div className="px-20">
        <h4 className="text-2xl font-bold pb-10 text-center">Your Friends</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
        {friends.map((friend) => {
          const { label, color } = getStatus(friend.days_since_contact);
          return (
            <Link
              href={`/friends/${friend.id}`}
              key={friend.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-sm min-w-[300px] mx-auto text-center"
            >
              <div className="p-6">
                <Image
                  width={250}
                  height={250}
                  src={friend.picture}
                  alt={`Profile picture of ${friend.name}`}
                  className="w-26 h-26 rounded-full object-cover mx-auto"
                />
                <h3 className="text-xl font-semibold text-[#244D3F] mt-4">
                  {friend.name}
                </h3>
                <p className="text-[#64748B] mt-2">
                  {friend.days_since_contact} days ago
                </p>

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

                <div className="mt-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full font-medium ${color} text-white`}
                  >
                    {label}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
