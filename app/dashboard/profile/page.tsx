import { currentUser, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

// Page "/dashboard/profile" : les infos de l'utilisateur connecté
const ProfilePage = () => {
  return (
    <div className="flex-1 m-4 mt-0">
      <div className="bg-lamaSky py-6 px-4 rounded-md flex flex-col md:flex-row items-center gap-6">
        <Image
          src={currentUser.photo}
          alt=""
          width={120}
          height={120}
          className="w-28 h-28 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-xl font-semibold">{currentUser.name}</h1>
          <span className="text-sm text-gray-600 capitalize">{role}</span>

          <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex items-center gap-2">
              <Image src="/mail.png" alt="" width={14} height={14} />
              <span>{currentUser.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/phone.png" alt="" width={14} height={14} />
              <span>{currentUser.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/home.png" alt="" width={14} height={14} />
              <span>{currentUser.address}</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/dashboard/settings"
        className="inline-block mt-4 bg-white p-3 rounded-md text-sm"
      >
        Edit my information →
      </Link>
    </div>
  );
};

export default ProfilePage;
