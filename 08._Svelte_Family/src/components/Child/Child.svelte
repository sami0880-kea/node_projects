<script>
    export let child;
    export let onShowLove;
    export let onTreasureChest;

    import { fridgeMessages } from "../../stores/fridgeMessageStore";

    let fridgeMessageInputValue = "";
    function submitFridgeMessage() {
        const newFridgeMessage = {
            creator: child.name,
            message: fridgeMessageInputValue
        };

        // set method
        //fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);

        // update method
        fridgeMessages.update((fridgeMessagestoreValue) => {
            fridgeMessagestoreValue.push(newFridgeMessage);
            return fridgeMessagestoreValue;
        });

        fridgeMessageInputValue = "";
        //console.log("Fridge Message Input Value: " + fridgeMessageInputValue)
    }
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}>

    <h2>{child.name}</h2>

    <label for="fridgeMessage">Write a Fridge Message</label>
    <input type="text" name="fridgeMessage" placeholder="Fridge Message"
        bind:value={fridgeMessageInputValue}>
    <br>
    <button on:click={submitFridgeMessage}>Write Fridge Message</button>
    <br>
    <br>
    <button on:click={() => onShowLove(child.name)}>Show Love 💚</button>
    <br>
    <button on:click={() => onTreasureChest(child.name)}>Open Chest 📦</button>
</div>

<style>
    .is-girl {
        background-color: rgb(249, 150, 166);
    }
    .is-boy {
        background-color: rgb(0, 187, 255);
    }
    .grey-sheep {
        border: 0.2em solid grey;
    }
    .black-sheep {
        border: 0.2em solid black;
    }
    .not-a-sheep {
        border: 0.2em solid white;
    }
</style>