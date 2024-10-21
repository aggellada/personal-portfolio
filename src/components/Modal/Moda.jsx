import { forwardRef } from "react";
import { motion } from "framer-motion";

const Modal = forwardRef(function Modal({ closeModal }, ref) {
  return (
    <>
      <motion.dialog
        className="modal"
        ref={ref}
        onClose={closeModal}
        initial={{ y: "-300px", opacity: 0 }}
        animate={{ y: "0px", opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>Message me!</h1>
        <form>
          <div>
            <label htmlFor="name" id="name" name="name">
              Name
            </label>
            <input type="text"></input>
          </div>
          <div>
            <label htmlFor="name" id="name" name="name">
              E-mail
            </label>
            <input type="text"></input>
          </div>
          <div>
            <label htmlFor="name" id="name" name="name">
              Date
            </label>
            <input type="date"></input>
          </div>
          <div>
            <label htmlFor="name" id="name" name="name">
              Message
            </label>
            <textarea rows="6"></textarea>
          </div>

          <br></br>
        </form>
        <button onClick={closeModal}>Close</button>
      </motion.dialog>
    </>
  );
});

export default Modal;
