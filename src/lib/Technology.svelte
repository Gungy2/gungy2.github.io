<script lang="ts">
  import { technologies } from './store';

  export let name: string;
</script>

<li><img src={`/${$technologies[name]}`} alt={name} />{name}</li>

<style lang="scss">
  li {
    text-align: center;
    margin: 10px 30px;

    &::before {
      display: none;
    }
  }

  img {
    margin: auto;
    margin-bottom: 10px;
    height: 30px;
    width: 30px;
  }

  @media only screen and (min-width: 768px) {
    img {
      margin: auto;
      margin-bottom: 10px;
      height: 50px;
      width: 50px;
    }

    li {
      margin: 20px 50px;
    }
  }
</style>
