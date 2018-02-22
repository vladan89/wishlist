package com.hyper.wishlist.config;

import com.hyper.wishlist.model.User;
import com.hyper.wishlist.model.Wishlist;
import com.hyper.wishlist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler(Wishlist.class)
public class SpringDataRestEventHandler {

    private final UserRepository userRepository;

    @Autowired
    public SpringDataRestEventHandler(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @HandleBeforeCreate
    public void applyUserInformationUsingSecurityContext(Wishlist wishlist) {

        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = this.userRepository.findByName(name);
        if (user == null) {
            User newUser = new User();
            newUser.setName(name);
            newUser.setRoles(new String[]{"ROLE_USER"});
            user = this.userRepository.save(newUser);
        }
        wishlist.setUser(user);
    }
}