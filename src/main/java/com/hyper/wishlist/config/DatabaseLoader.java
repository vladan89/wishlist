package com.hyper.wishlist.config;

import com.hyper.wishlist.model.Item;
import com.hyper.wishlist.model.User;
import com.hyper.wishlist.model.Wishlist;
import com.hyper.wishlist.repository.ItemRepository;
import com.hyper.wishlist.repository.UserRepository;
import com.hyper.wishlist.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ItemRepository itemRepository;
    private final WishlistRepository wishlistRepository;

    @Autowired
    public DatabaseLoader(UserRepository userRepository, WishlistRepository wishlistRepository, ItemRepository itemRepository) {
        this.userRepository = userRepository;
        this.wishlistRepository = wishlistRepository;
        this.itemRepository = itemRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        this.userRepository.save(new User("Darth", "Vader","darthvader@mail.com","darthvader","Asdf1234", LocalDate.now()));
        List<Item> items = new ArrayList<Item>();
        //items.add(new Item("http://somelink.com", "First Item","123.33","$","somephoto.png"));
        //items.add(new Item("http://somelink.com", "First Item","123.33","$","somephoto.png","notes..."));
        this.itemRepository.save(new Item("link3","item3","10","$","photo.png"));
        items.add(this.itemRepository.save(new Item("link1","item1","10","$","photo.png")));
        items.add(this.itemRepository.save(new Item("link2","item2","11","$","photo.png")));
        //this.wishlistRepository.save(new Wishlist(1, A));
        //this.wishlistRepository.save(new Wishlist(1));

        this.wishlistRepository.save(new Wishlist(1));
        this.wishlistRepository.save(new Wishlist(2));
    }
}
