package com.hyper.wishlist.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@ToString(exclude = "password")
@Entity
public class User {

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @Id @GeneratedValue
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String lastName;

    @NotBlank @Email @Column(unique = true)
    private String email;

    @Column(unique=true)
    @NotBlank
    private String username;

    @NotBlank @JsonIgnore
    private String password;

    private LocalDate created;

    public User() {  }

    public User(String name, String lastName, String username, String email, String password){
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.setPassword(password);
        this.created = LocalDate.now();
    }

    public void setPassword(String password){
        this.password = PASSWORD_ENCODER.encode(password);
    }

}
