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

  export let dialogOpen = false;
  let title = "";
  let place = "";
  let deadTime = Timestamp.now();
  let beginTime = Timestamp.now();
  let endTime = Timestamp.now();
  let issuer = "";
  let recruitmentNum = 1;
  let recruitmentStatus = "wait";
  let requirements = "";
  let detail = "";
</script>

<Dialog
  bind:open={dialogOpen}
  fullscreen
  aria-labelledby="fullscreen-title"
  aria-describedby="fullscreen-content"
>
  <DialogHeader>
    <DialogTitle id="fullscreen-title">求人の作成</DialogTitle>
    <IconButton action="close" class="material-icons">close</IconButton>
  </DialogHeader>
  <DialogContent id="fullscreen-content">
    <div class="title">
      <Textfield
        label="求人のタイトル"
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
    <div class="place">
      <Textfield
        label="募集場所"
        bind:value={title}
        input$maxlength={30}
        invalid={title.length >= 30}
      >
        <Icon class="material-icons" slot="leadingIcon">dehaze</Icon>
        <HelperText slot="helper"
          >募集や活動の場所を入力します<CharacterCounter /></HelperText
        >
      </Textfield>
    </div>
    <div class="detail">
      <Textfield
        textarea
        input$maxlength={100}
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
      <Label>Reject</Label>
    </Button>
    <Button action="accept" defaultAction>
      <Label>Accept</Label>
    </Button>
  </DialogActions>
</Dialog>

<style>
  .title {
    width: 100%;
  }
</style>
