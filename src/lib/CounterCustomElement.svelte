<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class:bg-orange-500={count > 0}>
  count is {count}
</button>

<style>
  @unocss-placeholder
</style>
