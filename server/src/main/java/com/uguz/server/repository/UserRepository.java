package com.uguz.server.repository;

import com.uguz.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername (String username);
    User findByEmail(String email);
}
