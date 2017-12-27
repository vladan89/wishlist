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
    private final WishlistRepository wishlistRepository;

    @Autowired
    public DatabaseLoader(UserRepository userRepository, WishlistRepository wishlistRepository) {
        this.userRepository = userRepository;
        this.wishlistRepository = wishlistRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        User user1 = new User("Darth", "Vader","darthvader@mail.com","darthvader","Asdf1234", LocalDate.now());
        user1.setCreated(LocalDate.now());
        this.userRepository.save(user1);
        Wishlist myWishlist = new Wishlist("myWishlist");
        myWishlist.setUser(user1);
        List<Item> items = new ArrayList<>();
        Item item1 = new Item("Item1","link1","500","eur","photo1.png","Note");
        items.add(item1);
        myWishlist.setItems(items);
        myWishlist.setCreated(LocalDate.now());
        this.wishlistRepository.save(myWishlist);

    }
}
