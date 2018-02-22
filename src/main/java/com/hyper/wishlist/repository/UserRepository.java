package com.hyper.wishlist.repository;

import com.hyper.wishlist.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface UserRepository extends CrudRepository<User, Long> {

    User save(User user);

    User findByUsername(String username);
}
