<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
  import "../app.css";
	export const ssr = false;
</script>

<div class="relative bg-slate-700 text-blue-700 flex min-h-screen flex-col justify-center overflow-hidden">
	<Header />

	<main class="flex-1">
		<slot />
	</main>

	<Footer />
</div>