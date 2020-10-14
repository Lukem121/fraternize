<script>
    import EventCard from '../../components/EventCard.svelte';
    let events = [
        {
            imgURL: "https://source.unsplash.com/random/600x400",
            imgAlt: "Location image",
            title: "This is a default title",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: "1",
            price: "FREE"
        }
    ]
</script>

<div class="relative">
    {#each events as event, i}
	<EventCard {event} />
    {/each}
</div>