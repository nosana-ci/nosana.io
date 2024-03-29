---
title: 'End-to-end pipelines'
description: 
createdAt: '2023-03-06'
tags: 
  - Platform
  - Node
  - Website
---

- Website
    - Some mobile design bug fixes
    - Changelog page/section
- Platform
    - Separate jobs and commits: allows for multiple jobs per commit
    - Migration path from old GitHub flow to new GitHub flow
    - Result log improvements
        - auto-scroll log window improvements
        - increase log window height
        - foldable side panels
    - Support for job triggers on pull requests
    - Show README for default pipeline templates
    - Convert YAML to JSON flow in backend
    - Multisig Squads pipeline + nosana-cli
    - Docker-in-Docker support
- Node
    - Clean up steps: clean container images after job completes
    - Add node health checks every loop
    - Run pipelines locally (with node cli)
    - Brew package to install the node