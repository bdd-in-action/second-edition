package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests;

import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.spring.TestDatabase;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.PostgreSQLContainer;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * This test illustrates how to create and interact with a TestContainers instance
 */
public class TestContainersSampleTest {
    @Test
    public void creatingANewContainerInstance() {
        PostgreSQLContainer container = new PostgreSQLContainer("postgres:13.0")
                .withDatabaseName("integration-tests-db")
                .withUsername("sa")
                .withPassword("sa");

        container.start();

        String jdbcUrl = container.getJdbcUrl();

        assertThat(jdbcUrl).startsWith("jdbc:postgresql:");

    }

    @Test
    public void usingTheTestDatabase() {
        String url = TestDatabase.getInstance().getJdbcUrl();
    }
}
