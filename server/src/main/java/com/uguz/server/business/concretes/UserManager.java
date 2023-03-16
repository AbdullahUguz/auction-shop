package com.uguz.server.business.concretes;

import com.uguz.server.business.abstracts.UserService;
import com.uguz.server.dataAccess.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements UserService {

    private UserDao userDao;

    @Autowired
    public UserManager(UserDao userDao){
        this.userDao=userDao;
    }
}
