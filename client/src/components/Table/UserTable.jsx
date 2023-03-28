import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { fetchGetAllUser } from "../../api/api";

function UserTable() {
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    await fetchGetAllUser()
      .then((res) => {
        console.log("user table res : ", res);
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return users ? (
    <>
      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead bgColor="cyan.100">
            <Tr>
              <Th fontSize="md" color="black">
                ID
              </Th>
              <Th fontSize="md" color="black">
                USERNAME
              </Th>
              <Th fontSize="md" color="black">
                EMAIL
              </Th>
              <Th fontSize="md" color="black">
                ROLE
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  ) : (
    <Text>Loading...</Text>
  );
}

export default UserTable;
