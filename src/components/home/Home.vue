<template>
    <div>
        <h1>The Home Page</h1>
        <hr>
        <p>You have successfully subscribed to plan {{plan}}</p>

    </div>
</template>

<script>
    import * as AppConstants from '../utils/AppConstants'
    export default {
        name: 'Home',
        data(){
            return {

            }
        },
        computed:{
            plan : () => {
                return localStorage.getItem(AppConstants.Constants.PLAN_NAME)
            }
        }
    }
</script>