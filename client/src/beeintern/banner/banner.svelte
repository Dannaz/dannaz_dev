<script>
    import Button from '../button/index.svelte';

    export let title = 'Banner Header';
    export let description = 'Lorem ipsum dolor sit amet'
</script>

<style>
    .banner {
        width: 100%;
        height: 450px;
        padding: 0 130px;
        display: flex;
        align-items: center;
    }
    .banner__title {
        display: block;
        font-size: 60px;
        line-height: 76px;
    }
    .banner__description {
        display: block;
        font-size: 36px;
        line-height: 46px;
        margin-bottom: 30px;
    }
    .banner__button {
        display: inline-block;
    }
    .banner__button:not(:last-child) {
        margin-right: 25px;
    }
</style>

<div class="banner">
    <div class="banner__content">
        <h1 class="banner__title">{title}</h1>
        <p class="banner__description">{description}</p>
        <div class="banner__button">
            <Button>white button</Button>
        </div>
        <div class="banner__button">
            <Button type="black">black button</Button>
        </div>
    </div>
</div>
