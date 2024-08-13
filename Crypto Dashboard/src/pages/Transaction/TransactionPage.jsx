import {Button,Card,Flex,HStack,Icon,Input,InputGroup,InputLeftElement,Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";

const TransactionPage = () => {

  const [search,setSearch] = useState();

  const searchInput = (e) =>{
    let search = e.target.value;
    setSearch(search);
  }

  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mb="3">
        <Button leftIcon={<Icon fontSize='1.6rem' as={MdOutlineFileDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup w="15rem" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Active Search..." onChange={searchInput} borderColor='red' />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable search={search} />
            </TabPanel>
            <TabPanel>
              <TransactionTable search={search} />
            </TabPanel>
            <TabPanel>
              <TransactionTable search={search} />
            </TabPanel>
            <TabPanel>
              <TransactionTable search={search} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;