package com.hyper.wishlist.services.impl;

import com.hyper.wishlist.services.ConnectionService;
import jodd.http.HttpRequest;
import jodd.http.HttpResponse;
import org.springframework.stereotype.Service;

import java.net.UnknownHostException;

@Service
public class ConnectionServiceImpl implements ConnectionService {
    @Override
    public String getContent(String url) throws UnknownHostException {
        /*
            SocketHttpConnectionProvider s = new SocketHttpConnectionProvider();
            s.useProxy(ProxyInfo.httpProxy("localhost", 1090, null, null));

            HttpResponse response = HttpRequest.get("http://localhost:1080/get_books")
                .withConnectionProvider(s)
                .send();
		*/

        HttpResponse response = HttpRequest.get(url).send();
        return response.statusCode() == 200 ? response.body() : "";
    }
}
