package com.hyper.wishlist.services;

import com.hyper.wishlist.model.Item;
import com.hyper.wishlist.model.Wishlist;
import com.hyper.wishlist.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistServiceImpl implements WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    @Override
    public Wishlist findById(Long id) {
        return wishlistRepository.findById(id);
    }

    @Override
    public List<Wishlist> findAll() {
        return (List<Wishlist>) wishlistRepository.findAll();
    }

}
