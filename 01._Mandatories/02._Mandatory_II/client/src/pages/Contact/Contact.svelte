<script>
    import Navbar from '../../components/Navbar/Navbar.svelte';
    import { Heading, P, Span, Textarea, Button, Label, Input, Toast } from 'flowbite-svelte';
    import { user } from '../../stores/userStore.js';
    import { fly } from 'svelte/transition';
    import { X, Check } from 'lucide-svelte';
    
    let email = 'johndoe@mail.com';
    let subject = 'Title';
    let message = 'Hello there!';

    let failToast = false;
    let successToast = false;

    let textareaprops = {
        id: 'message',
        name: 'message',
        label: 'Your message',
        rows: 6,
        placeholder: 'Leave a message...'
    };

    async function sendMail() {
        try {
            const response = await fetch('http://localhost:8080/api/send-email', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, subject, message })
            });

            if (!response.ok) {
                failToast = true;
                return
            }
            successToast = true
            email = ''
            subject = ''
            message = ''
        } catch (error) {
            failToast = true;
        }
    }

    $: if (failToast) {
        setTimeout(() => { failToast = false; }, 5000);
    }

    $: if (successToast) {
        setTimeout(() => { successToast = false; }, 5000);
    }

</script>

<Navbar/>
<div class="py-16 mx-auto max-w-screen-md min-h-screen">
    <Heading class="mb-4 text-center ">Contact Us</Heading>
    <P class="mb-8 text-center">Got any questions? Send us a mail!</P>
    <form on:submit|preventDefault={sendMail} class="space-y-6">
        <div class="mb-4">
            <Label class="mb-2">Your Email</Label>
            <Input type="email" id="email" placeholder="johndoe@company.com" bind:value={email} required />
        </div>
        <div class="mb-4">
            <Label class="mb-2">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject" bind:value={subject} required />
        </div>
        <div class="mb-4"> 
            <Label class="mb-2">Your message</Label>
            <Textarea bind:value={message} {...textareaprops} />
        </div>
        <Button type="submit" class="w-40">Send</Button>
    </form>
</div>
<Toast transition={fly} params={{ x: 200 }} dismissable={false} position="bottom-right" color="none" defaultIconClass="w-8 h-8 text-red bg-white" class="bg-red-500 dark:bg-red-500 text-white dark:text-white mb-4 fixed" bind:open={failToast}>
    <X slot="icon" class="text-red-500 w-5 h-5"/>
    Could not send mail!
</Toast>
<Toast transition={fly} params={{ x: 200 }} dismissable={false} position="bottom-right"  color="none" defaultIconClass="w-8 h-8 text-red bg-white" class="bg-green-500 dark:bg-green-500 text-white dark:text-white mb-4 fixed" bind:open={successToast}>
    <Check slot="icon" class="text-green-500 w-5 h-5"/>
    Successfully sent email!
</Toast>
