<script>
  export let data
  let submitted = false
  let promise = Promise.resolve();
  import { answers } from '../../stores'
  const handleSelect = ({ id, value }) => {
    const newAnswer = { id, value }
    const newAnswers = $answers
      .filter(answer => answer.id !== newAnswer.id)
      .concat(newAnswer)
    answers.set(newAnswers)
  }

  const submitQuestions = async () => {
		const response = await self.fetch(
      'http://localhost:3000/submit',
      {
        method: 'POST',
        body: '{ answers: $answers }'
      }
    )

		if (response.ok) {
      const data = await response.json()
      console.log(data)
  		return data;
			
		} else {
			throw new Error('Error submitting results');
		}
	}

  const handleSubmit = () => {
    submitted = true
    promise = submitQuestions()
  }
</script>

{#each data as question}
  <h2 class='p-8'>{question.question}</h2>
  {#each question.options as option}
    <label>
      <input
        type="radio"
        on:change={e => handleSelect({
          id: question.id,
          value: e.target.value
        })}
        value={option.id}
      >
      {option.text}
    </label>
  {/each}
{/each}

<button on:click={handleSubmit}>Submit</button>

{#await promise}
  <div class="flex">
    {#if submitted}
      <span class="p-4 m-4 max-w-md mx-auto bg-slate-800 shadow-md overflow-hidden md:max-w-2xl font-bold text-center text-lg">Scoring answers...</span>
    {/if}
  </div>
{:then data}
  <div class="columns-2 lg:columns-3">
    {data.text}
  </div>
  <!-- <pre class="my-4 bg-slate-900 text-yellow-300">
{JSON.stringify(data, null, 2)}
  </pre> -->
{:catch error}
  {JSON.stringify(error, null, 2)}
{/await}