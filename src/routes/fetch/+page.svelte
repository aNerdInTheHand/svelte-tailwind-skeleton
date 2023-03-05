<script lang="ts">
  let disabled = false;
  let triggered = false;
	let promise = Promise.resolve<[]>([]);
  import Questions from './Questions.svelte'
	
	const getQuestions = async ():Promise<any> => {
		const response = await self.fetch('http://localhost:3000/questions');

		if (response.ok) {
  		return response.json();
			
		} else {
			throw new Error('Error fetching exchange rate data');
		}
	}

  const handleClick = () => {
    promise = getQuestions();
    disabled = true;
    triggered = true;
	}

</script>

<h1 class="p-4 m-4 max-w-md mx-auto bg-slate-800 shadow-md overflow-hidden md:max-w-2xl font-bold text-center text-lg">
  Pub Quiz
</h1>

<div class="p-4 m-4 font-serif italic">
  <div>Welcome to the Mind Gym pub quiz!</div>
  <div>The full return value is displayed underneath for debugging.</div>
  <hr />
</div>

<div class="flex">  
  <button
    on:click={handleClick} {disabled}
    class="p-4 m-4 rounded max-w-md mx-auto bg-slate-800 hover:bg-slate-900 shadow-md overflow-hidden md:max-w-2xl font-bold text-center text-lg text-yellow-400 hover:text-yellow-300"
    >
    Start Quiz!
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
    <Questions data={data} />
  </div>
  <!-- <pre class="my-4 bg-slate-900 text-yellow-300">
{JSON.stringify(data, null, 2)}
  </pre> -->
{:catch error}
  {JSON.stringify(error, null, 2)}
{/await}