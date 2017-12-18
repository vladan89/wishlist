package com.hyper.wishlist.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@Entity
public class User {

    private @Id @GeneratedValue Long id;
    @Column(unique=true)
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    private LocalDate created;

    public User() {
    }

    public User(String username, String password, LocalDate created) {
        this.username = username;
        this.password = password;
        this.created = created;
    }
}
