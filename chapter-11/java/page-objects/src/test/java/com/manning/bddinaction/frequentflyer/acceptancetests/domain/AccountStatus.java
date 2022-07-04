package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

/**
 * The current user level and point balance
 */
public record AccountStatus(UserLevel userLevel, Integer pointBalance) {}
