package com.manning.bddinaction.flyinghigh.domain.persona;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The information we need to validate an email address
 */
public record EmailValidation(String frequentFlyerNumber,String email,String token){}
