package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.ux;

import net.serenitybdd.screenplay.targets.Target;

class MaterialComponents {
    static final Target MATERIAL_OPTION = Target.the("option").locatedBy("//span[@class='mat-option-text'][normalize-space()='{0}']");
}
