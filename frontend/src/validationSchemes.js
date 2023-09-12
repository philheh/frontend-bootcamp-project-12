const getScheme = {
  signUp: (Yup, t) => (
    Yup.object().shape({
      username: Yup
        .string()
        .trim()
        .min(3, t('signUp.errors.usernameLength'))
        .max(20, t('signUp.errors.usernameLength'))
        .required(t('signUp.errors.required')),
      password: Yup
        .string()
        .trim()
        .min(6, t('signUp.errors.passwordLength'))
        .required(t('signUp.errors.required')),
      confirmPassword: Yup
        .string()
        .trim()
        .oneOf([Yup.ref('password'), null], t('signUp.errors.passConfirm'))
        .required(t('signUp.errors.required')),
    })
  ),
  login: (Yup) => (
    Yup.object().shape({
      username: Yup.string().trim(),
      password: Yup.string().trim(),
    })
  ),
  modalsScheme: (Yup, t, channels) => (
    Yup.object().shape({
      channelName: Yup
        .string()
        .notOneOf(channels, 'Канал с таким именем уже существует')
        .min(3, t('modals.errors'))
        .max(20, t('modals.errors')),
    })
  ),

};

export default getScheme;
