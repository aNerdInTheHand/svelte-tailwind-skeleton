<script lang="ts">
  let promise = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(x => x.json())
</script>

{#await promise}
  <!-- optionally show while promise is pending -->
  <span>Loading currency data from coindesk...</span>
{:then data}
  <!-- promise was fulfilled -->
  <div>
    {#each Object.entries(data.bpi) as [currency, info]}
      <h2>{currency}</h2>
      <span>1 BTC = {info.rate} {currency}</span>
    {/each}
  </div>
  <!-- <pre>
    {JSON.stringify(data, null, 2)}
  </pre> -->
{:catch error}
  <!-- optionally show something while promise was rejected -->
{/await}