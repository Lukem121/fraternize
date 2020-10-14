<script>
	import Stylesheet from "../components/Stylesheet.svelte";
    import Nav from '../components/Nav.svelte';
	export let segment;
</script>


<Stylesheet />
<div>
	<slot />
</div>
<Nav {segment} />