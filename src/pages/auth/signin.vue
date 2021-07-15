<template>
  <f7-page name="signin">
    <f7-navbar title="Sign In" back-link="Back"></f7-navbar>

    <f7-list no-hairlines-md>

        <f7-list-input
            :value="email"
            @input="email=$event.target.value"
            label="E-mail"
            type="email"
            placeholder="Your e-mail"
            clear-button
        >
            <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
        </f7-list-input>

        <f7-list-input
            :value="password"
            @input="password=$event.target.value"
            label="Password"
            type="password"
            placeholder="Your password"
            clear-button
        >
            <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
        </f7-list-input>
    </f7-list>

    <f7-block>

        <f7-button outline>Sign In</f7-button>

        <div style="text-align: center;">
            <f7-link>Resend Confirmation Email</f7-link><br />
            <f7-link href="/signup/">Don't Have Account? Sign Up</f7-link><br />
            <f7-link>Forget Password</f7-link>
        </div>

    </f7-block>

  </f7-page>
</template>
<script>
export default {
    data(){
        return {
            email:null,
            password:null
        }
    }
}
</script>
