<template>
    <footer class="text-muted">
        <div class="container">
            <div class="row">
                <div class="col">
                    <router-link class="nav-link" to="/contact">
                        {{ $t('contactLink')}}
                    </router-link>
                    <router-link class="nav-link" to="/about">
                        {{ $t('aboutLink')}}
                    </router-link>
                </div>
                <div class="md-6">
                    © 2022 Copyright: ISL Wenkin & Gardier
                </div>
            </div>
        </div>
    </footer>
</template>