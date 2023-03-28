package com.uguz.server.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;



@EnableWebSecurity
@EnableAutoConfiguration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserAuthenticationEntryPoint userAuthenticationEntryPoint ;

    @Autowired
    public SecurityConfig(UserAuthenticationEntryPoint userAuthenticationEntryPoint) {
        this.userAuthenticationEntryPoint = userAuthenticationEntryPoint;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .exceptionHandling().authenticationEntryPoint(userAuthenticationEntryPoint)
                .and()
                .addFilterBefore(new UsernamePasswordAuthFilter(), BasicAuthenticationFilter.class)
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/auth/login", "/auth/register").permitAll()
                .anyRequest().authenticated();
    }

}
