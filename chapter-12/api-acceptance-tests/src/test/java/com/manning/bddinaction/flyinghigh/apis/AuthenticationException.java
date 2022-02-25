package com.manning.bddinaction.flyinghigh.apis;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message) {
        super(message);
    }
}
