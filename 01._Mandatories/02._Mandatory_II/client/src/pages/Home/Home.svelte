<script>
    import { Heading, P, Span, ButtonGroup, Button } from 'flowbite-svelte';
</script>

<div class="flex flex-col items-center justify-center min-h-screen text-center">
    <Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl">
        <Span gradient>Welcome</Span>
    </Heading>
    <ButtonGroup>
        <Button href="/login">Login</Button>
        <Button href="/signup">Signup</Button>
    </ButtonGroup>
</div>