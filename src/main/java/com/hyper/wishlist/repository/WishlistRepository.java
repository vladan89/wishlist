package com.hyper.wishlist.repository;

import com.hyper.wishlist.model.Wishlist;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

//@PreAuthorize("hasRole('ROLE_USER')")
public interface WishlistRepository extends CrudRepository<Wishlist, Long> {

  /*  @Override
    @PreAuthorize("#wishlist?.user == null or #wishlist?.user?.name == authentication?.name")
    Wishlist save(@Param("wishlist") Wishlist wishlist);

    @Override
    @PreAuthorize("@wishlistRepository.findOne(#id)?.user?.name == authentication?.name")
    void delete(@Param("id") Long id);

    @Override
    @PreAuthorize("#wishlist?.user?.name == authentication?.name")
    void delete(@Param("wishlist") Wishlist wishlist);
*/
    Wishlist findById(Long id);


}
