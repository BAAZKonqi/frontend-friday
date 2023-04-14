<script lang="ts">
	import { counter, increment } from '../lib/counter';
</script>

<h1 class="text-4xl font-bold">How did we do?</h1>
{#each {length: 5} as _,i}
	<button class="rounde-md border-2 border-black" >{i+1}</button>
{/each}
<button class="rounded-md border-2 border-black px-4 font-medium shadow-md" on:click={increment}>
	SUBMIT
</button>

<style>
</style>
