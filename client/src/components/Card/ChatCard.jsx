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
import { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

var stompClient = null;

function ChatCard({ price, setPrice }) {
  const { user } = useAuth();
  const { productId } = useParams();
  const [connected, setConnected] = useState(false);
  const [auctionEnd, setAuctionEnd] = useState(false);
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    username: user.username,
    productId: productId,
    message: "",
  });

  useEffect(() => {
    registerUser();

    setTimeout(function () {
      stompClient.disconnect();
      setAuctionEnd(true);
      setConnected(false);
    }, 30000);
  }, []);

  const connectButton = () => {
    setConnected(true);
  };

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
    stompClient.subscribe(
      "/product/" + userData.productId + "/private",
      onPublicMessageReceived
    );
  };

  const sendPublicMessage = () => {
    if (messageControl()) {
      if (stompClient) {
        let chatMessage = {
          senderUsername: userData.username,
          productId: productId,
          message: userData.message,
        };
        stompClient.send(
          "/app/productmessage",
          {},
          JSON.stringify(chatMessage)
        );
        setUserData({ ...userData, message: "" });
      }
    }
  };

  const messageControl = () => {
    if (Number(userData.message) <= price) {
      alert("price not be  small , equal or empty");
      return false;
    } else {
      return true;
    }
  };

  const onPublicMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);

    if (payloadData) {
      publicChats.push(payloadData);
      setPrice(payloadData.message ? payloadData.message : price);
      setPublicChats([...publicChats]);
    }
  };

  const onError = (err) => {
    console.log("websocket error :  ", err);
  };

  return (
    <>
      <Card maxW="lg">
        <CardHeader>
          <Heading size="md">Auction Live Data</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Box overflowY="auto" maxHeight="400px">
            <Table>
              <Thead position="sticky" bgColor="blue.300">
                <Tr>
                  <Th fontSize="sm" color="black">
                    USERNAME
                  </Th>
                  <Th fontSize="sm" color="black">
                    PRICE
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {publicChats.length !== 0 ? (
                  publicChats.map((chat, index) =>
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

        {auctionEnd ? (
          <CardFooter>Auction End Last price is {price} TL</CardFooter>
        ) : (
          <CardFooter>
            {connected ? (
              <>
                <Input
                  type="number"
                  value={userData.message}
                  onChange={handleMessage}
                  isDisabled={auctionEnd}
                />
                <Button
                  variant="solid"
                  ml={2}
                  colorScheme="blue"
                  onClick={sendPublicMessage}
                  isDisabled={auctionEnd}
                >
                  Give a price
                </Button>
              </>
            ) : (
              <Button
                variant="solid"
                ml={2}
                mt={2}
                px="20"
                colorScheme="blue"
                onClick={connectButton}
              >
                Join
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </>
  );
}

export default ChatCard;
