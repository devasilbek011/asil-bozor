import React, { useState, useEffect } from "react";
import "./App.css";
import i18n from "i18next";
import { FaBeer } from "react-icons/fa";
import { useTranslation, initReactI18next } from "react-i18next";

import Navbar from "./components/navbar";
import { Link, Route, Routes } from "react-router-dom";
import Phones from "./pages/phones";

import Carsitem from './pages/carsitem';
import Atirlar from "./pages/atirlar";
import Home from "./pages/Home";
import Quloqchinlar from "./pages/quloqchinlar";
import Kalonkalar from "./pages/kalonkalar";
import Soatlar from "./pages/soatlar";
import Mashina_narsasi from "./pages/mashina_narsasi";
import Zarayatchik from "./pages/zarayatchik";
import Maishiy_texnika from "./pages/Maishiy_texnika";
import Maps from "./pages/maps"

const resources = {
 
  uz: {
    translation: {
      title: "Manzil",
      title2: "Telefonlar",
      title3: "Atirlar",
      title4: "Quloqchinlar",
      title5: "Kalonka",
      title6: "Soatlar",
      title7: "Hid taratgich",
      title8: "Zarayatchiklar",
      title9: "Maishiy texnika",
      title10: "so'm",
      title11: "muddatli to'lovga bor",
      title12: "Tilni o‘zgartirish",
      title13: "narxidan o'tib berish bor"
    },
  },

  en: {
    translation: {
      title: "location",
      title2: "Phones",
      title3: "Perfumes",
      title4: "Headphones",
      title5: "loudspeaker",
      title6: "Watches",
      title7: "Air freshener",
      title8: "Chargers",
      title9: "Home appliances",
      title10: "Som",
      title11: " Installment payment",
      title12: "Change language",
      title13: "Exceeding the price"
    },
  },
  

  ru: {
    translation: {
      title: "Адрес",
      title2: "Телефоны",
      title3: "Духи",
      title4: "Наушники",
      title5: "Калонка",
      title6: "Часы",
      title7: "Ароматизатор",
      title8: "Зарядные устройства",
      title9: "Бытовая техника",
      title10: "Сум",
      title11: "Рассрочка",
      title12: "Изменить язык",
      title13: "Перейти за цену"
    },
  },
  tr: {
    translation: {
      title: "konum",
      title2: "Telefonlar",
      title3: "Parfümler",
      title4: "Kulaklıklar",
      title5: "Kalonka",
      title6: "Saatler",
      title7: "Aroma difüzörü",
      title8: "Şarj cihazları",
      title9: "Ev aletleri",
      title10: "Som",
      title11: "Taksitli ödeme",
      title12: "Dili değiştir",
      title13: "Fiyatını aşarak vermek"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, 
  },
});

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const { t, i18n } = useTranslation();

  const images = ["reklama.jpg", "image.png", "bm.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="Apps">
      <Navbar />


      <div id='home' className="urta_kattasis">
        <div className="name">
          <Link to={"/phones"}>
            <button className="btn">
              <img src="./assets/phone.jpg" alt="" />
              <i>{t("title2")}</i>
            </button>
          </Link>
        </div>

        <div className="name">
        <Link to={'/atirlar'}>
        <button className="btn">
            <img src="./assets/atir.jpg" alt="" />
            <i>{t("title3")}</i>
          </button></Link>
        </div>

        <div className="name">
         <Link to={'./quloqchinlar'}>
         <button className="btn">
            <img src="./assets/Quloqchin.jpg" alt="" />
            <i>{t("title4")}</i>
          </button>
         </Link>
        </div>

        <div className="name">
        <Link to={'./kalonkalar'}>
        <button className="btn">
            <img src="./assets/kalonka.jpg" alt="" />
            <i>{t("title5")}</i>
          </button>
        </Link>
        </div>
      </div>

      
     


      <div className="urta_kattasi">
        <div className="name">
      <Link to={'./soatlar'}>
      <button className="btn">
            <img src="./assets/Smart_soat.jpg" alt="" />
            <i>{t("title6")}</i>
          </button></Link>
        </div>

        <div className="name">
          <Link to={'./mashina_narsasi'}>
          <button className="btn">
            <img src="./ifor.jpg" alt="" />
            <i>{t("title7")}</i>
          </button>
          </Link>
          
        </div>

        <div className="name">
        <Link to={'./zarayatchik'}>
        <button className="btn">
            <img src="./assets/phone_charges.jpg" alt="" />
            <i>{t("title8")}</i>
          </button>
          </Link>
        </div>

        <div className="name">
          <Link to={'./Maishiy_texnika'}>
          <button className="btn">
            <img src="./assets/Mayshiy_texnika.webp" alt="" />
            <i>{t("title9")}</i>
          </button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/carsitem" element={<Carsitem />} />
        <Route path="/atirlar" element={<Atirlar />} />
        <Route path="/quloqchinlar" element={<Quloqchinlar />}/>
        <Route path="/kalonkalar" element={<Kalonkalar />}/>
        <Route path="/soatlar" element={<Soatlar />}/>
        <Route path="/mashina_narsasi" element={<Mashina_narsasi />}/>
        <Route path="/zarayatchik" element={<Zarayatchik />}/>
        <Route path="/maishiy_texnika" element={<Maishiy_texnika />}/>
        <Route path="/maps" element={<Maps/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
