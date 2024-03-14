<script lang="ts">
	import { onMount } from "svelte";
	import TypeIt from "typeit";

	let typeit: HTMLSpanElement;

	onMount(() => {
    	new TypeIt(typeit).type("Welcome to my site").pause(300).delete(7).pause(300).type("<code class=\"code h2\">luke.systems</code>.").go();
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h2"><span bind:this={typeit}></span></h1>
		<div class="flex justify-center space-x-2">
			<a href="/about" class="btn variant-filled-error">What is this?</a>
		</div>
		<div class="space-y-2 text-surface-300">
			<p>In development, stay tuned!</p>
		</div>
	</div>
</div>
