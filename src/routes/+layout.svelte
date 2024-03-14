<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { AppShell, AppBar, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	
	import { fly } from "svelte/transition";

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">LUKE'S SITE</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<TabGroup>
					<TabAnchor href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor>
					<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>About</TabAnchor>
				</TabGroup>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	
	{#key data.url}
		<div class="h-full" in:fly={{ x: 200, duration: 300, delay: 300 }} out:fly={{ x: -200, duration: 300}}>
			<slot />
		</div>
	{/key}
</AppShell>