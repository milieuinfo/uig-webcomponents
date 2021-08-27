const styles = `.vl-contact-card.js-vl-accordion .vl-contact-card__title {
  padding-left: 2rem;
  position: relative;
  cursor: pointer;
  margin-bottom: 0;
  transition: margin-bottom 0.3s;
}
.vl-contact-card.js-vl-accordion .vl-contact-card__title .vl-vi {
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.2s;
  color: #c6538c;
  font-size: 1.3rem;
  line-height: 3.2rem;
}
.vl-contact-card.js-vl-accordion .vl-contact-card__content-wrapper {
  overflow: hidden;
  visibility: hidden;
  max-height: 0;
  transition: max-height 0.3s cubic-bezier(0, 1.05, 0, 1);
}
.vl-contact-card.js-vl-accordion .vl-contact-card__content-wrapper .vl-map {
  display: none;
}
.vl-contact-card.js-vl-accordion--open .vl-contact-card__title {
  margin-bottom: 1rem;
}
.vl-contact-card.js-vl-accordion--open .vl-contact-card__content-wrapper {
  max-height: 9999px;
  visibility: visible;
  transition: max-height 0.3s ease-in;
}
.vl-contact-card.js-vl-accordion--open .vl-contact-card__content-wrapper .vl-map {
  display: block;
}`; export default styles;