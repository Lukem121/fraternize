<script>
    import Button from '../components/Button.svelte';
    import Input from '../components/Input.svelte';
    import TimeInput from '../components/TimeInput.svelte';
	async function logout() {
        const logoutCheck = await fetch('sessionLogout', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const { success } = await logoutCheck.json();
        if (success) {
            window.location.href = '/';
        }
    }

    let processing = false;
    const handleAddEvent = () => {
        processing= true;
    }

</script>
<!-- 
    imgURL: "/people1.jpg",
    eventTime: "5:00 PM",
    peopleGoing: 1,
    maxPeople: 10,
    price: "FREE" -->

<div class="relative mb-20">
    <div class="mx-auto my-2 px-4 py-1 max-w-xl">
        <h1 class="text-offwhite text-2xl font-bold">Add an event!</h1>
        <form on:submit|preventDefault>
            <Input labelValue="Title" />
            <Input labelValue="Location" />
            <Input labelValue="Category" />
            <div class="flex">
                <TimeInput />
                <TimeInput />
            </div>
            <Button on:click={handleAddEvent} {processing} value={"Add"}/>
        </form>
        <Button on:click={logout} value={"Logout"}/>
    </div>
</div>

