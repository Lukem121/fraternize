<script>
    import EventCard from '../../components/EventCard.svelte';
    let events = [
        {
            imgURL: "https://source.unsplash.com/random/600x400",
            imgAlt: "Location image",
            title: "Chat and a walk",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: 6,
            maxPeople: 42,
            price: "£1.99"
        },
        {
            imgURL: "/eventImages/people1.jpg",
            imgAlt: "Location image",
            title: "This is a default title",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: 11,
            maxPeople: 15,
            price: "FREE"
        },
        {
            imgURL: "/eventImages/people2.jpg",
            imgAlt: "Location image",
            title: "This is a default title",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: 1,
            maxPeople: 15,
            price: "FREE"
        },
        {
            imgURL: "/eventImages/test1.jpg",
            imgAlt: "Location image",
            title: "This is a default title",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: 1,
            maxPeople: 15,
            price: "FREE"
        },
        {
            imgURL: "/eventImages/test2.jpg",
            imgAlt: "Location image",
            title: "Insect Hunt and coffee",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: 1,
            maxPeople: 15,
            price: "FREE"
        },
        {
            imgURL: "/eventImages/test3.jpg",
            imgAlt: "Location image",
            title: "River chess tornament",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: 1,
            maxPeople: 15,
            price: "FREE"
        }
        
    ]
</script>

<div class="relative mb-20">
    {#each events as event, i}
	<EventCard {event} />
    {/each}
</div>