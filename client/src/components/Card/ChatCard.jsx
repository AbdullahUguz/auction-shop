import {
  Card,
  CardBody,
  Divider,
  CardFooter,
  Button,
  Input,
  Heading,
  CardHeader,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

var stompClient = null;

function ChatCard({ price, setPrice }) {
  const { productId } = useParams();
  const { user } = useAuth();
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    username: user.username,
    productId: productId,
    recievername: "",
    connected: false,
    message: "",
  });

  const handleMessage = (event) => {
    const value = event.target.value;
    setUserData({ ...userData, message: value });
  };

  const registerUser = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe(
      "/user/" + userData.productId + "/private",
      onPublicMessageReceived
    );
  };

  const sendPublicMessage = () => {
    if (stompClient) {
      let chatMessage = {
        senderUsername: userData.username,
        productId: productId,
        message: userData.message,
        status: "MESSAGE",
      };
      stompClient.send("/app/productmessage", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const onPublicMessageReceived = (payload) => {
    console.log("ilk payload : ", payload.body);
    let payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPrice(payloadData.message ? payloadData.message : price);
        console.log("yapload data : ", payloadData.message);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onError = (err) => {
    console.log("websocket error :  ", err);
  };

  return userData.connected ? (
    <>
      <Card maxW="lg">
        <CardHeader>
          <Heading size="md">Live Data</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Box overflowY="auto" maxHeight="400px">
            <Table>
              <Thead position="sticky"  bgColor="blue.300">
                <Tr>
                  <Th fontSize="sm" color="black">USERNAME</Th>
                  <Th fontSize="sm"color="black">PRICE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {publicChats.length !== 0 ? (
                  publicChats.map(
                    (chat, index) =>
                      chat.senderUsername === userData.username ? (
                        <Tr key={index}>
                          <Td>{chat.senderUsername}</Td>
                          <Td>{chat.message}</Td>
                        </Tr>
                      ) : (
                        <Tr key={index} color="blue">
                          <Td>{chat.senderUsername}</Td>
                          <Td>{chat.message}</Td>
                        </Tr>
                      )
                  )
                ) : (
                  <></>
                )}
              </Tbody>
            </Table>
          </Box>
        </CardBody>

        <Divider />
        <CardFooter>
          <Input
            type="number"
            value={userData.message}
            onChange={handleMessage}
          />
          <Button
            variant="solid"
            ml={2}
            colorScheme="blue"
            onClick={sendPublicMessage}
          >
            Give a price
          </Button>
        </CardFooter>
      </Card>
    </>
  ) : (
    <>
      <Card maxW="md" h="200">
        <CardHeader>
          <Heading size="md">Join to Auction</Heading>
        </CardHeader>
        <Divider />
        <CardBody align="center">
          <Input
            type="text"
            value={user.username}
            placeholder={user.username}
            disabled
          />
          <Button
            variant="solid"
            ml={2}
            px="20"
            colorScheme="blue"
            onClick={registerUser}
          >
            Join
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default ChatCard;
