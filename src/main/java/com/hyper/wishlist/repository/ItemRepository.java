package com.hyper.wishlist.repository;

import com.hyper.wishlist.model.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Long> {

}
