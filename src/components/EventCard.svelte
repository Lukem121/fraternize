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
        price: "FREE"
    };    

    let showSpotsLeft = false;

    if(event.maxPeople > 0){
        if(event.maxPeople - event.peopleGoing < Math.floor((event.maxPeople * 0.1) + 5)){
            showSpotsLeft = true;
        }
    }
    
</script>

<div class="mx-auto my-2 px-4 py-1 max-w-xl">
    <div class="bg-white rounded-lg tracking-wide" >

        <!-- Image -->
        <div class="md:flex-shrink-0">
            <a href="/"><img class="w-full h-40 hover:h-48 object-cover rounded-lg rounded-b-none" src="{event.imgURL}" alt="{event.imgAlt}"></a>
        </div>
        <div class="px-4 py-2">

            <!-- Title of card -->
            <a href="/"><h2 class="font-bold text-2xl text-gray-800 tracking-normal">{event.title}</h2></a>
            
            <!-- Time and headline -->
            <p class="text-sm text-gray-700">
                {event.eventTime} - {event.category} at  {event.locationName}.
            </p>

            <!-- People attending and price -->
            <div class="flex items-center justify-between">
                <span class="text-gray-700">{event.peopleGoing} going {#if showSpotsLeft}<span class="text-black">-</span> <span class="text-red-600">{ event.maxPeople - event.peopleGoing} spots left!</span>{/if}</span>
                <p class="bg-rashekgreen block text-center text-rashekblack font-bold px-3 py-1 rounded-lg mb-2">{event.price}</p>
            </div>
        </div>
    </div>
</div>