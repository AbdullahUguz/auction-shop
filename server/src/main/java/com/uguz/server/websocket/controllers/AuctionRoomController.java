package com.uguz.server.websocket.controllers;

import com.uguz.server.websocket.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class AuctionRoomController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message") // /app/message
    @SendTo("/auctionroom/public")
    private Message  receivePublicMessage(@Payload Message message){
        return message;
    }

    @MessageMapping("/productmessage")  // productmessage
    private Message recieveProductMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getProductId(),"/private",message);
        return message;
    }

}
