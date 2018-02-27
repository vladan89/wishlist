package com.hyper.wishlist.config;

import com.hyper.wishlist.model.Item;
import com.hyper.wishlist.model.User;
import com.hyper.wishlist.model.Wishlist;
import com.hyper.wishlist.repository.ItemRepository;
import com.hyper.wishlist.repository.UserRepository;
import com.hyper.wishlist.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
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

        User darth = new User("darth", "darth", "darth", "email1@email.com", "asdf1234");
        this.userRepository.save(darth);
        User frodo = new User("frodo", "frodo", "frodo", "email2@email.com", "asdf1234");
        this.userRepository.save(frodo);

        Wishlist firstWishlist = new Wishlist("John's Birthday", darth);
        Item item1 = new Item("Acer 22\" LED LCD monitor","link1","501","eur","photo1.png","Note 1", firstWishlist);
        Item item2 = new Item("X Wave Headphones With Microphone HD 380PC BLUE","link2","502","eur","photo2.png","Note 2", firstWishlist);
        firstWishlist.getItems().add(item1);
        firstWishlist.getItems().add(item2);
        this.wishlistRepository.save(firstWishlist);
    }
}
