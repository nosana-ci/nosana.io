---
title: 'Smoke Out Bugs with Smoke Testing'
description: Getting started with automating smoke tests.
img: /img/smoketesting.png
createdAt: '2023-01-26'
---
Smoke testing is an integral part of a CI/CD setup and can help you reach your goals more quickly. In this blog post, you’ll learn more about smoke testing and how it may help you find issues in your CI/CD pipeline. We’ll also give you some pointers on how to integrate smoke testing into your process by identifying which features need to be tested, as well as how to design and utilize smoke testing to improve the productivity of your CI/CD pipeline.

Even though the term “smoke testing” is not found in the ISO Software and systems engineering — Software Testing it is common practice for any software developer. This testing methodology involves running a basic set of tests to ensure that the most critical functions of a software application are working correctly. It is typically used as a first step in the testing process to quickly identify any major issues that need to be addressed before more comprehensive testing is performed. The term “smoke test” might not be familiar to everyone, but it is guaranteed that software engineers are performing some kind of smoke testing daily. In other circles, it is also known as a “sanity check.” Oftentimes, it is done manually, but parts of these kinds of tests can also be done manually.

The purpose of smoke testing is to provide assurance that the most important parts of an application are working as expected and that it is safe to proceed with further testing. Smoke tests are typically simple and straightforward, focusing on testing the most critical aspects of the application.

Running effective CI/CD pipelines means that you need to automate them as much as possible. Having a set of automated tests to run your code against to validate any changes made to the codebase is the best way to realize the benefits of CI/CD. When you are developing an application, normally you will manually go through the steps of the application to ensure that it is working as expected. This is a good way to ensure that the application is working as expected, but it is not a scalable way to do it. If you have a large application with many features, it is very time-consuming to manually go through all the steps of the application to ensure that it is working as expected.

This series of articles is trying to illuminate an important aspect of CI/CD, which is testing. How do you automate the process of sanity-checking your code? Read on to find out.

## What to test
The first step in setting up smoke testing is to identify the most critical functions of your application. One way to identify these features is by involving the stakeholders involved in the development process. These parties could be the product owner, lead developer, QA engineer, or project manager. These stakeholders will be able to identify the key components of the software that need to be tested. Another way of identifying key features is by looking at the user stories that were created during the development process. Finally, if your organization is capable of doing so, you can also look at the analytics of your application to see which features are being used the most.

Once you have identified the critical functions of your application, you can write a set of smoke tests to ensure that these functions work correctly. Remember, they should be simple and straightforward. There will be other tests that will be more comprehensive and will test the application in more depth.

Some examples of features that you might want to smoke test are:

- Testing the application’s login functionality

- Testing the application’s checkout process

- Testing the application’s payment functionality

By running these tests, you can quickly identify any major issues that need to be addressed before proceeding with more comprehensive testing.

## How to test
Smoke testing is often used with other testing techniques, such as unit testing and integration testing. It is typically performed early in the testing process, before more comprehensive testing is performed. This allows you to catch any major issues early on, which can save time and resources.

By testing different scenarios, user flows, and API endpoints, you can ensure that the application is working as expected. For example, if you are testing the login scenario, where the user logs in with their username and password, a script can be written to test the scenario. This script can be written to simulate a user logging in with their username and password. The script can then validate that the user is logged in by checking the response from the API endpoint. If the response is not what is expected, then the test will fail, indicating that there is a problem with the application.

## Implementation
Implementation of smoke testing will depend on the tools that you are using as well as different testing methodologies, such as unit testing and integration testing. These will help you test the scenarios you described with your team. Functional end-to-end tests should be used to test the user flow, and unit tests should be used to test the individual components of the application. Lastly, integration tests should be used to test the integration between the different components of the application. There will also be a need to make sure that the API is working as expected, so you should query the API endpoint and validate the response.

Here are a few steps to setting up smoke testing in a CI/CD pipeline:

### Identify the critical functions of your application
The very first step in setting up smoke testing is to identify the most critical functions of your application. These are the functions that are essential for the application to work correctly, and that users rely on most heavily.

### Automate smoke tests
To make the smoke testing process as effective as possible, you should automate your smoke tests. This can be done using a CI/CD tool, such as Jenkins or CircleCI, which allows you to automate the build, test, and deployment processes.

### Integrate smoke tests into the CI/CD pipeline
To ensure that smoke testing is performed consistently every time a code change is made, you should integrate your smoke tests into the CI/CD pipeline. This can be done by configuring your CI/CD tool to run the smoke tests as part of the build process.

### Monitor smoke test results
To ensure that your smoke tests are effective and that any issues are addressed quickly, you should monitor the results of your smoke tests. This can be done using a tool like Jenkins, which allows you to track the status of your tests and identify any failures.

### Assessing and reporting results
At this point, you will have a set of smoke tests that we can run against our codebase. You will also have to set up a CI/CD pipeline that will run these smoke tests every time you make a change to your codebase. Now you need to figure out how to assess and report the results of our smoke tests. This is an important step in the process, as it allows you to identify any issues that need to be addressed and make sure that the smoke tests are effective.

As discussed above, if your smoke test fails, it means that there is a problem with your application. This could be a bug, or it could be an issue with an external dependency, such as an API service. In either case, it is critical to address the issue as soon as possible. The appropriate stakeholders need to be informed about the issue and the steps that need to be taken to address it.

The commit that caused the smoke test to fail should be reverted. This will ensure that the application is in a working state. The issue should be addressed, and the code should be re-committed. Once the issue has been addressed, the smoke tests should be run again to ensure that the issue has been resolved.

## Conclusion
By following these steps, you can set up smoke testing in your CI/CD pipeline and take advantage of the benefits of this testing technique. Doing a small sanity check at the beginning of your testing framework will help you identify problems early on. It will help you make the feedback loop smaller so that you can be more nimble, agile, and confident when deploying your software.

Keeping in mind this idea of feedback loops, it is important to note that it is valuable to test early and to test often. This is the only way to ensure that your software is working as expected. If you wait until the end of the development process to test your software, you will have to deal with a lot of technical debt. This will make it more difficult to modify your codebase and more difficult to deploy your software.

Overall, smoke testing is a useful tool for ensuring that the most critical functions of an application are working correctly and that it is safe to proceed with further testing. It can help you catch issues early and improve the overall quality of your codebase. By running a basic set of smoke tests, you can quickly identify any major issues and take steps to address them before they become bigger issues, which leads to faster delivery and better reliability for your application and users down the line.
