<script>
    import { isLoading } from "$lib/model/store";
    import { onMount } from "svelte";
    import SvelteTypedJs from "svelte-typed-js";
    import LayoutGrid, { Cell } from "@smui/layout-grid";

    onMount(async () => {
        isLoading.set(false);
    });
</script>

<div class="wide_title">
    <div class="grid title">
        <div class="item">
            <div class="title-container">
                <img src="img/logo/title.png" alt="logo" />
            </div>
        </div>
        <div class="item second">
            <div class="typing-container">
                <SvelteTypedJs
                    strings={["フリック vs ローマ字", "ポチポチ vs カタカタ"]}
                    backSpeed="9.9"
                    loop={false}
                    startDelay="1000"
                    backDelay="1000"
                    typeSpeed="9.8"
                >
                    <span class="typing" />
                </SvelteTypedJs>
            </div>
        </div>
    </div>
</div>

<div class="grid">
    <div class="item key-visual">
        <video
            autoplay
            muted
            loop
            preload="metadata"
            playsinline
            src="https://roto-server.f5.si/mdnj2b/key-visual.mp4"
        />
    </div>
    <div class="item description">
        <p>
            そこの諸君.　ああキミのことだ.<br /><br />
            キミは文章を打つときに “ポチポチ”するか？<br />
            それとも “カタカタ”するか？<br />
            人によって違いが出てくるだろう.<br />
            そこで, キミにちょっとした招待があるんだ.<br /><br />

            混沌としたこの情報科の一角で, “ポチポチ”と“カタカタ”が<br />
            ひしめきあう熱き闘いをしようではないか？<br />
            ―― 企画提案者より
        </p>
    </div>
</div>
<div class="grid reverse">
    <div class="item description rule-text">
        <p>
            ルールは至ってシンプルだ.<br /><br />
            与えられた文章を30秒間打ち続けるだけだ.<br />
            1文字ずつスコアが上がっていくが,<br />
            1フレーズ正確に打てるとボーナスが与えられる.<br /><br />
            もしタイプミスしてしまっても, 1文字消して修正するのもよし.<br />
            修正にかかる時間を考慮して, そのまま無視してもよしだ.<br />
            すべての判断がキミのスコアに影響を及ぼす！
        </p>
    </div>
    <div class="item rule-img">
        <img src="img/home/one-shot.png" alt="" />
    </div>
</div>
<br /><br /><br />
<div class="wide_title">
    <p> どこへ征けば？ </p>
</div>
<div class="main">
    <p>
        4Fだっ<br />
        4Fだっ<br />
        4Fだっ<br />
        4Fだっ<br />
        4Fだっ<br />
    </p>
</div>

<div class="wide_title">
    <p> 周りの子に共有するのだ！ </p>
</div>
<div class="main"> 4Fだっ </div>

<style lang="scss">
    .typing-container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0 30px 0;
        .typing {
            margin: 10px;
            height: 20px;
        }
    }

    .title-container {
        img {
            width: 70%;
            max-width: 300px;
            padding: 30px 0 30px 0;
        }
    }
    .grid {
        display: grid;
        // gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        @media screen and (max-width: 400px) {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        &.reverse {
            @media screen and (max-width: 860px) {
                .item.rule-text {
                    order: 2;
                }
                .item.rule-img {
                    order: 1;
                }
            }
        }
    }
    .item {
        // padding: 15px;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        &.second {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &.key-visual {
            padding: 0px;
            video {
                width: 100%;
            }
        }
        &.rule-img {
            padding: 40px;
            img {
                max-width: 90%;
            }
        }
        &.description {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;
            font-size: large;
            min-height: 225px;
            padding: 0 30px 0 30px;

            p {
                line-height: 1.7;
            }
        }
    }
</style>
