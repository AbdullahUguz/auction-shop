package com.uguz.server.business.abstracts;

import com.uguz.server.entities.User;

public interface UserService {

    void create(User user);

    User findByUserName(String username);
    User findByEmail(String email);

}
