<script>
    
    export let event = {
        imgURL: "/people1.jpg",
        imgAlt: "Location image",
        title: "This is a default title",
        eventTime: "5:00 PM",
        category: "Default category",
        locationName: "Default Location",
        peopleGoing: 1,
        maxPeople: 10,
        remainingSpaces: (maxPeople - peopleGoing),
        price: "FREE"
    };    

    let showSpotsLeft = false;
    if(event.maxPeople > 0){
        if(event.remainingSpaces < Math.floor((event.maxPeople * 0.1) + 5)){
            showSpotsLeft = true;
        }
    }

    
</script>

<div class="mx-auto my-2 px-4 py-1 max-w-xl">
    <div class="bg-white rounded-lg tracking-wide" >

        <!-- Image -->
        <div class="md:flex-shrink-0">
            <a href="/"><img class="card-img" src="{event.imgURL}" alt="{event.imgAlt}"></a>
        </div>
        <div class="px-4 py-2">

            <!-- Title of card -->
            <a href="/"><h2 class="font-bold text-2xl text-gray-800 tracking-normal">{event.title}</h2></a>
            
            <!-- Time and headline -->
            <p class="text-sm text-gray-700 mb-1">
                {event.eventTime} - {event.category} at  {event.locationName}.
            </p>

            <!-- People attending and price -->
            <div class="flex items-center justify-between mb-2">
                <span class="text-gray-700">{event.peopleGoing} going</span> 
                {#if showSpotsLeft}
                    <span class="text-black">-</span> 
                    <span class="text-red-600">{ event.remainingSpaces } { (event.remainingSpaces < 2) ? 'space' : 'spaces' } left!</span>
                {/if}
                
                <p class="card-price">{event.price}</p>
            </div>
        </div>
    </div>
</div>

<style>
    .card-img {
        @apply w-full h-40 object-cover rounded-lg rounded-b-none;
    }
    .card-price {
        @apply bg-rashekgreen block text-center text-rashekblack font-bold px-3 py-1 rounded-lg;
    }
</style>
