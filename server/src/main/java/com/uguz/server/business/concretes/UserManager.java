package com.uguz.server.business.concretes;

import com.uguz.server.business.abstracts.UserService;
import com.uguz.server.repository.UserRepository;
import com.uguz.server.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@Service
@EnableAutoConfiguration
public class UserManager implements UserService {

    private UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserManager(UserRepository userRepository,PasswordEncoder passwordEncoder){
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;
    }

    @Override
    public void create(User user) {
        String encodedMasterPassword = passwordEncoder.encode(CharBuffer.wrap(user.getPassword()));
        user.setPassword(encodedMasterPassword);
        this.userRepository.save(user);
    }

    @Override
    public long count() {
        return  this.userRepository.count();
    }

    @Override
    public User findByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }


}
