package com.hyper.wishlist.repository;

import com.hyper.wishlist.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface UserRepository extends CrudRepository<User, Long> {

    User save(User user);

    User findByName(String name);
}
