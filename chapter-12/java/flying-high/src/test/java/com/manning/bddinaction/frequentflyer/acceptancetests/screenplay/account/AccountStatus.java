package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.account;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;

public record AccountStatus(UserLevel level, Integer points) {
}
