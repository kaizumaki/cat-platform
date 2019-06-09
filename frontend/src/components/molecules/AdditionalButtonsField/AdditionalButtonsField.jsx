import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/Input";
import AdditionalLabelText from '../AdditionalLabelText/AdditionalLabelText.jsx';

const useStyles = makeStyles(theme => ({
  label: {
    marginBottom: '1em',
  }
}));

export default function AdditionalButtonsField(props) {
  const classes = useStyles();
  const button_list = [1,2,3,4];

  return (
    <div className={props.className}>
      <Grid
        container
        direction="column"
        spacing={3}>
        <Grid item xs={12}>
          <InputLabel htmlFor="buttons-title" required>メッセージのタイトル</InputLabel>
          <Input id="buttons-title" required fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <InputLabel className={classes.label}>選択肢のテキスト（４つまで）</InputLabel>
          {button_list.map((item, index)=>
            <AdditionalLabelText key={index} index={index} delete/>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
