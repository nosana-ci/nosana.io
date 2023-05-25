---
title: How to Break Your CI Pipeline in 10 Easy Steps
description: We have compiled a list of 10 bad habits that will guarantee your CI pipeline fails miserably
img: /img/break_pipeline.png
createdAt: '2023-05-25'
---
Continuous integration (CI) is a great way to ensure that your code is always up-to-date, tested, and ready to deploy. But what if you don’t want to follow the best practices and instead want to sabotage your own pipeline? Well, you’re in luck because we have compiled a list of 10 bad habits that will guarantee your CI pipeline fails miserably. Read on and learn how to break your CI pipeline in 10 easy steps!


### Step 1: Misalign your workspaces

One of the first things you can do to break your CI pipeline is to make sure that your local and remote workspaces are not in sync. This means that you have different versions of the code, dependencies, configuration files, and other resources on your machine and on the server. This will create all kinds of conflicts and errors when you try to push or pull changes, run tests, or build artifacts. 

**To achieve this, you can:**
* Ignore or delete the `.gitignore` file and commit everything to the repository, including binaries, logs, temporary files, and sensitive data.
* Use different branches for different purposes, and never merge them back to the main branch. Bonus points if you have a stable release branch that is missing or outdated.
* Modify the pipeline-related resources (such as scripts, Dockerfiles, YAML files) directly on the server without versioning them or updating the repository.


### Step 2: Forget about package management

Another way to break your CI pipeline is to forget about package management. Package management is the process of managing the dependencies of your project, such as libraries, frameworks, and tools. Of course, it can also help you publish your packages back to your tech community of choice. Without proper package management, you will have:
* Missing or incompatible dependencies that will cause your build to fail or produce unexpected results.
* Obscured access to open-source tools that help you build your product and save you time
* Slow builds because you don’t reuse or share pre-built/cached versions of dependencies

**To forget about package management, you can:** 
* Commit your dependencies straight in to your repository, along with all the artifacts needed for your project.
* Install dependencies manually on your machine or on the server without documenting them or using a tool.
* Mix different languages or environments without using virtual environments or containers.


### Step 3: Mess up the build steps

The next step to breaking your CI pipeline is to mess up the build steps. The build steps are the tasks that are executed in your pipeline, such as compiling, testing, packaging, and deploying. **To mess up the build steps, you can:**
* Order them incorrectly, so that they depend on each other or produce inconsistent outputs. For example, you can run tests before compiling the code, or deploy before packaging.
* Mark a build as succeeded when a task is failed or an error is thrown. This will hide the problems and give you a false sense of confidence.
* Mark a build as failed when it actually succeeded due to some flakiness in the execution. This will waste your time and resources and frustrate you and your team.
* Execute some tasks without clearly reporting their results in the build output. This will make it hard to debug and troubleshoot issues.


### Step 4: Skip the build notification mechanism

Another way to break your CI pipeline is to skip the build notification mechanism. The build notification mechanism is the way you get informed about the status of your builds, such as success, failure, or warning. Without a build notification mechanism, you will have:
* No visibility into what is happening in your pipeline and how it affects your code quality and delivery speed.
* No accountability for fixing broken builds or improving performance issues.
* No feedback loop for learning from mistakes and improving your practices.

**To skip the build notification mechanism, you can:**
* Disable or ignore any email, chat, or dashboard notifications that are set up by default or by your team.
* Use verbose or irrelevant information in your notifications that will clutter your inbox or chat channel and make it hard to find important messages.
* Use generic or ambiguous messages that will not tell you what went wrong or what needs to be done.


### Step 5: Ignore the time-out configuration

The next step to breaking your CI pipeline is to ignore the time-out configuration. The setting that determines how long a task can continue to run before the pipeline aborts it is the time-out configuration. Without a proper time-out configuration, you will have:
* Long-running tasks that will block other tasks from running and slow down your pipeline.
* Unresponsive tasks that will hang indefinitely and consume resources without producing any output.
* Unreliable tasks that will fail randomly due to network issues or external factors.

**To ignore the time-out configuration, you can:**
* Use the default value for all tasks without considering their complexity or variability.
* Use too short or too long values that will either abort tasks prematurely or let them run unnecessarily.
* Use inconsistent values across different tasks or stages, that will create confusion and unpredictability.


### Step 6: Use absolute/machine-dependent paths

