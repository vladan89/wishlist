package com.hyper.wishlist.services.impl;

import com.hyper.wishlist.services.ConnectionService;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Properties;

@Service
public class ConnectionServiceImpl implements ConnectionService {
    @Override
    public String getContent(String url) {
        try {
            URL urlToBeExtracted = new URL(url);
            /**########### PROXY CONFIG ########################**/
            /*String proxy = "proxy.rcub.bg.ac.rs";
            String port = "8080";

            Properties systemProperties = System.getProperties();
            systemProperties.setProperty("http.proxyHost",proxy);
            systemProperties.setProperty("http.proxyPort",port);*/

            /*#################################################*/

            HttpURLConnection con = (HttpURLConnection) urlToBeExtracted.openConnection();
            con.setRequestMethod("GET");
            con.setConnectTimeout(5000);
            con.setReadTimeout(5000);
            int status = con.getResponseCode();

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();

            con.disconnect();

            return content.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }
}
