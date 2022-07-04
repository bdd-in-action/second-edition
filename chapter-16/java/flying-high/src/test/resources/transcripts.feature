Feature: Transcripts
  In order to complete my application
  As a applicant wanting to enroll in a university course
  I want to provide evidence of my A-level results

  Rule: Applicants who have never studied at university may need to provide transcripts

  Applicants having taken six or more IGCSEs/GCSEs, or five or more Scottish National Qualifications
  in the last three years do not need to provide a transcript

    Scenario Outline: Students with UK school qualifications
      Given Steve is applying for a university course
      And Steve has taken the following courses in the last three years:
        | GCSE    | Scottish Nationals   |
        | <GCSEs> | <Scottish Nationals> |
      And Steve has completed his A-levels
      Then he will need to submit a transcript of his A-level results: <Transcript Required?>
      Examples:
        | GCSEs | Scottish Nationals | Transcript Required? |
        | No    | No                 | Yes                  |
        | Yes   | No                 | No                   |
        | No    | Yes                | No                   |

    Scenario Outline: Students with non-UK school qualifications
      Given Stacy is applying for a university course
      And Stacy has taken the following courses that provide a PUM:
        | IGCSEs/GCSEs   | Modular A/AS levels   | Cambridge International A Levels   |
        | <IGCSEs/GCSEs> | <Modular A/AS levels> | <Cambridge International A Levels> |
      Then she should be able to apply: <Can Apply>
      And she will need to submit a transcript: <Transcript Required?>
      Examples:
        | IGCSEs/GCSEs | Modular A/AS levels | Cambridge International A Levels | Can Apply | Transcript Required? |
        | No           | No                  | No                               | No        | No                   |
        | Yes          | No                  | No                               | Yes       | Yes                  |
        | Yes          | Yes                 | No                               | Yes       | No                   |
        | Yes          | No                  | Yes                              | Yes       | No                   |

      Rule: Transcripts should be recorded in the student application
        Example: Steve uploads his transcripts
          Given Steve needs to submit his A-level transcript
          When he uploads his A-level transcript
          Then the transcript should be available in his application

     Rule: Students can delete their transcripts
       Example: Stacy wants to upload an updated transcript
         Given Stacy has already uploaded her A-level transcript
         When she deletes the transcript
         Then the transcript should no longer be available in her application


Feature: Transcripts
  In order to complete my application
  As a applicant wanting to enroll in a university course
  I want to provide evidence of my A-level results

    Scenario: Upload Transcript
      Given an applicant logs in to the application
      And they navigate to "Education" page
      And they navigate to "GCSEs" page
      And they are presented with GCSEs question, chooses "No" and proceeds
      And they are asked if they took GCSEs, chooses "No" and proceeds
      And they are presented Scottish National question, chooses "No" and proceeds
      And they are presented with A-level question, chooses "Yes" and proceeds
      And they choose "Yes" to upload a transcript in the transcript question and proceeds
      When they upload a transcript
      And they delete the transcript
      Then no transcripts are displayed
