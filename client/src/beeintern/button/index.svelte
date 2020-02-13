<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    export let type = 'white';
    let button = true;
    let white = type === 'white';
    let black = type === 'black';

    function handleClick() {
        dispatch('click')
    }
</script>

<style>
    .button {
        display: inline-block;
        width: 283px;
        height: 60px;
        user-select: none;
        border: none;
        font-size: 26px;
    }
    .white {
        background-color: var(--white-color);
        color: var(--black-color);
    }
    .black {
        background-color: var(--black-color);
        color: var(--white-color);
    }
</style>

<button class:button class:white={white} class:black={black}>
    <slot></slot>
</button>
