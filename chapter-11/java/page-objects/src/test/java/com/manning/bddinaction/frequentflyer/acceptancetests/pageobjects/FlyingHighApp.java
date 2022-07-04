package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Socket;

public class FlyingHighApp {
    public static boolean isRunningLocally() {
        return pingHost("localhost",3000,1000);
    }

    public static boolean pingHost(String host, int port, int timeout) {
        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress(host, port), timeout);
            return true;
        } catch (IOException e) {
            return false; // Either timeout or unreachable or failed DNS lookup.
        }
    }
}
