<script>
    export let friendsCounter = 0;
    const incrementFriends = () => friendsCounter++
    const alienateFriends = () => friendsCounter--
</script>

<div class="friend_section">
    <h2>
        Friends Counter
    </h2>
    <h3>{friendsCounter} friends</h3>
    <button on:click={incrementFriends}>Add a friend</button>
    <button on:click={alienateFriends}>Alienate a friend</button>
</div>

<style>
    .friend_section {
        background-color: #151515; 
        padding: 10px 30px 30px 30px;
        border-radius: 8px;
    }
</style>