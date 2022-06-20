package com.manning.bddinaction.flyinghigh.ui.screenplay.ux;

import net.serenitybdd.screenplay.targets.Target;

class MaterialComponents {
    static final Target MATERIAL_OPTION = Target.the("option").locatedBy("//span[@class='mat-option-text'][normalize-space()='{0}']");
}
