<svelte:options customElement="svelte-element" />

<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main class="bg-gray">
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="h-6rem p-5" alt="Svelte Logo" />
    </a>
  </div>
  <h1 class:color-red={true}>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p>
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  @unocss-placeholder
</style>
