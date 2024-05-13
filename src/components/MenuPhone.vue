<template>
    <nav class="menu">
        <ul class="menu-list">
            <li class="catalog-item">
                <a href="" data-link="catalog" class="catalog-link">Каталог</a>
            </li>
            <li class="comparison-item">
                <a href="" data-link="comparison" class="comparison-link">СРАВНЕНИЕ</a>
            </li>
            <li class="login-item">
                <a href="" data-link="login" class="login-link">Личный кабинет</a>
            </li>
            <li class="vector-item">
                <img src="./images/vector.png" alt="vector" class="vector-image">
            </li>
        </ul>
        <hr class="menu-line">
    </nav>
</template>

<style>
.menu-list {
    display: flex;
    list-style-type: none;
    font-family: Roboto;
    font-weight: 900;
    padding-left: 0;
}

.catalog-item {
    font-size: 18px;
    margin-top: 42px;
    margin-left: 166px;
    margin-right: 100px;
    color: #0D5ADC;
    text-decoration: none;
}

.comparison-item {
    font-size: 12px;
    margin-top: 44px;
    margin-left: 55%;
    color: #000;
}

.login-item {
    font-size: 12px;
    margin-top: 44px;
    margin-left: 48px;
}

.vector-item {
    margin-top: 41px;
    margin-left: 19px;
}

.catalog-link {
    color: #0D5ADC;
    text-decoration: none;
}

.comparison-link {
    color: black;
    text-decoration: none;
}

.login-link {
    color: black;
    text-decoration: none;
}

.menu-line {
    margin-top: 41px;
    border: 1px solid #A6A5A9;
}
</style>
