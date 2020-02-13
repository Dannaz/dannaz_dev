<script>
   import FancyImage from '../fancy-image/fancy-image.svelte'
    export let title = '';
    export let description = '';
    export let moreTitle = '';
    export let url = '';
</script>

<style>
    .article-vertical:hover,
    .article-vertical:active,
    .article-vertical:visited {
        text-decoration: underline;
        text-decoration-color: var(--gray-text-color);
    }

    .article-vertical {
        color: var(--black-color);
        cursor: pointer;
        display: inline-block;
        user-select: none;
        width: 380px;
        height: 502px;
        text-decoration: none;
    }

    .image {
        width: 100%;
        height: 244px;
    }

    .title {
        display: inline-block;
        font-size: 30px;
        margin: 30px 0 10px;
        height: 38px;
        text-overflow: ellipsis;
        overflow: hidden;
        color: var(--black-text-color);
        text-decoration: none;
    }
    .description {
        display: inline-block;
        width: 100%;
        height: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 30px;
        color: var(--black-text-color);
        text-decoration: none;
    }

    .more {
        color: var(--gray-text-color);
        font-size: 18px;
        line-height: 23px;
        margin-top: 40px;
        text-decoration: none;
    }
</style>

<a class="article-vertical" href={url}>
    <div class="image">
        <FancyImage></FancyImage>
    </div>
    <h3 class="title">{title}</h3>
    <p class="description">{description}</p>
    <span class="more">{moreTitle}</span>
</a>
