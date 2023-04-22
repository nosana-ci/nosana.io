<template>
  <client-only>
    <div v-if="templates && templates.length > 0" class="preview-container has-radius">
      <div class="tabs">
        <ul>
          <li
            v-for="(template, index) in templates"
            :key="index"
            :class="{'is-active': template.name === activeTab}"
            style="width: 20%;"
            @click="activeTab = template.name, code = template.code"
          >
            <a class="has-text-weight-bold">{{ template.name }}</a>
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
import { highlight } from 'prismjs/components/prism-core';
import Prism from '~/plugins/prism';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
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
          code: `\
nosana:
    description: Nosana SPL Template

global:
    image: projectserum/build:v0.25.0

    trigger:
        branch:
            - main

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
            path: ./
`
        },
        {
          name: 'Python',
          code: `\
nosana:
    description: Nosana Python Template

global:
    image: python:latest

    trigger:
        branch:
            - main

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
            path: ./
`
        },
        {
          name: 'Node.JS',
          code: `/
nosana:
    description: Nosana NPM Template

global:
    image: node:18

    trigger:
        branch:
            - main

jobs:
    - name: Install Dependencies
      commands:
          - npm ci
      artifacts:
          - name: node_modules
            path: ./node_modules/

    - name: Lint and Genereate
      commands:
          - npm run lint
          - npm run generate
      resources:
          - name: node_modules
            path: ./
      artifacts:
          - name: dist
            path: ./dist/

    - name: Distribute
      commands:
          - npm run upload
      resources:
          - name: dist
            path: ./
`
        },
        {
          name: 'Go',
          code: `\
nosana:
    description: Nosana Go Template

global:
    image: golang:latest

    trigger:
        branch:
            - main

    environment:
        GO_ENV: go_build_env

jobs:
    - name: Clone and build
      commands:
          - echo $GO_ENV
          - git clone https://github.com/go-training/helloworld
          - cd helloworld
          - go run main.go
          - mkdir build/
          - go build main.go
      artifacts:
          - name: build
            path: ./

    - name: Release build
      commands:
          - ls -lah
          - ./helloworld/main
      resources:
          - name: build
            path: ./
`
        },
        {
          name: 'Rust',
          code: `\
nosana:
    description: Nosana Rust Template

global:
    image: rust:latest

    trigger:
        branch:
            - main

jobs:
    - name: install deps and build container
      commands:
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
            path: ./
`
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
      return highlight(code, Prism.languages.yaml); // languages.<insert language> to return html with markup
    }
  }
};
</script>

<style lang="scss">
  .my-editor {
    color: #E6E7E6;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    max-height: 450px;
    pre {
    color: #E6E7E6 !important;
  }
    @media screen and (min-height: 1200px) and (min-width: 1000px) {
      height: 50vh !important;
      max-height: none;
    }
  }

  .preview-container {
    background: $dark-mode-background;
    border: #343D36 1px solid;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
  .token.number, .token.tag {
    background-color: transparent;
    border-radius: 9999px;
    display: inline;
    font-size: 1em;
    height: auto;
    margin-right: 0;
    min-width: 0;
    padding: 0;
    text-align: left;
    vertical-align: unset;
    color: #E6E7E6;
  }

  .token.key.atrule {
    color: #B5FF8A;
  }

  .preview-container .tabs {
    a {
      font-size: 18px;
      border-bottom: 2px solid#343D36;
      &.is-active {
        border-bottom: 2px solid $accent;
      }
    }
  }
</style>
