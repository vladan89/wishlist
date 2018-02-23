package com.hyper.wishlist.model;

import lombok.Data;
import org.apache.tomcat.jni.Local;
import org.hibernate.annotations.Cascade;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
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

    @OneToMany(mappedBy = "wishlist", cascade = CascadeType.PERSIST, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Item> items;

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

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
