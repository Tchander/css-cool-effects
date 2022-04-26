<template>
    <div class="fingerprint">
        <back-home />
        <div class="fingerprint-scanner">
            <div class="fingerprint-scanner__image"></div>
            <h3 class="fingerprint-scanner__title">Scanning...</h3>
        </div>
    </div>
</template>

<script>
import BackHome from "@/components/BackHome";
export default {
    name: "FingerprintScanner",
    components: { BackHome }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

.fingerprint {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #111;
}
.fingerprint-scanner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image {
        position: relative;
        width: 300px;
        height: 300px;
        background: url("../static/images/fingerPrint_01.png");
        background-size: 300px;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("../static/images/fingerPrint_02.png");
            background-size: 300px;
            animation: animate 4s ease-in-out infinite;
        }

        @keyframes animate {
            0%, 100% {
                height: 0;
            }
            50% {
                height: 100%;
            }
        }

        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 8px;
            border-radius: 8px;
            background: #3fefef;
            filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
            animation: animate_line 4s ease-in-out infinite;
        }

        @keyframes animate_line {
            0%, 100% {
                top: 0;
            }
            50% {
                top: 100%;
            }
        }
    }

    &__title {
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        font-size: 2em;
        letter-spacing: 2px;
        margin-top: 80px;
        color: #3fefef;
        filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
        animation: animate_text 1s steps(1) infinite;
    }

    @keyframes animate_text {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
}
</style>