import {
  Box,
  Button,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import OutboxIcon from '@mui/icons-material/Outbox';
import { bgColor, btnColor, titleColor } from '../../../style';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: titleColor,
      main: btnColor,
      dark: btnColor,
      contrastText: bgColor,
    },
  },
});

type StateForm = {
  name: { value: string; errors: string };
  email: { value: string; errors: string };
  message: { value: string; errors: string };
  subject: { value: string; errors: string };
};
const initState: StateForm = {
  name: { value: '', errors: '' },
  email: { value: '', errors: '' },
  message: { value: '', errors: '' },
  subject: { value: '', errors: '' },
};

const reducer = (
  state: StateForm,
  action: { type: string; value: string }
): StateForm => {
  const { type, value } = action;
  switch (type) {
    case 'name':
      return { ...state, name: { value, errors: '' } };
    case 'nameErr':
      return { ...state, name: { value: '', errors: value } };
    case 'email':
      return { ...state, email: { value, errors: '' } };
    case 'emailErr':
      return { ...state, email: { value: '', errors: value } };
    case 'message':
      return { ...state, message: { value, errors: '' } };
    case 'messageErr':
      return { ...state, message: { value: '', errors: value } };
    case 'subject':
      return { ...state, subject: { value, errors: '' } };
    case 'subjectErr':
      return { ...state, subject: { value: '', errors: value } };
    case 'reset':
      return initState;
    default:
      return state;
  }
};

const url = `${import.meta.env.VITE_SERVER}/api/contact`;
function ContactForm() {
  //write code here
  const [emailBody, dispatch] = useReducer(reducer, initState);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isMsgSent, setIsMsgSent] = useState(false);
  const handleChangeField = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: string
  ): void => {
    dispatch({ type: field, value: e.target.value });
  };

  const sendContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg('');
    const body = {
      name: emailBody.name.value,
      message: emailBody.message.value,
      email: emailBody.email.value,
      subject: emailBody.subject.value,
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'api-key': import.meta.env.VITE_SEND_EMAIL_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      if (result.errors) {
        result.errors.forEach((obj: { path: string; msg: string }) => {
          const key = obj.path;
          dispatch({ type: `${key}Err`, value: obj.msg });
        });
      } else if (result.error)
        setErrorMsg(`${result.error} Please try again later`);

      if (result.success) {
        dispatch({ type: 'reset', value: '' });
        setIsMsgSent(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(
          `${error.message}. Please try again later or reach us on info@justice-matters.nl`
        );
      } else {
        setErrorMsg(
          `${error}. Please try again later or reach us on info@justice-matters.nl`
        );
      }
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: { sm: '100%', md: '80%', lg: '50%' },
          margin: '50px auto',
        }}
      >
        {!isMsgSent ? (
          <form onSubmit={sendContactForm}>
            <Grid container justifyContent="center" spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Name"
                  type="text"
                  placeholder="Your Name"
                  value={emailBody.name.value}
                  onChange={(e) => {
                    handleChangeField(e, 'name');
                  }}
                  error={emailBody.name.errors ? true : false}
                  helperText={emailBody.name.errors}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  type="email"
                  placeholder="example@email.com"
                  value={emailBody.email.value}
                  onChange={(e) => {
                    handleChangeField(e, 'email');
                  }}
                  error={emailBody.email.errors ? true : false}
                  helperText={emailBody.email.errors}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Subject"
                  type="text"
                  placeholder="Write a subject for your message .."
                  value={emailBody.subject.value}
                  onChange={(e) => {
                    handleChangeField(e, 'subject');
                  }}
                  error={emailBody.subject.errors ? true : false}
                  helperText={emailBody.subject.errors}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  variant="outlined"
                  label="Message"
                  placeholder="Write your message ..."
                  value={emailBody.message.value}
                  onChange={(e) => {
                    handleChangeField(e, 'message');
                  }}
                  error={emailBody.message.errors ? true : false}
                  helperText={emailBody.message.errors}
                />
              </Grid>
              <Grid size={12}>
                <Button
                  type="submit"
                  sx={{ height: 40 }}
                  variant="contained"
                  fullWidth
                  endIcon={<OutboxIcon />}
                  loading={isSending}
                >
                  Submit
                </Button>
              </Grid>
              <Grid size={12}>
                <Typography variant="subtitle1" color="error">
                  {errorMsg}
                </Typography>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Typography variant="h4" color="success" align="center">
            You Massage has been sent successfully
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default ContactForm;
