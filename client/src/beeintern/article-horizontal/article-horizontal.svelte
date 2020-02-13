<script>
    import FancyImage from '../fancy-image/fancy-image.svelte'
    export let title = '';
    export let description = '';
    export let url = '';
    export let inverted = false;
</script>

<style>
    .article-horizontal,
    .article-horizontal:hover,
    .article-horizontal:active,
    .article-horizontal:visited {
        color: var(--black-color);
        cursor: pointer;
        user-select: none;
        text-decoration: none;
    }

    .article-horizontal {
        display: flex;
        width: 100%;
        height: 386px;
        justify-content: center;
        align-items: center;
    }

    .inverted {
        text-align: left;
        flex-flow: row-reverse;
    }

    .inverted > .info {
        margin-right: auto;
        margin-left: 60px;
    }

    .image {
        width: 588px;
        height: 386px;
        flex-shrink: 0;
    }

    .info {
        display: inline-block;
        margin-right: 60px;
    }

    .title {
        display: block;
        font-size: 30px;
        margin-bottom: 8px;
        height: 38px;
        text-overflow: ellipsis;
        overflow: hidden;
        color: var(--black-text-color);
    }
    .description {
        display: block;
        width: 100%;
        height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 30px;
        color: var(--black-text-color);
    }
</style>

<a class="article-horizontal" class:inverted={inverted} href={url}>
    <div class="info">
        <h3 class="title">{title}</h3>
        <p class="description">{description}</p>
    </div>
    <div class="image">
        <FancyImage></FancyImage>
    </div>
</a>
