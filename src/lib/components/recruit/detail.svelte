<script lang="ts">
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";
    import Dialog, {
      Header as DialogHeader,
      Title as DialogTitle,
      Content as DialogContent,
      Actions as DialogActions,
    } from "@smui/dialog";
    import Textfield from "@smui/textfield";
    import CharacterCounter from "@smui/textfield/character-counter";
    import HelperText from "@smui/textfield/helper-text";
    import { Timestamp } from "firebase/firestore";
    import {
      addRecruitData,
      type RecruitData,
    } from "$lib/firebase/db_repository";
    import { DateInput, localeFromDateFnsLocale } from "date-picker-svelte";
    import ja from "date-fns/locale/ja/index.js";
  
    export let dialogOpen = false;
    export const response = "";
    let title = "";
    let place = "";
    let deadTime = new Date();
    let beginTime = new Date();
    let endTime = new Date();
    let issuer = "";
    let recruitmentNum = 1;
    let recruitmentStatus = "wait";
    let requirements = "";
    let detail = "";
  
    let locale = localeFromDateFnsLocale(ja);
  
    async function callbackDialog() {
      let data: RecruitData = {
        title: title,
        thumbnail: "",
        media1: "",
        media2: "",
        media3: "",
        media4: "",
        media5: "",
        place: place,
        deadline: Timestamp.fromDate(deadTime),
        beginTime: Timestamp.fromDate(beginTime),
        endTime: Timestamp.fromDate(endTime),
        issuer: issuer,
        recruitmentNum: recruitmentNum,
        recruitStatus: recruitmentStatus,
        requirements: requirements,
        detail: detail,
      };
  
      addRecruitData(data);
  
      // console.log("wawa");
      // await new Promise((resolve) => setTimeout(resolve, 300));
      // dialogOpen = false;
      // dialogOpen = true;
    }
  </script>
  
  <Dialog
    bind:open={dialogOpen}
    fullscreen
    aria-labelledby="fullscreen-title"
    aria-describedby="fullscreen-content"
  >
    <DialogHeader>
      <DialogTitle id="fullscreen-title"><strong>求人の作成</strong></DialogTitle>
      <IconButton action="close" class="material-icons">close</IconButton>
    </DialogHeader>
    <DialogContent id="fullscreen-content">
      <div class="title">
        <Textfield
          label="求人のタイトル"
          bind:value={title}
          input$maxlength={30}
          style="width: 70%;"
          helperLine$style="width: 100%;"
          invalid={title.length >= 30}
        >
          <Icon class="material-icons" slot="leadingIcon">dehaze</Icon>
          <HelperText slot="helper"
            >求人カードに表示されるタイトルです<CharacterCounter /></HelperText
          >
        </Textfield>
      </div>
      <div class="thumbnail">
        <Textfield
          label="サムネイルをアップロード"
          bind:value={title}
          input$maxlength={30}
          invalid={title.length >= 30}
        >
          <Icon class="material-icons" slot="leadingIcon">dehaze</Icon>
          <HelperText slot="helper"
            >求人カードに表示されるタイトルです<CharacterCounter /></HelperText
          >
        </Textfield>
      </div>
      <div class="time">
        <DateInput bind:value={endTime} {locale} />
      </div>
      <div class="place">
        <Textfield
          label="募集場所"
          bind:value={title}
          input$maxlength={30}
          invalid={title.length >= 30}
        >
          <Icon class="material-icons" slot="leadingIcon">place</Icon>
          <HelperText slot="helper"
            >募集や活動の場所を入力します<CharacterCounter /></HelperText
          >
        </Textfield>
      </div>
      <div class="detail">
        <Textfield
          textarea
          input$maxlength={100}
          style="width: 70%; padding-left: 0px;"
          helperLine$style="width: 100%;"
          bind:value={detail}
          label="詳細"
        >
          <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
          <HelperText slot="helper">その他の詳細を入力します</HelperText>
        </Textfield>
      </div>
    </DialogContent>
    <DialogActions>
      <Button action="reject">
        <Label>キャンセル</Label>
      </Button>
      <Button action="accept" defaultAction on:click={callbackDialog}>
        <Label>次へ</Label>
      </Button>
    </DialogActions>
  </Dialog>
  
  <style>
    .detail {
      padding-bottom: 50px;
    }
    .time {
      padding: 40px;
    }
    .title {
      width: 100%;
    }
    :root {
      --date-picker-foreground: var(--m3-primary);
      --date-picker-background: var(--m3-background);
      --date-picker-highlight-border: var(--m3-primary);
      --date-picker-highlight-shadow: var();
      --date-picker-selected-color: var(--m3-primary);
      --date-picker-selected-background: var(--m3-primary-container);
    }
  </style>
  