Another way to break your CI pipeline is to use absolute/machine-dependent paths. Absolute/machine-dependent paths are paths that are specific to a particular machine or environment, such as `C:\Users\Alice\Documents\Project` or `/home/bob/project`. These paths will cause problems when you try to run your code or tasks on different machines or environments, such as:
* Missing files or directories that will cause errors or failures.
* Wrong files or directories that will cause unexpected results or behaviors.
* Security risks that will expose sensitive data or credentials.

**To use absolute or machine-dependent paths, you can:**
* Hard-code them in your code or configuration files without using variables or placeholders.
* Use them in your scripts without checking for their existence or validity.
* Use them in your tests without mocking them or using fixtures.


### Step 7: Make your build scripts dependent on the IDE

The next step to breaking your CI pipeline is to make your build scripts dependent on the IDE. The IDE (Integrated Development Environment) is the tool that you use to write and edit your code. Your build scripts are the commands that you use to run your tasks in your pipeline. If you make your build scripts dependent on the IDE, you will have:
* Inconsistent results between local and remote builds due to different settings or plugins in the IDE.
* Missing dependencies or configurations that are only available in the IDE but not in the pipeline environment.
* Unnecessary overheads or complications that are added by the IDE but not needed for the pipeline execution.

**To make your build scripts dependent on the IDE, you can:**
* Use IDE-specific commands or features that are not supported by other tools or platforms.
* Rely on IDE-generated files or directories that are not checked into the repository or copied to the pipeline environment.
* Use different versions of dependencies or tools in the IDE and in the pipeline environment.


### Step 8: Skip testing in a production-like environment

Another way to break your CI pipeline is to skip testing in a production-like environment. A production-like environment is an environment that mimics as closely as possible the real production environment where your code will eventually run. Testing in a production-like environment is important because it will help you:
* Catch bugs or issues that only occur in production due to differences in hardware, software, data, or users.
* Validate that your code meets the functional and non-functional requirements of production such as performance, security, and scalability.
* Verify that your code integrates well with other components or systems in production, such as databases, APIs, or third-party services.

**To skip testing in a production-like environment, you can:**
* Use production resources for testing purposes, such as real data, credentials, or endpoints. This will risk compromising their integrity, availability, or confidentiality.
* Use mock objects for testing purposes, such as fake data, responses, or services. This will risk missing real-world scenarios, edge cases, or errors.
* Use manual testing for testing purposes such as clicking buttons, filling forms, or checking outputs. This will risk introducing human errors, biases, or inconsistencies.


### Step 9: Include flaky tests in your test suite

The next step to breaking your CI pipeline is to include flaky tests in your test suite. Flaky tests are tests that sometimes pass and sometimes fail without any apparent reason. Flaky tests are bad because they will:
* Reduce your confidence in your test results and make you doubt their validity.
* Waste your time and resources by forcing you to rerun them multiple times until they pass (or fail).
* Mask real bugs or issues by making you ignore them as false positives (or negatives).

**To include flaky tests in your test suite, you can:**
* Write tests that depend on external factors such as network connectivity, timing delays or random inputs.
* Write tests that have side effects such as modifying global state, database records or file system contents.
* Write tests that are too complex, too vague, or too brittle.


### Step 10: Ignore quality gates

The final step to breaking your CI pipeline is to ignore quality gates. Quality gates are checkpoints in your pipeline where you check certain metrics or criteria before proceeding to the next stage. Quality gates are useful because they help you:
* Ensure that your code meets certain standards of quality such as code style, coverage, or complexity.
* Prevent bad code from reaching production by stopping it early in the pipeline before it causes more damage.
* Improve your code quality over time by identifying areas for improvement and enforcing best practices.

**To ignore quality gates, you can:**
* Disable them altogether by removing them from your pipeline configuration file or skipping them when running commands


### Mission Accomplished

Congratulations! You have successfully learned how to break your CI pipeline in 10 easy steps. By following these bad habits, you can ensure that your pipeline will never run smoothly, reliably, or efficiently. You can also enjoy the benefits of:
* Frustrating yourself and your team with frequent failures and delays.
* Losing trust and credibility with your customers and stakeholders with poor quality and delivery.
* Wasting money and resources with unnecessary rework and maintenance.

Of course, if you don’t want to break your CI pipeline, you can do the opposite of what we have suggested. You can follow the best practices of CI and avoid these common pitfalls. But hey, it’s your choice. Do you want to break your CI pipeline or make it better? The answer is obvious, right?
