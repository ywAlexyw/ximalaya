<template>
    <div class="bread-crumb-wrap">
        <div class="bread-crumb">
            <span class="bread-crumb-item">
                <a class="bread-crumb-link">首页</a>
                <span class="bread-crumb-separator">></span>
            </span>
            <span class="bread-crumb-item">
                <div class="bread-crumb-drop">
                    <div class="bread-crumb-drop-trigger">
                        头条
                        <span class="bread-crumb-icon"></span>
                    </div>
                </div>
                <span class="bread-crumb-separator">></span>
            </span>
            <span class="bread-crumb-item">
                <span class="bread-crumb-link">陆家嘴财经早餐</span>
                <span class="bread-crumb-separator"></span>
            </span>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
.bread-crumb-wrap {
    margin: 20px 0;
    .bread-crumb {
        font-size: 12px;
        line-height: 1.4;
        display: inline-block;
    }
}

.bread-crumb-item {
    display: inline-block;
    .bread-crumb-drop {
        color: #72727b;
        display: inline-block;
        position: relative;
        z-index: 3;
        .bread-crumb-drop-trigger {
            padding: 4px 5px;
            border-radius: 4px;
            background-color: #fff;
            border: 1px solid #e8e8e8;
        }
    }
}

.bread-crumb span{
    color: #72727b;
}

.bread-crumb-separator {
    padding: 0 3px;
    vertical-align: 1px;
}

.bread-crumb-icon {
    vertical-align: middle;
    margin-left: 5px;
    text-indent: -99999px;
    overflow: hidden;
    width: 7px;
    height: 7px;
    border: 1px solid #ccc;
    border-left: 0;
    border-bottom: 0;
    transform: rotate(135deg);
    display: inline-block;
    margin-top: -4px;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
}
</style>
