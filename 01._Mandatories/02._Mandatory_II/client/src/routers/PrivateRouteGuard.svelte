<script>
  import { user } from "../stores/userStore.js";
  import { tick } from "svelte";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";

  let isAuthenticated = false;

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:8080/api/user', {
        credentials: 'include',
      });
      isAuthenticated = response.ok;
      const result = await response.json();
      user.set(result);
    } catch (error) {
      isAuthenticated = false;
    }

    if (!isAuthenticated) {
      // await tick();
      navigate("/login", { 
        replace: true 
      });
    }
  });
</script>

{#if isAuthenticated}
  <slot />
{/if}
