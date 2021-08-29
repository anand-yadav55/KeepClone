import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons/';
export default function Task(props) {
  return (
    <Card bgcolor="primary" variant="outlined">
      <CardContent color="textSecondary">
        <Typography component="h5" variant="h5" noWrap className="taskTitle">
          {props.title}
        </Typography>

        <Typography
          variant="subtitle1"
          color="textSecondary"
          component="p"
          className="taskBody"
          style={{
            wordWrap: 'break-word',
            maxHeight: '300px',
            overflow: 'hidden',
          }}
        >
          {props.body}
        </Typography>
        <Button onClick={() => props.deleteTask(props.idx)}>
          <Delete />
        </Button>
      </CardContent>
    </Card>
  );
}
