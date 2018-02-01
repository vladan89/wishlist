package com.hyper.wishlist.model;

import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@Entity
public class User {

    @Id @GeneratedValue
    private Long id;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank @Email @Column(unique = true)
    private String email;

    @Column(unique=true)
    @NotBlank
    private String username;

    @NotBlank
    private String password;

    @NotNull
    private LocalDate created;

    public User() {  }

    public User(String firstName, String lastName, String email, String username, String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.created = LocalDate.now();
    }

}
