<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
  import "../app.css";
</script>

<div class="relative bg-slate-700 text-white flex min-h-screen flex-col justify-center overflow-hidden">
	<Header />

	<main class="flex-1">
    <div class="p-2 m-2">
      <slot />
    </div>
	</main>

	<Footer />
</div>