package com.hyper.wishlist.services.impl;

import com.hyper.wishlist.model.User;
import com.hyper.wishlist.repository.UserRepository;
import com.hyper.wishlist.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
