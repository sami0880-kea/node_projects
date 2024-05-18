<script>
    import { nicknameStore } from "../../stores/nicknameStore.js";
    let nicknameInput;

    async function submitNickname() {
        await fetch("http://localhost:8080/nicknames", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nickname: nicknameInput })
        });
        const response = await fetch("http://localhost:8080/nicknames");
        const result = await response.json();
        nicknameStore.set(nicknameInput);

        localStorage.setItem("nickname", nicknameInput);
    }
</script>

<input placeholder="Nickname" bind:value={nicknameInput}>
<button on:click={submitNickname}>Submit Nickname</button>