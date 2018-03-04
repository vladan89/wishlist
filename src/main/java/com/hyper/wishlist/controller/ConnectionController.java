package com.hyper.wishlist.controller;

import com.hyper.wishlist.services.ConnectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/connection")
public class ConnectionController {

    @Autowired
    ConnectionService connectionService;

    @RequestMapping(value = "/get", method = RequestMethod.GET, produces = "text/plain")
    public @ResponseBody String getWebsiteContent(@RequestParam("url") String url){
        return connectionService.getContent(url);
    }

}
