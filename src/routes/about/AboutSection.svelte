<div class="title">
  <h3 class="card-subtitle"><slot name="title" /></h3>
  <h4 class="location"><slot name="location" /></h4>
</div>
<h4 class="date"><slot name="date" /></h4>

<p class="card-text"><slot name="text" /></p>

<style lang="scss">
  .title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .location {
      font-size: 1.5em;
      margin: auto 10px;
      font-style: italic;
    }
  }

  .card-subtitle {
    margin: 0;
  }

  .date {
    margin: 0;
    font-size: 1.2em;
  }

  .card-text {
    margin-bottom: 40px;
  }
</style>
