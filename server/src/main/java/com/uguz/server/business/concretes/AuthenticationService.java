package com.uguz.server.business.concretes;

import com.uguz.server.business.abstracts.UserService;
import com.uguz.server.dto.CredentialsDto;
import com.uguz.server.dto.UserDto;
import com.uguz.server.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@Service
@EnableAutoConfiguration
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private UserService userService;

    @Autowired
    public AuthenticationService(PasswordEncoder passwordEncoder ,UserService userService) {
        this.passwordEncoder = passwordEncoder;
        this.userService=userService;
    }

    public UserDto authenticate(CredentialsDto credentialsDto) {
        User user = this.userService.findByEmail(credentialsDto.getEmail());
        if(user == null){
            throw  new RuntimeException("user not found");
        }else{
            if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()),user.getPassword())) {
                return new UserDto(user.getUsername(),user.getEmail(), user.getPassword());
            }
        }

        throw new RuntimeException("Invalid password");
    }

    public UserDto findByLogin(String email){
        User user = this.userService.findByEmail(email);

        if (user.getEmail().equals(email)) {
            return new UserDto(user.getUsername(),user.getEmail(), user.getPassword());
        }

        throw new RuntimeException("Invalid login");
    }

}
