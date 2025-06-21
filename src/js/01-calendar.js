import flatpickr from 'flatpickr';
import * as basicLightbox from 'basiclightbox';
import iziToast from 'izitoast';

let userSelectedDate;

const basicLightboxInstance = basicLightbox.create(`
<form class="notification-form js-notification-form">
  <label class="notification-form-field-wrapper">
    <span>Назва події</span>
    <input class="notification-form-field" type="text" name="event_name" placeholder="Додайте назву" required />
  </label>
  <button class="notification-form-sbmt-btn" type="submit">Зберегти</button>
</form>
`);

const onEventFormSubmit = event => {
  event.preventDefault();

  const eventName = event.target.elements.event_name.value;

  event.target.reset();

  basicLightboxInstance.close();

  iziToast.success({
    message: `Подія ${eventName} запланована!`,
    position: 'topRight',
  });

  const datesDiff = userSelectedDate - Date.now();

  setTimeout(() => {
    iziToast.info({
      message: `Скоро розпочнеться ${eventName}`,
      position: 'topRight',
    });
  }, datesDiff - 60000);
};

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose([selectedDate]) {
    userSelectedDate = selectedDate;

    const datesDiff = selectedDate - Date.now();

    if (datesDiff <= 0) {
      iziToast.error({
        message: 'Оберіть дату в майбутньому!',
        position: 'topRight',
      });

      return;
    }

    basicLightboxInstance.show();

    document.querySelector('.js-notification-form').addEventListener('submit', onEventFormSubmit);
  },
};

flatpickr('.js-calendar', flatpickrOptions);

/*
Form template:

<form class="notification-form js-notification-form">
  <label class="notification-form-field-wrapper">
    <span>Назва події</span>
    <input class="notification-form-field" type="text" name="event_name" placeholder="Додайте назву" required />
  </label>
  <button class="notification-form-sbmt-btn" type="submit">Зберегти</button>
</form>
*/
