package com.uguz.server.api.controllers;

import com.uguz.server.business.abstracts.UserService;
import com.uguz.server.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping("/create")
    private ResponseEntity<String> add(@RequestBody User user) {
        this.userService.create(user);
        return new ResponseEntity<>("User successfully added.", HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    private ResponseEntity<List<User>> getAll(){
        List<User> users = this.userService.getAll();
        if(users == null){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users,HttpStatus.OK);
    }


}
