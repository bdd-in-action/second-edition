package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record City(
        @JsonProperty("name") String name,
        @JsonProperty("code") String code,
        @JsonProperty("region") String region) {}
