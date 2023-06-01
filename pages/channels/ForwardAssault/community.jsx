import ChatTopbar from "../../../components/ChatScreen/ChatTopbar";
import Layout from "../../../components/Layout";
import ServerSidebar from "../../../components/ServerSidebar/ServerSidebar";

export default function community(props) {
  return (
    <Layout title={"#community | Forward Assault"}>
        <div className="w-full flex">
      <ServerSidebar
        serverName={"Forward Assault"}
        isDiscoerable={true}
        isVerified={true}
        boosters={4}
      ></ServerSidebar>
      <div className="w-full">
        <ChatTopbar channelName = "community" />
      </div>
      </div>
    </Layout>
  );
}
