<script>
	import { Router, Link, Route } from "svelte-routing";
	import { user } from "./stores/userStore.js";
	import PrivateRoute from "./routers/PrivateRoute.svelte";

	import Home from "./pages/Home/Home.svelte";
	import Login from "./pages/Login/Login.svelte";
	import Signup from "./pages/Signup/Signup.svelte";


	export let url = "";
	
</script>

<Router {url}>
	<PrivateRoute path="/" let:location>
		<Home />
	</PrivateRoute>
	<Route path="/login" component={Login} />
	<Route path="/signup" component={Signup} />
</Router>