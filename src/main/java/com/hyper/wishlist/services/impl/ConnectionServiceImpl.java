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
        String port = "8080";

        /*Properties systemProperties = System.getProperties();

        systemProperties.setProperty("http.proxyHost",proxy);
        systemProperties.setProperty("http.proxyPort",port);

        systemProperties.setProperty("https.proxyHost",proxy);
        systemProperties.setProperty("https.proxyPort",port);
*/
/*
        SocketHttpConnectionProvider s = new SocketHttpConnectionProvider();
        s.useProxy(ProxyInfo.httpProxy(proxy, 8080, null, null));
        HttpResponse response1 = HttpRequest.get("http://localhost:8080/get_books").withConnectionProvider(s).send();
*/

        System.setProperty("http.proxyHost", proxy); // set proxy server
        System.setProperty("http.proxyPort", port); // set proxy port


        HttpResponse response = HttpRequest.get(url).send();
        return response.statusCode() == 200 ? response.body() : "";
    }
}
