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

        User darth = new User("Darth", "Vader","darthvader@mail.com","darthvader","Asdf1234");
        User frodo = new User("Frodo", "Baggins","frodobaggins@mail.com","frodobaggins","Asdf1234");
        User batman = new User("Bat", "Man","batman@mail.com","batman","Asdf1234");

        this.userRepository.save(darth);
        this.userRepository.save(frodo);
        this.userRepository.save(batman);

        Wishlist firstWishlist = new Wishlist("firstWishlist");
        Wishlist secondWishlist = new Wishlist("secondWishlist");
        Wishlist thirdWishlist = new Wishlist("thirdWishlist");

        Item item1 = new Item("Item1","link1","501","eur","photo1.png","Note 1", firstWishlist);
        Item item2 = new Item("Item2","link2","502","eur","photo2.png","Note 2", firstWishlist);

        Item item3 = new Item("Item3","link3","503","eur","photo3.png","Note 3", secondWishlist);
        Item item4 = new Item("Item4","link4","504","eur","photo4.png","Note 4", secondWishlist);

        Item item5 = new Item("Item5","link5","505","eur","photo5.png","Note 5", thirdWishlist);
        Item item6 = new Item("Item6","link6","506","eur","photo6.png","Note 6", thirdWishlist);

        List<Item> firstItemList = new ArrayList<>();
        List<Item> secondItemList = new ArrayList<>();
        List<Item> thirdItemList = new ArrayList<>();

        firstItemList.add(item1);
        firstItemList.add(item2);
        secondItemList.add(item3);
        secondItemList.add(item4);
        thirdItemList.add(item5);
        thirdItemList.add(item6);

        firstWishlist.setUser(darth);
        secondWishlist.setUser(frodo);
        thirdWishlist.setUser(batman);


        firstWishlist.setItems(firstItemList);

        secondWishlist.setItems(secondItemList);

        thirdWishlist.setItems(thirdItemList);

        this.wishlistRepository.save(firstWishlist);
        this.wishlistRepository.save(secondWishlist);
        this.wishlistRepository.save(thirdWishlist);



    }
}
