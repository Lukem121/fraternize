<script>
    import { stores } from '@sapper/app';
    import EventCard from '../../components/EventCard.svelte';

	const { session } = stores();

    let events = [
        {
            imgURL: "/eventImages/people1.jpg",
            imgAlt: "Location image",
            title: "This is a default title",
            eventTime: "5:00 PM",
            category: "Default category",
            locationName: "Default Location",
            peopleGoing: 14,
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
            peopleGoing: 34,
            maxPeople: 40,
            price: "£6.99"
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
            peopleGoing: 7,
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

<!-- Add this module to page to ensure that the user is logged in -->
<script context="module">
	export async function preload(page, session) {
        	let { user } = session;
        	if (!user) return this.redirect(302, '/login');
       		return {user}
	}
</script>

<div class="relative mb-20">
    {#each events as event, i}
	<EventCard {event} />
    {/each}
</div>