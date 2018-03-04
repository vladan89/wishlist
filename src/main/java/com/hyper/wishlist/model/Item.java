package com.hyper.wishlist.model;

import lombok.Data;
import org.hibernate.annotations.Cascade;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

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

    private String note;

    @ManyToOne
    @JoinColumn(name = "wishlist_id")
    private Wishlist wishlist;

    private LocalDate created;

    public Item() {
    }

    public Item(String name, String link, String price, String currency, String photo, String note, Wishlist wishlist) {
        this.name = name;
        this.link = link;
        this.price = price;
        this.currency = currency;
        this.photo = photo;
        this.note = note;
        this.wishlist = wishlist;
        this.created = LocalDate.now();
    }
}

