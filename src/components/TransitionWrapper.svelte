<script>
    import { fly } from 'svelte/transition'; 
    let show = true;
</script>

{#if show}
    <div class="relative" in:fly="{{ x: -300, duration: 500, delay: 300 }}" out:fly="{{ x:300, duration:300 }}" >
        <slot></slot>
    </div>
{/if}

<style>
</style>