<script>
    export let href = "/";
    export let value;
    export let css;
    
</script>

<a on:click href="{href}" class="button" role="button" style="{css}">{value}</a>

<style>
    .button {
      @apply bg-rashekgreen text-xl block text-center font-bold w-full py-2 rounded-lg my-4;
    }
</style>