<script>
    import { navigate, useLocation } from 'svelte-routing';
    import { user } from '../../stores/userStore.js'
    import { Card, Input, Label, Button, Hr, Toast, Spinner, A } from 'flowbite-svelte';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { X, Check } from 'lucide-svelte';
    import { DarkMode } from 'flowbite-svelte';

    let email = 'johndoe@mail.com';
    let password = 'johndoe1234';

    let failToast = false;
    let successToast = false;
    let isLoading = false;

    const location = useLocation();

    async function login() {
        try {
            isLoading = true;  
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                failToast = true;
                isLoading = false;
                return
            }

            user.set({ email });
            navigate("/dashboard", { replace: true });
            isLoading = false;
        } catch (error) {
            failToast = true;
            isLoading = false;
        }
    }

  onMount(() => {
    if (localStorage.getItem('session')) {
      navigate('/');
    }
  });

    $: if (failToast) {
        setTimeout(() => { failToast = false; }, 5000);
    }
</script>


<DarkMode class="hidden"/>
<div class="flex flex-col items-center justify-center min-h-screen">
        <Card>
        <form on:submit|preventDefault={login} class="flex flex-col space-y-6">
            <h1 class="text-xl font-medium text-gray-900 dark:text-white">Login</h1>
            <div class="mb-4">
                <Label for="email" class="mb-2">Email address</Label>
                <Input type="email" id="email" placeholder="johndoe@company.com" bind:value={email} required />
            </div>
            <div class="mb-4">
                <Label for="password" class="mb-2">Password</Label>
                <Input type="password" id="password" placeholder="•••••••••" bind:value={password} required />
            </div>
            <div class="flex items-center justify-between">
                {#if isLoading}
                    <Button disabled class="w-full flex items-center justify-center">
                        <Spinner class="me-3" size="4" color="white" /> Loading ...
                    </Button>
                {:else}
                    <Button class="w-full" type="submit">Login</Button>
                {/if}
            </div>
            <div class="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="/signup" class="text-primary-700 hover:underline dark:text-primary-500"> Create an account </a>
            </div>
        </form>
    </Card>
</div>

<Toast transition={fly} params={{ x: 200 }} dismissable={false} position="bottom-right" color="none" defaultIconClass="w-8 h-8 text-red bg-white" class="bg-red-500 dark:bg-red-500 text-white dark:text-white mb-4 fixed" bind:open={failToast}>
    <X slot="icon" class="text-red-500 w-5 h-5"/>
    Invalid login details!
</Toast>
<!--
<Toast transition={fly} params={{ x: 200 }} dismissable={false} position="bottom-right" class="bg-green-500 text-white mb-4 fixed" bind:open={successToast}>
    <Check slot="icon" class="text-green-500 w-5 h-5"/>
    Successfully logged in!
</Toast>
-->