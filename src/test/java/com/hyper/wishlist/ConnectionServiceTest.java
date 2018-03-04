package com.hyper.wishlist;

import antlr.StringUtils;
import com.hyper.wishlist.services.ConnectionService;
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

@RunWith(SpringRunner.class)
@SpringBootTest
public class ConnectionServiceTest {

    @Autowired
    ConnectionService connectionService;

    @Test
    public void test(){

        String content = connectionService.getContent("http://www.ikea.com/rs/sr/catalog/products/70334849/");
        Assert.assertTrue(!content.toString().equals(""));

    }
}
