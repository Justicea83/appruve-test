<template>
    <div v-if="!processing" class="container">
        <div class="row">
            <div v-for="(item,index) in plans" :key="index" class="col-sm-4">
                <div class="price-container" :class="{'recommended': item.recommended}">
                    <div v-if="item.recommended" class="recommended-badge">Recommended</div>
                    <div class="price-header">
                        <div class="price-title">
                            <h2>{{item.name}}</h2>
                        </div>
                        <div class="price-subtitle">
                            <p>{{item.subtitle}}</p>
                        </div>
                    </div>
                    <div class="price-body">
                        <strong>{{item.value}}</strong>/ monthly
                    </div>
                    <div class="price-features">
                        <h3 class="features-title">Features of Basic Plan</h3>
                        <ul class="features-container">
                            <li v-for="(feature,i) in item.features" :key="i" class="feature-item">
                                {{feature}}
                            </li>

                        </ul>
                    </div>

                    <a href="#" @click.prevent="subscribeToPlan(item.name)" class="button full-width margin-top-20">Buy
                        Now</a>
                </div>
            </div>
        </div>
    </div>
   <div v-else><p>Loading...</p></div>
</template>

<script>
    import * as AppConstants from '../utils/AppConstants'
    export default {
        name: "Price",
        data() {
            return {
                plans: [
                    {
                        name: 'Bronze',
                        subtitle: 'One time fee for one listing or task highlighted in search results.',
                        value: '$19',
                        features: [
                            '1 Listing',
                            'Highlighted in Search Results',
                            '30 Days Visibility'
                        ],
                        recommended: false
                    },
                    {
                        name: 'Silver',
                        subtitle: 'One time fee for one listing or task highlighted in search results.',
                        value: '$49',
                        features: [
                            '5 Listings',
                            'Highlighted in Search Results',
                            '60 Days Visibility'
                        ],
                        recommended: true
                    },
                    {
                        name: 'Gold',
                        subtitle: 'One time fee for one listing or task highlighted in search results.',
                        value: '$99',
                        features: [
                            'Unlimited Listings Listing Listing',
                            'Highlighted in Search Results',
                            '90 Days Visibility'
                        ],
                        recommended: false
                    },
                ],
                activatedPlan: null,
                processing: false,
                apiAvailable: false,
                route : this.$route
            }
        },
        methods: {
            subscribeToPlan(name) {
                console.log(name)
                this.processing = true
                if (this.apiAvailable) {
                    // eslint-disable-next-line no-undef
                    axios.post('http://endpoint.com/pricing', {name: name}).then(resp => {
                        //handle successful response
                        console.log(resp)
                    }).catch(error => {
                        //handle error
                        console.log(error)
                    }).finally(() => {
                        this.processing = false
                    })
                } else {
                    setTimeout(() => {
                        this.activatedPlan = this.plans.find((item) => {
                            return item.name === name
                        })
                        localStorage.setItem(AppConstants.Constants.PLAN_NAME,name)
                        this.processing = false
                        this.navigateToHome()

                    }, 2000)
                }
            },
            navigateToHome(name = null){
                this.$router.push({
                    path : '/home',
                    query: {plan : name ? name :this.activatedPlan.name}
                })
            }
        },
        mounted() {
            if(localStorage.getItem(AppConstants.Constants.PLAN_NAME) !== null){
                this.navigateToHome(localStorage.getItem(AppConstants.Constants.PLAN_NAME))
            }
        }
    }
</script>

<style src="./index.css">

</style>