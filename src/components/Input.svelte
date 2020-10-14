<script>
    export let labelValue = "undefined";
    export let inputPlaceholder = undefined;
    export let inputType = "text";
</script>


<div class="my-1">
    <p class="label">{labelValue}</p>
    <input name={labelValue} class="input" type={inputType} placeholder={inputPlaceholder} />
</div>

<style>
    .label {
        @apply text-offwhite text-xl font-bold;
    }
    .input {
        @apply h-10 w-full rounded-lg;
    }
</style>