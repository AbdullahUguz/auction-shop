package com.uguz.server.api.controllers;

import com.uguz.server.business.abstracts.UserService;
import com.uguz.server.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> add(@RequestBody User user) {
        this.userService.create(user);
        return new ResponseEntity<>("User successfully added.", HttpStatus.CREATED);
    }


}
