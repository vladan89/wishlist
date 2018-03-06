package com.hyper.wishlist.services;

import java.net.UnknownHostException;

public interface ConnectionService {

     String getContent(String url) throws UnknownHostException;

}
