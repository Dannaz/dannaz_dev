<script>
    import Header from './header'
    import Button from './button'
    import Banner from './banner/banner.svelte'
    import ArticleVertical from './article-vertical/article-vertical.svelte'
    import ArticleHorizontal from './article-horizontal/article-horizontal.svelte'
    import SingUp from './sing-up/sing-up.svelte'
    import Footer from './footer/footer.svelte';

    const menuItems = ['none', 'party-rock', 'party-controls', 'theme'];

    const articleVerticalProps = {
        title: 'Article Header',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        moreTitle: 'Read More',
        url: '#',
    };
    const verticalArticles = Array(3).fill(articleVerticalProps);

    function toggleTheme() {
        if (document.documentElement.hasAttribute('theme')) {
            document.documentElement.removeAttribute('theme');
        } else {
            document.documentElement.setAttribute('theme', 'dark');
        }
    }

    function toggleControlsParty() {
        [
            ...document.querySelectorAll('.logo'),
            ...document.querySelectorAll('.item'),
            ...document.querySelectorAll('.button'),
            ...document.querySelectorAll('.image'),
            ...document.querySelectorAll('.input'),
            ...document.querySelectorAll('.footer__divider'),
        ].forEach(element => element.classList.toggle('party'))
    }

    function toggleBackgroundParty() {
        [
            ...document.querySelectorAll('.page__row_white'),
            ...document.querySelectorAll('.page__row_regular'),
        ].forEach(element => element.classList.toggle('party'));
    }

    function clearAllEffects() {
        [
            ...document.querySelectorAll('.logo'),
            ...document.querySelectorAll('.item'),
            ...document.querySelectorAll('.button'),
            ...document.querySelectorAll('.image'),
            ...document.querySelectorAll('.input'),
            ...document.querySelectorAll('.footer__divider'),
            ...document.querySelectorAll('.page__row_white'),
            ...document.querySelectorAll('.page__row_regular'),
        ].forEach(element => element.classList.remove('party'));
    }

    const handleItemClick = (event) => {
        const {item} = event.detail;
        console.log('item', item);
        switch (item) {
            case 'theme': {
                toggleTheme();
                break;
            }
            case 'party-controls': {
                toggleControlsParty();
                break;
            }
            case 'party-rock': {
                toggleBackgroundParty();
                break;
            }
            case 'none':
            default: {
                clearAllEffects();
            }
        }
    }
</script>

<style>
    .page {

    }
    .page__header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }
    .page__row-item {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }
    .page__row_white {
        background-color: var(--white-color);
    }
    .page__row_regular {
        background-color: var(--main-bg-color);
    }
    .page__articles {
        padding: 80px 110px;

    }
    .page__articles_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .page__articles_bottom {
        padding: 80px 124px;
    }
    .page__article-horizontal:not(:last-child) {
        margin-bottom: 60px;
    }
    .page__article-vertical:not(:last-child) {
        margin-right: 40px;
    }
    .page__back-button {
        width: 283px;
        margin: 80px auto 0;
    }
    .page__sing-up {
        padding: 129px 0;
    }
</style>

<div class="page">
    <div class="page__row_white page__header">
        <div class="page__row-item">
            <Header items={menuItems} on:itemClick={handleItemClick}></Header>
        </div>
    </div>
    <div class="page__row_regular">
        <div class="page__row-item">
            <Banner></Banner>
        </div>
    </div>
    <div class="page__row_white">
        <div class="page__row-item">
            <div class="page__articles page__articles_top">
                {#each verticalArticles as verticalArticle}
                    <div class="page__article-vertical">
                        <ArticleVertical
                                title={verticalArticle.title}
                                description={verticalArticle.description}
                                moreTitle={verticalArticle.moreTitle}
                                url={verticalArticle.url}
                        >
                        </ArticleVertical>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="page__row_regular">
        <div class="page__row-item">
            <div class="page__sing-up">
                <SingUp
                        on:singUp="{() => {}}"
                        buttonText="fill button"
                >

                </SingUp>
            </div>
        </div>
    </div>
    <div class="page__row_white">
        <div class="page__row-item">
            <div class="page__articles page__articles_bottom">
                {#each verticalArticles as article, idx}
                    <div class="page__article-horizontal">
                        <ArticleHorizontal
                                title={article.title}
                                description={article.description}
                                url={article.url}
                                inverted={idx % 2 !== 0}
                        >
                        </ArticleHorizontal>
                    </div>
                {/each}
                <div class="page__back-button">
                    <Button
                            type="black"
                    >
                        back button
                    </Button>
                </div>
            </div>
        </div>
    </div>
    <div class="page__row_regular">
        <div class="page__row-item">
            <Footer items={menuItems}></Footer>
        </div>
    </div>

</div>
