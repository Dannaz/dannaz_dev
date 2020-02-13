<script>
    import Logo from '../logo/logo.svelte';
    import Item from '../item/item.svelte';

    export let items = [];
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 89px;
        padding: 0 50px;
    }
    .header__right {
        display: flex;
        flex-wrap: nowrap;
    }
    .header__item:not(:last-child) {
        display: inline-block;
        margin-right: 40px;
    }
</style>

<div class="header">
    <Logo></Logo>
    <div class="header__right">
        {#each items as item}
            <div class="header__item">
                <Item on:itemClick item={item}></Item>
            </div>
        {/each}
    </div>
</div>
