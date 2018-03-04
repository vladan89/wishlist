package com.hyper.wishlist.services;

import com.hyper.wishlist.model.User;

public interface UserService {

    User findByUsername(String username);
}
