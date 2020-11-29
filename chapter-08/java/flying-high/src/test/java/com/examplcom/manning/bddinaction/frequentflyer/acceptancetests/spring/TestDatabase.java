package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.spring;

import org.testcontainers.containers.PostgreSQLContainer;

public class TestDatabase {
    private static ThreadLocal<PostgreSQLContainer> container
            = ThreadLocal.withInitial(
            () -> new PostgreSQLContainer<>("postgres:11.1")
                    .withDatabaseName("integration-tests-db")
                    .withUsername("sa")
                    .withPassword("sa")
    );

    public static PostgreSQLContainer getInstance() {
        container.get().start();
        return container.get();
    }
}
