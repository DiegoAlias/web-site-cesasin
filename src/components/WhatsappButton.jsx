import PropTypes from "prop-types";

export const WhatsappButton = ({ isVisible }) => {
  return (
    <div className={`whatsapp-button-container ${isVisible ? "visible" : ""}`}>
      <a
        href="https://wa.me/TU_NUMERO_DE_TELEFONO"
        className="whatsapp-button hover:scale-125 duration-300"
        target="_blank"
      >
        <img src="/img/wpimage.png" alt="WhatsAppCleanCare" />
      </a>
    </div>
  );
};

WhatsappButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
