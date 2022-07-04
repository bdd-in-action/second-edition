@Issue:FHFF-3
Business Need: Authentication

  Registered Frequent Flyer members can access their account using their email and password

  @Issues:FHFF-1,FHFF-2
  @release:iteration-1
  Rule: 1) Frequent Flyers can authenticate by entering their credentials on the login page

  Example: Trevor successfully logs on to the Frequent Flyer app
    Given Trevor has registered as a Frequent Flyer member
    And he has confirmed his email address
    Then he should be able to log on to the Frequent Flyer application

  @Issue:FHFF-4
  @security:sso
  @release:iteration-2
  Rule: 2) Frequent Flyers can sign in with SSO using their Google or Facebook account

  Example: Trevor logs in using his Google credentials

  Example: Trevor logs in using his Facebook credentials
