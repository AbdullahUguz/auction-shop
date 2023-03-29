package com.uguz.server.websocket.controllers;

import com.uguz.server.business.abstracts.ProductService;
import com.uguz.server.entities.Product;
import com.uguz.server.repository.ProductRepository;
import com.uguz.server.websocket.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@EnableAutoConfiguration
public class AuctionRoomController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @Autowired
    private ProductRepository productService;

    @MessageMapping("/message") // /app/message
    @SendTo("/auctionroom/public")
    private Message  receivePublicMessage(@Payload Message message){
        return message;
    }

    @MessageMapping("/productmessage")  // productmessage
    private Message recieveProductMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getProductId(),"/private",message);
        Product product = productService.findById(Long.parseLong(message.getProductId()));
        product.setPrice(Double.parseDouble(message.getMessage()));
        productService.save(product);
        return message;
    }

}
