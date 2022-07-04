package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.account;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

public class Account {
    public static Question<UserLevel> STATUS_LEVEL = Text.of("[test-dataid='status-level']").asEnum(UserLevel.class);
    public static Question<Integer> POINT_BALANCE = Text.of("[test-dataid='point-balance']").asInteger();
}
