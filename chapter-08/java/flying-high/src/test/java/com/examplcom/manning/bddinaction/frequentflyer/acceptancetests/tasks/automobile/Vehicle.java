package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.automobile;

public class Vehicle {
    public static Vehicle thatIs(NewOrUsed newOrUsed) {
        return new Vehicle();
    }

    public Vehicle ofMake(String make) {
        return this;
    }

    public Vehicle ofModel(String model) {
        return this;
    }

}
