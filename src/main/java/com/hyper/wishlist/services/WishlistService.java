package com.hyper.wishlist.services;

import com.hyper.wishlist.model.Item;
import com.hyper.wishlist.model.Wishlist;

import java.util.List;

public interface WishlistService {

    List<Wishlist> findAll();
    Wishlist findById(Long id);
}
