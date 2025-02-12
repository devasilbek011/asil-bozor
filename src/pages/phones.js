import React, { useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import { FaArrowUp } from "react-icons/fa";
const Phones = () => {
  const [cost, setCost] = useState("2.300.000");
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone1.jpg" alt="" />
          <br />
          <h4>GIONEE E16+,</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>310.000</s> <br />
          <div className="flex">
            <h4 className="font">189.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone2.jpg" alt="" />
          <br />
          <h4>Honor X5 Plus</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3">
              128/4
            </button>
          </div>
          <s>2.000.000</s> <br />
          <div className="flex">
            <h4 className="font">1.899.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone3.jpg" alt="" />
          <br />
          <h4>Honor X8a</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3">
              256/8
            </button>
          </div>
          <s>3.500.000</s> <br />
          <div className="flex">
            <h4 className="font">2.899.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone4.jpg" alt="" />
          <br />
          <h4>Honor X9c Smart</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3">
              256/8
            </button>
          </div>
          <s>4.500.000</s> <br />
          <div className="flex">
            <h4 className="font">4.250.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone5.jpg" alt="" />
          <br />
          <h4>Novey 105</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>350.000</s> <br />
          <div className="flex">
            <h4 className="font">219.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone6.jpg" alt="" />
          <br />
          <h4>Poco M6 Pro</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3">
              512/12
            </button>
          </div>
          <s>4.550.000</s> <br />
          <div className="flex">
            <h4 className="font">4.200.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone7.jpg" alt="" />
          <br />
          <h4>Realme Note 50</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" onClick={() => setCost("2.300.000")}>
              128/4
            </button>
            <button className="brr2" onClick={() => setCost("2.100.000")}>
              64/3
            </button>
          </div>
          <s>3.700.000</s> <br />
          <div className="flex">
            <h4 className="font">{cost}</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone8.jpg" alt="" />
          <br />
          <h4>Redmi 9A</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3">
              32/2
            </button>
          </div>
          <s>2.100.000</s> <br />
          <div className="flex">
            <h4 className="font">999.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone9.jpg" alt="" />
          <br />
          <h4>Redmi 12</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            256/8
            </button>
          </div>
          <s>3.200.000</s> <br />
          <div className="flex">
            <h4 className="font">2.200.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone10.jpg" alt="" />
          <br />
          <h4>Redmi 12C</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            128/4
            </button>
          </div>
          <s>2.800.000</s> <br />
          <div className="flex">
            <h4 className="font">1.799.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/.jpg" alt="" />
          <br />
          <h4>Redmi Note 12 Pro</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.640.000</s> <br />
          <div className="flex">
            <h4 className="font">1.449.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone12.jpg" alt="" />
          <br />
          <h4>Redmi note 13</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            128/6
            </button>
          </div>
          <s>4.290.000</s> <br />
          <div className="flex">
            <h4 className="font">2.800.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone14.jpg" alt="" />
          <br />
          <h4>i1 series</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
64/4
            </button>
          </div>
          <s>2.520.000</s> <br />
          <div className="flex">
            <h4 className="font">1.550.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone15.jpg" alt="" />
          <br />
          <h4>Infinix Smart 7 plus</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            64/7
            </button>
          </div>
          <s>2.260.000</s> <br />
          <div className="flex">
            <h4 className="font">1.199.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone16.jpg" alt="" />
          <br />
          <h4>Infinix Hot 30i</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
128/8
            </button>
          </div>
          <s>3.400.000</s> <br />
          <div className="flex">
            <h4 className="font">1.299.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone17.jpg" alt="" />
          <br />
          <h4>Infinix Smart 7</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            64/7
            </button>
          </div>
          <s>3.650.000</s> <br />
          <div className="flex">
            <h4 className="font">1.099.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone18.jpg" alt="" />
          <br />
          <h4>Infinix Smart 8</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            64/6
            </button>
          </div>
          <s>2.380.000</s> <br />
          <div className="flex">
            <h4 className="font">1.099.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone19.jpg" alt="" />
          <br />
          <h4>Infinx Hot 30 play</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            128/16
            </button>
          </div>
          <s>2.430.000</s> <br />
          <div className="flex">
            <h4 className="font">1.499.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone20.jpg" alt="" />
          <br />
          <h4>Infinx Hot 40i</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
            128/16
            </button>
          </div>
          <s>3.100.000</s> <br />
          <div className="flex">
            <h4 className="font">1.599.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone21.jpg" alt="" />
          <br />
          <h4>KETEL OCHILIB  YOPILGICH TELEFON </h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
   <br />
          <s>800.000</s> <br />
          <div className="flex">
            <h4 className="font">380.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone22.jpg" alt="" />
          <br />
          <h4>Samsung A14</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <div className="hht">
            <button className="brr3" >
64/4
            </button>
          </div>
          <s>3.685.000</s> <br />
          <div className="flex">
            <h4 className="font">1.799.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone23.jpg" alt="" />
          <br />
          <h4>Samsung A15</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>4.200.000</s> <br />
          <div className="flex">
            <h4 className="font">1.999.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone24.jpg" alt="" />
          <br />
          <h4>Samsung A06</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.210.000</s> <br />
          <div className="flex">
            <h4 className="font">1.449.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone25.jpg" alt="" />
          <br />
          <h4>Samsung A16</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.800.000</s> <br />
          <div className="flex">
            <h4 className="font">2.000.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone26.jpg" alt="" />
          <br />
          <h4>Tecno Spark 20c</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>2.185.000</s> <br />
          <div className="flex">
            <h4 className="font">1.499.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone27.jpg" alt="" />
          <br />
          <h4>Tecno Spark Go</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>2.350.000</s> <br />
          <div className="flex">
            <h4 className="font">999.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone28.jpg" alt="" />
          <br />
          <h4>Texno Max 025</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>550.000</s> <br />
          <div className="flex">
            <h4 className="font">380.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone30.jpg" alt="" />
          <br />
          <h4>TEXNO MAX22</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>780.000</s> <br />
          <div className="flex">
            <h4 className="font">379.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone31.jpg" alt="" />
          <br />
          <h4>Iphone 13 Pro</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>600$</s> <br />
          <div className="flex">
            <h4 className="font">470 $</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone32.jpg" alt="" />
          <br />
          <h4>Iphone 11</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>500 $</s> <br />
          <div className="flex">
            <h4 className="font">240 $</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone33.jpg" alt="" />
          <br />
          <h4>Samsung A55 5G</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>8.700.000</s> <br />
          <div className="flex">
            <h4 className="font">4.550.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone34.jpg" alt="" />
          <br />
          <h4>Samsung A35 5G</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>5.480.000</s> <br />
          <div className="flex">
            <h4 className="font">3.800.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone35.jpg" alt="" />
          <br />
          <h4>Honor X5b plus</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.900.000</s> <br />
          <div className="flex">
            <h4 className="font">1.900.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone36.jpg" alt="" />
          <br />
          <h4>Honor X6b</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>5.200.000</s> <br />
          <div className="flex">
            <h4 className="font">2.300.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone37.jpg" alt="" />
          <br />
          <h4>Honor X8b</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>6.300.000</s> <br />
          <div className="flex">
            <h4 className="font">3.300.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone38.jpg" alt="" />
          <br />
          <h4>vivo Y03</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>5.150.000</s> <br />
          <div className="flex">
            <h4 className="font">2.200.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone41.jpg" alt="" />
          <br />
          <h4>Redmi 13</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.670.000</s> <br />
          <div className="flex">
            <h4 className="font">2.100.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone42.jpg" alt="" />
          <br />
          <h4>Redmi 13C</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>4.400.000</s> <br />
          <div className="flex">
            <h4 className="font">1.800.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone39.jpg" alt="" />
          <br />
          <h4>Honor X9b</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>6.000.000</s> <br />
          <div className="flex">
            <h4 className="font">4.150.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone40.jpg" alt="" />
          <br />
          <h4>Redmi 14C</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.420.000</s> <br />
          <div className="flex">
            <h4 className="font">1.800.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone43.jpg" alt="" />
          <br />
          <h4>Redmi A3</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.230.000</s> <br />
          <div className="flex">
            <h4 className="font">1.550.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone44.jpg" alt="" />
          <br />
          <h4>POCO C40</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.700.000</s> <br />
          <div className="flex">
            <h4 className="font">2.200.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone45.jpg" alt="" />
          <br />
          <h4>HOTHE C55</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.600.000</s> <br />
          <div className="flex">
            <h4 className="font">1.750.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone46.jpg" alt="" />
          <br />
          <h4>TECNO SPARK GO1</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.210.000</s> <br />
          <div className="flex">
            <h4 className="font">1.500.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <div className="pastgi_qismkattasi">
        <div className="past_card">
          <img src="./assets/Telefonlar/phone47.jpg" alt="" />
          <br />
          <h4>Infinix HOT 50</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>3.930.000</s> <br />
          <div className="flex">
            <h4 className="font">2.400.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone48.jpg" alt="" />
          <br />
          <h4>Infinix HOT 50i</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>4.110.000</s> <br />
          <div className="flex">
            <h4 className="font">2.400.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone.jpg" alt="" />
          <br />
          <h4>Samsung A25 5G</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>4.960.000</s> <br />
          <div className="flex">
            <h4 className="font">2.980.000</h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>

        <div className="past_card">
          <img src="./assets/Telefonlar/phone50.jpg" alt="" />
          <br />
          <h4>Infinix HOT 50</h4>
          <i className="i">{t("title11")}</i>
          <br />
          <h4 className="clsg">{t("title13")}</h4>
          <br />
          <s>4.110.000</s> <br />
          <div className="flex">
            <h4 className="font">2.400.000 </h4>
            <h4 className="tf">{t("title10")}</h4>
          </div>
        </div>
      </div>

      <button className="fix_btn">
        <a href="#home">
          <FaArrowUp className="ico" />
        </a>
      </button>
    </div>
  );
};

export default Phones;
