"use client";
import Badge from "@/component/Badge";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen sm:p-10 p-20 ">
      <div className="grid grid-cols-12 w-full h-full justify-start gap-1">
        <div className="col-span-3 p-4 m-5">
          <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500  w-full h-[130px] rounded-md mb-4">
            <div className="p-3 mt-2">
              <p className="font-bold text-white mt-14">Eqaim</p>
              <p className="text-white font-normal">Feedback Board</p>
            </div>
          </div>

          <div className="bg-[#F7F8FD] w-full h-[150px] rounded-md mb-4 flex flex-wrap">
            <Badge badgeName={"Ankit"} isActive={true} />
            <div className="p-5 text-[#4661E6] font-bold">
              {/* <Badge badgeName="All" isActive={true} /> */}
              <span className="bg-[#F2F4FF]  rounded-md w-7 h-9 text-sm px-4 py-2">
                Enhance
              </span>
            </div>
            <div className="p-5 text-[#4661E6] font-bold">
              {/* <Badge badgeName="All" isActive={true} /> */}
              <span className="bg-[#F2F4FF]  rounded-md w-7 h-9 text-sm px-4 py-2">
                Feature
              </span>
            </div>
          </div>
          <div className="bg-[#F7F8FD] w-full h-[100px] rounded-md mb-3">3</div>
        </div>
        <div className="col-span-9 p-4 m-5 bg-red-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          sed nostrum, facere necessitatibus, sapiente nam dolor sunt, quidem
          nulla atque molestias error blanditiis minima autem deleniti odit nisi
          et eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis, error a accusantium explicabo reprehenderit ab ratione
          veniam molestiae omnis autem laborum animi hic, consequuntur harum
          necessitatibus tempora delectus provident fugit?
        </div>
      </div>
    </main>
  );
}
