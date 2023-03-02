<script lang="ts">
  import type { CurrencyType } from '../../types/currency.type'
  let disabled = false;
  let triggered = false;
	let promise = Promise.resolve<[]>([]);
	
	const fetchExchangeRates = async ():Promise<any> => {
		const response = await self.fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

		if (response.ok) {
  		return response.json();
			
		} else {
			throw new Error('Error fetching exchange rate data');
		}
	}

  const handleClick = () => {
    promise = fetchExchangeRates();
    disabled = true;
    triggered = true;
	}

</script>

<h1 class="p-4 m-4 max-w-md mx-auto bg-slate-800 shadow-md overflow-hidden md:max-w-2xl font-bold text-center text-lg">API call example</h1>

<div class="p-4 m-4 font-serif italic">
  <div>This page fetches Bitcoin exchange rates from Coindesk's API and displays the conversion rates for USD, GBP and EUR.</div>
  <div>The full return value is displayed underneath.</div>
  <hr />
</div>

<div class="flex">  
  <button
    on:click={handleClick} {disabled}
    class="p-4 m-4 rounded max-w-md mx-auto bg-slate-800 hover:bg-slate-900 shadow-md overflow-hidden md:max-w-2xl font-bold text-center text-lg text-yellow-400 hover:text-yellow-300"
    >
    Fetch Exchange Rates
</button>
</div>

{#await promise}
  <div class="flex">
    {#if triggered}
    <span class="p-4 m-4 max-w-md mx-auto bg-slate-800 shadow-md overflow-hidden md:max-w-2xl font-bold text-center text-lg">Loading currency data from coindesk...</span>
    {/if}
  </div>
{:then data}
  <div class="columns-2 lg:columns-3">
    {#each Object.entries(data.bpi) as [currency, info]}
      <h2>{info.description}</h2>
      <span>1 BTC = {info.rate} {currency}</span>
    {/each}
  </div>
  <pre class="my-4 bg-slate-900 text-yellow-300">
{JSON.stringify(data, null, 2)}
  </pre>
{:catch error}
  {JSON.stringify(error, null, 2)}
{/await}