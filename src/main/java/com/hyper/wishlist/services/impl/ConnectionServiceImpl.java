package com.hyper.wishlist.services.impl;

import com.hyper.wishlist.services.ConnectionService;
import jodd.http.*;
import jodd.http.net.SocketHttpConnectionProvider;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.Properties;

@Service
public class ConnectionServiceImpl implements ConnectionService {
    @Override
    public String getContent(String url) throws UnknownHostException {
        String proxy = "proxy.rcub.bg.ac.rs";
        SocketHttpConnectionProvider s = new SocketHttpConnectionProvider();
        s.useProxy(ProxyInfo.httpProxy(proxy, 8080, null, null));

        HttpResponse response = HttpRequest.get(url).withConnectionProvider(s).send();
        return response.statusCode() == 200 ? response.body() : "";
    }

}
