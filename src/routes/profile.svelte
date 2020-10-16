<script>
    // Logout the user 
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
</script>
<h1 class="text-xl text-offwhite ml-2">Profile Page</h1>
<button class="bg-rashekgreen px-3 py-1 rounded ml-2" on:click={logout}>Logout</button>
