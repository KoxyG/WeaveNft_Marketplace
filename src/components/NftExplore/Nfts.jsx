import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../elements/Swiper";
import NftProps from "./NftProps";
import { Link } from "react-router-dom";
import "swiper/css";
import NftCollection from "./Header/NftCollection";
// import SDK from "weavedb-sdk";

const contractTxId = "U2OR33r74nnR1C3alI-JEpbRqSisAiKIEbXECgaJSyA";
// const db = new SDK({ contractTxId: contractTxId });
// await db.init();
// const Nft = await db.get("NFT_COLLECTION")

export default function Nfts() {
  
  return (
    <div>
      <div className="bg-[#130B2B]">
        <div className="container px-4 mx-auto md:pt-6 pb-[60px] sm:pb-[120px]">
          <NftCollection />

          <div className="relative">
            <CustomSwiper
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={1}
              loop={true}
            >
              {/* {Nft.map((nft) => (
                <SwiperSlide key={nft.tokenID}>
                  <Link to={`/explore/nft/${nft.tokenID}`}>
                    <NftProps
                      tokenID={nft.tokenID}
                      uploadUrl={nft.uploadUrl}
                      title={nft.title}
                      description={nft.description}
                      price={nft.price}
                      totalShares={nft.totalShares}
                    />
                  </Link>
                </SwiperSlide>
              ))} */}
            </CustomSwiper>
          </div>
        </div>
      </div>
    </div>
  );
}
