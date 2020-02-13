<script>
    export let type = 'regular'
</script>

<style>
    .logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        border-radius: 50%;
    }
    ._type_regular {
        background-color: var(--main-bg-color);
    }
    ._type_white {
        background-color: var(--white-color);
    }
</style>

<div class={`logo _type_${type}`}></div>
