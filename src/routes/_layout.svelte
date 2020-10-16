<script>
	import { onMount } from 'svelte';
	import { stores } from '@sapper/app';

	import Stylesheet from "../components/Stylesheet.svelte";
    import Nav from '../components/Nav.svelte';
	export let segment;
	
	const { session } = stores();
	
    onMount(async () => {
        firebase.auth().onIdTokenChanged(async (user) => {
            try {
                if (!user) {
                    console.log(`User does not exist`);
                    Cookies.set('token', false);
                    $session.user = false;
                    return;
                }
                const token = await user.getIdToken();
                $session.user = token;
                Cookies.set('token', token);
                console.log(`User found and session set!`);
                // refreshes token every 55 minutes to also sync with server-side. 
                window.timeoutId = setTimeout(() => {
                    const user = firebase.auth().currentUser;
                    if (user) {
                        return firebase.auth().currentUser.getIdToken(true);
                    }
                    console.log('No user! Timeout will be killed eventually.');
                }, 1000 * 60 * 55);
            } catch (e) {
                console.log(`Something went wrong`);
                Cookies.set('token', false);
                $session.user = false;
                return;
            }
        });
    });
</script>


<Stylesheet />
<div>
	<slot />
</div>
<Nav {segment} />