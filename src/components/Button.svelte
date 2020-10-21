<script>
    export let href = "";
    export let value;
    export let css;
    export let processing = false;
    
</script>

<button on:click href="{href}" class="button" role="button" style="{css}">
  {#if processing}
  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  {/if}
  {value}
</button>

<style>
    .button {
      @apply inline-flex items-center justify-center bg-rashekgreen text-xl font-bold w-full px-4 py-2 my-4 rounded-lg  leading-6;
    }
</style>


