import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNOQZgrMh0dD0Ju8s9ANQ4k_3_BTqioAfVe4PzyVhd361yg57C52N9Ugi1MqkdmUn6bM6komGDtVkawcgaRDn2CRlOX-d61su5lldLqlfqzW7ZugMdrE2-bw"
          alt=""
        />
      </div>
      <div className="p-4">
      <h3 className="text-lg font-medium text-gray-900">HERE&NOW</h3>
      <p className="mt-2 text-sm text-gray-500">Men Ethnic Motifs Embroidered Chikankari Kurta</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
