package com.hyper.wishlist.model;

import lombok.Data;
import org.apache.tomcat.jni.Local;
import org.hibernate.annotations.Cascade;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Wishlist {

    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotBlank
    private String name;

    @OneToMany(mappedBy = "wishlist", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items = new ArrayList<>();

    private LocalDate created;

    public Wishlist(){}

    public Wishlist(String name){
        this.name = name;
        this.created = LocalDate.now();
    }

    public Wishlist(String name, User user){
        this(name);
        this.created = LocalDate.now();
        this.user = user;
    }
}
