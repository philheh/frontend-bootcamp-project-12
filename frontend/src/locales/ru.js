export default {
  translation: {
    mainTitle: 'Hexlet Chat',
    signUp: {
      title: 'Регистрация',
      username: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      button: 'Зарегистрироваться',
      errors: {
        usernameLength: 'От 3 до 20 символов',
        passwordLength: 'Не менее 6 символов',
        passConfirm: 'Пароли должны совпадать',
        required: 'Обязательное поле',
        alreadyExist: 'Такой пользователь уже существует',
      },
    },
    signIn: {
      username: 'Ваш ник',
      password: 'Пароль',
      enter: 'Войти',
      registration: 'Регистрация',
      getAccount: 'Нет аккаунта?',
      errors: {
        password: 'Неверные имя пользователя или пароль',
      },
    },
    logOutBtn: 'Выйти',
    channelsPage: {
      channelsTitle: 'Каналы',
      messagesCounter: {
        messages_one: '{{count}} сообщение',
        messages_few: '{{count}} сообщения',
        messages_many: '{{count}} сообщений',
      },
      dropDown: {
        controlLabel: 'Управление каналом',
        delete: 'Удалить',
        rename: 'Переименовать',
      },

    },
    messagesPage: {
      error: 'Не должно быть пустым',
      inputPlaceholder: 'Введите сообщение...',
      sendBtn: 'Отправить',
    },
    modals: {
      notToBeEmpty: 'Не должно быть пустым',
      errors: 'От 3 до 20 символов',
      addModal: {
        title: 'Добавить канал',
        label: 'Имя канала',
        cancelBtn: 'Отменить',
        addBtn: 'Добавить',
      },
      removeModal: {
        title: 'Удалить канал',
        label: 'Уверены?',
        cancelBtn: 'Отменить',
        removeBtn: 'Удалить',
      },
      renameModal: {
        title: 'Переименовать канал',
        label: 'Имя канала',
        cancelBtn: 'Отменить',
        renameBtn: 'Отправить',
      },
    },
    toast: {
      added: 'Канал создан',
      removed: 'Канал удалён',
      renamed: 'Канал переименован',
      removeError: 'Не удалось удалить канал',
      authError: 'Ошибка авторизации',
      networkError: 'Ошибка сети',
    },
    notFoundPage: {
      title1: 'Страница не найдена',
      title2: 'Но вы можете перейти',
      toRegister: 'на главную страницу',
    },
  },
};
