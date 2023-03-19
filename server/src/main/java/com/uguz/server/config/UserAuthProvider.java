package com.uguz.server.config;

import com.uguz.server.dto.CredentialsDto;
import com.uguz.server.dto.UserDto;
import com.uguz.server.business.concretes.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;


import java.util.Collections;

@Component
public class UserAuthProvider implements AuthenticationProvider {

    private final AuthenticationService authenticationService;

    @Autowired
    public UserAuthProvider(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        UserDto userDto =authenticationService.authenticate(
                new CredentialsDto((String) authentication.getPrincipal(),(String) authentication.getCredentials())
        );

        if(userDto == null){
            return null;
        }
        return new UsernamePasswordAuthenticationToken(userDto, null, Collections.emptyList());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return true;
    }
}
