package com.hyper.wishlist.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.List;
import com.hyper.wishlist.model.Item;

@Data
@Entity
public class Wishlist {

    @Id @GeneratedValue
    private Long id;

    //@NotBlank
    private Integer userId;

    //@NotBlank
    //private List<Item> items;

    private LocalDate created;

    public Wishlist(){ }

    public Wishlist(Integer userId){
        //for testing
        this.userId = userId;
        this.created = LocalDate.now();
    }

    /*public Wishlist(Integer userId, List<Item> items){
        this.userId = userId;
       // this.items = items;
        this.created = LocalDate.now();
    }*/
}
