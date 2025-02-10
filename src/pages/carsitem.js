import React from 'react'
import { useTranslation, initReactI18next } from "react-i18next"
import { FaArrowUp } from "react-icons/fa";


function Carsitem() {
  const { t, i18n } = useTranslation();

  return (
    <div>


 <button className="fix_btn"><a href="#home"><FaArrowUp className="ico" /></a></button>
    </div>
  )
}

export default Carsitem