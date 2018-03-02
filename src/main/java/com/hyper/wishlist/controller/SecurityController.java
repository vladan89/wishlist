package com.hyper.wishlist.controller;

import com.hyper.wishlist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping(value = "/security")
public class SecurityController {

    @Autowired
    private UserRepository userRepository;

    @ResponseBody
    @RequestMapping(value="/logged", method = RequestMethod.GET, produces="application/hal+json")
    public Long getCurrentLoggedUserId(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        if(username == null) return 0l;
        return userRepository.findByUsername(username).getId();
    }

}
