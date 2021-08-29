import React, { useState } from 'react';
import {
  Button,
  Paper,
  // Accordion,
  // AccordionSummary,
  // AccordionDetails,
  // FormControlLabel,
  TextField,
} from '@material-ui/core';
// import { ExpandMore } from '@material-ui/icons';

export default function TaskForm(props) {
  const [text, setText] = useState('');
  const [taskDef, setTaskDef] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(text, taskDef);
    setText('');
    setTaskDef('');
  }
  function removeAll() {
    props.setTodo([]);
  }

  return (
    <Paper>
      <TextField
        label="Define Title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Note"
        value={taskDef}
        onChange={(e) => setTaskDef(e.target.value)}
      />
      <Button onClick={handleSubmit} className="add">
        ADD
      </Button>
    </Paper>
  );
}
