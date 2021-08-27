const styles = `.vl-contact-card__title,
.vl-link.vl-contact-card__title {
  margin-bottom: 1rem;
  display: block;
  line-height: 3rem;
  overflow: hidden;
}

.vl-contact-card__content {
  padding: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.6rem;
  line-height: 2rem;
}
.vl-contact-card__content .vl-map__container {
  height: 100%;
  margin-bottom: 0;
}

.vl-contact-card__data,
.vl-contact-card__map {
  width: 50%;
}
.no-flexbox .vl-contact-card__data,
.no-flexbox .vl-contact-card__map {
  float: left;
}

.vl-contact-card__data {
  padding-right: 1.5rem;
  line-height: 2.4rem;
}

.vl-contact-card__data__title {
  float: left;
  clear: left;
  width: 30%;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
  white-space: normal;
  color: #c6538c;
}

.vl-contact-card__data__content {
  float: left;
  width: 70%;
  margin-bottom: 2.5rem;
  white-space: normal;
}

.vl-contact-card__data__title *,
.vl-contact-card__data__content * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.vl-contact-card__data__name {
  font-weight: 700;
}

.vl-contact-card__map {
  height: 25rem;
  padding-left: 1.5rem;
  position: relative;
  min-height: 25rem;
  overflow: hidden;
}
.vl-contact-card__map .vl-map {
  width: 100%;
  height: 100%;
  border: 1px solid #c6538c;
}
.no-js .vl-contact-card__map {
  height: auto;
  min-height: 0;
}
.no-js .vl-contact-card__map .vl-map {
  height: auto;
}

.vl-contact-card__footer {
  width: 100%;
  margin-top: 2.5rem;
  padding-top: 1rem;
  border-top: 1px solid #c6538c;
  font-size: 1.6rem;
  overflow: hidden;
}

.vl-contact-card.js-vl-accordion .vl-contact-card__title {
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