<script>
	import { Router, Route } from "svelte-routing";
	import PrivateRoute from "./routers/PrivateRoute.svelte";

	import Home from "./pages/Home/Home.svelte";
	import Dashboard from "./pages/Dashboard/Dashboard.svelte";
	import Login from "./pages/Login/Login.svelte";
	import Signup from "./pages/Signup/Signup.svelte";
	import Contact from "./pages/Contact/Contact.svelte";

	export let url = "";	
</script>

<Router {url}>
	<Route path="/" component={Home} />
	<Route path="/login" component={Login} />
	<Route path="/signup" component={Signup} />

	<PrivateRoute path="/dashboard" let:location>
		<Dashboard/>
	</PrivateRoute>
	<PrivateRoute path="/contact" let:location>
		<Contact/>
	</PrivateRoute>
</Router>