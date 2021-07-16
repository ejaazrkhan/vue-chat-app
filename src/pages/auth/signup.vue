<template>
  <f7-page name="signup">
    <f7-navbar title="Sign Up" back-link="Back"></f7-navbar>

    <div class="wrapper text-align-center">
        <img 
            :src="image_url" 
            alt="" 
            class="lazy"
            width="150"
            height="150"
            style="border-radius: 50%; border: 1px solid #f7f7f7;"
        />
    </div>

    <f7-list no-hairlines-md>

        <f7-list-input
            :value="name"
            @input="name=$event.target.value"
            label="Name"
            type="text"
            placeholder="Your name"
            clear-button
        >
            <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
        </f7-list-input>

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

    </f7-block>

  </f7-page>
</template>
<script>
export default {
    data(){
        return {
            name:null,
            email:null,
            password:null,
            image_url:"https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
        }
    }
}
</script>
