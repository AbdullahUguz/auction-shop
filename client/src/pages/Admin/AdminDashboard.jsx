import React from "react";
import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  Box,
} from "@chakra-ui/react";
import UserTable from "../../components/Table/UserTable";
import ProductTable from "../../components/Table/ProductTable";

function AdminDashboard() {
  return (
    <Container maxW="1400px" mt={3}>
      <Box mt="8">
        <Tabs variant="soft-rounded" size="lg" colorScheme="cyan">
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Users</Tab>
            <Tab  _selected={{ color: 'white', bg: 'green.500' }} ml="3">Products</Tab>
          </TabList>
          <Divider mt="1" color="black"/>
          <TabPanels>
            <TabPanel>
              <UserTable/>
            </TabPanel>
            <TabPanel>
              <ProductTable/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default AdminDashboard;
