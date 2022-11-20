import Link from "next/link";
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
        <div className="w-full">
          <FriendsHeader />
        </div>
      </div>
    </Layout>
  );
}
