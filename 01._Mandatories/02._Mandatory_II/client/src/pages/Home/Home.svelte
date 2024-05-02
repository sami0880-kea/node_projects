<script>
    import { Heading, P, Span } from 'flowbite-svelte';
    import Navbar from '../../components/Navbar/Navbar.svelte';
</script>

<Navbar/>
<div class="flex flex-col items-center justify-center min-h-screen text-center">
    <Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl">
        <Span gradient>Welcome</Span> (User) 👋
    </Heading>
</div>