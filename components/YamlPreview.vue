<template>
  <client-only>
    <div v-if="templates && templates.length > 0">
      <div class="tabs">
        <ul>
          <li
            v-for="(template, index) in templates"
            :key="index"
            :class="{'is-active': template.name === activeTab}"
            @click="activeTab = template.name, code = template.code"
          >
            <a>{{ template.name }}</a>
          </li>
        </ul>
      </div>
      <prism-editor
        v-model="code"
        class="my-editor has-border-radius"
        :highlight="highlighter"
        line-numbers
        readonly
      />
    </div>
  </client-only>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

export default {
  components: {
    PrismEditor
  },
  data: () => ({
    code: null,
    activeTab: null,
    templates:
      [
        {
          name: 'SPL',
          code: `# .nosana-ci.yml
nosana:
    description: Build and Test Nosana Contracts
    backend: IPFS

global:
    image: registry.hub.docker.com/projectserum/build:v0.25.0

    # Trigger pipeline on these branches:
    trigger:
        branch:
            - main

    # Allow pipeline to stop if one job fails
    allow_failure: true  # default: false

jobs:

    - name: install_build
      commands:
          - npm ci
          - anchor build

      artifacts:
          - name: anchor_target
            path: ./target/
          - name: node_modules
            path: ./node_modules/

    - name: npm_tests
      commands:
          - npm run eslint
          - npm run prettier
          - npm run check-types
      resources:
          - name: node_modules
            path: ./

    - name: anchor_test
      commands:
          - solana-keygen new --no-bip39-passphrase
          - anchor test --skip-build
      resources:
          - name: node_modules
            path: ./
          - name: anchor_target
            path: ./

    - name: cargo_test
      commands:
          - cargo check --resources
          - cargo test --release
          - cargo clippy --release
      resources:
          - name: node_modules
            path: ./
          - name: anchor_target
            path: ./`
        },
        {
          name: 'Python',
          code: `nosana:
  description: Nosana-Node Pipeline

global:
  image: registry.hub.docker.com/library/python:latest

  trigger:
    branch:
      - all

jobs:
  - name: install deps and build container
    commands:
      # Initialize
      - python -m venv count
      - . count/bin/activate
      - pip install numpy flake8 pytest
      - pip freeze > requirements.txt
    artifacts:
      - name: count
        path: count/

  - name: test
    commands:
      - . count/bin/activate
      - pip install -r requirements.txt
      - pytest -v --cov=count/
    resources:
      - name: count
        path: ./`
        },
        {
          name: 'Node.JS',
          code: `# .nosana-ci.yml
nosana:
    description: NPM Template

global:
    image: registry.hub.docker.com/library/node:18

    # Git, trigger on these branches
    trigger:
        branch:
            - main

    # Environment variables
    environment:
        APP_ENV: production  # comment here about this var

jobs:
    # Install dependencies
    - name: install
      commands:
          - npm ci
      artifacts:  # artifact for the next job
          - name: node_modules
            path: ./node_modules/

    # Lint and generate docs.
    - name: generate
      commands:
          - npm run eslint
          - npm run prettier
          - npm run generate
      resources:  # artifact from previous job
          - name: node_modules
            path: ./
      artifacts:  # artifact for deployment
          - name: dist
            path: ./dist/

    # Upload dist
    - name: ditribute
      commands:
          - npm run upload
      resources:
          - name: dist
            path: ./`
        },
        {
          name: 'Go',
          code: `nosana:
  description: Nosana-Node Pipeline

global:
  image: registry.hub.docker.com/library/golang:latest

  trigger:
    branch:
      - all

  environment:
    # Specify that apt will be used in noninteractive env.
    # https://www.debian.org/releases/sarge/s390/ch05s02.html.en
    DEBIAN_FRONTEND: noninteractive

jobs:
  - name: install deps and build container
    commands:
      - pwd
      - go mod init example/hello  # Initialize
      - touch hello.go
      - echo 'package main' >> hello.go
      - echo 'import "fmt"' >> hello.go
      - echo 'func main() { fmt.Println("Hello, World!") }' >> hello.go
      - echo >> hello.go
      - cat hello.go
      - go run hello.go
      - mkdir build
      - go build -o build/
    artifacts:
      - name: build
        path: ./build/

  - name: release
    commands:
      - ./build/hello
    resources:
      - name: build
        path: ./`
        },
        {
          name: 'Rust',
          code: `nosana:
  description: Nosana-Node Pipeline

global:
  image: registry.hub.docker.com/library/rust:latest

  trigger:
    branch:
      - all

  environment:
    # Specify that apt will be used in noninteractive env.
    # https://www.debian.org/releases/sarge/s390/ch05s02.html.en
    DEBIAN_FRONTEND: noninteractive

jobs:
  - name: install deps and build container
    commands:
      # Initialize
      - cargo init hello
      - cd hello
      - cargo add rand
      - cargo check
      - cargo build --release
    artifacts:
      - name: target_release
        path: hello/target/release

  - name: release
    commands:
      - ./release/hello
    resources:
      - name: target_release
        path: ./`
        }
      ]
  }),
  mounted () {
    if (this.templates && this.templates.length > 0) {
      this.activeTab = this.templates[0].name;
      this.code = this.templates[0].code;
    }
  },
  methods: {
    highlighter (code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    }
  }
};
</script>

<style lang="scss" scoped>
  /* required class */
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: $dark-mode-background;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    max-height: 600px;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
</style>
