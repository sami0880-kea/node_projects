<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./pages/Home/Home.svelte";
	import Login from "./pages/Login/Login.svelte";
	import Signup from "./pages/Signup/Signup.svelte";

	export let url = "";
</script>

<Router {url}>
	<Route path="/"><Home /></Route>	
	<Route path="/login" component={Login} />
	<Route path="/signup" component={Signup} />
</Router>