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

        User darth = new User("darth", "darth", "darth", "email1@email.com", "asdf1234", "ROLE_USER");
        User frodo = new User("frodo", "frodo", "frodo", "email2@email.com", "asdf1234", "ROLE_USER");
        User batman = new User("batman", "batman", "batman", "email3@email.com", "asdf1234", "ROLE_USER");

        this.userRepository.save(darth);
        this.userRepository.save(frodo);
        this.userRepository.save(batman);

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("darth", "some credentials", AuthorityUtils.createAuthorityList("ROLE_USER"))
        );

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("frodo","some credentials", AuthorityUtils.createAuthorityList("ROLE_USER"))
        );

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("batman", "some credentials", AuthorityUtils.createAuthorityList("ROLE_USER"))
        );

        Wishlist firstWishlist = new Wishlist("John's Birthday", darth);
        Wishlist secondWishlist = new Wishlist("Joanna's Presentation", frodo);
        Wishlist thirdWishlist = new Wishlist("John's and Joanna's Wedding", batman);

        Item item1 = new Item("Acer 22\" LED LCD monitor","link1","501","eur","photo1.png","Note 1", firstWishlist);
        Item item2 = new Item("X Wave Headphones With Microphone HD 380PC BLUE","link2","502","eur","photo2.png","Note 2", firstWishlist);

        Item item3 = new Item("Huawei P8 LITE WHITE - Dual SIM","link3","503","eur","photo3.png","Note 3", secondWishlist);
        Item item4 = new Item("ACER laptop ES1 432 C2XP","link4","504","eur","photo4.png","Note 4", secondWishlist);

        Item item5 = new Item("NOKIA Feature Basic NOKIA 216 DS BLACK","link5","505","eur","photo5.png","Note 5", thirdWishlist);
        Item item6 = new Item("SAMSUNG Galaxy J3 BLACK","link6","506","eur","photo6.png","Note 6", thirdWishlist);

        List<Item> firstItemList = new ArrayList<>();
        List<Item> secondItemList = new ArrayList<>();
        List<Item> thirdItemList = new ArrayList<>();

        firstItemList.add(item1);
        firstItemList.add(item2);
        secondItemList.add(item3);
        secondItemList.add(item4);
        thirdItemList.add(item5);
        thirdItemList.add(item6);

        /*firstWishlist.setUser(darth);
        secondWishlist.setUser(frodo);
        thirdWishlist.setUser(batman);*/


        firstWishlist.setItems(firstItemList);
        secondWishlist.setItems(secondItemList);
        thirdWishlist.setItems(thirdItemList);

        this.wishlistRepository.save(firstWishlist);
        this.wishlistRepository.save(secondWishlist);
        this.wishlistRepository.save(thirdWishlist);


        SecurityContextHolder.clearContext();
    }
}
