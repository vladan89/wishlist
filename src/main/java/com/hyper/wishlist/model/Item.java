package com.hyper.wishlist.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Item {

    @Id @GeneratedValue
    private Long id;

    @NotBlank
    private String link;

    @NotBlank
    private String name;

    @NotBlank
    private String price;

    @NotBlank
    private String currency;

    @NotBlank
    private String photo;

    private String notes;

    public Item(){ }

    public Item(String link, String name, String price, String currency, String photo){
        this.link = link;
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.photo = photo;
    }

    public Item(String link, String name, String price, String currency, String photo, String notes){
        this.link = link;
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.photo = photo;
        this.notes = notes;
    }

}

