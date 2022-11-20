import Image from "next/image";
import Link from "next/link";
import ErrorBox from "../components/common/ErrorBox";
import FriendsIcon from "../components/common/Icons/FriendsIcon";
import DmsSidebar from "../components/DmsSidebar/DmsSidebar";
import FriendsHeader from "../components/Friends/FriendsHeader";
import FriendsTab from "../components/Friends/FriendsTab";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Friends">
      <div className="flex flex-row">
        <DmsSidebar />
        <div className="w-full flex flex-col">
          <FriendsHeader />
          <div className="grid grid-cols-4 h-full">
            <div className="col-span-3 h-full flex flex-col items-center justify-center">
              <Image src='/Images/wumpusFriends.svg' alt="wumpus" width={421} height={218} />
              <p className="text-[#a5a5a5] text-base text-center mt-10">No one&apos;s around to play with Wumpus.</p>
            </div>
            <div className="border-l border-l-[#a5a5a5] border-opacity-20 h-full px-4 py-6">
              <h1 className="text-xl font-bold text-white ">Active Now</h1>
              <div className="mt-4">
              <ErrorBox
                title="This section could be better"
                confirmText="Yes, count me in!"
                cancelText="No thanks"
              >
                  We can customize Active Now, and other parts of Discord, based
                  on information like who you talk to and what games you play.
                  You can change this anytime in{" "}
                  <Link href="#" className="text-sky-500 hover:underline">
                    privacy settings
                  </Link>
                  .
              </ErrorBox>

              <div className="mt-4">
                <h3 className="text-lg text-[#eee] font-bold text-center">It&apos;s quiet for now...</h3>
                <p className="text-[0.85rem] mt-0.5 text-[#a5a5a5] text-center">When a friend starts an activity—like playing a game or hanging out on voice—we&apos;ll show it here!</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
