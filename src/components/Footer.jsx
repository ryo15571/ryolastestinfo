import React from "react";
import {FunctionOpenInNewTab} from "radium-omnibus"

const Footer = () => {
    return (
        <div className=" my-12 bg-gray-500 mb-auto">
            <a href="/">
        <div className="text-2xl py-8 text-gray-300 text-center">
          <div>RYO EIAM</div>
        </div>
      </a>
            <div className=" grid grid-cols-1 justify-items-center py-8 border-0">
            <div className="pb-10">
            <h4 className="font-bold text-lg">Contacts :</h4>
            <ul className="list-unstyled py-3">
                <div className="flex">
                <a href="https://www.google.com/maps/place//@13.7988546,100.6432688,17z/data=!4m9!1m2!2m1!1z4LiL4Lit4LiiIOC4meC4p-C4oeC4tOC4meC4l-C4o-C5jCA5MyDguYHguILguKfguIcg4LiZ4Lin4Lih4Li04LiZ4LiX4Lij4LmMIOC5gOC4guC4lSDguJrguLbguIfguIHguLjguYjguKEg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4Lij!3m5!1s0x311d62407e884d8d:0x460204cbf56a8047!8m2!3d13.7986277!4d100.6449084!15sCpMB4LiL4Lit4LiiIOC4meC4p-C4oeC4tOC4meC4l-C4o-C5jCA5MyDguYHguILguKfguIcg4LiZ4Lin4Lih4Li04LiZ4LiX4Lij4LmMIOC5gOC4guC4lSDguJrguLbguIfguIHguLjguYjguKEg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijkgEQZ2VvY29kZWRfYWRkcmVzc-ABAA" target="_blank">
                            <img className="w-6 h-6" src="./image/map.png"/>
                            </a>
                            <a href="https://www.facebook.com/Riew.Ohyeah/" target="_blank">
                            <img className="w-6 h-6 mx-3" src="./Facebook_Logo_(2019).png"/>
                            </a>
                            <a href="https://www.instagram.com/rohykwa_/" target="_blank">
                            <img className="w-6 h-6" src="./iglogo.png" />
                            </a>
                            <a href="tel:098-592-8839" target="_blank">
                            <img className="w-6 h-6 mx-3" src="./image/phone5.png" />                           
                            </a>
                            <a href="mailto:rieweiam403@gmail.com" target="_blank">
                            <img className="w-6 h-6" src="./image/gmail.png" />                           
                            </a>
                            </div>
                       
                            
                        </ul>
            </div>
            </div>
        </div>
    );
  };
  export default Footer;