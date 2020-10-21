<script context="module">
	export async function preload(page, session) {
        // Checks user logged in
        let { user } = session;
        if (!user){
            return this.redirect(302, '/login');
        } 

        // Gets event data
        const res = await this.fetch('/events.json');
        const events = await res.json();

        return { user, events }
    }
</script>

<script>
    import { stores } from '@sapper/app';
    import EventCard from '../../components/EventCard.svelte';
    const { session } = stores();  
    
    export let events;
</script>


<div class="relative mb-20">
    {#each events as event}
        <EventCard {event} />
    {/each}
</div>