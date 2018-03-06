package com.hyper.wishlist;

import antlr.StringUtils;
import com.hyper.wishlist.services.ConnectionService;
import jodd.http.HttpException;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.UnknownHostException;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ConnectionServiceTest {

    @Autowired
    ConnectionService connectionService;

    @Test(expected = HttpException.class)
    public void testBadUrl() throws UnknownHostException {
        String content = connectionService.getContent("htt://asdasd");
        Assert.assertTrue(content.toString().equals("UNKNOWN HOST"));
    }

    @Test
    public void testPageNotFoundUrl() throws UnknownHostException {
        String content = connectionService.getContent("http://www.google.com/asasd");
        Assert.assertTrue(content.toString().equals(""));
    }

    @Test
    public void testHttp() throws UnknownHostException {
        String content = connectionService.getContent("http://www.winwin.rs/televizor-tv-39-led-stella-s39d42t2-1920x1080-full-hd-hdmi-usb-t2-tuner-8607427.html");
        Assert.assertTrue(!content.toString().equals(""));
    }

    @Test
    public void testHttps() throws UnknownHostException {
        String content = connectionService.getContent("https://www.tehnomanija.rs/tv-i-video/full-hd/samsung-televizor-ue40m5002akxxh.html");
        Assert.assertTrue(!content.toString().equals(""));
    }
}
