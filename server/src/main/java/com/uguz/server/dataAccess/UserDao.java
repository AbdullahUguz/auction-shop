package com.uguz.server.dataAccess;

import com.uguz.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Long> {

}
