package com.manning.bddinaction.banking;

import java.time.LocalDateTime;

public record Transaction(LocalDateTime time, String description, double amount) {
}
