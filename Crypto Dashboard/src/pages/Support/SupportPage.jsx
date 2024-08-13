import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import { Stack } from "@chakra-ui/react";
import { Chatbox } from "../../components/LoanContactChatbox";
const Support = () => {
  return (
    <DashboardLayout title={"Support"} >
      <Stack spacing="2rem" pb='3rem'>
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
           <Chatbox/>
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;