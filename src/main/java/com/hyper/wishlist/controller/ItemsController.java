package com.hyper.wishlist.controller;

import com.hyper.wishlist.model.Item;
import com.hyper.wishlist.model.Wishlist;
import com.hyper.wishlist.repository.ItemRepository;
import com.hyper.wishlist.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
public class ItemsController {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private WishlistRepository wishlistRepository;

    @ResponseBody
    @RequestMapping(value = "/api/items/{id}", method = RequestMethod.DELETE)
    public String deleteItem(@PathVariable Long id) {
        Item item = itemRepository.findOne(id);
        Wishlist wishlist = item.getWishlist();
        List<Item> newList = wishlist.getItems();
        newList.remove(item);
        wishlistRepository.save(wishlist);
        return "";
    }

}

