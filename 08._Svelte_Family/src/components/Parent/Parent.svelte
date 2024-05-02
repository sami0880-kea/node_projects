<script>
    import Child from "../Child/Child.svelte";

    export let parentName;
    export let myChildren;

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName} 💚`)
    }

    /*
        ASSIGNMENT: Create a treasure chest full of items (emoji) each parent
        has a treasure chest and the children can take one item at a time 
        remember to follow the conventions to handle* and on*
        display the treasure chest items in the parent component
    */


    let emojis = ["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];
    
    function handleTreasureChest() {
        emojis.pop();
        emojis = emojis;
    }

    // Assignment: Give parents the power to wipe the fridge
    
    import { fridgeMessages } from "../../stores/fridgeMessageStore";
    function wipeFridge() {
        fridgeMessages.set([{ message: "Svelte Family Fridge" }]);
    }

</script>

<!-- ASSIGNMENT: Pass each set of children to each parent -->
<h1>{parentName}</h1>
<button on:click={wipeFridge}>Wipe fridge 🧽</button>
<p>
    {#each emojis as emoji}
        {emoji + " "}
    {/each}
</p>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onTreasureChest={handleTreasureChest}/>
{/each}