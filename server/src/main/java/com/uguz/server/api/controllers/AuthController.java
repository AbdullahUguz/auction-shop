package com.uguz.server.api.controllers;

import com.uguz.server.business.abstracts.UserService;
import com.uguz.server.config.UserAuthProvider;
import com.uguz.server.dto.UserDto;
import com.uguz.server.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserAuthProvider userAuthProvider;
    private UserService userService;

    @Autowired
    public AuthController(UserAuthProvider userAuthProvider,UserService userService){
        this.userAuthProvider=userAuthProvider;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@AuthenticationPrincipal UserDto loginUser) {
        User user = userService.findByEmail(loginUser.getEmail());
        if(user == null){
            return (ResponseEntity<User>) ResponseEntity.notFound();
        }else{
            return ResponseEntity.ok(user);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid UserDto registerUser) {
        User user = userService.findByEmail(registerUser.getEmail());

        if(user == null){
            User createdUser= new User();
            createdUser.setEmail(registerUser.getEmail());
            createdUser.setUsername(registerUser.getUsername());
            createdUser.setPassword(registerUser.getPassword());
            createdUser.setRole("user");
            userService.create(createdUser);

            return new ResponseEntity<>("User Created.", HttpStatus.CREATED);
        }else{

            return new ResponseEntity<>("User already exists.", HttpStatus.ALREADY_REPORTED);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@AuthenticationPrincipal UserDto user) {
        System.out.println(SecurityContextHolder.getContext());
        SecurityContextHolder.clearContext();
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/me")
    public ResponseEntity<User> me(@AuthenticationPrincipal UserDto userDto) {
        UserDto authUser = (UserDto) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findByEmail(authUser.getEmail());

        if(user == null){
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.ok(user);
        }
    }
//    @GetMapping("/check")
//    public ResponseEntity<Boolean> check() {
//        boolean control = SecurityContextHolder.getContext().getAuthentication().isAuthenticated();
//        /*
//         buraya şey yap eğer auth ok sa username ve role göndersin
//         */
//        return new ResponseEntity<>(control,HttpStatus.OK);
//    }

}
