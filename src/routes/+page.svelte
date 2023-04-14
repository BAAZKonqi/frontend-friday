<script lang="ts">
	import { counter, increment } from '../lib/counter';
</script>

<h1 class="text-4xl font-bold">How did we do?</h1>
<button class="rounded-md border-2 border-black px-4 font-medium shadow-md" on:click={increment}>
	SUBMIT
</button>

<style>
</style>
