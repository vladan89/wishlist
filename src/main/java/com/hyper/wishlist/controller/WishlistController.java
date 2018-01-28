package com.hyper.wishlist.controller;

import com.hyper.wishlist.services.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/wishlists")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @ResponseBody
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ModelAndView showWishlist(@PathVariable Long id) {
        ModelAndView modelAndView = new ModelAndView("wishlist");
        modelAndView.addObject("wishlist", wishlistService.findById(id));
        return modelAndView;
    }

}