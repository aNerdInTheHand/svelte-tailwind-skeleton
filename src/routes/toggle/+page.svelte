<script lang="ts">
  import { toggle } from '../../stores'
  const buttonOffImg = './src/lib/icons8-light-off-50.png'
  const buttonOnImg = './src/lib/icons8-light-on-48.png'
  
  $: buttonText = $toggle.on ? 'Turn Off' : 'Turn On';
</script>

<h1 class="m-4 p-4 w-100 max-w-md mx-auto overflow-hidden md:max-w-2xl text-xl">Basic Toggle Example Page</h1>

<div class="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">>
  <div class="p-4 w-100 align-middle justify-center text-center">
    <div class="w-100 uppercase tracking-wide text-sm text-indigo-500 font-semibold py-4">{$toggle.text}</div>
    <div class="flex align-middle justify-center">
      <button
        on:click={() => $toggle.on = !$toggle.on}
        class="p-2 m-2 text-slate-500 bg-slate-200 hover:bg-slate-300">{buttonText}
      </button>
      <img
        src={$toggle.on ? buttonOnImg : buttonOffImg}
        alt={`A lightbulb turned ${$toggle.on ? "on" : "off"}`}
      >
    </div>
  </div>
</div>

<div>
  <a
    rel="noreferrer"
    target="_blank"
    href="https://icons8.com/icon/20182/light-off"
  >
    Light Off
  </a> icon by 
  <a
    rel="noreferrer"
    target="_blank"
    href="https://icons8.com"
  >
    Icons8
  </a>
</div>
<div>
  <a
    rel="noreferrer"
    target="_blank"
    href="https://icons8.com/icon/20523/light-on"
  >
    Light On
  </a> icon by 
  <a
    rel="noreferrer"
    target="_blank"
    href="https://icons8.com"
  >
    Icons8
  </a>
</div>