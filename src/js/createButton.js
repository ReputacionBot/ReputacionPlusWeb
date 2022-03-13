require('./TGPassportJsSDK/telegram-passport');

Telegram.Passport.createAuthButton('telegram_passport_login_btn', {
  bot_id: parseInt(process.env.ID_BOT_PLUS, 10),
  scope: {
    data: [
      {
        type: 'identity_card',
        selfie: true,
      },
      'personal_details',
      'address',
      'phone_number',
      'email',
    ],
    v: 1,
  },
  public_key: atob(process.env.BOT_PUB_KEY_B64),
  nonce: 'disdj92nj983je9823d982mjdmssmd9823ms892jd9823smdd9hs239sdm2389sd2389mdm',
}, {
  text: 'Autorizar acceso',
  radius: 6,
  tooltip_text: 'Instale <u>Telegram</u> para usar esta opción',
});
