package com.uguz.server.business.abstracts;

import com.uguz.server.entities.User;

import java.util.List;

public interface UserService {
    void create(User user);
    User findByEmail(String email);
    long count();
    List<User> getAll();
}
