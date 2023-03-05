<script>
	import { page } from '$app/stores';
</script>

<header class="main-header bg-slate-900 text-orange-400 flex font-bold sm:text-xl items-center space-x-4 w-full text-center border-b border-grey p-4">
	<h1 class="bg-orange-400 text-purple-900 w-1/6 h-100 p-1 border-slate-800 border-8 sm:hidden">App</h1>
	<h1 class="bg-orange-400 text-purple-900 w-1/6 p-1 h-100 border-slate-800 border-8 hidden sm:block">Branding Here</h1>
	<nav class="sm:w-4/6">
		<ul class="flex justify-center text-center items-center space-x-8 sm:space-x-12 lg:space-x-20">
			<li class="hover:text-amber-400" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">
					<span class="sm:hidden">
						🏠
					</span>
					<span class="hidden sm:block">
						🏠 Home
					</span>
				</a>
			</li>
			<li class="hover:text-amber-400" aria-current={$page.url.pathname.startsWith('/toggle') ? 'page' : undefined}>
				<a href="/toggle">
					<span class="sm:hidden">
						🔘
					</span>
					<span class="hidden sm:block">
						🔘 Basic Toggle
					</span>
				</a>
			</li>
			<li class="hover:text-amber-400" aria-current={$page.url.pathname.startsWith('/fetch') ? 'page' : undefined}>
				<a href="/fetch">
					<span class="sm:hidden">
						✨
					</span>
					<span class="hidden sm:block">
						✨ Fetch Data
					</span>
				</a>
			</li>
		</ul>
	</nav>
	<div class="w-1/6" />
</header>