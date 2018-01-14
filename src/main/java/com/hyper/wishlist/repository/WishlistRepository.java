package com.hyper.wishlist.repository;

import com.hyper.wishlist.model.Wishlist;
import org.springframework.data.repository.CrudRepository;

public interface WishlistRepository extends CrudRepository<Wishlist, Long> {

    Wishlist findById(Long id);
}
