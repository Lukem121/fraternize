<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<style>
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h2 class="text-6xl text-red-600 ml-5">{status}</h2>
<p class="text-2xl text-red-600 ml-5">{error.message} 😭</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
