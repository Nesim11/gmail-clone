import { Checkbox, Icon, IconButton } from "@material-ui/core";
import { ArrowDropDown, ChevronLeft } from "@material-ui/icons";
import React from "react";
import "./EmailList.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RedoIcon from "@material-ui/icons/Redo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />

          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="Gmail"
          subject="I'm here!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Facebook"
          subject="Hey add !!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Instagram"
          subject="Whatsapp bro!!"
          description="Click the following button to follow me. Click the following button to follow me. Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Euro"
          subject="Hold on!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Linkedln"
          subject="??t's time!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Whatsapp bro!!"
          subject="Typing...!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!!"
          description="Click the following button to follow me. Click the following button to follow me. Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Whatsapp bro!!"
          subject="Hey Fellow!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Whatsapp bro!!"
          subject="Hey add me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Facebook"
          subject="Hey add me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!!"
          description="Click the following button to follow me. Click the following button to follow me. Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Whatsapp bro!!"
          subject="Hey Fellow!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Facebook"
          subject="Hey add me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Facebook"
          subject="Hey add me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!!"
          description="Click the following button to follow me. Click the following button to follow me. Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey Fellow!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Facebook"
          subject="Hey add me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Facebook"
          subject="Hey add me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!!"
          description="Click the following button to follow me. Click the following button to follow me. Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey Fellow!!"
          description="Click the following button to follow me."
          time="9am"
        />
      </div>
    </div>
  );
}

export default EmailList;
