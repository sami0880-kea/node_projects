<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./pages//Home/Home.svelte";
	import Movies from "./pages/Movies/Movies.svelte";
	import Shop from "./pages/SunglassesShop/SunglassesShop.svelte";

	console.log(import.meta.env.VITE_BASE_URL)
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/movies">Eclipse Movies</Link>
		<Link to="/shop">Sunglasses Shop</Link>
	</nav>
	<div>
		<Route path="/"><Home/></Route>
		<Route path="/movies"><Movies/></Route>
		<Route path="/shop"><Shop/></Route>
	</div>
</Router>