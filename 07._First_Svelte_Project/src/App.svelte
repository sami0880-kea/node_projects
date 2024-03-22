<script>
  import FriendsCounter from "./components/FriendsCounter/FriendsCounter.svelte"
  import Greeter from "./components/Greeter/Greeter.svelte";
</script>

<main>
  <Greeter name="Eve"></Greeter>
  <FriendsCounter friendsCounter={5} ></FriendsCounter>
</main> 