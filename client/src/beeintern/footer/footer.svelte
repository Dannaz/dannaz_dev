<script>
    import Item from '../item/item.svelte'
    import Logo from '../logo/logo.svelte'
    export let items = [];
</script>

<style>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 97px 0;
    }
    .footer__logo {
        margin-bottom: 30px;
    }
    .footer__items {
        margin-bottom: 29px;
    }
    .footer__item {
        display: inline-block;
    }
    .footer__item:not(:last-child) {
        margin-right: 40px;
    }
    .footer__divider {
        display: inline-block;
        width: 996px;
        height: 2px;
        background-color: var(--white-color);
    }
</style>

<div class="footer">
    <div class="footer__logo">
        <Logo type="white"></Logo>
    </div>
    <div class="footer__items">
        {#each items as item}
            <div class="footer__item">
                <Item type="white"></Item>
            </div>
        {/each}
    </div>
    <div class="footer__divider"></div>
</div>
