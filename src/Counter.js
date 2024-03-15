import React from 'react'
import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
export default function Counter() {
    let[like,setLike]=useState(0);
    let[disLike,setDisLike]=useState(0);

    const incrementLike=()=>setLike(like+1);
    const incrementDisLike=()=>setDisLike(disLike+1);
  return (
    <div>
        <IconButton aria-label="Like" color="primary" onClick={incrementLike}>
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>
        <IconButton aria-label="Dislike" color="primary" onClick={incrementDisLike}>
            <Badge badgeContent={disLike} color="error">
              👎
            </Badge>
        </IconButton>
    </div>
  );
}
