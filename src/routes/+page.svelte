<script>
  const data = [
    {
      label: "Calm Sea",
      text: "Here\'s a nice picture of a calm sea",
      src: "./src/lib/pexels-alice-castro-1820041.jpg",
      link: "https://www.pexels.com/photo/body-of-water-1820041/"
    },
    {
      label: 'Stormy Sea',
      text: 'Here\'s a cool picture of a stormy sea',
      src: "./src/lib/pexels-kellie-churchman-1001682.jpg",
      link: "https://www.pexels.com/photo/landscape-photograph-of-body-of-water-1001682/"
    }
  ]
</script>

{#each data as component}
  <div class="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src={component.src} alt="The sea">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{component.label}</div>
        <span class="mt-2 text-slate-500">{component.text}</span>
        <a href={component.link} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">View this image on Pexels</a>
      </div>
    </div>
  </div>
{/each}