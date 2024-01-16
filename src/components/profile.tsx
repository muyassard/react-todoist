import useSound from "use-sound";
import React from "react";

import soundBell from "../assets/bicycle-bell_19-80368.mp3";
import { FaAngleDown, FaRegBell } from "react-icons/fa";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

let imageSrc = "https://dcff1xvirvpfp.cloudfront.net/61335c26144946c18802ae888a4b68ac_medium.jpg";
interface ProfileProps {
  elem: ReactNode;
}

const Profile: React.FC<ProfileProps> = ({ elem }) => {
  const [playSound] = useSound(soundBell);
  const [t,i18n] = useTranslation("global");

  return (
    <div className="flex item-center">
      <div className="rounded-lg px-2 flex items-center gap-2 hover:bg-[#fee6e3]">
        <img src={imageSrc} alt="" className="rounded-full w-7" />
        <p className="truncate w-[112px] text-sm font-semibold">{t("home.body")}</p>
        <FaAngleDown className="text-[#666] w-5 h-5" />
      </div>
      <div className="flex item-center gap-3">
        <div className="text-[#666] rounded-lg p-1.5  hover:bg-[#fee6e3]">
          <FaRegBell onClick={() => playSound()} className="cursor-pointer w-6 h-6 active:rotate-12" />
        </div>
        <div className="text-[#666] rounded-lg p-1.5 hover:bg-[#fee6e3] cursor-pointer ">{elem}</div>
      </div>
    </div>
  );
};

export default Profile;
