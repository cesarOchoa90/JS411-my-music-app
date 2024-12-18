import React, { useState } from "react";
import Card from "./Card";
import Switch from "./Switch";
import Slider from "./Slider";
import Quality from "./Quality"

import { Container, Stack } from "@mui/material";

export default function DashBoard() {
    const [online, setOnline] = useState(false)
    const [volume, setVolume] =useState(30)
    const [quality, setQuality] = useState(2)
    

  return (
    <Container maxWidth={"md"}>
      <Stack direction={"row"} gap={2} marginTop={10}>
        <Card
          title="Online Mode"
          description="Is this application connected to the internet?"
          component={Switch}
          state={online}
          setState={setOnline}
        />
        <Card
          title="Master Volume"
          description="Is this application connected to the internet?"
          component={Slider}
          state={volume}
          setState={setVolume}
        />
        <Card
          title="Sounds Quality"
          description="Is this application connected to the internet?"
          component={Quality}
          state={quality}
          setState={setQuality}
        />
      </Stack>
      <h3> System Notification </h3>
      {online ? null : <p>Your application is offline. You won't be able to share or stream music to other devices</p>}
      {volume >= 80 ?  <p>Listening to music at a high volume could cause long-term hearing loss</p> : null}
      {quality === 1 ? <p>Music quality is degraded. Increase quality if your connection allows it.</p> : null }
    </Container>
  );
}
