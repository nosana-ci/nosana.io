<template>
  <div>
    <section class="section">
      <div class="container">
        <accordion>
          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3>Item 1</h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>

          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3>Item 2</h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>

          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3>Item 3</h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>
        </accordion>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
}
</script>
