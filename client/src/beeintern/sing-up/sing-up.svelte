<script>
    import {createEventDispatcher} from 'svelte';
    import Button from '../button';
    const dispatch = createEventDispatcher();

    export let buttonText = '';
    let email = '';
</script>

<style>
    .sing-up {

    }
    .sing-up__row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .sing-up__label {
        display: block;
        text-align: center;
        font-size: 35px;
        line-height: 47px;
    }
    .input {
        display: inline-block;
        box-sizing: border-box;
        width: 412px;
        height: 60px;
        color: var(--black-text-color);
        background-color: var(--white-color);
        font-size: 26px;
        line-height: 33px;
        padding: 15px 20px 12px 20px;
        border: none;
    }
</style>

<div class="sing-up">
    <form on:submit={dispatch('singUp', {email})}>
        <label class="sing-up__label" for="email">Sign Up for updates</label>
        <div class="sing-up__row">
            <input class="input" placeholder="Enter you email" name="email" bind:value={email} type="email">
            <Button type="black">{buttonText}</Button>
        </div>
    </form>
</div>
