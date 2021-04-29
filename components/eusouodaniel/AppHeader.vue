<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <h3 class="name-plate">Daniel Silva</h3>
            </nuxt-link>

            <div class="row" slot="content-header">
                <div class="col-6 collapse-brand">
                    <nuxt-link to="/">
                        <h3 class="nav-modal-name-plate">Daniel Silva</h3>
                    </nuxt-link>
                </div>
            </div>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "~/components/system/BaseNav";

export default {
  components: {
    BaseNav
  }
};
</script>
<style>
.name-plate {
    color: #fff;
}
.nav-modal-name-plate {
    color: blue;
}

a.portfolio-menu {
    font-size: 24px;
    background-color: #388e8c;
}

a.nav-link.nav-link-icon {
    max-height: 48px;
}

a.nav-link.nav-link-icon > i {
    font-size: 32px;
}
</style>
