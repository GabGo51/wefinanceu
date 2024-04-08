import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SettingContext } from "../context/SettingContext";
import animations from "./animation";
import text from "./Home/text/heroText";

const TryButton = ({animation}) => {
  const { lang } = useContext(SettingContext);
  return (
    <motion.div
      className="try-box"
      {...animation}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <motion.button className="try-button">
        {text.tryButton[lang]}
      </motion.button>
    </motion.div>
  );
};

export default TryButton;
