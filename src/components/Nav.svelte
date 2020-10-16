<script>
    export let segment;
</script>

<!-- Pages not to show nav -->
{#if segment != undefined && segment != "signup" && segment != "login"}

<div class="bg-offwhite fixed bottom-0 w-full border-t border-gray-200 flex">
    <!-- Today -->
    <a href="/events" class="link" class:selected={segment === "events"}>
        <div>
            <svg class="svg"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-day" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <span class="link-text ">Events</span>
        </div>
    </a>

    <!-- Favorites -->
    <a href="/favorites" class="link" class:selected={segment === "favorites"}>
        <div>
            <svg class="svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <span class="link-text">Favorites</span>
        </div>
    </a>

    <!-- Messages -->
    <a href="/messages" class="link" class:selected={segment === "messages"}>
        <div>
            <svg class="svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>
            <span class="link-text">Messages</span>
        </div>
    </a>

    <!-- Profile -->
    <a href="/profile" class="link" class:selected={segment === "profile"}>
        <div>
            <svg class="svg" aria-hidden="true" data-prefix="fas" data-icon="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
            <span class="link-text">Profile</span>
        </div>
    </a>
</div>
{/if}

<style>
    .link {
        @apply flex flex-grow items-center justify-center p-2 text-gray-500;
    }

    .selected {
        @apply text-gray-800;
    }

    .link:hover{
        @apply text-gray-800;
    }

    .svg {
        @apply w-6 h-8 block mx-auto;
    }

    .link-text{
        @apply block text-xs leading-none;
    }
</style>
