import ChatTextBox from "../../components/common/ChatTextBox";
import MessageContainer from "../../components/common/Message/MessageContainer";
import MessageText from "../../components/common/Message/MessageText";
import ChatContainer from "../../components/DMs/ChatContainer";
import DmsHeader from "../../components/DMs/DmsHeader";
import DmsSidebar from "../../components/DmsSidebar/DmsSidebar";
import Layout from "../../components/Layout";

export default function DM() {
  return (
    <Layout title="Friends">
      <div className="flex flex-row h-screen">
        <DmsSidebar />
        <div className="w-full flex flex-col">
          <DmsHeader channel="DANIHIT" />
          <ChatContainer
            name="DANIHIT"
            mutualServers={2}
            avatar="/Avatars/danihit.jpeg"
          >
            <MessageContainer
              name="DANIHIT"
              avatar="/Avatars/danihit.jpeg"
              time="Today at 12:26 AM"
            >
              <MessageText>Hi bro</MessageText>
              <MessageText>Hi bro</MessageText>
            </MessageContainer>
          </ChatContainer>
          <ChatTextBox channel="DANIHIT" />
        </div>
      </div>
    </Layout>
  );
}
