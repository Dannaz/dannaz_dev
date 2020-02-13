<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let item = '';
    export let type = 'regular';

    const handleClick = () => {
        dispatch('itemClick', {item});
    }
</script>

<style>
    .item {
        display: inline-block;
        width: 154px;
        height: 31px;
    }
    ._type_regular {
        background-color: var(--main-bg-color);
    }
    ._type_white {
        background-color: var(--white-color);
    }
</style>

<div on:click={handleClick} class={`item _type_${type}`}></div>
