/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Divider, Snackbar, Alert, CircularProgress } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(50, 'Please enter a valid full name')
    .required('Please specify your full name'),
  message: yup.string().trim().required('Please specify your message'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

const Form = (): JSX.Element => {
  const theme = useTheme();
  const captchaRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const initialValues = {
    fullName: '',
    message: '',
    email: '',
  };

  const onSubmit = async (values) => {
    setIsSending(true);
    const token = await captchaRef.current.executeAsync();
    values['token']=token;
    const url='/api/contact-form';//process.env.REACT_APP_CONTACT_FORM_URL;
    const res=await fetch(url, {
      method: 'POST',
      body: JSON.stringify(values)
    });    
    if (res.ok){
      setIsSuccess(true);
    } else
    {
      setIsError(true);
    }
    setIsSending(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const onAlertErrorClose = () => {
    setIsError(false);
  };

  const onAlertSuccessClose = () => {
    setIsSuccess(false);
  };

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
        >
          Can't find the answer you need?
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          Thank you for taking the time to contact us. We look forward to
          hearing from you and helping you out with any questions or concerns
          you may have. Our form is quick and easy to use, and we will respond
          to you as soon as possible
        </Typography>
      </Box>
      <Box
        maxWidth={600}
        margin={'0 auto'}
        component={'form'}
        onSubmit={formik.handleSubmit}
        sx={{
          '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
            padding: 0,
          },
          '& .MuiOutlinedInput-input': {
            background: theme.palette.background.paper,
            padding: 2,
          },
        }}
      >
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              // @ts-ignore
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              // @ts-ignore
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Message
            </Typography>
            <TextField
              placeholder="Your question about our services"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              // @ts-ignore
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Send the question
            </Button>
            {isSending &&(
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', m: 5 }}>
                <CircularProgress />
              </Box>
            )}
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} 
              ref={captchaRef}
              size="invisible"
            />
            <Snackbar open={isError} autoHideDuration={6000} onClose={onAlertErrorClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <Alert onClose={onAlertErrorClose} severity="error" sx={{ width: '100%' }}>
                There was an error processing your request. Please try again later.
              </Alert>
            </Snackbar>
            <Snackbar open={isSuccess} autoHideDuration={6000} onClose={onAlertSuccessClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <Alert onClose={onAlertSuccessClose} severity="success" sx={{ width: '100%' }}>
                Thank you for your message. We'll get back to you in 1-2 business days.
              </Alert>
            </Snackbar>
          </Grid>
          <Grid item container justifyContent={'center'} xs={12}>
            <Typography color="text.secondary">
              We'll get back to you in 1-2 business days.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item container justifyContent={'center'} xs={12}>
            <Box>
              <Typography component="p" variant="body2" align="left">
                By clicking on "submit" you agree to our{' '}
                <Box
                  component="a"
                  href="/#/privacy"
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Privacy Policy
                </Box>
                ,{' '}
                <Box
                  component="a"
                  href="/#/privacy"
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Data Policy
                </Box>{' '}
                and{' '}
                <Box
                  component="a"
                  href="/#/privacy"
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Cookie Policy
                </Box>
                .
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
