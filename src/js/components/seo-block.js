import $ from 'jquery'

const seoBlock = () => {
  const $trigger = $('.js-seo-trigger');
  const $text = $trigger.prev('.js-seo-text');

  $trigger.on('click', () => {
    $trigger.toggleClass('trigger-is-active');
    $text.toggleClass('text-is-opened');
  });
};

export default seoBlock
