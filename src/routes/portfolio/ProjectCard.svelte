<script lang="ts">
  import Technology from '$lib/Technology.svelte';

  export let name: string;
  export let technologies: [string];
  export let title: string = name.charAt(0).toUpperCase() + name.substring(1);
</script>

<section class="card">
  <article class="card-body">
    <div class="head">
      <h2 class="card-title">{title}</h2>
      <slot name="links" />
    </div>

    <p class="card-text">
      <slot name="text" />
    </p>
    <ul>
      {#each technologies as technology}
        <Technology name={technology} />
      {/each}
    </ul>
  </article>

  <img src={`/${name}.gif`} alt={`${title} Demo`} />
</section>

<style lang="scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .head {
    display: flex;
    justify-content: space-between;
  }

  .card {
    width: 90vw;
    background-color: rgb(245, 245, 245, 0.4);
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    &:hover {
      background-color: rgb(245, 245, 245, 1);
    }
  }

  h2 {
    max-width: 60%;
  }

  @media only screen and (min-width: 768px) {
    .card {
      flex-direction: row;

      & > img {
        width: 50%;
      }
    }
  }
</style>
