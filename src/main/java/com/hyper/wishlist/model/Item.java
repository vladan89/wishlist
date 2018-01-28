package com.hyper.wishlist.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;

@Data
@Entity
public class Item {

    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String link;

    @NotBlank
    private String price;

    @NotBlank
    private String currency;

    @NotBlank
    private String photo;

    private String notes;

    @ManyToOne
    @JoinColumn(name = "wishlist_id")
    private Wishlist wishlist;

    public Item() {
    }

    public Item(String name, String link, String price, String currency, String photo, String note, Wishlist wishlist) {
        this.link = link;
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.photo = photo;
        this.wishlist = wishlist;
    }
}

