<script>
    export let labelValue = "undefined";
    export let inputPlaceholder = undefined;
    export let value;
</script>


<div class="my-1">
    <p class="label">{labelValue}</p>
    <input bind:value={value} name={labelValue} class="input" placeholder={inputPlaceholder} />
</div>

<style>
    .label {
        @apply text-offwhite text-xl font-bold;
    }
    .input {
        @apply h-10 px-3 w-full rounded-lg;
    }
</style>