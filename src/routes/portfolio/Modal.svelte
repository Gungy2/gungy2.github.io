<script lang="ts">
  export let project: string;
</script>

<label for="modal-{project}"><img src="/git.svg" alt="GitHub Link" /></label>
<input class="modal-state" id="modal-{project}" type="checkbox" />
<div class="modal">
  <label class="modal-bg" for="modal-{project}" />
  <div class="modal-body">
    <label class="btn-close" for="modal-{project}">X</label>
    <h4 class="modal-title">Code Not Available</h4>
    <p class="modal-text">
      Please leave me a message on the <a href="/contact">contact</a> page, and I will make it available
      to you!
    </p>
  </div>
</div>

<style>
  img {
    margin-top: 10px;
    width: 50px;
  }

  label {
    width: fit-content;
    height: fit-content;
    margin-right: 20px;
  }

  img:hover {
    cursor: pointer;
  }
</style>
