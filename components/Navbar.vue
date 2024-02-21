<template>
    <nav ref="navbar" class="navbar" :class="{ forceColor: forceColor, sticky: sticky }">
        <div class="max-width">
            <div class="logo">
                <NuxtLink :to="localePath('/')">gross<span>max</span></NuxtLink>
            </div>
            <ul class="menu" :class="{active: navbarActive}">
                <li v-if="navMode == 'OTHER'"><RouterLink :to="localePath('/')" class="menu-btn">{{ $t('navbar.home') }}</RouterLink></li>
                <li v-if="navMode == 'INDEX'"><a href="#home" @click="closeNav()" class="menu-btn">{{ $t('navbar.home') }}</a></li>
                <li v-if="navMode == 'INDEX'"><a href="#about" @click="closeNav()" class="menu-btn">{{ $t('navbar.about') }}</a></li>
                <li v-if="navMode == 'INDEX'"><a href="#services" @click="closeNav()" class="menu-btn">{{ $t('navbar.projects') }}</a></li>
                <li v-if="navMode == 'INDEX'"><a href="#skills" @click="closeNav()" class="menu-btn">{{ $t('navbar.technologies') }}</a></li>
                <li v-if="navMode == 'INDEX'"><a href="#contact" @click="closeNav()" class="menu-btn">{{ $t('navbar.contact') }}</a></li>

                <li class="ml-4">
                    <select v-model="locale" @change="setLanguage">
                        <option value="en">{{ iconEngland }}</option>
                        <option value="de">{{ iconGermany }}</option>
                    </select>
                </li>

            </ul>
            <div class="menu-btn" @click="onMenuButtonClick">
                <i class="bi bi-list" :class="{active: navbarActive}"></i>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const { locale } = useI18n()
const iconGermany = getUnicodeFlagIcon('DE')
const iconEngland = getUnicodeFlagIcon('US')
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const router = useRouter();
const localeRoute = useLocaleRoute()

const route = useRoute();
const forceColor = ref(false);
const sticky = ref(false);
const navbar = ref(null);
const navbarActive = ref(false);

const navMode = ref('');

defineExpose({ navbar })

onMounted(() => {
    setColors(route.name.toString());
    updateSticky();

    window.addEventListener("scroll", () => {
        updateSticky();
    });

    window.addEventListener("resize", () => {
        const width = document.documentElement.clientWidth
        console.log('Width:' + window.innerWidth);
        if (width > 947) {
            navbarActive.value = false;
        }
    });
});

function updateSticky() {
    var curr = window.pageYOffset;
    if (curr > 20) {
        sticky.value = true;
    } else {
        sticky.value = false;
    }
}

watch(() => route.name, () => {
    setColors(route.name.toString())
});

function setColors(page: string) {
    console.log('route: ' + page);

    if (page == 'index___de' || page == 'index___en') {
        forceColor.value = false;
        navMode.value = 'INDEX';
    } else {
        forceColor.value = true;
        navMode.value = 'OTHER';
    }
}

function onMenuButtonClick() {
    navbarActive.value = !navbarActive.value 
}


function setLanguage(e) {
    const path = switchLocalePath(e.target.value);
    console.log('path: ' + path);
    router.push(path);
}

function closeNav() {
    navbarActive.value = false;
}

</script>

<style scoped>
/* navbar styling */
.navbar {
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: 30px 0;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease;
}

.navbar.forceColor {
    background: var(--app-color-accent);
    padding: 15px 0 !important;
}


.navbar.sticky {
    padding: 15px 0;
    background: var(--app-color-accent);
}

.navbar .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .logo a {
    color: #000000;
    font-size: 35px;
    font-weight: 600;
}

.navbar .logo a span {
    color: var(--app-color-accent);
    transition: all 0.3s ease;
}

.navbar.sticky .logo a span {
    color: #fff;
}

.navbar.forceColor .logo a span {
    color: #fff;
}


.navbar .menu li {
    list-style: none;
    display: inline-block;
}

.navbar .menu li a {
    display: block;
    color: #020202;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
}

.navbar .menu.active li a {
    color: #fff;
}

.navbar .menu li a:hover {
    color: var(--app-color-accent);
}

.navbar.sticky .menu li a:hover {
    color: #fff;
}

@media (max-width: 947px){
    .menu-btn{
        display: block;
        z-index: 999;
    }
    .menu-btn i.active{
        color: white;
    }
    .navbar .menu li {
        display: block !important;
    }
    .navbar .menu{
        position: fixed;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 0;
        background: #111;
        text-align: center;
        padding-top: 80px;
        transition: all 0.3s ease;
    }
    .navbar .menu.active{
        left: 0;
    }
    .navbar .menu li{
        display: block;
    }
    .navbar .menu li a{
        display: inline-block;
        margin: 20px 0;
        font-size: 25px;
    }
}
</style>