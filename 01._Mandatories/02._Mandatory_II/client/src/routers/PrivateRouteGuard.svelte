<script>
    import { navigate, useLocation } from "svelte-routing";
    import { user } from "../stores/userStore.js";
  
    const location = useLocation();
  
    // Redirect if the user is not logged in
    $: if (!$user) {
      navigate("/login", {
        //state: { from: $location.pathname },
        replace: true,
      });
    }
  </script>
  
  {#if $user}
    <slot />
  {/if}
  